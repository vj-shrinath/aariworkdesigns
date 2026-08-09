import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import BlogListingClient from './BlogListingClient';
import { Metadata } from 'next';
import { getDictionary, locales } from '@/lib/i18n';
import { translateDocuments } from '@/lib/translate';
import type { Locale } from '@/lib/i18n';

export const revalidate = 60; // Enable ISR (cache for 60s)

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const alternateLanguages: Record<string, string> = {};
  locales.forEach((loc) => {
    alternateLanguages[loc] = `https://aariworkdesigns.com/${loc}/blog`;
  });
  alternateLanguages['x-default'] = 'https://aariworkdesigns.com/en/blog';

  return {
    title: `${dict.header?.articles || 'Blog'} | Aari Work Designs & Tutorials`,
    description: dict.meta?.siteDescription || 'Explore premium Aari work tutorials, tracing designs, and material guides for embroidery enthusiasts.',
    alternates: {
      canonical: `https://aariworkdesigns.com/${locale}/blog`,
      languages: alternateLanguages,
    },
  };
}

export default async function BlogPage({ params }: { params: PageParams }) {
  const { locale } = params;
  let posts = [];
  try {
    const rawPosts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });
    posts = await translateDocuments(rawPosts, locale);
  } catch (error) {
    console.error('Sanity fetch error:', error);
    posts = []; 
  }

  return <BlogListingClient initialPosts={posts} />;
}
