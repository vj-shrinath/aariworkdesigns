import React from 'react';
import type { Metadata } from 'next';
import MarketplaceClient from '@/components/marketplace/MarketplaceClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'PDF Market – Aari Embroidery Tracing Patterns',
  description: 'Buy high-resolution Aari embroidery tracing PDFs for blouse necklines, sleeves, bridal motifs and saree borders. VIP subscribers download for free. Instant delivery, print-ready.',
  keywords: [
    'Aari work PDF',
    'Aari embroidery tracing paper',
    'Blouse neck design PDF',
    'Elbow sleeve tracing sheet',
    'buy embroidery patterns India',
    'Maggam work tracing PDF',
    'Bridal blouse design PDF',
  ],
  alternates: {
    canonical: 'https://aariworkdesigns.com/en/pdf-market',
  },
  openGraph: {
    title: 'PDF Market – Aari Embroidery Tracing Patterns | Aari Work Designs',
    description: 'Shop print-ready Aari embroidery tracing PDFs. VIP members download all designs for free.',
    url: 'https://aariworkdesigns.com/en/pdf-market',
    siteName: 'Aari Work Designs',
    images: [
      {
        url: 'https://aariworkdesigns.com/logo.png',
        width: 800,
        height: 800,
        alt: 'Aari Work Designs PDF Market',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Market – Aari Embroidery Tracing Patterns',
    description: 'Shop print-ready Aari embroidery tracing PDFs. VIP members download all designs for free.',
    images: ['https://aariworkdesigns.com/logo.png'],
  },
};

async function getInitialPdfs() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    if (!supabaseUrl || !supabaseKey) return [];

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data } = await supabase
      .from('pdf_marketplace')
      .select(
        'id, title, slug, description, category, tags, price_inr, is_free_for_vip, preview_images, page_count, download_count, is_published, created_at, updated_at'
      )
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    return data || [];
  } catch (err) {
    console.error('Error fetching initial PDFs:', err);
    return [];
  }
}

export default async function PdfMarketPage({
  params,
}: {
  params: { locale: string };
}) {
  const initialItems = await getInitialPdfs();

  // Rich ItemList structured data for Google Shopping / SGE
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Aari Embroidery Tracing PDF Collection',
    description:
      'High-resolution vector tracing sheets and PDF patterns for Aari hand embroidery.',
    url: 'https://aariworkdesigns.com/en/pdf-market',
    numberOfItems: initialItems.length,
    itemListElement: initialItems.slice(0, 10).map((item: any, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: item.title,
        description: item.description || 'Aari embroidery tracing pattern PDF',
        url: `https://aariworkdesigns.com/en/pdf-market`,
        offers: {
          '@type': 'Offer',
          price: item.price_inr,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Aari Work Designs' },
        },
      },
    })),
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0F0C1B' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div style={{ paddingTop: '4.5rem' }}>
        <MarketplaceClient
          initialItems={initialItems}
          locale={params?.locale || 'en'}
        />
      </div>
      <Footer />
    </main>
  );
}
