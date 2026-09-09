import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const txnid = searchParams.get('txnid') || searchParams.get('order_id') || searchParams.get('mihpayid') || '';
    const statusParam = (searchParams.get('status') || 'CANCELLED').toUpperCase();
    const email = searchParams.get('email') || '';
    const userId = searchParams.get('udf1') || searchParams.get('user_id') || '';

    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');

    const redirectUrl = `${appUrl}/payment-status?order_id=${txnid}&status=${statusParam}&email=${encodeURIComponent(email)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}`;

    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: any) {
    console.error('API exception in GET PayU verify:', err);
    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');
    return NextResponse.redirect(`${appUrl}/payment-status?status=CANCELLED`, 303);
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const rawStatus = (formData.get('status') as string || '').toLowerCase();
    const firstname = formData.get('firstname') as string || '';
    const amount = formData.get('amount') as string || '';
    const txnid = formData.get('txnid') as string || '';
    const postedHash = formData.get('hash') as string || '';
    const key = formData.get('key') as string || '';
    const productinfo = formData.get('productinfo') as string || '';
    const email = formData.get('email') as string || '';
    const udf1 = formData.get('udf1') as string || '';

    const merchantKey = process.env.PAYU_MERCHANT_KEY;
    const salt = process.env.PAYU_MERCHANT_SALT;
    
    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');

    const additionalCharges = formData.get('additionalCharges') as string || '';
    // Reverse Hash formula: [additionalCharges|]SALT|status||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
    let hashString = `${salt}|${formData.get('status') as string || ''}||||||||||${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${merchantKey}`;
    if (additionalCharges) {
      hashString = `${additionalCharges}|${hashString}`;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const calculatedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const userId = udf1;
    let finalStatus = 'FAILED';

    if (rawStatus === 'success' && calculatedHash === postedHash) {
      finalStatus = 'PAID';
      const targetUserId = userId || (email ? `guest_${email}` : '');
      if (targetUserId) {
        try {
          const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
          const supabaseAdminKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

          const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAdminKey;
          const supabaseAdmin = createClient(supabaseUrl, adminKey);

          const plan = Number(amount) >= 499 ? 'yearly' : 'monthly';
          const expiresAt = new Date();
          expiresAt.setMonth(expiresAt.getMonth() + (plan === 'yearly' ? 12 : 1));

          await supabaseAdmin
            .from('subscriptions')
            .upsert({
              user_id: targetUserId,
              email: email,
              plan,
              status: 'active',
              expires_at: expiresAt.toISOString(),
              updated_at: new Date().toISOString(),
            }, { onConflict: 'user_id' });
        } catch (dbErr) {
          console.error('Database upsert error for PayU webhook:', dbErr);
        }
      }
    } else if (rawStatus === 'cancel' || rawStatus === 'cancelled' || rawStatus === 'usercancelled') {
      finalStatus = 'CANCELLED';
    } else {
      if (calculatedHash !== postedHash) {
        console.warn(`PayU Hash mismatch for txn ${txnid}`);
      }
    }

    const redirectUrl = `${appUrl}/payment-status?order_id=${txnid}&status=${finalStatus}&email=${encodeURIComponent(email)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}`;

    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: any) {
    console.error('API exception checking PayU order status:', err);
    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');
    return NextResponse.redirect(`${appUrl}/payment-status?status=CANCELLED`, 303);
  }
}
