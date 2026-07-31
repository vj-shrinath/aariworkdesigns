import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PaymentStatusClient from './PaymentStatusClient';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

export const runtime = 'edge';

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  return {
    title: dict.paymentStatus?.verifying || 'Payment Status',
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function PaymentStatusPage({ params }: { params: PageParams }) {
  const { locale } = params;
  
  return (
    <>
      <Header />
      <PaymentStatusClient locale={locale} />
      <Footer subtext="Premium Experience Enabled." />
    </>
  );
}
