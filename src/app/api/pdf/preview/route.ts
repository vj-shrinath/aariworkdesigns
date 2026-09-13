import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pdfId = searchParams.get('id') || searchParams.get('pdfId');

    if (!pdfId) {
      return new NextResponse('Missing id parameter', { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch PDF metadata
    const { data: item, error: itemErr } = await supabase
      .from('pdf_marketplace')
      .select('*')
      .or(`id.eq.${pdfId},slug.eq.${pdfId}`)
      .single();

    if (itemErr || !item) {
      return new NextResponse('Listing not found', { status: 404 });
    }

    // 1. If item has a stored preview image URL
    if (item.preview_images && item.preview_images.length > 0 && item.preview_images[0]) {
      const imgUrl = item.preview_images[0];
      const imgRes = await fetch(imgUrl);
      if (imgRes.ok) {
        const contentType = imgRes.headers.get('content-type') || 'image/png';
        const imageBuffer = await imgRes.arrayBuffer();
        return new NextResponse(imageBuffer, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
          },
        });
      }
    }

    // 2. Fallback: serve watermarked PDF stream for inline PDF viewer preview
    if (item.watermarked_file_url) {
      const pdfRes = await fetch(item.watermarked_file_url);
      if (pdfRes.ok) {
        const pdfBuffer = await pdfRes.arrayBuffer();
        return new NextResponse(pdfBuffer, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline',
            'Cache-Control': 'public, max-age=86400',
          },
        });
      }
    }

    return new NextResponse('No preview image available', { status: 404 });
  } catch (err: any) {
    console.error('Error in PDF preview proxy route:', err);
    return new NextResponse(err.message || 'Internal Server Error', { status: 500 });
  }
}
