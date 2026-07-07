import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import BlogListingClient from './BlogListingClient';
import { Metadata } from 'next';

export const runtime = 'edge'
export const revalidate = 60; // Enable ISR (cache for 60s)

export const metadata: Metadata = {
  title: 'Blog | Aari Work Designs & Tutorials',
  description: 'Explore premium Aari work tutorials, tracing designs, and material guides for embroidery enthusiasts.',
};

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    posts = []; 
  }

  return <BlogListingClient initialPosts={posts} />;
}
