import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aariworkdesigns.com'),
  title: {
    default: 'AARI Work Designs | Embroidery Patterns & App',
    template: '%s | AARI Work Designs'
  },
  description: 'Premium Aari work traces and embroidery designs. Download our Android app to trace designs directly onto fabric.',
  icons: {
    apple: '/logo.png',
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
  return children;
}
