import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Home, Map } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--bg-primary, #0a0a0a)'
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
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            background: 'var(--accent, #d4af37)',
            color: '#000',
            fontWeight: 600,
            borderRadius: '99px',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <Home size={18} />
            Return Home
          </Link>
          
          <Link href="/en/gallery" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
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
      </div>
      <Footer subtext="Crafted for the curious." />
    </>
  );
}
