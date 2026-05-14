import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';
import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export const revalidate = 0; // Force dynamic rendering

export default async function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AARI Blog & Designs',
    description: 'Premier destination for modern embroidery designs, Aari work, and creative textile art.',
    url: 'https://aariblog.com',
    logo: 'https://aariblog.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN', // You can update this to your specific region
    },
  };

  let posts = [];
  try {
    posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 0 } });
    console.log(`Fetched ${posts.length} posts from Sanity`);
  } catch (error) {

    console.error('Sanity fetch error:', error);
    // Fallback data for demonstration if project ID is not set
    posts = [
      {
        _id: '1',
        title: 'The Future of Minimalist Interface Design',
        slug: { current: 'future-of-minimalist-design' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Exploring how brutalism and minimalism are merging to create the next generation of web interfaces.',
        author: { name: 'Alex Rivera' },
        categories: [{ title: 'Design' }]
      },
      {
        _id: '2',
        title: 'Building Scalable Architectures with Next.js 14',
        slug: { current: 'scalable-architectures-nextjs' },
        publishedAt: new Date().toISOString(),
        excerpt: 'A deep dive into server actions, partial prerefering, and the power of the App Router.',
        author: { name: 'Sarah Chen' },
        categories: [{ title: 'Technology' }]
      },
      {
        _id: '3',
        title: 'The Psychology of Color in Digital Products',
        slug: { current: 'psychology-of-color' },
        publishedAt: new Date().toISOString(),
        excerpt: 'How subtle shifts in hue can dramatically change user perception and conversion rates.',
        author: { name: 'James Wilson' },
        categories: [{ title: 'UX Research' }]
      }
    ];
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
      <footer style={{ 
        padding: '4rem 0', 
        borderTop: '1px solid var(--border)', 
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} AARI BLOG. Crafted for the curious.</p>
        </div>
      </footer>
    </>
  );
}
