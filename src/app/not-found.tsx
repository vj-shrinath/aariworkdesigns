'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, Home } from 'lucide-react';
import './globals.css';

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: 'var(--bg-primary, #0a0a0a)' }}>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {/* Minimal Branded Header */}
          <header style={{
            padding: '1rem 2rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <Image src="/logo.png" alt="Logo" width={32} height={32} style={{ borderRadius: '50%' }} />
            <span style={{ color: '#fff', fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
              <span style={{ color: 'var(--accent, #d4af37)' }}>AARI</span> Work Designs
            </span>
          </header>

          <main style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
          }}>
            <div style={{
              position: 'relative',
              marginBottom: '2rem'
            }}>
              <h1 style={{
                fontSize: '8rem',
                fontWeight: '900',
                lineHeight: 1,
                margin: 0,
                background: 'linear-gradient(135deg, var(--accent, #d4af37), #f9f0ce)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: 0.8
              }}>
                404
              </h1>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--bg-secondary, rgba(20,20,20,0.8))',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                border: '1px solid var(--glass-border, rgba(255,255,255,0.1))',
                color: 'var(--accent, #d4af37)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                Page Not Found
              </div>
            </div>

            <h2 style={{
              fontSize: '2rem',
              fontWeight: 600,
              color: 'var(--text-primary, #fff)',
              marginBottom: '1rem'
            }}>
              Lost in the Threads?
            </h2>
            
            <p style={{
              color: 'var(--text-secondary, #a1a1aa)',
              maxWidth: '500px',
              marginBottom: '3rem',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>
              We couldn't unspool the page you were looking for. It might have been moved, deleted, or the pattern doesn't exist.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <Link href="/en" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'var(--accent, #d4af37)',
                color: '#000',
                fontWeight: 600,
                borderRadius: '99px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                transition: 'transform 0.2s'
              }}>
                <Home size={18} />
                Return Home
              </Link>
              
              <Link href="/en/gallery" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'transparent',
                border: '1px solid var(--accent, #d4af37)',
                color: 'var(--accent, #d4af37)',
                fontWeight: 600,
                borderRadius: '99px',
                textDecoration: 'none',
                transition: 'background 0.2s'
              }}>
                <Search size={18} />
                Browse Designs
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
