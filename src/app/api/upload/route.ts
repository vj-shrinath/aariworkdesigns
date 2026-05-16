import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-16';
const token = process.env.SANITY_WRITE_TOKEN;

const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

export async function POST(req: Request) {
  if (!token) {
    return NextResponse.json({ error: 'Sanity Write Token is not configured' }, { status: 500 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // 1. Upload the image asset to Sanity
    const asset = await writeClient.assets.upload('image', file, {
      filename: file.name,
      contentType: file.type,
    });

    // 2. Create a 'userSubmission' document
    const result = await writeClient.create({
      _type: 'userSubmission',
      title: `User Upload - ${new Date().toLocaleString()}`,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      },
      uploadDate: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: result._id });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
