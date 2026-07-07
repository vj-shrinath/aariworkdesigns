import { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';

export const metadata: Metadata = {
  title: 'Simple Aari Work Blouse Designs Gallery - Easy Patterns for Beginners',
  description: 'Explore 100+ easy simple aari work blouse designs images. Find basic simple aari work blouse hand designs and templates for beginners to download or trace.',
  openGraph: {
    title: 'Simple Aari Work Blouse Designs Gallery - Easy Patterns for Beginners',
    description: 'Explore 100+ easy simple aari work blouse designs images. Find basic simple aari work blouse hand designs and templates for beginners to download or trace.',
    type: 'website',
  }
};

export const runtime = 'edge'

export const revalidate = 0;

export default async function GalleryPage() {
  let items = [];
  try {
    items = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error('Gallery fetch error:', error);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I trace simple aari work blouse designs for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To trace simple aari work blouse designs, select templates in our visual gallery. Click the 'Open in Tracing Studio' button to load the blueprint in full-screen lightbox simulator. Place your tracing paper or blouse fabric directly on the backlit tablet or phone screen to map patterns accurately."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I download basic simple aari work blouse designs images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every image inside our visual gallery is free to download in high-resolution, featuring basic simple aari work blouse hand designs, neck outlines, and sleeves templates."
        }
      },
      {
        "@type": "Question",
        "name": "What are easy simple aari work designs patterns for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For beginners starting out, easy simple aari work designs include basic line vectors (chain stitches, wave lines, dots), simple leaves, and flower border designs. These outline traces require fewer changes and are excellent for practicing on sleeve borders and necklines."
        }
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Simple Aari Work Blouse Designs Gallery - Easy Patterns for Beginners",
    "description": "Explore 100+ easy simple aari work blouse designs images. Find basic simple aari work blouse hand designs and templates for beginners to download or trace.",
    "about": {
      "@type": "Thing",
      "name": "Aari Work Embroidery"
    }
  };

  return (
    <>
      <Header />
      
      {/* Dynamic JSON-LD Structured Metadata (Technical SEO / AEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <main className="container" style={{ paddingTop: '120px', paddingBottom: '8rem' }}>
        <header style={{ marginBottom: '4rem', maxWidth: '800px' }}>
          <span style={{ 
            color: 'var(--accent, #ffd700)', 
            fontSize: '0.9rem', 
            fontWeight: 750, 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.75rem'
          }}>
            Creative Tracing Templates
          </span>
          <h1 className="text-gradient" style={{ fontSize: '3.6rem', fontWeight: 850, marginBottom: '1.5rem', lineHeight: '1.25' }}>
            Simple Aari Work <span style={{ color: 'var(--text-primary)' }}>Blouse Designs Gallery</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.7' }}>
            Welcome to the ultimate visual showcase of **easy simple aari work designs**. Whether you are looking for **simple aari work blouse designs images** to practice on or need **basic simple aari work blouse designs for beginners**, our collection features detailed **aari work blouse hand designs** and outline templates ready to print, download, or trace directly onto fabric using our light box studio.
          </p>
        </header>
        
        <Gallery items={items} />
      </main>
      
      <Footer subtext="All templates and traces are free for creative use." />
    </>
  );
}
