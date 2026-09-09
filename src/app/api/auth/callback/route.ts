import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') || '/';

  if (code) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
    const supabaseKey = (
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      'sb_publishable_nJYqsFTLRUDC0nGtsqHM0Q_eNvF_niV'
    ).trim();

    const supabase = createClient(supabaseUrl, supabaseKey);
    try {
      await supabase.auth.exchangeCodeForSession(code);
    } catch (e) {
      console.error('Code exchange error:', e);
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}
