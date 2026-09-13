import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { plan, customerName, customerEmail, customerPhone, userId, itemType, pdfId, amount: customAmount, title: pdfTitle } = body;

    const merchantKey = (process.env.PAYU_MERCHANT_KEY || 'xYeZLq').trim();
    const salt = (process.env.PAYU_MERCHANT_SALT || '8eDpVmUaBzMMExBpYUVZqgU8DL4pbUls').trim();
    const isProd = process.env.NEXT_PUBLIC_PAYU_ENV === 'production';

    const isPdfSingle = itemType === 'pdf_single' && pdfId;
    
    let amountStr = '99.00';
    let rawProductInfo = 'Monthly Premium Subscription';

    if (isPdfSingle) {
      amountStr = Number(customAmount || 49).toFixed(2);
      rawProductInfo = `PDF Purchase ${pdfTitle || 'Aari Design'}`;
    } else {
      amountStr = Number(plan === 'yearly' ? 499.0 : 99.0).toFixed(2);
      rawProductInfo = plan === 'yearly' ? 'Yearly Premium Subscription' : 'Monthly Premium Subscription';
    }

    const txnid = `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');
    
    const surl = `${appUrl}/api/payu/verify`;
    const furl = `${appUrl}/api/payu/verify`;
    const curl = `${appUrl}/api/payu/verify`;

    const key = merchantKey;
    const tx = txnid;
    const amt = amountStr;
    // PayU requirement: productinfo & firstname must be clean alphanumeric with spaces only
    const pinfo = rawProductInfo.replace(/[^a-zA-Z0-9 ]/g, '').trim().substring(0, 100) || 'Aari Design PDF';
    const fname = (customerName || 'Customer').replace(/[^a-zA-Z0-9 ]/g, '').trim() || 'Customer';
    const em = (customerEmail || '').trim();
    
    const u1 = (userId || `guest_${customerEmail}`).trim();
    const u2 = (pdfId || '').trim();
    const u3 = isPdfSingle ? 'pdf_single' : 'subscription';
    const u4 = '';
    const u5 = '';
    const u6 = '';
    const u7 = '';
    const u8 = '';
    const u9 = '';
    const u10 = '';
    const slt = salt;

    if (!merchantKey || !salt) {
      console.warn('PAYU KEYS MISSING: Running in Mock Payment Mode.');

      const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, adminKey!);

      if (isPdfSingle) {
        await supabaseAdmin.from('pdf_purchases').insert({
          user_id: u1,
          email: customerEmail,
          pdf_id: pdfId,
          txnid: `mock_${txnid}`,
          amount_paid: parseFloat(amountStr),
          payment_status: 'PAID'
        });
      } else {
        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + (plan === 'yearly' ? 12 : 1));
        await supabaseAdmin.from('subscriptions').upsert({
          user_id: u1, email: customerEmail, plan, status: 'active',
          expires_at: expiresAt.toISOString(), updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id' });
      }

      const mockRedirectUrl = `${appUrl}/payment-status?order_id=mock_${txnid}&status=PAID&email=${encodeURIComponent(customerEmail)}&item_type=${u3}${pdfId ? `&pdf_id=${pdfId}` : ''}`;
      return NextResponse.json({
        mockRedirectUrl,
        orderId: `mock_${txnid}`,
      });
    }

    // PayU Official Hash Sequence: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|salt
    const hashString = `${key}|${tx}|${amt}|${pinfo}|${fname}|${em}|${u1}|${u2}|${u3}|${u4}|${u5}|${u6}|${u7}|${u8}|${u9}|${u10}|${slt}`;
    
    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return NextResponse.json({
      key,
      txnid: tx,
      amount: amt,
      productinfo: pinfo,
      firstname: fname,
      email: em,
      phone: (customerPhone || '').replace(/\D/g, ''),
      surl,
      furl,
      curl,
      hash,
      udf1: u1,
      udf2: u2,
      udf3: u3,
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
