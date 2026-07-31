'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, XCircle, Loader2, Crown, ArrowRight } from 'lucide-react';
import { useSubscription } from '@/context/SubscriptionContext';
import { useTranslation } from '@/context/LanguageContext';
import type { Locale } from '@/lib/i18n';

type Status = 'loading' | 'success' | 'failed';

function PaymentStatusContent({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const { setSubscriptionStatus, checkSubscription, openModal } = useSubscription();
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>('loading');
  const [message, setMessage] = useState('');
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const orderId = searchParams ? searchParams.get('order_id') : null;
    const mockStatus = searchParams ? searchParams.get('status') : null;
    const email = searchParams ? searchParams.get('email') : null;
    const userId = searchParams ? searchParams.get('user_id') : null;
    setOrderId(orderId || '');

    if (!orderId) {
      setStatus('failed');
      setMessage(t('paymentStatus.noOrder', 'No order information found.'));
      return;
    }

    // Mock mode: verify via API to persist subscription to database
    if (mockStatus === 'PAID' && orderId.startsWith('mock_')) {
      (async () => {
        try {
          const verifyUrl = `/api/cashfree/verify-payment?order_id=${orderId}${userId ? `&user_id=${userId}` : ''}`;
          const res = await fetch(verifyUrl);
          const data = await res.json();

          if (data.success) {
            setSubscriptionStatus(true, data.customerEmail || email || '');
            if (userId && (data.customerEmail || email)) {
              await checkSubscription(userId, data.customerEmail || email || '');
            }
            setStatus('success');
            setMessage(t('paymentStatus.premiumActivated', 'Premium activated successfully!'));
          } else {
            setStatus('failed');
            setMessage(data.error || t('paymentStatus.mockFailed', 'Mock payment verification failed.'));
          }
        } catch (err) {
          console.error('Mock verification failed:', err);
          setStatus('failed');
          setMessage(t('paymentStatus.connectionError', 'Could not verify payment. Please check your internet connection.'));
        }
      })();
      return;
    }

    // Real verification via API
    const verify = async () => {
      try {
        const verifyUrl = `/api/cashfree/verify-payment?order_id=${orderId}${userId ? `&user_id=${userId}` : ''}`;
        const res = await fetch(verifyUrl);
        const data = await res.json();

        if (data.success) {
          setSubscriptionStatus(true, data.customerEmail || email || '');
          if (userId && (data.customerEmail || email)) {
            await checkSubscription(userId, data.customerEmail || email || '');
          }
          setStatus('success');
          setMessage(t('paymentStatus.paymentVerified', 'Payment verified! Premium features are now unlocked.'));
        } else {
          setStatus('failed');
          setMessage(data.error || `Payment status: ${data.status || 'PENDING'}. Please try again or contact support.`);
        }
      } catch (err) {
        console.error('Verification fetch failed:', err);
        setStatus('failed');
        setMessage(t('paymentStatus.connectionError', 'Could not verify payment. Please check your internet connection.'));
      }
    };

    verify();
  }, [searchParams, setSubscriptionStatus, checkSubscription, t]);

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
        background: 'linear-gradient(145deg, rgba(45, 5, 5, 0.85) 0%, rgba(15, 2, 2, 0.95) 100%)',
        border: '1px solid var(--glass-border)',
        borderRadius: '20px',
        padding: '3rem 2rem',
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
        animation: 'fadeIn 0.5s ease-out',
      }}>
        {status === 'loading' && (
          <>
            <Loader2 size={56} style={{ color: 'var(--accent)', animation: 'spin 1s linear infinite', marginBottom: '1.5rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {t('paymentStatus.verifying', 'Verifying Payment...')}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {t('paymentStatus.pleaseWait', 'Please wait while we confirm your transaction.')}
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'rgba(34, 197, 94, 0.1)', border: '2px solid rgba(34, 197, 94, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <CheckCircle size={40} style={{ color: '#22c55e' }} />
            </div>
            <Crown size={28} style={{ color: 'var(--accent)', marginBottom: '0.5rem', marginLeft: 'auto', marginRight: 'auto' }} />
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {t('paymentStatus.welcomePremium', 'Welcome to ')}<span className="text-gradient">{t('paymentStatus.premiumHighlight', 'Premium!')}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              {message}
            </p>
            {orderId && <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Order ID: <strong>{orderId}</strong><br />A confirmation email is sent to the payment email when available. Your digital access is available from the account area.</p>}
            <Link href={`/${locale}/pdf-maker`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem',
              background: 'var(--accent-gradient)',
              color: 'var(--bg-primary)',
              borderRadius: '10px',
              fontWeight: 800, fontSize: '1rem',
              textDecoration: 'none',
              transition: 'var(--transition)',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
              marginLeft: 'auto', marginRight: 'auto',
            }}>
              {t('paymentStatus.startCreating', 'Start Creating')} <ArrowRight size={16} />
            </Link>
          </>
        )}

        {status === 'failed' && (
          <>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <XCircle size={40} style={{ color: '#ef4444' }} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {t('paymentStatus.cannotVerify', 'Payment Could Not Be Verified')}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              {message}
            </p>
            <Link href={`/${locale}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              borderRadius: '10px',
              fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'var(--transition)',
              marginLeft: 'auto', marginRight: 'auto',
            }}>
              {t('paymentStatus.returnHome', 'Return Home')}
            </Link>
            <button type="button" onClick={openModal} style={{ marginTop: '1rem', display: 'inline-flex', padding: '.75rem 1.25rem', borderRadius: 8, border: '1px solid var(--glass-border)', background: 'transparent', color: 'var(--accent)', cursor: 'pointer', fontWeight: 700 }}>Retry payment</button>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '.85rem' }}>Need help? <a href={`/${locale}/support`} style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Contact support</a> or retry checkout.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default function PaymentStatusClient({ locale }: { locale: Locale }) {
  return (
    <>
      <Suspense fallback={
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-primary)',
          color: 'var(--text-secondary)'
        }}>
          <Loader2 size={40} style={{ animation: 'spin 1s linear infinite' }} />
        </div>
      }>
        <PaymentStatusContent locale={locale} />
      </Suspense>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
