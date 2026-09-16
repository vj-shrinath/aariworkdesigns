import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

const ADMIN_SECRET = (process.env.ADMIN_SECRET_KEY || 'aari_admin_secret_2026').replace(/['"]/g, '').trim();

function verifyAdmin(req: Request) {
  const authHeader = req.headers.get('x-admin-secret');
  return authHeader === ADMIN_SECRET;
}

export async function GET(req: Request) {
  try {
    if (!verifyAdmin(req)) {
      return NextResponse.json({ error: 'Unauthorized admin key' }, { status: 401 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('pdf_marketplace')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ items: data || [] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    if (!verifyAdmin(req)) {
      return NextResponse.json({ error: 'Unauthorized admin key' }, { status: 401 });
    }

    const body = await req.json();
    const { id, title, price_inr, category, is_free_for_vip, is_published, preview_images, description, page_count } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing item ID' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const updatePayload: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };
    if (title !== undefined) updatePayload.title = title;
    if (price_inr !== undefined) updatePayload.price_inr = parseFloat(price_inr);
    if (category !== undefined) updatePayload.category = category;
    if (is_free_for_vip !== undefined) updatePayload.is_free_for_vip = is_free_for_vip;
    if (is_published !== undefined) updatePayload.is_published = is_published;
    if (description !== undefined) updatePayload.description = description;
    if (page_count !== undefined) updatePayload.page_count = Number(page_count);
    if (preview_images !== undefined) {
      updatePayload.preview_images = Array.isArray(preview_images) ? preview_images : [preview_images];
    }

    const { data, error } = await supabase
      .from('pdf_marketplace')
      .update(updatePayload)
      .eq('id', id)
      .select('*')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, item: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    if (!verifyAdmin(req)) {
      return NextResponse.json({ error: 'Unauthorized admin key' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing item ID' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Fetch item to get slug and file paths before deleting
    const { data: item } = await supabase
      .from('pdf_marketplace')
      .select('slug, clean_file_url, watermarked_file_url, preview_images')
      .eq('id', id)
      .single();

    if (item) {
      const slug = item.slug;
      const bucketName = 'blog-assets';
      const filesToRemove: string[] = [
        `pdf-marketplace/${slug}_clean.pdf`,
        `pdf-marketplace/${slug}_watermarked.pdf`,
        `pdf-marketplace/${slug}_preview.png`,
        // Also clean up any legacy folder paths if present
        `pdf-marketplace/clean/${slug}.pdf`,
        `pdf-marketplace/watermarked/${slug}.pdf`,
        `pdf-marketplace/previews/${slug}.png`,
      ];

      try {
        await supabase.storage.from(bucketName).remove(filesToRemove);
      } catch (storageDelErr) {
        console.warn('Failed to delete files from Supabase storage:', storageDelErr);
      }
    }

    // 2. Delete database listing record
    const { error } = await supabase
      .from('pdf_marketplace')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Item and associated files deleted successfully' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
