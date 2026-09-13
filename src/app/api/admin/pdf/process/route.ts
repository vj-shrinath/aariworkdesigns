import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { injectWatermarkToPdf, getPdfPageCount } from '@/lib/watermarkPdfEngine';

export const runtime = 'edge';

const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY || 'aari_admin_secret_2026';

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('x-admin-secret');
    if (authHeader !== ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized admin key' }, { status: 401 });
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const title = (formData.get('title') as string || '').trim();
    const description = (formData.get('description') as string || '').trim();
    const category = (formData.get('category') as string || 'Bridal Neck').trim();
    const priceInr = parseFloat(formData.get('price_inr') as string || '49');
    const isFreeForVip = formData.get('is_free_for_vip') === 'true';
    const tagsString = (formData.get('tags') as string || '');
    const tags = tagsString ? tagsString.split(',').map(t => t.trim()).filter(Boolean) : [];

    if (!file || !title) {
      return NextResponse.json({ error: 'PDF file and title are required' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    // 1. Calculate Page Count
    const pageCount = await getPdfPageCount(inputBuffer);

    // 2. Generate Watermarked PDF Buffer
    const watermarkedPdfBytes = await injectWatermarkToPdf(inputBuffer, {
      watermarkText: 'aariworkdesigns.com',
      subText: 'SAMPLE PREVIEW • VIP ACCESS ONLY',
    });

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString(36);

    // 3. Process optional preview image file or URL
    const previewImageFile = formData.get('preview_image') as File | null;
    const previewImageUrlInput = (formData.get('preview_image_url') as string || '').trim();
    let previewImages: string[] = [];

    if (previewImageUrlInput) {
      previewImages.push(previewImageUrlInput);
    }

    // 4. Store Files in Supabase Storage or generate data URIs / secure references
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAdminKey);

    const bucketName = 'blog-assets';
    const cleanFilePath = `pdf-marketplace/${slug}_clean.pdf`;
    const watermarkedFilePath = `pdf-marketplace/${slug}_watermarked.pdf`;

    let cleanFileUrl = '';
    let watermarkedFileUrl = '';

    // Upload preview image file if provided (overrides or adds to previewImages)
    if (previewImageFile) {
      try {
        const previewBuffer = Buffer.from(await previewImageFile.arrayBuffer());
        const previewPath = `pdf-marketplace/${slug}_preview.png`;
        const { error: pErr } = await supabase.storage
          .from(bucketName)
          .upload(previewPath, previewBuffer, { contentType: previewImageFile.type || 'image/png', upsert: true });

        if (!pErr) {
          const uploadedUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${previewPath}`;
          if (previewImages.length > 0) {
            previewImages[0] = uploadedUrl;
          } else {
            previewImages.push(uploadedUrl);
          }
        } else {
          console.warn('Preview upload error:', pErr.message);
        }
      } catch (pUploadErr) {
        console.warn('Preview image upload fallback:', pUploadErr);
      }
    }

    // Upload Clean and Watermarked PDFs to `blog-assets` bucket in `pdf-marketplace` folder
    try {
      const { error: cleanErr } = await supabase.storage
        .from(bucketName)
        .upload(cleanFilePath, inputBuffer, { contentType: 'application/pdf', upsert: true });

      const { error: wmErr } = await supabase.storage
        .from(bucketName)
        .upload(watermarkedFilePath, Buffer.from(watermarkedPdfBytes), { contentType: 'application/pdf', upsert: true });

      if (!cleanErr && !wmErr) {
        cleanFileUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${cleanFilePath}`;
        watermarkedFileUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${watermarkedFilePath}`;
      } else {
        console.warn('Storage upload warning:', cleanErr?.message || wmErr?.message);
        cleanFileUrl = `/api/pdf/download?pdfId=${slug}&type=clean`;
        watermarkedFileUrl = `/api/pdf/download?pdfId=${slug}&type=watermarked`;
      }
    } catch (storageErr) {
      console.warn('Storage bucket upload fallback:', storageErr);
      cleanFileUrl = `/api/pdf/download?pdfId=${slug}&type=clean`;
      watermarkedFileUrl = `/api/pdf/download?pdfId=${slug}&type=watermarked`;
    }

    // 5. Insert into `pdf_marketplace` Table
    const { data: dbData, error: dbError } = await supabase
      .from('pdf_marketplace')
      .insert({
        title,
        slug,
        description,
        category,
        tags,
        price_inr: priceInr,
        is_free_for_vip: isFreeForVip,
        clean_file_url: cleanFileUrl,
        watermarked_file_url: watermarkedFileUrl,
        preview_images: previewImages,
        page_count: pageCount,
        is_published: true,
      })
      .select('*')
      .single();

    if (dbError) {
      console.error('Database insert error for PDF marketplace:', dbError);
      return NextResponse.json({ error: dbError.message || 'Database insert failed' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'PDF uploaded, watermarked, and listed successfully!',
      item: dbData,
    });
  } catch (err: any) {
    console.error('API Error in admin PDF process:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
