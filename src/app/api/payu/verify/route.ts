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
    const itemType = searchParams.get('item_type') || searchParams.get('udf3') || 'subscription';
    const pdfId = searchParams.get('pdf_id') || searchParams.get('udf2') || '';

    const host = req.headers.get('host');
    const isLocal = host?.includes('localhost') || host?.includes('127.0.0.1');
    const appUrl = isLocal ? `http://${host}` : 'https://aariworkdesigns.com';

    const redirectUrl = `${appUrl}/payment-status?order_id=${txnid}&status=${statusParam}&email=${encodeURIComponent(email)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}&item_type=${itemType}${pdfId ? `&pdf_id=${pdfId}` : ''}`;

    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: any) {
    console.error('API exception in GET PayU verify:', err);
    const host = req.headers.get('host');
    const isLocal = host?.includes('localhost') || host?.includes('127.0.0.1');
    const appUrl = isLocal ? `http://${host}` : 'https://aariworkdesigns.com';
    return NextResponse.redirect(`${appUrl}/payment-status?status=CANCELLED`, 303);
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const status = formData.get('status') as string || '';
    const rawStatus = status.toLowerCase();
    const firstname = formData.get('firstname') as string || '';
    const amount = formData.get('amount') as string || '';
    const txnid = formData.get('txnid') as string || '';
    const postedHash = formData.get('hash') as string || '';
    const key = formData.get('key') as string || '';
    const productinfo = formData.get('productinfo') as string || '';
    const email = formData.get('email') as string || '';
    
    const u1 = formData.get('udf1') as string || '';
    const u2 = formData.get('udf2') as string || '';
    const u3 = formData.get('udf3') as string || 'subscription';
    const u4 = formData.get('udf4') as string || '';
    const u5 = formData.get('udf5') as string || '';
    const u6 = formData.get('udf6') as string || '';
    const u7 = formData.get('udf7') as string || '';
    const u8 = formData.get('udf8') as string || '';
    const u9 = formData.get('udf9') as string || '';
    const u10 = formData.get('udf10') as string || '';

    const merchantKey = (process.env.PAYU_MERCHANT_KEY || key).trim();
    const salt = (process.env.PAYU_MERCHANT_SALT || '8eDpVmUaBzMMExBpYUVZqgU8DL4pbUls').trim();
    
    const host = req.headers.get('host');
    const isLocal = host?.includes('localhost') || host?.includes('127.0.0.1');
    const appUrl = isLocal ? `http://${host}` : 'https://aariworkdesigns.com';

    const additionalCharges = formData.get('additionalCharges') as string || '';

    // PayU Official Reverse Hash Sequence: [additionalCharges|]SALT|status|udf10|udf9|udf8|udf7|udf6|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
    let hashString = `${salt}|${status}|${u10}|${u9}|${u8}|${u7}|${u6}|${u5}|${u4}|${u3}|${u2}|${u1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${merchantKey}`;
    if (additionalCharges) {
      hashString = `${additionalCharges}|${hashString}`;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(hashString);
    const hashBuffer = await globalThis.crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const calculatedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const userId = u1;
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

          if (u3 === 'pdf_single' && u2) {
            // Log PDF Purchase
            await supabaseAdmin
              .from('pdf_purchases')
              .insert({
                user_id: targetUserId,
                email: email,
                pdf_id: u2,
                txnid: txnid,
                amount_paid: parseFloat(amount || '0'),
                payment_status: 'PAID',
              });
          } else {
            // Log Subscription
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
          }
        } catch (dbErr) {
          console.error('Database error in PayU verify callback:', dbErr);
        }
      }
    } else if (rawStatus === 'cancel' || rawStatus === 'cancelled' || rawStatus === 'usercancelled') {
      finalStatus = 'CANCELLED';
    } else {
      if (calculatedHash !== postedHash) {
        console.warn(`PayU Hash mismatch for txn ${txnid}: calculated ${calculatedHash} vs posted ${postedHash}`);
      }
    }

    const redirectUrl = `${appUrl}/payment-status?order_id=${txnid}&status=${finalStatus}&email=${encodeURIComponent(email)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}&item_type=${u3}${u2 ? `&pdf_id=${u2}` : ''}`;

    return NextResponse.redirect(redirectUrl, 303);
  } catch (err: any) {
    console.error('API exception checking PayU order status:', err);
    const host = req.headers.get('host');
    const protocol = req.headers.get('x-forwarded-proto') || (host?.includes('localhost') ? 'http' : 'https');
    const requestOrigin = host ? `${protocol}://${host}` : 'https://aariworkdesigns.com';
    const isLocal = host?.includes('localhost') || host?.includes('127.0.0.1');
    const appUrl = (isLocal ? requestOrigin : (process.env.NEXT_PUBLIC_APP_URL || requestOrigin)).replace(/\/$/, '');
    return NextResponse.redirect(`${appUrl}/payment-status?status=CANCELLED`, 303);
  }
}
