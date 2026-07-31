import type { Metadata } from 'next';

export const SUPPORT_EMAIL = 'vjshrinath2@outlook.com';
export const SITE_URL = 'https://aariworkdesigns.com';

export function complianceMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return { title, description, alternates: { canonical: url }, openGraph: { type: 'website', title, description, url, siteName: 'AARI Work Designs', images: [{ url: '/logo.png', alt: 'AARI Work Designs logo', width: 800, height: 800 }] }, twitter: { card: 'summary_large_image', title, description, images: ['/logo.png'] } };
}

export const organizationJsonLd = { '@context': 'https://schema.org', '@type': 'Organization', name: 'AARI Work Designs', url: SITE_URL, logo: `${SITE_URL}/logo.png`, email: SUPPORT_EMAIL, areaServed: 'IN' };
