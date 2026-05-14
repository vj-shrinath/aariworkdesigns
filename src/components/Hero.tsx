import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <span className={`${styles.badge} animate-fade-in`}>Coming Soon to Android</span>
          <h1 className={`${styles.title} animate-fade-in`}>
            Trace Your <span className="text-gradient">Imagination</span> Directly on Cloth
          </h1>
          <p className={`${styles.description} animate-fade-in`}>
            The Aari Android App is coming soon. Pick any design, lock your interface, and trace directly over your mobile screen onto the fabric. 
          </p>
          <ul className={`${styles.features} animate-fade-in`}>
            <li>✨ <strong>Pick & Lock:</strong> Stay focused while tracing</li>
            <li>✍️ <strong>Custom Canvas:</strong> Write names & text to draw</li>
            <li>🎨 <strong>Trace Anywhere:</strong> Mobile-to-cloth precision</li>
          </ul>
          <div className={`${styles.actions} animate-fade-in`}>
            <button className={styles.primaryBtn}>Notify Me</button>
            <button className={styles.secondaryBtn}>See Traces</button>
          </div>
        </div>
        <div className={`${styles.mockupWrapper} animate-fade-in`}>
          <Image 
            src="/app-mockup.png" 
            alt="Aari App Mockup" 
            width={500} 
            height={800} 
            className={styles.mockup}
            priority
          />
        </div>
      </div>
      <div className={styles.glow} />
    </section>
  );
}

