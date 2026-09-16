import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email') || '';
    const userId = searchParams.get('userId') || searchParams.get('user_id') || '';

    if (!email && !userId) {
      return NextResponse.json({ purchasedPdfIds: [], isVip: false });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const orConditions = [];
    if (email) orConditions.push(`email.eq.${email}`);
    if (userId) orConditions.push(`user_id.eq.${userId}`);
    const orQueryStr = orConditions.length > 0 ? orConditions.join(',') : '';

    // Check VIP
    let isVip = false;
    if (orQueryStr) {
      const { data: subData } = await supabase
        .from('subscriptions')
        .select('status, expires_at')
        .or(orQueryStr)
        .eq('status', 'active')
        .maybeSingle();

      if (subData && new Date(subData.expires_at) > new Date()) {
        isVip = true;
      }
    }

    // Check purchased
    let purchasedPdfIds: string[] = [];
    if (orQueryStr) {
      const { data: purchases } = await supabase
        .from('pdf_purchases')
        .select('pdf_id')
        .eq('payment_status', 'PAID')
        .or(orQueryStr);
        
      if (purchases) {
        purchasedPdfIds = purchases.map((p: any) => p.pdf_id);
      }
    }

    return NextResponse.json({ purchasedPdfIds, isVip });
  } catch (err: any) {
    console.error('API exception in purchases list:', err);
    return NextResponse.json({ purchasedPdfIds: [], isVip: false });
  }
}
