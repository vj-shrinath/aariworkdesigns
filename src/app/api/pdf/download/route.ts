import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { checkUserPdfAccess } from '@/lib/pdfMarketplace';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pdfId = searchParams.get('pdfId') || searchParams.get('id');
    const email = searchParams.get('email') || '';
    const userId = searchParams.get('userId') || searchParams.get('user_id') || '';
    const requestedType = searchParams.get('type'); // 'clean' or 'watermarked'

    if (!pdfId) {
      return NextResponse.json({ error: 'Missing pdfId parameter' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ucmZ3Z3RncmFqYnR3enF0eHNzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODY2MDQ4MCwiZXhwIjoyMDk0MjM2NDgwfQ.j2Tcb8y7VU8uirJkChjhhvdBqNFD5CIA8QyHZ713iVI';
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Fetch Item Metadata from DB
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(pdfId);
    let query = supabase.from('pdf_marketplace').select('*');
    if (isUuid) {
      query = query.eq('id', pdfId);
    } else {
      query = query.eq('slug', pdfId);
    }
    const { data: item, error: itemErr } = await query.maybeSingle();

    if (itemErr || !item) {
      return NextResponse.json({ error: 'PDF design listing not found' }, { status: 404 });
    }

    // 2. Check User Access Rights
    const { hasAccess, isVip, isPurchased } = await checkUserPdfAccess(item.id, email, userId);

    const isCleanRequested = requestedType === 'clean' || (!requestedType && hasAccess);
    const allowCleanDelivery = isCleanRequested && hasAccess;

    // 3. Increment Download Counter in DB
    try {
      await supabase
        .from('pdf_marketplace')
        .update({ download_count: (item.download_count || 0) + 1 })
        .eq('id', item.id);
    } catch (e) {
      // Non-blocking counter update error
    }

    // Target File Path
    const filePath = allowCleanDelivery ? item.clean_file_url : item.watermarked_file_url;
    const downloadFileName = allowCleanDelivery
      ? `${item.title.replace(/[^a-zA-Z0-9]+/g, '_')}_Aari_Design.pdf`
      : `${item.title.replace(/[^a-zA-Z0-9]+/g, '_')}_Sample_Watermarked.pdf`;

    // 1. Direct fetch if file path is a full remote HTTP/HTTPS URL
    if (filePath && (filePath.startsWith('http://') || filePath.startsWith('https://'))) {
      const fileRes = await fetch(filePath);
      if (fileRes.ok) {
        const fileBuffer = await fileRes.arrayBuffer();
        return new NextResponse(fileBuffer, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${downloadFileName}"`,
            'Cache-Control': 'no-cache',
            'X-Secure-Delivery': 'true'
          },
        });
      }
    }

    // 2. Direct download from Supabase 'blog-assets' bucket inside 'pdf-marketplace' folder
    const storagePath = allowCleanDelivery
      ? `pdf-marketplace/${item.slug}_clean.pdf`
      : `pdf-marketplace/${item.slug}_watermarked.pdf`;

    const { data: storageBlob, error: storageErr } = await supabase.storage
      .from('blog-assets')
      .download(storagePath);

    if (!storageErr && storageBlob) {
      const fileBuffer = await storageBlob.arrayBuffer();
      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `${allowCleanDelivery ? 'attachment' : 'inline'}; filename="${downloadFileName}"`,
          'Cache-Control': 'no-cache',
        },
      });
    }

    // If storage URL is unavailable or mock mode, return info response
    return NextResponse.json({
      success: true,
      hasAccess: allowCleanDelivery,
      isVip,
      isPurchased,
      fileName: downloadFileName,
      message: allowCleanDelivery
        ? 'Access verified! Clean high-res PDF is ready.'
        : 'Watermarked sample preview delivered. Subscribe to VIP or purchase to unlock clean PDF without watermark.',
    });

  } catch (err: any) {
    console.error('Download route exception:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
