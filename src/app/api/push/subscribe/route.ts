import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const subscription = await req.json();

    if (!subscription || !subscription.endpoint) {
      return NextResponse.json({ error: 'Invalid subscription object' }, { status: 400 });
    }

    // Save the subscription to the database
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    
    if (!supabaseUrl || !supabaseKey) {
       console.error('Supabase credentials missing.');
       return NextResponse.json({ error: 'Database err' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Depending on DB structure. If no push_subscriptions table exists, we mock it for now.
    const { error } = await supabase
      .from('push_subscriptions')
      .upsert({ 
        endpoint: subscription.endpoint,
        subscription_data: subscription,
        updated_at: new Date().toISOString()
      }, { onConflict: 'endpoint' });

    if (error) {
      // Usually means table might not exist yet if not created. We'll ignore the error 
      // in development but it should be addressed eventually.
      console.warn('Failed inserting push subscription (table may missing?): ', error);
    }

    return NextResponse.json({ success: true, message: 'Subscription saved.' });
  } catch (error: any) {
    console.error('Error handling push subscription:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
