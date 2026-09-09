import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const status = formData.get('status') as string || '';
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
    // There must be 10 pipes between status and udf1 if udf10-udf2 are empty
    let hashString = `${salt}|${status}||||||||||${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${merchantKey}`;
    if (additionalCharges) {
      hashString = `${additionalCharges}|${hashString}`;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const calculatedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Very important: Redirect back to the frontend status page.
    // Whether they paid or not, we send them back.
    const userId = udf1;
    
    let redirectUrl = `${appUrl}/payment-status?order_id=${txnid}&status=${status === 'success' ? 'PAID' : 'FAILED'}&email=${encodeURIComponent(email)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}`;

    if (status === 'success' && calculatedHash === postedHash) {
      const targetUserId = userId || (email ? `guest_${email}` : '');
      if (targetUserId) {
        try {
          const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
          const supabaseAdminKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

          // For security, use Service Role Key if available. Fallback to anon. 
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
    } else {
        if (calculatedHash !== postedHash) {
            console.warn(`PayU Hash mismatch for txn ${txnid}`);
        }
    }

    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: any) {
    console.error('API exception checking PayU order status:', err);
    return NextResponse.json(
      { error: err.message || 'Server error during verification' },
      { status: 500 }
    );
  }
}
