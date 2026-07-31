import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { groq } from 'next-sanity';
import { locales } from '@/lib/i18n';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aariworkdesigns.com';

  const posts = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] { "slug": slug.current, _updatedAt }`
  );

  const staticPaths = ['', '/blog', '/trace', '/pdf-maker', '/gallery', '/about', '/contact', '/privacy-policy', '/terms', '/refund-policy', '/shipping-policy', '/cancellation-policy', '/faq', '/support'];

  const sitemapItems: MetadataRoute.Sitemap = [];

  // Generate sitemap items for static pages
  for (const path of staticPaths) {
    for (const locale of locales) {
      // Build alternates mapping for all locales
      const languagesMap: Record<string, string> = {};
      for (const loc of locales) {
        languagesMap[loc] = `${baseUrl}/${loc}${path}`;
      }
      languagesMap['x-default'] = `${baseUrl}/en${path}`;

      sitemapItems.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: languagesMap,
        },
      });
    }
  }

  // Generate sitemap items for dynamic blog post pages
  for (const post of posts) {
    const postPath = `/blog/${post.slug}`;
    for (const locale of locales) {
      const languagesMap: Record<string, string> = {};
      for (const loc of locales) {
        languagesMap[loc] = `${baseUrl}/${loc}${postPath}`;
      }
      languagesMap['x-default'] = `${baseUrl}/en${postPath}`;

      sitemapItems.push({
        url: `${baseUrl}/${locale}${postPath}`,
        lastModified: new Date(post._updatedAt),
        alternates: {
          languages: languagesMap,
        },
      });
    }
  }

  return sitemapItems;
}
