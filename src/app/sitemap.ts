import { MetadataRoute } from 'next';
import { client } from '@/sanity/client';
import { groq } from 'next-sanity';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aariworkdesigns.com';

  const posts = await client.fetch(groq`*[_type == "post" && defined(slug.current)] { "slug": slug.current, _updatedAt }`);

  const postUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/trace`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
