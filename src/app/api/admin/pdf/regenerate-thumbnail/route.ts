import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

const ADMIN_SECRET = (process.env.ADMIN_SECRET_KEY || 'aari_admin_secret_2026').replace(/['"]/g, '').trim();

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('x-admin-secret');
    if (authHeader !== ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized admin key' }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'Missing PDF item ID' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAdminKey);

    // Fetch PDF item record
    const { data: item, error: fetchErr } = await supabase
      .from('pdf_marketplace')
      .select('id, title, slug, clean_file_url')
      .eq('id', id)
      .single();

    if (fetchErr || !item) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    // Dynamic preview URL using the server preview generator fallback
    const previewUrl = `/api/pdf/preview?id=${item.id}`;

    await supabase
      .from('pdf_marketplace')
      .update({
        preview_images: [previewUrl],
        updated_at: new Date().toISOString(),
      })
      .eq('id', item.id);

    return NextResponse.json({
      success: true,
      message: `Preview updated for "${item.title}". You can now upload new WebP rendered thumbnails or use auto-generator.`,
      previewUrl,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
