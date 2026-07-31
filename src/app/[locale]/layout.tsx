import type { Metadata } from 'next';
import { Noto_Serif_Devanagari } from 'next/font/google';
import '../globals.css';
import PWARegistration from '@/components/PWARegistration';
import ImageProtection from '@/components/ImageProtection';
import { SubscriptionProvider } from '@/context/SubscriptionContext';
import SubscriptionModal from '@/components/SubscriptionModal';
import { locales, isRtl, getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import { LanguageProvider } from '@/context/LanguageContext';

const devanagariFont = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-devanagari',
});

interface LayoutParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: LayoutParams }): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const title = dict.meta?.siteTitle || 'AARI Work Designs | Embroidery Patterns & App';
  const description = dict.meta?.siteDescription || 'Premium Aari work traces and embroidery designs. Download our Android app to trace designs directly onto fabric.';

  return {
    metadataBase: new URL('https://aariworkdesigns.com'),
    title: {
      default: title,
      template: `%s | ${title.split(' | ')[0]}`
    },
    description: description,
    keywords: ['Aari work', 'embroidery designs', 'traces', 'embroidery app', 'maggam work', 'neck designs'],
    authors: [{ name: 'AARI Work Designs' }],
    creator: 'AARI Work Designs',
    icons: {
      apple: '/logo.png',
    },
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_IN' : `${locale}_${locale.toUpperCase()}`,
      url: `https://aariworkdesigns.com/${locale}`,
      siteName: 'AARI Work Designs',
      images: [{
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'AARI Work Designs'
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: ['/logo.png'],
    },
    alternates: {
      canonical: `https://aariworkdesigns.com/${locale}`,
      languages: {
        'x-default': 'https://aariworkdesigns.com/en',
        en: 'https://aariworkdesigns.com/en',
        hi: 'https://aariworkdesigns.com/hi',
        mr: 'https://aariworkdesigns.com/mr',
        ta: 'https://aariworkdesigns.com/ta',
        te: 'https://aariworkdesigns.com/te',
        es: 'https://aariworkdesigns.com/es',
        fr: 'https://aariworkdesigns.com/fr',
        ar: 'https://aariworkdesigns.com/ar',
        de: 'https://aariworkdesigns.com/de',
        pt: 'https://aariworkdesigns.com/pt',
        ja: 'https://aariworkdesigns.com/ja',
        ko: 'https://aariworkdesigns.com/ko',
      },
      types: {
        'application/rss+xml': 'https://aariworkdesigns.com/feed.xml',
      },
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LayoutParams;
}) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  const dir = isRtl(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={devanagariFont.variable} style={{ overflowX: 'clip' }}>
      <body style={{ overflowX: 'clip', width: '100%', margin: 0, padding: 0 }}>
        <LanguageProvider locale={locale} dict={dict}>
          <SubscriptionProvider>
            <ImageProtection />
            <PWARegistration />
            <div style={{ overflow: 'hidden' }}>
              <main style={{ overflowX: 'hidden', width: '100%' }}>{children}</main>
            </div>
            <SubscriptionModal />
          </SubscriptionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
