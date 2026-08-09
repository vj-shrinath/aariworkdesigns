import type { Metadata } from 'next';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  
  const title = dict.galleryPage?.title1 ? `${dict.galleryPage.title1}${dict.galleryPage.title2 || 'Gallery'}` : 'Simple Aari Work Blouse Designs Gallery - Easy Patterns for Beginners';
  const description = dict.galleryPage?.description || 'Explore 100+ easy simple aari work blouse designs images. Find basic simple aari work blouse hand designs and templates for beginners to download or trace.';

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    }
  };
}

export const runtime = 'edge'

export const revalidate = 60; // Enable ISR (cache for 60s)

export default async function GalleryPage({ params }: { params: PageParams }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  let items = [];
  try {
    items = await client.fetch(GALLERY_QUERY, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.error('Gallery fetch error:', error);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": dict.gallery?.faq1q || "How do I trace simple aari work blouse designs for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": dict.gallery?.faq1a || "To trace simple aari work blouse designs, select templates in our visual gallery."
        }
      },
      {
        "@type": "Question",
        "name": dict.gallery?.faq2q || "Where can I download basic simple aari work blouse designs images?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": dict.gallery?.faq2a || "Every image inside our visual gallery is free to download in high-resolution, featuring basic simple aari work blouse hand designs, neck outlines, and sleeves templates."
        }
      },
      {
        "@type": "Question",
        "name": dict.gallery?.faq3q || "What are easy simple aari work designs patterns for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": dict.gallery?.faq3a || "For beginners starting out, easy simple aari work designs include basic line vectors (chain stitches, wave lines, dots), simple leaves, and flower border designs. These outline traces require fewer changes and are excellent for practicing on sleeve borders and necklines."
        }
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": dict.galleryPage?.title1 ? `${dict.galleryPage.title1}${dict.galleryPage.title2 || 'Gallery'}` : "Simple Aari Work Blouse Designs Gallery - Easy Patterns for Beginners",
    "description": dict.galleryPage?.description || "Explore 100+ easy simple aari work blouse designs images. Find basic simple aari work blouse hand designs and templates for beginners to download or trace.",
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
            {dict.galleryPage?.creativeBadge || 'Creative Tracing Templates'}
          </span>
          <h1 className="text-gradient" style={{ fontSize: '3.6rem', fontWeight: 850, marginBottom: '1.5rem', lineHeight: '1.25' }}>
            {dict.galleryPage?.title1 || 'Simple Aari Work '}<span style={{ color: 'var(--text-primary)' }}>{dict.galleryPage?.title2 || 'Blouse Designs Gallery'}</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.7' }}>
            {dict.galleryPage?.description || 'Welcome to the ultimate visual showcase of easy simple aari work designs.'}
          </p>
        </header>
        
        <Gallery items={items} />
      </main>
      
      <Footer subtext={dict.galleryPage?.footerSubtext || "All templates and traces are free for creative use."} />
    </>
  );
}
