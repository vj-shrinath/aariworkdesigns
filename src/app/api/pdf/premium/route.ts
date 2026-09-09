import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const fileId = url.searchParams.get('fileId');
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');

    if (!fileId) {
      return NextResponse.json({ error: 'Missing fileId parameter' }, { status: 400 });
    }
    if (!token) {
      return NextResponse.json({ error: 'Missing Authentication Token' }, { status: 401 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify user token
    const { data: { user }, error: authError } = await (supabase.auth as any).getUser(token);
    if (authError || !user) {
       return NextResponse.json({ error: 'Unauthorized or invalid token' }, { status: 401 });
    }

    // Check subscription status
    const { data: subData, error: subError } = await supabase
      .from('subscriptions')
      .select('status, plan, expires_at')
      .eq('user_id', user.id)
      .single();

    if (subError || !subData || subData.status !== 'active') {
       return NextResponse.json({ error: 'Active Premium Subscription required' }, { status: 403 });
    }

    // Expired check
    if (new Date(subData.expires_at) < new Date()) {
       return NextResponse.json({ error: 'Subscription expired' }, { status: 403 });
    }

    // TODO: Connect to your secure storage bucket.
    // Since we don't have the bucket initialized, we will mock the redirect/serve process.
    // A real implementation would download the file buffer from Supabase Storage and serve it:
    // const { data, error } = await supabase.storage.from('premium-pdfs').download(fileId);
    // return new NextResponse(data, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${fileId}.pdf"` }});

    return NextResponse.json({
       success: true,
       message: 'Subscription verified. Download will begin shortly.',
       downloadUrl: `https://storage.aariworkdesigns.com/secure/${fileId}.pdf` // Mock URL
    });
  } catch (error: any) {
    console.error('Download verification error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
