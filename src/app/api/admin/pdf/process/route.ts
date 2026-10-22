import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getPdfPageCount } from '@/lib/watermarkPdfEngine';

export const runtime = 'edge';

const ADMIN_SECRET = (process.env.ADMIN_SECRET_KEY || 'aari_admin_secret_2026').replace(/['"]/g, '').trim();

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

    // 1. Calculate Page Count from Master PDF
    const calculatedPageCount = await getPdfPageCount(inputBuffer);
    const formPageCount = parseInt(formData.get('page_count') as string || '0', 10);
    const pageCount = formPageCount > 0 ? formPageCount : calculatedPageCount;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + '-' + Date.now().toString(36);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAdminKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAdminKey);
    const bucketName = 'blog-assets';

    // 2. Upload Preview WebP Thumbnail Images (Up to 3 preview pages)
    const previewImages: string[] = [];

    // Check for array of uploaded preview blobs (e.g. `preview_image_0`, `preview_image_1`, `preview_image_2`)
    const previewFiles: File[] = [];
    for (let i = 0; i < 5; i++) {
      const pFile = formData.get(`preview_image_${i}`) as File | null;
      if (pFile) previewFiles.push(pFile);
    }
    const singlePreviewFile = formData.get('preview_image') as File | null;
    if (previewFiles.length === 0 && singlePreviewFile) {
      previewFiles.push(singlePreviewFile);
    }

    // Process all preview files
    for (let i = 0; i < previewFiles.length; i++) {
      const pFile = previewFiles[i];
      try {
        const pBuffer = Buffer.from(await pFile.arrayBuffer());
        const isWebp = pFile.type === 'image/webp' || pFile.name.endsWith('.webp');
        const ext = isWebp ? 'webp' : 'png';
        const contentType = pFile.type || (isWebp ? 'image/webp' : 'image/png');
        const previewPath = `pdf-marketplace/${slug}_preview_${i + 1}.${ext}`;

        const { error: pErr } = await supabase.storage
          .from(bucketName)
          .upload(previewPath, pBuffer, { contentType, upsert: true });

        if (!pErr) {
          const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${previewPath}`;
          previewImages.push(publicUrl);
        } else {
          console.warn(`Preview page ${i + 1} upload warning:`, pErr.message);
        }
      } catch (pUploadErr) {
        console.warn(`Error uploading preview page ${i + 1}:`, pUploadErr);
      }
    }

    // Check for optional fallback text preview_image_url
    const previewImageUrlInput = (formData.get('preview_image_url') as string || '').trim();
    if (previewImages.length === 0 && previewImageUrlInput) {
      previewImages.push(previewImageUrlInput);
    }

    // 3. Upload ONLY ONE clean Master PDF to Private Supabase Storage
    const cleanMasterPath = `pdf-marketplace/${slug}_clean.pdf`;

    const { error: cleanErr } = await supabase.storage
      .from(bucketName)
      .upload(cleanMasterPath, inputBuffer, { contentType: 'application/pdf', upsert: true });

    if (cleanErr) {
      console.error('Failed to upload master PDF to Supabase storage:', cleanErr);
      return NextResponse.json({ error: `Storage upload failed: ${cleanErr.message}` }, { status: 500 });
    }

    // 4. Insert into `pdf_marketplace` Table
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
        clean_file_url: cleanMasterPath,
        watermarked_file_url: '',
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
      message: `Master PDF and ${previewImages.length} watermarked WebP previews successfully created!`,
      item: dbData,
    });
  } catch (err: any) {
    console.error('API Error in admin PDF process:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
