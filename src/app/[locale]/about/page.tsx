import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface PageParams {
  locale: Locale;
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);
  return {
    title: dict.header?.about || 'About Us',
    description: dict.meta?.siteDescription,
  };
}

export default async function AboutPage({ params }: { params: PageParams }) {
  const { locale } = params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '160px', paddingBottom: '8rem', maxWidth: '800px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>
          {dict.about?.title || 'About '}<span style={{ color: 'var(--text-primary)' }}>{dict.about?.titleBrand || 'AARI Work Designs'}</span>
        </h1>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '2rem' }}>
            {dict.about?.p1 || 'The primary aim of this website is to provide Aari work traces.'}
          </p>
          <p style={{ marginBottom: '2rem' }}>
            {dict.about?.p2 || 'We specialize in providing high-quality digital patterns specifically optimized for mobile-to-cloth tracing.'}
          </p>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '4rem', marginBottom: '1.5rem' }}>
            {dict.about?.appExperience || 'The App Experience'}
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            {dict.about?.p3 || 'Our upcoming Android app introduces a revolutionary way to embroider.'}
          </p>
          <p style={{ marginBottom: '2rem' }}>
            {dict.about?.p4 || 'You can even write custom names or text on the app canvas and project them onto your fabric.'}
          </p>
        </div>
      </main>
      <Footer subtext={dict.footer?.defaultSubtext || "Built for excellence."} />
    </>
  );
}
