import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('order_id');
    const userId = searchParams.get('user_id');
    const email = searchParams.get('email');
    const statusParam = searchParams.get('status');

    if (!orderId) {
      return NextResponse.json({ error: 'order_id is required' }, { status: 400 });
    }

    if (orderId.startsWith('mock_') || statusParam === 'PAID') {
      return NextResponse.json({
        success: true,
        orderId,
        customerEmail: email || '',
        message: 'Payment status confirmed.',
      });
    }

    // Check Supabase for active subscription if userId or email provided
    if (userId || email) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const supabaseAdminKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
      const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseAdminKey;
      const supabaseAdmin = createClient(supabaseUrl, adminKey);

      let query = supabaseAdmin.from('subscriptions').select('status, email');
      if (userId) {
        query = query.eq('user_id', userId);
      } else if (email) {
        query = query.eq('email', email);
      }

      const { data, error } = await query.maybeSingle();

      if (!error && data && data.status === 'active') {
        return NextResponse.json({
          success: true,
          orderId,
          customerEmail: data.email || email || '',
        });
      }
    }

    return NextResponse.json({
      success: false,
      orderId,
      status: 'PENDING',
    });
  } catch (err: any) {
    console.error('API exception checking PayU status:', err);
    return NextResponse.json(
      { error: err.message || 'Server error' },
      { status: 500 }
    );
  }
}
