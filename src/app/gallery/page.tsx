import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our gallery of beautiful Aari work designs and traces. Inspiration for your next embroidery project.',
};

import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import { client } from '@/sanity/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';

export const runtime = 'edge'

export const revalidate = 0;

export default async function GalleryPage() {
  let items = [];
  try {
    items = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error('Gallery fetch error:', error);
  }

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '120px', paddingBottom: '8rem' }}>
        <header style={{ marginBottom: '4rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Visual <span style={{ color: 'var(--text-primary)' }}>Gallery</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
            A collection of moments and visuals from our latest stories, grouped by article.
          </p>
        </header>
        
        <Gallery items={items} />
      </main>
      
      <footer style={{ 
        padding: '4rem 0', 
        borderTop: '1px solid var(--border)', 
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} AARI Work Designs. Visual storytelling.</p>
        </div>
      </footer>
    </>
  );
}
