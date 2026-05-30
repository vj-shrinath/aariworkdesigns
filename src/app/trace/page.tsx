import { Metadata } from 'next';
import Header from '@/components/Header';
import TraceTool from '@/components/TraceTool';
import TraceSEOContent from '@/components/TraceSEOContent';
import { client } from '@/sanity/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';

/* ──────────────────────────────────────────────────────────
   SEO METADATA
   Primary keyword: "aari tool"
   Slug: /trace
────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Aari Tool – Free Online Aari Tracing Tool for Embroidery Designs',
  description:
    'Use our free Aari Tool to trace blouse and embroidery designs directly on cloth using your mobile, tablet, or desktop screen. Easy online tracing tool for beginners and boutique designers.',
  keywords: [
    'aari tool',
    'aari tracing tool',
    'online aari tracing tool',
    'aari work tools',
    'trace aari design on cloth',
    'aari blouse tracing',
    'embroidery tracing tool',
    'online aari tracing tool for mobile, tablet, and desktop',
    'tracing designs for aari work',
    'maggam work tracing',
    'blouse design tracing',
    'aari work designs',
  ],
  alternates: {
    canonical: 'https://aariworkdesigns.com/trace',
  },
  openGraph: {
    title: 'Aari Tool – Free Online Aari Tracing Tool for Embroidery Designs',
    description:
      'Trace blouse and embroidery designs directly on cloth using your mobile phone. Free, no sign-up required.',
    url: 'https://aariworkdesigns.com/trace',
    type: 'website',
    locale: 'en_IN',
    siteName: 'AARI Work Designs',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'AARI Work Designs – Free Online Tracing Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aari Tool – Free Online Aari Tracing Tool',
    description:
      'Trace embroidery & blouse designs on cloth using your mobile. Free online Aari tracing tool for beginners.',
    images: ['/logo.png'],
  },
};

export const runtime = 'edge';

export default async function TracePage() {
  let images: any[] = [];
  try {
    images = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error('Error fetching images for trace tool:', error);
  }

  return (
    <>
      <Header />
      <main style={{ background: 'var(--bg-primary)' }}>
        {/* ── SECTION 1: The Tracing Tool UI (DO NOT MODIFY) ── */}
        <div id="trace-tool-top">
          <TraceTool initialImages={images} />
        </div>

        {/* ── SECTIONS 2–9: SEO Content (below the tool) ── */}
        <TraceSEOContent />
      </main>
    </>
  );
}

