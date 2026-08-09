import { Metadata } from 'next';
import Header from '@/components/Header';
import PdfMaker from '@/components/PdfMaker';
import PdfMakerSEOContent from '@/components/PdfMakerSEOContent';
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
  
  const title = dict.pdfMaker?.title1 ? `${dict.pdfMaker.title1}${dict.pdfMaker.titleHighlight || 'PDF Maker'}` : 'Free Aari Tracing Design PDF Downloads & Creator Tool';
  const description = dict.pdfMaker?.subtitle || 'Generate customized Aari tracing designs book PDFs.';

  return {
    title: title,
    description: description,
    keywords: [
      'aari tracing designs book pdf free download',
      'simple aari work design drawings pdf',
      'aari work trace paper design pdf',
      'aari work materials list pdf',
      'simple aari work blouse designs pdf free download',
      'aari work materials name list with images pdf',
      'simple aari work catalogue book pdf',
      'complete knowledge of aari work materials pdf',
      'flower aari work designs drawings pdf',
      'pdf maker',
      'tracing templates',
    ],
    alternates: {
      canonical: `https://aariworkdesigns.com/${locale}/pdf-maker`,
      languages: {
        'x-default': 'https://aariworkdesigns.com/en/pdf-maker',
        en: 'https://aariworkdesigns.com/en/pdf-maker',
        hi: 'https://aariworkdesigns.com/hi/pdf-maker',
        mr: 'https://aariworkdesigns.com/mr/pdf-maker',
        ta: 'https://aariworkdesigns.com/ta/pdf-maker',
        te: 'https://aariworkdesigns.com/te/pdf-maker',
        es: 'https://aariworkdesigns.com/es/pdf-maker',
        fr: 'https://aariworkdesigns.com/fr/pdf-maker',
        ar: 'https://aariworkdesigns.com/ar/pdf-maker',
        de: 'https://aariworkdesigns.com/de/pdf-maker',
        pt: 'https://aariworkdesigns.com/pt/pdf-maker',
        ja: 'https://aariworkdesigns.com/ja/pdf-maker',
        ko: 'https://aariworkdesigns.com/ko/pdf-maker',
      }
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://aariworkdesigns.com/${locale}/pdf-maker`,
      type: 'website',
      locale: locale === 'en' ? 'en_IN' : `${locale}_${locale.toUpperCase()}`,
      siteName: 'AARI Work Designs',
      images: [{ url: '/logo.png', width: 800, height: 800, alt: 'AARI Work Designs PDF Maker' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/logo.png'],
    },
  };
}

export default async function PdfMakerPage({ params }: { params: PageParams }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  let images: any[] = [];
  try {
    images = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error('Error fetching images for PDF maker:', error);
  }

  return (
    <>
      <Header />
      <main style={{ background: 'var(--bg-primary)' }}>
        <div id="pdf-maker-top">
          <PdfMaker initialImages={images} />
        </div>
        <PdfMakerSEOContent />
      </main>
      <Footer subtext={dict.footer?.defaultSubtext || "Create custom PDFs of tracing designs."} />
    </>
  );
}
