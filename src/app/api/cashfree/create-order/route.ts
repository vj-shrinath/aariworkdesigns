import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { plan, customerName, customerEmail, customerPhone, userId } = await req.json();

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const env = process.env.NEXT_PUBLIC_CASHFREE_ENV || 'sandbox';

    const amount = plan === 'monthly' ? 99.0 : 499.0;
    const orderId = `order_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const customerId = `cust_${Date.now()}`;

    // Cashfree requires an HTTPS return URL. Use NEXT_PUBLIC_APP_URL for local
    // testing through an HTTPS tunnel and for production deployments.
    const requestOrigin = req.headers.get('origin') || 'https://aariworkdesigns.com';
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || requestOrigin).replace(/\/$/, '');
    const isHttps = appUrl.startsWith('https://');
    const returnUrl = `${appUrl}/payment-status?order_id={order_id}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}`;

    if (appId && secretKey && !isHttps) {
      return NextResponse.json(
        {
          error: 'Cashfree requires an HTTPS callback URL. Set NEXT_PUBLIC_APP_URL to your public HTTPS URL, or use an HTTPS tunnel for local testing.',
        },
        { status: 400 }
      );
    }

    // Mock Mode Fallback if API keys are missing
    if (!appId || !secretKey) {
      console.warn('CASHFREE KEYS MISSING: Running in Mock Payment Mode.');
      // Return a simulated redirect URL to the status page with status=paid
      const mockRedirectUrl = `${requestOrigin}/payment-status?order_id=mock_${orderId}&status=PAID&email=${encodeURIComponent(customerEmail)}${userId ? `&user_id=${encodeURIComponent(userId)}` : ''}`;
      return NextResponse.json({
        mockRedirectUrl,
        orderId: `mock_${orderId}`,
      });
    }

    const endpoint = env === 'production' 
      ? 'https://api.cashfree.com/pg/orders' 
      : 'https://sandbox.cashfree.com/pg/orders';

    const payload = {
      order_id: orderId,
      order_amount: amount,
      order_currency: 'INR',
      customer_details: {
        customer_id: customerId,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
      },
      order_meta: {
        return_url: returnUrl,
        ...(userId && { notify_url: `${appUrl}/api/cashfree/webhook?user_id=${encodeURIComponent(userId)}` }),
      },
      ...(userId && { order_tags: { user_id: userId } }),
      ...(userId && { order_note: `user_id:${userId}` }),
    };

    const cfResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'x-client-id': appId,
        'x-client-secret': secretKey,
        'x-api-version': '2023-08-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!cfResponse.ok) {
      const errorText = await cfResponse.text();
      console.error('Cashfree order creation failed:', errorText);
      return NextResponse.json(
        { error: `Cashfree Order Error: ${errorText}` },
        { status: cfResponse.status }
      );
    }

    const data = await cfResponse.json();

    return NextResponse.json({
      paymentSessionId: data.payment_session_id,
      orderId: data.order_id,
    });
  } catch (err: any) {
    console.error('API exception in cashfree order creation:', err);
    return NextResponse.json(
      { error: err.message || 'Server error' },
      { status: 500 }
    );
  }
}
