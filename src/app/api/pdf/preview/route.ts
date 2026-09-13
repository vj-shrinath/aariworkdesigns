import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const DEFAULT_FALLBACK_THUMBNAIL = "https://cdn.sanity.io/images/lx1zrwct/production/df915f02c525f05df3f3177651c69e2544ad545b-600x800.png";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pdfId = searchParams.get('id') || searchParams.get('pdfId');

    if (!pdfId) {
      return new NextResponse('Missing id parameter', { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(pdfId);
    let query = supabase.from('pdf_marketplace').select('*');
    if (isUuid) {
      query = query.eq('id', pdfId);
    } else {
      query = query.eq('slug', pdfId);
    }
    const { data: item } = await query.maybeSingle();

    if (item && item.preview_images && item.preview_images.length > 0 && item.preview_images[0]) {
      const imgUrl = item.preview_images[0];
      try {
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
      } catch (e) {
        console.warn('Error fetching preview image from URL:', imgUrl, e);
      }
    }

    // Fallback: serve default design thumbnail image
    const fbRes = await fetch(DEFAULT_FALLBACK_THUMBNAIL);
    if (fbRes.ok) {
      const imageBuffer = await fbRes.arrayBuffer();
      return new NextResponse(imageBuffer, {
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    return new NextResponse('No preview image available', { status: 404 });
  } catch (err: any) {
    console.error('Error in PDF preview proxy route:', err);
    return new NextResponse(err.message || 'Internal Server Error', { status: 500 });
  }
}
