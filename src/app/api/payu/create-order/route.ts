import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { plan, customerName, customerEmail, customerPhone, userId } = await req.json();

    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;
    const isProd = process.env.NEXT_PUBLIC_PAYU_ENV === 'production';

    const amount = Number(plan === 'monthly' ? 99.0 : 499.0).toFixed(2);
    const txnid = `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const productinfo = plan === 'monthly' ? 'Monthly Premium Subscription' : 'Yearly Premium Subscription';

    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');
    
    const surl = `${appUrl}/api/payu/verify`;
    const furl = `${appUrl}/api/payu/verify`;
    const curl = `${appUrl}/api/payu/verify`;

    if (!merchantKey || !salt) {
      console.warn('PAYU KEYS MISSING: Running in Mock Payment Mode.');
      if (userId) {
        try {
          const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
          const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, adminKey!);
          const expiresAt = new Date();
          expiresAt.setMonth(expiresAt.getMonth() + (plan === 'yearly' ? 12 : 1));
          await supabaseAdmin.from('subscriptions').upsert({
            user_id: userId, email: customerEmail, plan, status: 'active',
            expires_at: expiresAt.toISOString(), updated_at: new Date().toISOString(),
          }, { onConflict: 'user_id' });
        } catch(e) { console.error('Mock DB update err', e); }
      }
      const mockRedirectUrl = `${appUrl}/payment-status?order_id=mock_${txnid}&status=PAID&email=${encodeURIComponent(customerEmail)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}`;
      return NextResponse.json({
        mockRedirectUrl,
        orderId: `mock_${txnid}`,
      });
    }

    const udf1 = userId || '';
    const hashString = `${merchantKey}|${txnid}|${amount}|${productinfo}|${customerName}|${customerEmail}|${udf1}||||||||||${salt}`;
    
    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return NextResponse.json({
      key: merchantKey,
      txnid,
      amount,
      productinfo,
      firstname: customerName,
      email: customerEmail,
      phone: customerPhone,
      surl,
      furl,
      curl,
      hash,
      udf1,
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
