import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about AARI Work Designs and how our Android app is revolutionizing the way you trace embroidery patterns.',
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container" style={{ paddingTop: '160px', paddingBottom: '8rem', maxWidth: '800px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '2rem' }}>
          About <span style={{ color: 'var(--text-primary)' }}>AARI Work Designs</span>
        </h1>
        <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
          <p style={{ marginBottom: '2rem' }}>
            The primary aim of this website is to provide all types of **Aari work traces** which can be effortlessly drawn through the **Aari Android App**. 
          </p>
          <p style={{ marginBottom: '2rem' }}>
            We specialize in providing high-quality digital patterns specifically optimized for mobile-to-cloth tracing. Whether you are looking for intricate bridal necklines or simple floral borders, our traces are designed to be used with our unique app interface.
          </p>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginTop: '4rem', marginBottom: '1.5rem' }}>The App Experience</h2>
          <p style={{ marginBottom: '2rem' }}>
            Our upcoming Android app introduces a revolutionary way to embroider. By selecting a design from our blog and using the app's **Lock Interface** feature, you can place your phone directly under your cloth and trace with pinpoint accuracy.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            You can even write custom names or text on the app's canvas and project them onto your fabric, making personalization easier than ever before.
          </p>
        </div>

      </main>
      <Footer subtext="Built for excellence." />
    </>
  );
}
