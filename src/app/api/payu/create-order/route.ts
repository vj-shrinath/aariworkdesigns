import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, customerName, customerEmail, customerPhone, userId, itemType, pdfId, amount: customAmount, title: pdfTitle } = body;

    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;
    const isProd = process.env.NEXT_PUBLIC_PAYU_ENV === 'production';

    const isPdfSingle = itemType === 'pdf_single' && pdfId;
    
    let amountStr = '99.00';
    let productinfo = 'Monthly Premium Subscription';

    if (isPdfSingle) {
      amountStr = Number(customAmount || 49).toFixed(2);
      productinfo = `PDF Purchase: ${pdfTitle || 'Aari Design'}`;
    } else {
      amountStr = Number(plan === 'yearly' ? 499.0 : 99.0).toFixed(2);
      productinfo = plan === 'yearly' ? 'Yearly Premium Subscription' : 'Monthly Premium Subscription';
    }

    const txnid = `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');
    
    const surl = `${appUrl}/api/payu/verify`;
    const furl = `${appUrl}/api/payu/verify`;
    const curl = `${appUrl}/api/payu/verify`;

    const udf1 = userId || `guest_${customerEmail}`;
    const udf2 = pdfId || '';
    const udf3 = isPdfSingle ? 'pdf_single' : 'subscription';

    if (!merchantKey || !salt) {
      console.warn('PAYU KEYS MISSING: Running in Mock Payment Mode.');

      const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, adminKey!);

      if (isPdfSingle) {
        // Record PDF Purchase in Mock Mode
        await supabaseAdmin.from('pdf_purchases').insert({
          user_id: udf1,
          email: customerEmail,
          pdf_id: pdfId,
          txnid: `mock_${txnid}`,
          amount_paid: parseFloat(amountStr),
          payment_status: 'PAID'
        });
      } else {
        // Record Subscription in Mock Mode
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + (plan === 'yearly' ? 12 : 1));
        await supabaseAdmin.from('subscriptions').upsert({
          user_id: udf1, email: customerEmail, plan, status: 'active',
          expires_at: expiresAt.toISOString(), updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' });
      }

      const mockRedirectUrl = `${appUrl}/payment-status?order_id=mock_${txnid}&status=PAID&email=${encodeURIComponent(customerEmail)}&item_type=${udf3}${pdfId ? `&pdf_id=${pdfId}` : ''}`;
      return NextResponse.json({
        mockRedirectUrl,
        orderId: `mock_${txnid}`,
      });
    }

    const hashString = `${merchantKey}|${txnid}|${amountStr}|${productinfo}|${customerName}|${customerEmail}|${udf1}|${udf2}|${udf3}|||||||${salt}`;
    
    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return NextResponse.json({
      key: merchantKey,
      txnid,
      amount: amountStr,
      productinfo,
      firstname: customerName,
      email: customerEmail,
      phone: customerPhone,
      surl,
      furl,
      curl,
      hash,
      udf1,
      udf2,
      udf3,
      service_provider: 'payu_paisa',
      action: isProd ? 'https://secure.payu.in/_payment' : 'https://test.payu.in/_payment'
    });
  } catch (err: any) {
    console.error('API exception in PayU order creation:', err);
    return NextResponse.json(
      { error: err.message || 'Server error' },
      { status: 500 }
    );
  }
}
