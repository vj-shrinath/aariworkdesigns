import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { getDictionary } from '@/lib/i18n';
import { translateDocuments } from '@/lib/translate';
import type { Locale } from '@/lib/i18n';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const revalidate = 60; // Enable ISR (cache for 60s)

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta?.homeTitle,
    description: dict.meta?.homeDescription,
  };
}

export default async function HomePage({ params }: { params: PageParams }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'LocalBusiness', name: 'AARI Work Designs', description: dict.meta?.siteDescription || 'Digital tracing designs and embroidery resources.', url: `https://aariworkdesigns.com/${locale}`, logo: 'https://aariworkdesigns.com/logo.png', address: { '@type': 'PostalAddress', addressCountry: 'IN' } },
    ],
  };

  let posts = [];
  try {
    const rawPosts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });
    posts = await translateDocuments(rawPosts, locale);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    posts = [];
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <BlogList posts={posts} />
      <Footer subtext={dict.footer?.defaultSubtext || "Crafted for the curious."} />
    </>
  );
}
