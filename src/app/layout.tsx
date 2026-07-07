import type { Metadata } from 'next';
import './globals.css';
import PWARegistration from '@/components/PWARegistration';
import ImageProtection from '@/components/ImageProtection';

export const metadata: Metadata = {
  metadataBase: new URL('https://aariworkdesigns.com'),
  title: {
    default: 'AARI Work Designs | Embroidery Patterns & App',
    template: '%s | AARI Work Designs'
  },
  description: 'Premium Aari work traces and embroidery designs. Download our Android app to trace designs directly onto fabric.',
  keywords: ['Aari work', 'embroidery designs', 'traces', 'embroidery app', 'maggam work', 'neck designs'],
  authors: [{ name: 'AARI Work Designs' }],
  creator: 'AARI Work Designs',
  verification: {
    google: 'verification_token', // Replace with actual token
    yandex: 'verification_token',
    yahoo: 'verification_token',
    other: {
      'msvalidate.01': 'verification_token',
      'facebook-domain-verification': 'verification_token',
    },
  },
  icons: {
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aariworkdesigns.com',
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
    title: 'AARI Work Designs',
    description: 'Premium Aari work traces and embroidery designs.',
    images: ['/logo.png'],
  },
  alternates: {
    types: {
      'application/rss+xml': 'https://aariworkdesigns.com/feed.xml',
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ overflowX: 'clip' }}>
      <body style={{ overflowX: 'clip', width: '100%', margin: 0, padding: 0 }}>
        <ImageProtection />
        <PWARegistration />
        <div style={{ overflow: 'hidden' }}>
          <main style={{ overflowX: 'hidden', width: '100%' }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
