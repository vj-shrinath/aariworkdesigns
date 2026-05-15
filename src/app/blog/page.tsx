import Header from '@/components/Header';
import BlogList from '@/components/BlogList';
import { client } from '@/sanity/client';
import { POSTS_QUERY } from '@/sanity/lib/queries';

import { Metadata } from 'next';

export const runtime = 'edge'
export const revalidate = 0; 

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Explore our latest embroidery designs, Aari work tutorials, and tips for using our tracing app.',
};
export default async function BlogPage() {
  let posts = [];
  try {
    posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 0 } });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    // Fallback data if needed
    posts = []; 
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '140px' }}>
        <div className="container">
          <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span className="text-gradient" style={{ 
              fontSize: '0.9rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '1rem'
            }}>
              Latest Stories
            </span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
              All <span className="text-gradient">Articles</span>
            </h1>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.2rem', 
              maxWidth: '600px', 
              margin: '1.5rem auto 0',
              lineHeight: '1.6'
            }}>
              Explore our collection of insights, tutorials, and inspiration for Aari work and modern design.
            </p>
          </header>
          
          <BlogList posts={posts} />
        </div>
      </main>

      <footer style={{ 
        padding: '4rem 0', 
        borderTop: '1px solid var(--border)', 
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        marginTop: '8rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} AARI Work Designs. Crafted for the curious.</p>
        </div>
      </footer>
    </>
  );
}
