import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { checkUserPdfAccess } from '@/lib/pdfMarketplace';
import { injectWatermarkToPdf, WatermarkLevel } from '@/lib/watermarkPdfEngine';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pdfId = searchParams.get('pdfId') || searchParams.get('id');
    const requestedEmail = (searchParams.get('email') || '').trim().toLowerCase();
    const requestedUserId = (searchParams.get('userId') || searchParams.get('user_id') || '').trim();
    const requestedType = searchParams.get('type'); // 'clean' or 'watermarked' or 'sample'

    if (!pdfId) {
      return NextResponse.json({ error: 'Missing pdfId parameter' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Verify Authentication from Auth Header if present
    let authEmail = requestedEmail;
    let authUserId = requestedUserId;

    const authHeader = req.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '').trim();
      const { data: { user } } = await supabase.auth.getUser(token);
      if (user) {
        authUserId = user.id;
        if (user.email) authEmail = user.email.toLowerCase();
      }
    }

    // 2. Fetch Item Listing from Database
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

    // 3. Verify Server-side Access Rights & Entitlements
    const accessResult = await checkUserPdfAccess(item.id, authEmail, authUserId);
    const { hasAccess, isVip, isPurchased, orderId, accessType } = accessResult;

    const isExplicitSampleRequest = requestedType === 'sample' || requestedType === 'watermarked';
    const allowCleanDelivery = hasAccess && !isExplicitSampleRequest;

    // 4. Retrieve Private Master PDF from Storage (Private Bucket / Folder)
    // Master PDF paths are kept private and never exposed directly to the client browser
    const cleanStoragePath = item.clean_file_url || `pdf-marketplace/${item.slug}_clean.pdf`;

    let masterBuffer: ArrayBuffer | null = null;

    // Case A: If storage path is stored as relative path (e.g. "pdf-marketplace/slug_clean.pdf" or "pdf-masters/slug.pdf")
    if (!cleanStoragePath.startsWith('http://') && !cleanStoragePath.startsWith('https://')) {
      const bucketName = cleanStoragePath.startsWith('pdf-masters/') ? 'pdf-masters' : 'blog-assets';
      const storageKey = cleanStoragePath.replace(/^(pdf-masters\/|blog-assets\/)/, '');

      const { data: blobData, error: downloadErr } = await supabase.storage
        .from(bucketName)
        .download(storageKey);

      if (!downloadErr && blobData) {
        masterBuffer = await blobData.arrayBuffer();
      } else {
        // Fallback: try default storage location
        const fallbackPath = `pdf-marketplace/${item.slug}_clean.pdf`;
        const { data: fbBlob } = await supabase.storage.from('blog-assets').download(fallbackPath);
        if (fbBlob) {
          masterBuffer = await fbBlob.arrayBuffer();
        }
      }
    } else {
      // Case B: Full private HTTP URL (fetch via service worker/backend fetch)
      try {
        const res = await fetch(cleanStoragePath);
        if (res.ok) {
          masterBuffer = await res.arrayBuffer();
        }
      } catch (e) {
        console.warn('Error fetching master PDF from storage URL:', e);
      }
    }

    if (!masterBuffer) {
      return NextResponse.json(
        { error: 'Master PDF file unavailable. Please contact support.' },
        { status: 404 }
      );
    }

    // 5. Determine Watermarking Strategy
    let watermarkLevel: WatermarkLevel = 'sample_preview';
    let customerIdentifier = authEmail || authUserId || 'Guest Customer';
    let watermarkOrderId = orderId || '';

    if (allowCleanDelivery) {
      if (accessType === 'subscription' || isVip) {
        watermarkLevel = 'premium_subscription';
      } else if (accessType === 'purchase' || isPurchased) {
        watermarkLevel = 'individual_purchase';
      }
    }

    // 6. Generate Watermarked PDF dynamically in Memory
    const watermarkedPdfBytes = await injectWatermarkToPdf(masterBuffer, {
      level: watermarkLevel,
      customerIdentifier,
      orderId: watermarkOrderId,
    });

    // 7. Increment Download Counter in DB
    try {
      await supabase
        .from('pdf_marketplace')
        .update({ download_count: (item.download_count || 0) + 1 })
        .eq('id', item.id);
    } catch (e) {
      // Non-blocking download count update
    }

    // 8. Log Download Event into Audit Table
    try {
      const clientIp = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || '';
      await supabase.from('downloads').insert({
        user_id: authUserId || null,
        email: authEmail || null,
        pdf_id: item.id,
        txnid: watermarkOrderId || null,
        access_type: allowCleanDelivery ? accessType : 'preview',
        ip_hash: clientIp ? clientIp.split(',')[0].trim() : null,
      });
    } catch (auditErr) {
      // Non-blocking audit error
    }

    // 9. Deliver Protected PDF to Authorized User
    const sanitizedTitle = item.title.replace(/[^a-zA-Z0-9]+/g, '_');
    const fileName = allowCleanDelivery
      ? `${sanitizedTitle}_Aari_Design.pdf`
      : `${sanitizedTitle}_Sample_Preview.pdf`;

    return new NextResponse(Buffer.from(watermarkedPdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Protected-Watermark': watermarkLevel,
      },
    });

  } catch (err: any) {
    console.error('API exception in secure PDF download endpoint:', err);
    return NextResponse.json(
      { error: 'Unable to process PDF download at this time. Please try again.' },
      { status: 500 }
    );
  }
}
