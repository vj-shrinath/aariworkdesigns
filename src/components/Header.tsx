'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Crown, Globe, ChevronDown, Search, User, LogOut, ChevronUp } from 'lucide-react';
import { useSubscription } from '@/context/SubscriptionContext';
import { useTranslation } from '@/context/LanguageContext';
import { locales, localeNames } from '@/lib/i18n';
import { SUBSCRIPTIONS_COMING_SOON } from '@/lib/subscriptionConfig';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  
  const { isSubscribed, openModal, user, logout } = useSubscription();
  const { t, locale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (newLocale: string) => {
    setIsLangOpen(false);
    setIsMenuOpen(false);
    setLangSearch('');
    
    if (!pathname) {
      router.push(`/${newLocale}`);
      return;
    }
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLocale;
      router.push(segments.join('/') || '/');
    } else {
      router.push(`/${newLocale}`);
    }
  };

  const filteredLocales = locales.filter((loc) => 
    localeNames[loc].toLowerCase().includes(langSearch.toLowerCase()) ||
    loc.toLowerCase().includes(langSearch.toLowerCase())
  );

  return (
    <header className={`${styles.header} glass`}>
      <div className={`${styles.container} container`}>
        <Link href={`/${locale}`} className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src="/logo.png" alt="AARI Work Designs Logo" width={32} height={32} style={{ borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ whiteSpace: 'nowrap' }}><span>AARI</span> Work Designs</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Language Switcher Dropdown */}
          <div className={styles.langWrapper} ref={dropdownRef}>
            <button 
              className={styles.langBtn} 
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select Language"
            >
              <Globe size={16} />
              <span className={styles.langName}>{localeNames[locale]}</span>
              <ChevronDown size={12} className={`${styles.chevron} ${isLangOpen ? styles.chevronOpen : ''}`} />
            </button>

            {isLangOpen && (
              <div className={`${styles.langDropdown} glass`}>
                <div className={styles.langSearchBox}>
                  <Search size={14} className={styles.searchIcon} />
                  <input
                    type="text"
                    placeholder={t('header.languageSearch', 'Search language...')}
                    value={langSearch}
                    onChange={(e) => setLangSearch(e.target.value)}
                    className={styles.langInput}
                    autoFocus
                  />
                </div>
                <div className={styles.langList}>
                  {filteredLocales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => changeLanguage(loc)}
                      className={`${styles.langItem} ${loc === locale ? styles.langItemActive : ''}`}
                    >
                      <span className={styles.langNative}>{localeNames[loc]}</span>
                      <span className={styles.langCode}>{loc.toUpperCase()}</span>
                    </button>
                  ))}
                  {filteredLocales.length === 0 && (
                    <div className={styles.noResults}>No matches</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
          </button>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href={`/${locale}`} onClick={() => setIsMenuOpen(false)}>{t('header.home', 'Home')}</Link>
          <Link href={`/${locale}/blog`} onClick={() => setIsMenuOpen(false)}>{t('header.articles', 'Articles')}</Link>
          <Link href={`/${locale}/trace`} onClick={() => setIsMenuOpen(false)}>{t('header.traceTool', 'Trace Tool')}</Link>
          <Link href={`/${locale}/pdf-maker`} onClick={() => setIsMenuOpen(false)}>{t('header.pdfMaker', 'PDF Maker')}</Link>
          <Link href={`/${locale}/gallery`} onClick={() => setIsMenuOpen(false)}>{t('header.gallery', 'Gallery')}</Link>
          <Link href={`/${locale}/about`} onClick={() => setIsMenuOpen(false)}>{t('header.about', 'About')}</Link>
          {user ? (
            <div className={styles.userMenuWrapper} ref={userMenuRef}>
              <button
                className={styles.userMenuBtn}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                aria-label="User menu"
              >
                {isSubscribed ? <Crown size={14} /> : <User size={14} />}
                {isSubscribed ? t('header.premium', 'Premium') : t('header.account', 'Account')}
                <ChevronDown size={12} className={`${styles.chevron} ${isUserMenuOpen ? styles.chevronOpen : ''}`} />
              </button>
              {isUserMenuOpen && (
                <div className={styles.userDropdown}>
                  <div className={styles.userInfo}>
                    <div className={styles.userInfoAvatar}>
                      <User size={20} />
                    </div>
                    <div className={styles.userInfoDetails}>
                      <div className={styles.userInfoEmail}>{user.email}</div>
                      <div className={styles.userInfoPlan}>
                        <Crown size={10} className={styles.userCrown} />
                        {isSubscribed ? t('header.premium', 'Premium') : t('header.freePlan', 'Free plan')}
                      </div>
                    </div>
                  </div>
                  <div className={styles.userDropdownDivider} />
                  {/* Temporarily hidden 
                  {!isSubscribed && (
                    <button
                      className={styles.userDropdownItem}
                      onClick={() => { if (!SUBSCRIPTIONS_COMING_SOON) { setIsUserMenuOpen(false); setIsMenuOpen(false); openModal(); } }}
                      disabled={SUBSCRIPTIONS_COMING_SOON}
                    >
                      <Crown size={16} className={styles.userDropdownItemIcon} />
                      <span>{t('header.upgradePremium', 'Upgrade to Premium')}</span>
                    </button>
                  )}
                  */}
                  <button
                    className={`${styles.userDropdownItem} ${styles.userDropdownItemDanger}`}
                    onClick={async () => { await logout(); setIsUserMenuOpen(false); }}
                  >
                    <LogOut size={16} className={styles.userDropdownItemIcon} />
                    <span>{t('header.logout', 'Log Out')}</span>
                  </button>
                </div>
              )}
            </div>
          ) : isSubscribed ? (
            <span className={styles.cta} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'default', opacity: 0.9 }}>
              <Crown size={14} /> {t('header.premium', 'Premium')}
            </span>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
