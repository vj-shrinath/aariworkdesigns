import React from 'react';
import AdminPdfMarketplace from '@/components/admin/AdminPdfMarketplace';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin PDF Marketplace Portal | Aari Work Designs',
  robots: 'noindex, nofollow',
};

export default function AdminPdfMarketplacePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0F0C1B' }}>
      <Header />
      <div style={{ paddingTop: '5rem' }}>
        <AdminPdfMarketplace />
      </div>
      <Footer />
    </main>
  );
}
