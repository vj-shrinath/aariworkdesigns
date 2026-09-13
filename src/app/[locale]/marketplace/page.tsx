import React from 'react';
import MarketplaceClient from '@/components/marketplace/MarketplaceClient';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Aari Embroidery Tracing PDF Marketplace | Print-Ready Patterns',
  description: 'Explore high-resolution Aari embroidery tracing pattern PDFs for blouse necklines, elbow sleeves, bridal motifs, and saree borders. Download sample watermarked previews or clean PDFs.',
  keywords: ['Aari work PDF', 'Aari embroidery tracing paper', 'Blouse neck design PDF', 'Elbow sleeve tracing sheet'],
};

async function getInitialPdfs() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    if (!supabaseUrl || !supabaseKey) return [];

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data } = await supabase
      .from('pdf_marketplace')
      .select('id, title, slug, description, category, tags, price_inr, is_free_for_vip, preview_images, page_count, download_count, is_published, created_at, updated_at')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    return data || [];
  } catch (err) {
    console.error('Error fetching initial PDFs:', err);
    return [];
  }
}

export default async function MarketplacePage({ params }: { params: { locale: string } }) {
  const initialItems = await getInitialPdfs();

  // Product Schema JSON-LD for Google SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: 'Aari Work Designs PDF Marketplace',
    description: 'Vector tracing sheets and PDF patterns for Aari hand embroidery.',
    url: 'https://aariworkdesigns.com/marketplace',
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0F0C1B' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <div style={{ paddingTop: '4.5rem' }}>
        <MarketplaceClient initialItems={initialItems} locale={params?.locale || 'en'} />
      </div>
      <Footer />
    </main>
  );
}
