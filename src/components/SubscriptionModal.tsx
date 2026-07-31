'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Crown, Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useSubscription } from '@/context/SubscriptionContext';
import styles from './SubscriptionModal.module.css';
import { useTranslation } from '@/context/LanguageContext';
import { supabase } from '@/lib/supabase';

// Programmatically load Cashfree SDK from CDN
const loadCashfree = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    if ((window as any).Cashfree) {
      resolve((window as any).Cashfree);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).Cashfree) {
        resolve((window as any).Cashfree);
      } else {
        reject(new Error('Cashfree SDK loaded, but window.Cashfree wrapper not found'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load Cashfree script'));
    document.body.appendChild(script);
  });
};

export default function SubscriptionModal() {
  const { t, locale } = useTranslation();
  const { isModalOpen, closeModal, isSubscribed, user } = useSubscription();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [authMessageType, setAuthMessageType] = useState<'success' | 'error'>('error');
  
  // Auth states
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'reset'>('signin');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Pre-fill local storage items if buyer bought before or filled info
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setName(localStorage.getItem('aari_saved_name') || '');
      setEmail(localStorage.getItem('aari_saved_email') || '');
      setPhone(localStorage.getItem('aari_saved_phone') || '');
    }
  }, [isModalOpen]);

  // Pre-fill email from logged-in user
  useEffect(() => {
    if (user?.email && !authEmail) {
      setAuthEmail(user.email);
      setEmail(user.email);
    }
  }, [user, authEmail]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail || (authMode !== 'reset' && !authPassword)) {
      setAuthMessageType('error');
      setAuthMessage(t('subscription.fillAllDetails', 'Please fill in all fields'));
      return;
    }
    if (authMode === 'signup' && authPassword !== confirmPassword) {
      setAuthMessageType('error');
      setAuthMessage(t('subscription.passwordsDoNotMatch', 'Passwords do not match'));
      return;
    }
    setAuthLoading(true);
    setAuthMessage('');

    try {
      if (authMode === 'reset') {
        const { error } = await supabase.auth.resetPasswordForEmail(authEmail.trim().toLowerCase(), {
          redirectTo: `${window.location.origin}/${locale}/reset-password`,
        });
        if (error) throw error;
        setAuthMode('signin');
        setAuthMessageType('success');
        setAuthMessage(t('subscription.resetEmailSent', 'If an account exists for this email, a password reset link has been sent.'));
      } else if (authMode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email: authEmail.trim().toLowerCase(),
          password: authPassword,
        });
        if (error) throw error;
        setAuthPassword('');
        setConfirmPassword('');
        setAuthMode('signin');
        setAuthMessageType('success');
        setAuthMessage(t('subscription.checkEmail', 'Account created. Check your email to confirm your account, then sign in.'));
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: authEmail.trim().toLowerCase(),
          password: authPassword,
        });
        if (error) throw error;
        // onAuthStateChange in SubscriptionContext will handle the rest
      }
    } catch (err: any) {
      const rawMessage = String(err?.message || '');
      const message = /email.*rate limit|rate limit.*email|too many requests/i.test(rawMessage)
        ? t(
            'subscription.emailRateLimit',
            'Confirmation emails are temporarily rate-limited by Supabase. Please wait before trying again, then use Sign In after confirming your email.'
          )
        : rawMessage || t('subscription.authFailed', 'Authentication failed');
      setAuthMessageType('error');
      setAuthMessage(message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setErrorMsg(t('subscription.fillAllDetails', 'Please fill in all customer details'));
      return;
    }
    // Simple phone validator (10 digits minimum)
    if (phone.replace(/\D/g, '').length < 10) {
      setErrorMsg(t('subscription.validPhone', 'Please enter a valid 10-digit phone number'));
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      // 1. Create order on Cashfree via our backend API
      const res = await fetch('/api/cashfree/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan,
          customerName: name,
          customerEmail: email,
          customerPhone: phone.replace(/\D/g, ''),
          userId: user?.id,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to create order');
      }

      const { paymentSessionId, orderId, mockRedirectUrl } = await res.json();

      // Save buyer info to prefill in case they retry
      localStorage.setItem('aari_saved_name', name);
      localStorage.setItem('aari_saved_email', email);
      localStorage.setItem('aari_saved_phone', phone);

      if (mockRedirectUrl) {
        window.location.href = mockRedirectUrl;
        return;
      }

      // 2. Load Cashfree client SDK
      const CashfreeSDK = await loadCashfree();

      // 3. Initialize Cashfree on front-end
      const cfEnv = process.env.NEXT_PUBLIC_CASHFREE_ENV === 'production' ? 'production' : 'sandbox';
      const cashfree = new CashfreeSDK({ mode: cfEnv });

      // 4. Trigger Checkout
      await cashfree.checkout({
        paymentSessionId: paymentSessionId,
        redirectTarget: '_self', 
      });

    } catch (err: any) {
      console.error('Payment checkout exception:', err);
      setErrorMsg(err.message || t('subscription.failedPayment', 'Payment initiation failed. Please try again.'));
      setLoading(false);
    }
  };

  if (!isModalOpen || isSubscribed) return null;

  // If user is not logged in, show auth form
  if (!user) {
    return (
      <div className={styles.backdrop} onClick={closeModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className={styles.header}>
            <Crown className="text-gradient" size={32} style={{ marginBottom: '0.5rem' }} />
            <h2 className={`${styles.title} text-gradient`}>{t('subscription.premiumTitle', 'Aari Premium')}</h2>
            <p className={styles.subtitle}>{t('subscription.premiumSubtitle', 'Unlock unlimited capabilities and professional designs')}</p>
          </div>

          {authMessage && (
            <div style={{
              background: authMessageType === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${authMessageType === 'success' ? 'rgba(34, 197, 94, 0.25)' : 'rgba(239, 68, 68, 0.2)'}`,
              color: authMessageType === 'success' ? '#86efac' : '#f87171',
              borderRadius: '8px', padding: '0.75rem', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center'
            }}>
              {authMessage}
            </div>
          )}

          <form onSubmit={handleAuth}>
            {/* Auth Mode Toggle */}
            <div className={styles.authToggle}>
              {authMode !== 'reset' && (
                <>
                  <button
                    type="button"
                    className={`${styles.authToggleBtn} ${authMode === 'signin' ? styles.authToggleBtnActive : ''}`}
                    onClick={() => { setAuthMode('signin'); setAuthMessage(''); }}
                  >
                    {t('subscription.signIn', 'Sign In')}
                  </button>
                  <button
                    type="button"
                    className={`${styles.authToggleBtn} ${authMode === 'signup' ? styles.authToggleBtnActive : ''}`}
                    onClick={() => { setAuthMode('signup'); setAuthMessage(''); }}
                  >
                    {t('subscription.signUp', 'Sign Up')}
                  </button>
                </>
              )}
            </div>

            <div className={styles.authForm}>
              <div className={styles.inputGroup}>
                <div className={styles.inputWithIcon}>
                  <Mail size={18} className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder={t('subscription.emailAddress', 'Email Address')}
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className={styles.inputField}
                    required
                    disabled={authLoading}
                  />
                </div>
                {authMode !== 'reset' && <div className={styles.inputWithIcon}>
                  <Lock size={18} className={styles.inputIcon} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('subscription.password', 'Password')}
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className={styles.inputField}
                    required
                    disabled={authLoading}
                  />
                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? t('subscription.hidePassword', 'Hide password') : t('subscription.showPassword', 'Show password')}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>}
                {authMode === 'signup' && (
                  <div className={styles.inputWithIcon}>
                    <Lock size={18} className={styles.inputIcon} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('subscription.confirmPassword', 'Confirm Password')}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={styles.inputField}
                      required
                      disabled={authLoading}
                    />
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className={styles.payButton}
              disabled={authLoading}
            >
              {authLoading ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  <span>{authMode === 'signup' ? t('subscription.creatingAccount', 'Creating Account...') : authMode === 'reset' ? t('subscription.sendingResetEmail', 'Sending reset email...') : t('subscription.signingIn', 'Signing In...')}</span>
                </>
              ) : (
                <>
                  {authMode === 'signup' ? <User size={18} /> : <ShieldCheck size={18} />}
                  <span>{authMode === 'signup' ? t('subscription.createAccount', 'Create Account') : authMode === 'reset' ? t('subscription.sendResetEmail', 'Send Reset Email') : t('subscription.signIn', 'Sign In')}</span>
                </>
              )}
            </button>
          </form>

          {authMode === 'signin' && (
            <button
              type="button"
              className={styles.forgotPassword}
              onClick={() => { setAuthMode('reset'); setAuthMessage(''); }}
            >
              {t('subscription.forgotPassword', 'Forgot password?')}
            </button>
          )}
          {authMode === 'reset' && (
            <button
              type="button"
              className={styles.forgotPassword}
              onClick={() => { setAuthMode('signin'); setAuthMessage(''); }}
            >
              {t('subscription.backToSignIn', 'Back to Sign In')}
            </button>
          )}

          <p className={styles.footerNotes}>
            {t('subscription.secureFootnote', 'Protected by Cashfree end-to-end 256-bit SSL encryption. All transactions are securely processed in INR.')}
          </p>
        </div>
      </div>
    );
  }

  // User is logged in - show payment form
  return (
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className={styles.header}>
          <Crown className="text-gradient" size={32} style={{ marginBottom: '0.5rem' }} />
          <h2 className={`${styles.title} text-gradient`}>{t('subscription.premiumTitle', 'Aari Premium')}</h2>
          <p className={styles.subtitle}>{t('subscription.premiumSubtitle', 'Unlock unlimited capabilities and professional designs')}</p>
        </div>

        {errorMsg && (
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#f87171', borderRadius: '8px', padding: '0.75rem', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleCheckout}>
            {/* Monthly Plan */}
            <div 
              className={`${styles.planCard} ${selectedPlan === 'monthly' ? styles.planCardActive : ''}`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <div className={styles.planName}>{t('subscription.monthlyPlanName', 'Monthly Basic')}</div>
              <div className={styles.planPrice}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>99</span>
                <span className={styles.period}>{t('subscription.monthlyPricePeriod', '/month')}</span>
              </div>
              <ul className={styles.planFeatures}>
                <li>{t('subscription.featureNoWatermarks', 'No watermarks')}</li>
                <li>{t('subscription.featureMaxImages', 'Limit: 100 images/PDF')}</li>
                <li>{t('subscription.featureCancelAnytime', 'Cancel anytime')}</li>
              </ul>
            </div>

            {/* Annual Plan (Best Value) */}
            <div 
              className={`${styles.planCard} ${selectedPlan === 'yearly' ? styles.planCardActive : ''}`}
              onClick={() => setSelectedPlan('yearly')}
            >
              <span className={styles.planBadge}>{t('subscription.saveBadge', 'Save 60%')}</span>
              <div className={styles.planName}>{t('subscription.yearlyPlanName', 'Annual VIP')}</div>
              <div className={styles.planPrice}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>499</span>
                <span className={styles.period}>{t('subscription.yearlyPricePeriod', '/year')}</span>
              </div>
              <ul className={styles.planFeatures}>
                <li>{t('subscription.featureNoWatermarks', 'No watermarks')}</li>
                <li>{t('subscription.featureMaxImages', 'Limit: 100 images/PDF')}</li>
                <li>{t('subscription.featureUnlimitedCatalogs', 'Unlimited catalogs')}</li>
                <li>{t('subscription.featurePrioritySupport', 'First-tier priority support')}</li>
              </ul>
</div>

            {/* Customer Details Form */}
          <div className={styles.formSection}>
            <h3 className={styles.formTitle}>{t('subscription.contactDetails', 'Contact Details')}</h3>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder={t('subscription.fullName', 'Full Name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.inputField}
                required
                disabled={loading}
              />
              <input
                type="email"
                placeholder={t('subscription.emailAddress', 'Email Address')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
                disabled={loading}
              />
              <input
                type="tel"
                placeholder={t('subscription.mobileNumber', 'Mobile Number (e.g. 9988776655)')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.inputField}
                required
                disabled={loading}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={styles.payButton}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner} />
                <span>{t('subscription.redirectingSecurely', 'Redirecting Securely...')}</span>
              </>
            ) : (
              <>
                <ShieldCheck size={18} />
                <span>{t('subscription.payViaCashfree', 'Pay ₹{amount} via Cashfree').replace('{amount}', selectedPlan === 'monthly' ? '99' : '499')}</span>
              </>
            )}
          </button>
        </form>

        <p className={styles.footerNotes}>
          {t('subscription.secureFootnote', 'Protected by Cashfree end-to-end 256-bit SSL encryption. All transactions are securely processed in INR.')}
        </p>
      </div>
    </div>
  );
}
