import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';
import AdSenseUnit from '@/components/AdSenseUnit';
import HomeSEOContent from '@/components/HomeSEOContent';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { POSTS_QUERY, GALLERY_QUERY } from '@/sanity/lib/queries';
import { getDictionary } from '@/lib/i18n';
import { translateDocuments } from '@/lib/translate';
import type { Locale } from '@/lib/i18n';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const revalidate = 60; // Enable ISR (cache for 60s)

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: PageParams | Promise<PageParams> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta?.homeTitle,
    description: dict.meta?.homeDescription,
  };
}

export default async function HomePage({ params }: { params: PageParams | Promise<PageParams> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'LocalBusiness', name: 'AARI Work Designs', description: dict.meta?.siteDescription || 'Digital tracing designs and embroidery resources.', url: `https://aariworkdesigns.com/${locale}`, logo: 'https://aariworkdesigns.com/logo.png', address: { '@type': 'PostalAddress', addressCountry: 'IN' } },
    ],
  };

  let posts = [];
  let galleryItems = [];
  try {
    const [rawPosts, rawGallery] = await Promise.all([
      client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } }),
      client.fetch(GALLERY_QUERY, {}, { next: { revalidate: 60 } }),
    ]);
    posts = await translateDocuments(rawPosts, locale);
    galleryItems = await translateDocuments(rawGallery, locale);
  } catch (error) {
    console.error('Sanity fetch error:', error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero posts={posts} galleryItems={galleryItems} />
      <AdSenseUnit slotId="home_top" />
      <BlogList posts={posts} />
      <HomeSEOContent />
      <Footer subtext={dict.footer?.defaultSubtext || "Crafted for the curious."} />
    </>
  );
}
