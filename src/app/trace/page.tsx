import { Metadata } from 'next';
import Header from '@/components/Header';
import TraceTool from '@/components/TraceTool';
import { client } from '@/sanity/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Trace Designs',
  description: 'Select a design and start tracing directly onto your fabric using our full-screen tracing tool.',
};

export const runtime = 'edge';

export default async function TracePage() {
  let images = [];
  try {
    images = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error('Error fetching images for trace tool:', error);
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <TraceTool initialImages={images} />
      </main>
    </>
  );
}
