import { Metadata } from 'next';
import Header from '@/components/Header';
import TraceTool from '@/components/TraceTool';
import TraceSEOContent from '@/components/TraceSEOContent';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';
import { getDictionary, locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: PageParams;
  searchParams?: { img?: string | string[] };
}): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const hasImageParameter = Boolean(searchParams?.img);

  const title = dict.traceTool?.title
    ? `${dict.traceTool.title}${dict.traceTool.titleHighlight} – AARI Work Designs`
    : 'Aari Tool – Free Online Aari Tracing Tool for Embroidery Designs';

  const description = dict.traceTool?.subtitle
    ? dict.traceTool.subtitle.replace(/<[^>]*>/g, '')
    : 'Use our free Aari Tool to trace blouse and embroidery designs directly on cloth using your mobile, tablet, or desktop screen.';

  const alternateLanguages: Record<string, string> = {};
  locales.forEach((loc) => {
    alternateLanguages[loc] = `https://aariworkdesigns.com/${loc}/trace`;
  });
  alternateLanguages['x-default'] = 'https://aariworkdesigns.com/en/trace';

  return {
    title,
    description,
    keywords: [
      'aari tool', 'aari tracing tool', 'online aari tracing tool',
      'aari work tools', 'trace aari design on cloth',
      'embroidery tracing tool', 'maggam work tracing',
    ],
    alternates: {
      canonical: `https://aariworkdesigns.com/${locale}/trace`,
      languages: alternateLanguages,
    },
    // Image-specific trace URLs are utility states, not separate content pages.
    ...(hasImageParameter && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: `https://aariworkdesigns.com/${locale}/trace`,
      type: 'website',
      locale: locale === 'en' ? 'en_IN' : `${locale}_${locale.toUpperCase()}`,
      siteName: 'AARI Work Designs',
      images: [{ url: '/logo.png', width: 800, height: 800, alt: 'AARI Work Designs' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
    },
  };
}

export const runtime = 'edge';

export default async function TracePage({ params }: { params: PageParams }) {
  let images: any[] = [];
  try {
    images = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error('Error fetching images for trace tool:', error);
  }

  return (
    <>
      <Header />
      <main style={{ background: 'var(--bg-primary)' }}>
        <div id="trace-tool-top">
          <TraceTool initialImages={images} />
        </div>
        <TraceSEOContent />
      </main>
      <Footer />
    </>
  );
}
