import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || undefined;
    const searchQuery = searchParams.get('search') || undefined;

    const { supabase } = await import('@/lib/supabase');

    let query = supabase
      .from('pdf_marketplace')
      .select('id, title, slug, description, category, tags, price_inr, is_free_for_vip, preview_images, page_count, download_count, is_published, created_at, updated_at')
      .order('created_at', { ascending: false });

    if (category && category !== 'All Designs') {
      query = query.eq('category', category);
    }

    if (searchQuery && searchQuery.trim()) {
      query = query.ilike('title', `%${searchQuery.trim()}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching catalog PDFs from Supabase:', error.message);
      return NextResponse.json({ error: error.message, items: [] }, { status: 500 });
    }

    return NextResponse.json({ items: data || [] });
  } catch (err: any) {
    console.error('Error in PDF catalog API:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error', items: [] }, { status: 500 });
  }
}
