import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('order_id');
    const userId = searchParams.get('user_id');

    if (!orderId) {
      return NextResponse.json({ error: 'order_id is required' }, { status: 400 });
    }

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const env = process.env.NEXT_PUBLIC_CASHFREE_ENV || 'sandbox';

    // Mock Verification Fallback
    if (orderId.startsWith('mock_')) {
      return NextResponse.json({
        success: true,
        orderId,
        mock: true,
        message: 'Mock payment verified successfully.',
      });
    }

    // If keys are missing (shouldn't happen for live orders unless using mocks, but let's check)
    if (!appId || !secretKey) {
      return NextResponse.json(
        { error: 'Cashfree API keys are not configured.' },
        { status: 500 }
      );
    }

    const endpoint = env === 'production'
      ? `https://api.cashfree.com/pg/orders/${orderId}`
      : `https://sandbox.cashfree.com/pg/orders/${orderId}`;

    const cfResponse = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2023-08-01',
      },
    });

    if (!cfResponse.ok) {
      const errorText = await cfResponse.text();
      console.error(`Verification error for order ${orderId}:`, errorText);
      return NextResponse.json(
        { success: false, error: `Verification request failed: ${errorText}` },
        { status: cfResponse.status }
      );
    }

    const orderData = await cfResponse.json();

    if (orderData.order_status === 'PAID') {
      // Upsert subscription record if userId is provided
      if (userId) {
        try {
          const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
          const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
          
          const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey);
          
          // Calculate expiry based on plan amount
          const plan = orderData.order_amount >= 499 ? 'yearly' : 'monthly';
          const expiresAt = new Date();
          expiresAt.setMonth(expiresAt.getMonth() + (plan === 'yearly' ? 12 : 1));

          const { error: upsertError } = await supabaseAdmin
            .from('subscriptions')
            .upsert({
              user_id: userId,
              email: orderData.customer_details?.customer_email || '',
              plan,
              status: 'active',
              expires_at: expiresAt.toISOString(),
              updated_at: new Date().toISOString(),
            }, { onConflict: 'user_id' });

          if (upsertError) {
            console.error('Failed to upsert subscription:', upsertError);
          }
        } catch (dbErr) {
          console.error('Database upsert error:', dbErr);
        }
      }

      return NextResponse.json({
        success: true,
        orderId: orderData.order_id,
        amount: orderData.order_amount,
        customerEmail: orderData.customer_details?.customer_email || '',
      });
    } else {
      return NextResponse.json({
        success: false,
        orderId: orderData.order_id,
        status: orderData.order_status,
      });
    }
  } catch (err: any) {
    console.error('API exception checking order status:', err);
    return NextResponse.json(
      { error: err.message || 'Server error during verification' },
      { status: 500 }
    );
  }
}
