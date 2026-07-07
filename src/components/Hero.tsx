import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={`${styles.badge} animate-fade-in`}>Web Tracing Tool Now Live</span>
          <h1 className={`${styles.title} animate-fade-in`}>
            Trace Your <span className="text-gradient">Imagination</span> Directly on Cloth
          </h1>
          <p className={`${styles.description} animate-fade-in`}>
            Our full Android app is coming soon, but we couldn't wait to see you create. Our <strong>Web Tracing Studio</strong> is now live—pick any design, lock your screen, and start tracing today.
          </p>
          <ul className={`${styles.features} animate-fade-in`}>
            <li>✨ <strong>Pick & Lock:</strong> Stay focused while tracing</li>
            <li>✍️ <strong>Custom Canvas:</strong> Write names & text to draw</li>
            <li>🎨 <strong>Trace Anywhere:</strong> Mobile-to-cloth precision</li>
          </ul>
          <div className={`${styles.actions} animate-fade-in`}>
            <Link href="/trace" className={styles.primaryBtn}>Start Tracing Now</Link>
            <button className={styles.secondaryBtn}>App Waitlist</button>
          </div>
        </div>
        <div className={`${styles.mockupWrapper} animate-fade-in`}>
          <Image 
            src="/app-mockup.webp" 
            alt="Aari App Mockup" 
            width={500} 
            height={800} 
            className={`${styles.mockup} floating`}
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
            priority
          />
        </div>
      </div>
      <div className={styles.glow} />
    </section>
  );
}

