'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useTranslation } from '@/context/LanguageContext';

export default function ResetPasswordClient() {
  const router = useRouter();
  const { t, locale } = useTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN') {
        setReady(true);
      }
    });

    // The recovery session is restored asynchronously from the URL hash.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    setMessage('');

    if (password.length < 6) {
      setError(t('subscription.passwordTooShort', 'Password must be at least 6 characters.'));
      return;
    }
    if (password !== confirmPassword) {
      setError(t('subscription.passwordsDoNotMatch', 'Passwords do not match'));
      return;
    }

    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage(t('subscription.passwordUpdated', 'Password updated successfully. You can now sign in.'));
    await supabase.auth.signOut();
    setTimeout(() => router.push(`/${locale}`), 1200);
  };

  return (
    <main style={{ minHeight: '80vh', display: 'grid', placeItems: 'center', padding: '2rem', background: 'var(--bg-primary)' }}>
      <section style={{ width: '100%', maxWidth: 460, padding: '2rem', borderRadius: 18, border: '1px solid var(--glass-border)', background: 'rgba(30, 5, 5, 0.92)' }}>
        <h1 style={{ marginBottom: '0.75rem', color: 'var(--text-primary)', textAlign: 'center' }}>
          {t('subscription.resetPassword', 'Reset Password')}
        </h1>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
          {ready ? t('subscription.chooseNewPassword', 'Choose a new password for your account.') : t('subscription.openResetLink', 'Open this page from the password-reset email.')}
        </p>

        {error && <p style={{ marginBottom: '1rem', color: '#f87171', textAlign: 'center' }}>{error}</p>}
        {message && <p style={{ marginBottom: '1rem', color: '#86efac', textAlign: 'center' }}>{message}</p>}

        {ready && !message && (
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-secondary)' }}>
              <Lock size={16} style={{ verticalAlign: 'middle', marginRight: 8 }} />
              {t('subscription.newPassword', 'New Password')}
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                style={{ display: 'block', width: '100%', marginTop: 8, padding: '0.8rem', borderRadius: 8, border: '1px solid var(--glass-border)' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
              {t('subscription.confirmPassword', 'Confirm Password')}
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
                minLength={6}
                style={{ display: 'block', width: '100%', marginTop: 8, padding: '0.8rem', borderRadius: 8, border: '1px solid var(--glass-border)' }}
              />
            </label>
            <button type="submit" disabled={loading} style={{ width: '100%', padding: '0.9rem', border: 0, borderRadius: 8, background: 'var(--accent-gradient)', fontWeight: 700, cursor: 'pointer' }}>
              {loading ? <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> : t('subscription.updatePassword', 'Update Password')}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
