'use client';

import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import styles from './TelegramPopup.module.css';

export default function TelegramPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const hasSeenPopup = localStorage.getItem('hasSeenTelegramPopup');
    const hasJoined = localStorage.getItem('hasJoinedTelegram');

    if (hasJoined || hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenTelegramPopup', 'true');
  };

  const handleJoin = () => {
    setIsVisible(false);
    localStorage.setItem('hasJoinedTelegram', 'true');
    window.open('https://t.me/aariworkdesigns', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      role="dialog"
      aria-label="Telegram Channel Invitation"
      className={styles.popupOverlay}
    >
      <div className={styles.iconWrapper}>
        <div className={styles.iconCircle}>
          <Send size={22} color="#fff" style={{ marginLeft: '-2px' }} />
        </div>
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>Get New Aari Designs Instant!</h4>
        <p className={styles.text}>Join 10,000+ artisans on Telegram for daily pattern updates.</p>
        <button onClick={handleJoin} className={styles.joinBtn}>
          Join Telegram Channel
        </button>
      </div>

      <button onClick={handleClose} aria-label="Close popup" className={styles.closeBtn}>
        <X size={14} />
      </button>
    </div>
  );
}
