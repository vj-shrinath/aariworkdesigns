/**
 * TraceSEOContent.tsx
 *
 * SEO-optimised content section rendered BELOW the TraceTool UI.
 * Covers Sections 2–9 as specified:
 *   2  – H1 intro
 *   3  – What is an Aari Tracing Tool?
 *   4  – How to Trace Aari Designs (step-by-step)
 *   5  – Benefits grid
 *   6  – Best designs to trace
 *   7  – Tips for better tracing
 *   8  – FAQ (with JSON-LD schema)
 *   9  – Internal links
 *
 * Target keywords:
 *   Primary  → aari tool
 *   Secondary → aari tracing tool, online aari tracing tool,
 *               blouse tracing, embroidery tracing tool, etc.
 */

import Link from 'next/link';
import Image from 'next/image';
import styles from './TraceSEOContent.module.css';

/* ========================================================
   FAQ DATA — also used to build JSON-LD FAQPage schema
   ======================================================== */
const faqs = [
  {
    question: 'What is an Aari tool?',
    answer:
      'An Aari tool is any instrument or resource used to create and transfer Aari embroidery designs onto fabric. Traditionally this meant needles, carbon paper, and tracing sheets. Our free online Aari tool replaces all of that — you simply upload your design to your mobile screen, place the fabric over it, and trace directly with your Aari needle or washable marker. No printing, no carbon paper, no mess.',
  },
  {
    question: 'Can I trace embroidery designs using mobile, tablet, or desktop?',
    answer:
      'Yes! That is exactly what this tool is built for. Open the Aari tracing tool on your smartphone, tablet, or desktop screen, upload any embroidery design, crank up the screen brightness, and place your thin fabric on top of the screen. The design shines through clearly, letting you trace every detail accurately. It works best with chiffon, georgette, or net fabric.',
  },
  {
    question: 'How do beginners trace Aari designs?',
    answer:
      'Beginners should start with simple floral or border patterns. Open the online Aari tracing tool, upload a beginner-friendly design, adjust brightness to maximum, secure the fabric with tape or a clip so it does not shift, and trace gently with a washable fabric marker. Once traced, remove the fabric and begin your Aari embroidery work. Practice on small patches first before moving to full blouses.',
  },
  {
    question: 'Is this Aari tracing tool free?',
    answer:
      'Yes — completely free, with no sign-up or download required. Simply visit aariworkdesigns.com/trace on any smartphone or computer, upload your design, and start tracing. You can also browse our curated collection of Aari designs and use them directly in the tool without downloading anything.',
  },
  {
    question: 'Can I use the tool for blouse designs?',
    answer:
      'Absolutely. Blouse tracing is one of the most popular uses of this tool. You can trace neck designs, sleeve patterns, back-yoke embroidery, and border layouts directly onto blouse fabric. Upload your blouse design image, fit it to size using the zoom slider, and trace it onto georgette or silk fabric placed over the screen.',
  },
  {
    question: 'Does the tracing tool work on all phones?',
    answer:
      'This online Aari tool works on any modern smartphone — Android or iPhone — using just the browser. No app installation is needed. For the best experience, use a phone with a bright, large screen (5.5 inches or above). The tool also supports tablet screens, which are ideal for tracing larger bridal or full-blouse embroidery designs.',
  },
];

/* ========================================================
   BENEFIT CARDS DATA
   ======================================================== */
const benefits = [
  {
    emoji: '⚡',
    title: 'Saves Time',
    desc: 'Skip the hours spent printing, cutting, and pricking designs with carbon paper. Upload your pattern and start tracing within seconds. What once took 30+ minutes now takes under 5.',
  },
  {
    emoji: '🎯',
    title: 'Accurate Tracing',
    desc: 'The high-resolution screen gives you crisp, clean lines to trace over. Zoom in on intricate details like kundan layouts or peacock feathers to trace them with needle-perfect accuracy.',
  },
  {
    emoji: '🖨️',
    title: 'No Printing Required',
    desc: 'Forget printers, ink costs, and paper waste. Your mobile screen is the tracing board. Any design — saved on your phone or uploaded from the web — can be used instantly.',
  },
  {
    emoji: '📱',
    title: 'Works on Mobile',
    desc: 'Designed mobile-first. Pinch to zoom, drag to reposition, rotate with two fingers — the entire tool is built for touch-screen interaction, right from your phone.',
  },
  {
    emoji: '🌸',
    title: 'Ideal for Beginners',
    desc: 'No experience needed. The tool is straightforward enough for someone tracing their very first Aari blouse design. Clear controls, simple sliders, and one-tap fullscreen mode make it beginner-friendly.',
  },
  {
    emoji: '♻️',
    title: 'Reusable Tracing Method',
    desc: 'Use the same design again and again across multiple blouses or fabric pieces without reprinting. Simply reopen the design and trace it as many times as you need.',
  },
];

/* ========================================================
   DESIGN CATEGORIES DATA
   ======================================================== */
const categories = [
  {
    emoji: '🪡',
    title: 'Blouse Neck Designs',
    desc: 'Round necks, V-necks, sweetheart cuts, and boat necks — all popular choices for Aari embroidery. Trace intricate neckline patterns onto silk or georgette fabric.',
  },
  {
    emoji: '🌺',
    title: 'Sleeve Designs',
    desc: 'Half-sleeve, elbow-length, and full-sleeve Aari embroidery patterns. Perfectly complement your blouse with matching sleeve work.',
  },
  {
    emoji: '👰',
    title: 'Bridal Embroidery',
    desc: 'Heavy bridal Aari designs for lehenga blouses and saree blouses. Ideal for weddings with rich zardozi-style motifs and full coverage patterns.',
  },
  {
    emoji: '🌸',
    title: 'Floral Patterns',
    desc: 'Classic rose, jasmine, lotus, and marigold motifs. Floral Aari designs are timeless for casual and festive wear alike.',
  },
  {
    emoji: '🦚',
    title: 'Peacock Motifs',
    desc: 'The peacock is a signature motif in South Indian embroidery. Trace detailed peacock designs perfect for silk saree blouses and lehenga work.',
  },
  {
    emoji: '🥭',
    title: 'Mango (Paisley) Motifs',
    desc: 'Traditional mango or paisley motifs used widely in Aari and Maggam work. Great for saree borders and blouse sleeves.',
  },
  {
    emoji: '〰️',
    title: 'Border Designs',
    desc: 'Running border patterns for dupatta edges, saree borders, and blouse hem lines. Easy to repeat and trace along straight edges.',
  },
  {
    emoji: '💎',
    title: 'Kundan Layouts',
    desc: 'Pre-plan the placement of kundan stones with precise layout tracing before you start the beadwork. Essential for boutique-quality finishes.',
  },
];

/* ========================================================
   TIPS DATA
   ======================================================== */
const tips = [
  {
    title: 'Maximise Screen Brightness',
    body:
      'Before you start, turn your phone brightness to 100%. Go to Settings → Display and disable adaptive brightness. A brighter screen means the design shines through the fabric more clearly.',
  },
  {
    title: 'Use Thin, Light-Coloured Fabric',
    body:
      'Chiffon, georgette, net, and silk organza work best. Light-coloured or white fabrics transmit more screen light, making the design easier to trace. Avoid thick cotton or dark-coloured fabric.',
  },
  {
    title: 'Tape the Fabric Securely',
    body:
      'Use low-tack masking tape or fabric clips to hold the fabric flat on the screen. Even a small shift can misalign your traced design. Lock the image on screen before placing the fabric.',
  },
  {
    title: 'Use a Washable Fabric Marker',
    body:
      'Choose an air-erasable or water-soluble fabric pen so that any stray marks disappear after washing. Avoid permanent markers — they cannot be corrected if you make a mistake.',
  },
  {
    title: 'Zoom In Before Tracing Details',
    body:
      'Use the size slider or pinch-to-zoom to enlarge the design before tracing fine details like peacock feathers or paisley outlines. Tracing at a larger size reduces errors on intricate work.',
  },
  {
    title: 'Work in a Dimly Lit Room',
    body:
      'Ambient light reduces contrast. Work in a dim room or shade your workspace so the screen glow stands out strongly. This is especially helpful when tracing on slightly thicker fabrics.',
  },
];

/* ========================================================
   COMPONENT
   ======================================================== */
export default function TraceSEOContent() {
  // Build JSON-LD FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.seoWrapper}>
        {/* ───── DIVIDER ───── */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ══════════════════════════════════════════════
            SECTION 2 — H1 Introduction
            ══════════════════════════════════════════════ */}
        <section
          className={`${styles.heroSection} ${styles.section}`}
          aria-labelledby="trace-tool-h1"
        >
          <div className={styles.container}>
            <div className={styles.badge}>✦ Free Online Tool</div>

            <h1 id="trace-tool-h1" className={styles.h1}>
              Free{' '}
              <span className="text-gradient">Aari Tool</span>{' '}
              for Tracing Embroidery Designs Online
            </h1>

            <p className={styles.introPara}>
              Whether you are just starting out with Aari embroidery or running a boutique,
              our free online <strong>Aari tool</strong> makes design tracing faster and
              more accurate than ever before. No printing. No carbon paper. No special
              equipment. Just open this page on your mobile phone, upload any embroidery
              design — a blouse neck pattern, a peacock motif, a bridal layout — and place
              your fabric directly on the screen. The screen light shines through the fabric,
              giving you a crisp outline to trace with your washable marker or Aari needle.
            </p>

            <p className={styles.introPara}>
              This <strong>online Aari tracing tool</strong> is built with beginners in mind.
              You get full control over brightness, contrast, zoom, and rotation — all with
              simple sliders and touch gestures. Tap the fullscreen button to lock your design
              on screen and start tracing without accidentally closing the app. It works on
              any Android or iPhone browser, and it is completely free to use — no sign-up,
              no download, no hassle.
            </p>

            <a href="#trace-tool-top" className={styles.ctaBtnPrimary} id="cta-try-tool-intro">
              ↑ Try the Tracing Tool Now
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — What is an Aari Tracing Tool?
            ══════════════════════════════════════════════ */}
        <section
          className={styles.section}
          aria-labelledby="what-is-aari-tracing-tool"
        >
          <div className={styles.container}>
            <div className={styles.twoCol}>
              {/* Left — text */}
              <div>
                <h2 id="what-is-aari-tracing-tool" className={styles.sectionHeading}>
                  What is an{' '}
                  <span className={`text-gradient ${styles.accentUnderline}`}>
                    Aari Tracing Tool?
                  </span>
                </h2>

                <p className={styles.sectionPara}>
                  Traditionally, embroiderers transferred designs onto fabric using{' '}
                  <strong>carbon tracing paper</strong>, pricking tools, and chalk. The
                  process was messy, time-consuming, and the designs could only be used once.
                  A digital <strong>Aari tracing tool</strong> replaces all of that with
                  your smartphone screen.
                </p>

                <p className={styles.sectionPara}>
                  The concept is simple: your phone screen is bright enough to backlight a
                  design image. When you place thin fabric over the screen, the light passes
                  through and the design outline is visible on the fabric surface. You trace
                  the outline with a washable fabric marker, remove the fabric, and your
                  design is ready for Aari embroidery — perfectly proportioned and accurately
                  placed.
                </p>

                <p className={styles.sectionPara}>
                  Unlike carbon paper, <strong>screen tracing</strong> is reusable, adjustable,
                  and works with any design you can upload. You can resize the design to match
                  your exact blouse measurements, rotate it to fit sleeve angles, and adjust
                  brightness and contrast to maximise visibility through the fabric.
                </p>
              </div>

              {/* Right — feature list */}
              <div>
                <p className={styles.sectionPara} style={{ marginBottom: '0.5rem' }}>
                  Key features of this <strong>online Aari tracing tool</strong>:
                </p>
                <ul className={styles.featureList} role="list">
                  {[
                    [
                      'Mobile screen tracing',
                      'Use your smartphone as a backlit tracing board — no lightbox needed.',
                    ],
                    [
                      'Size adjustment',
                      'Resize the design to match your exact blouse or sleeve measurements using the zoom slider.',
                    ],
                    [
                      'Easy visibility',
                      'Brightness and contrast sliders boost design visibility through different fabric types.',
                    ],
                    [
                      'Beginner friendly',
                      'Simple one-tap controls. No design experience or technical knowledge required.',
                    ],
                    [
                      'Reusable designs',
                      'Upload a design once and trace it across multiple fabric pieces without reprinting.',
                    ],
                    [
                      'Works offline',
                      'Once the design is loaded, tracing works even without an active internet connection.',
                    ],
                  ].map(([title, desc]) => (
                    <li key={title} className={styles.featureItem}>
                      <span className={styles.featureIcon} aria-hidden="true">✓</span>
                      <span>
                        <strong style={{ color: 'var(--text-primary)' }}>{title}:</strong>{' '}
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* tracing tutorial image */}
            <div className={styles.imageWrapper}>
              <Image 
                src="/seo-images/mobile_screen_demo.png" 
                alt="Aari tracing tool mobile screen demo"
                fill
                className={styles.seoImage}
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — How to Trace (Step-by-Step)
            ══════════════════════════════════════════════ */}
        <section
          className={styles.section}
          aria-labelledby="how-to-trace-aari-designs"
          style={{ background: 'radial-gradient(ellipse at bottom right, rgba(45,5,5,0.35) 0%, transparent 60%)' }}
        >
          <div className={styles.container}>
            <h2 id="how-to-trace-aari-designs" className={styles.sectionHeading}>
              Online Aari Tracing Tool for{' '}
              <span className="text-gradient">Mobile, Tablet, and Desktop</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Follow these six simple steps to trace any embroidery design onto your fabric
              using your device — no special tools required.
            </p>

            <div className={styles.disclaimerBox}>
              <strong>⚠️ Disclaimer:</strong> This tracing tool is designed for use on mobile phones, tablets, laptops, and desktop screens. To avoid accidental screen damage, use gentle pressure and avoid sharp tracing instruments directly on the display surface.
            </div>

            <ol className={styles.stepsGrid} aria-label="Step-by-step tracing tutorial">
              {[
                {
                  title: 'Open the Tracing Tool',
                  body: 'Visit aariworkdesigns.com/trace on your mobile browser. The tool loads instantly — no app download, no sign-up needed. Scroll up to find the tracing studio at the top of this page. Make sure your phone screen is clean and free of smudges for the clearest display.',
                },
                {
                  title: 'Upload Your Embroidery Design',
                  body: 'Tap "Upload Your Own Design" to select an image from your phone gallery. You can use any image — a downloaded Aari pattern, a blouse neck design, a peacock motif, or any embroidery outline. Alternatively, tap any design from our curated collection to open it directly in the tracing canvas.',
                },
                {
                  title: 'Adjust Brightness & Contrast',
                  body: 'Once your design is on screen, use the Brightness slider to increase screen intensity so the design shines through the fabric clearly. Raise Contrast to make outlines crisper and easier to follow. For thicker fabrics, push brightness close to maximum. Adjust the Size slider to match your actual blouse or sleeve measurements.',
                },
                {
                  title: 'Place Your Fabric on the Screen',
                  body: 'Lay your fabric — georgette, chiffon, net, or silk organza work best — flat over the phone screen. Secure the edges with low-tack masking tape or fabric clips so the fabric does not shift while you trace. Tap the Lock button in the controls to prevent the image from moving accidentally.',
                },
                {
                  title: 'Trace the Design',
                  body: 'Using a washable fabric pen or air-erasable marker, carefully trace the design outline visible through the fabric. Work from the centre outward to avoid smudging. For detailed sections like peacock feathers or kundan layouts, zoom in first and trace section by section for the most accurate results.',
                },
                {
                  title: 'Start Your Aari Embroidery',
                  body: 'Remove the fabric from the screen and you have a perfect, proportioned design ready to embroider. Begin your Aari work following the traced lines. Washable markers fade with moisture or after washing, leaving only your beautiful embroidery. Repeat the tracing process for additional pieces using the same design.',
                },
              ].map((step, i) => (
                <li key={i} className={styles.stepCard}>
                  <div className={styles.stepNumber} aria-hidden="true">
                    {i + 1}
                  </div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* blouse tracing example */}
            <div className={styles.imageWrapper}>
              <Image 
                src="/seo-images/blouse_tracing_step.png" 
                alt="Step by step blouse neck tracing on mobile screen"
                fill
                className={styles.seoImage}
              />
            </div>

            {/* Mid CTA */}
            <div className={styles.ctaBanner}>
              <h3>Ready to trace your first design?</h3>
              <p>Our free Aari tracing tool is already loaded at the top of this page. No downloads needed.</p>
              <a href="#trace-tool-top" className={styles.ctaBtnPrimary} id="cta-try-tool-steps">
                ↑ Go to the Tracing Tool
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — Benefits Grid
            ══════════════════════════════════════════════ */}
        <section
          className={styles.section}
          aria-labelledby="benefits-aari-tool"
        >
          <div className={styles.container}>
            <h2 id="benefits-aari-tool" className={styles.sectionHeading}>
              Benefits of Using an{' '}
              <span className="text-gradient">Online Aari Tool</span>
            </h2>
            <p className={styles.sectionSubheading}>
              See why thousands of Aari work learners and boutique designers prefer
              screen tracing over traditional methods.
            </p>

            <div className={styles.benefitsGrid} role="list">
              {benefits.map((b) => (
                <article key={b.title} className={styles.benefitCard} role="listitem">
                  <span className={styles.benefitEmoji} aria-hidden="true">{b.emoji}</span>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — Best Designs to Trace
            ══════════════════════════════════════════════ */}
        <section
          className={styles.section}
          aria-labelledby="best-designs-aari-tool"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(45,5,5,0.4) 0%, transparent 65%)' }}
        >
          <div className={styles.container}>
            <h2 id="best-designs-aari-tool" className={styles.sectionHeading}>
              Best Designs to Trace Using This{' '}
              <span className="text-gradient">Aari Tool</span>
            </h2>
            <p className={styles.sectionSubheading}>
              From simple blouse borders to elaborate bridal embroidery — here are the most
              popular design categories our users trace every day.
            </p>

            <div className={styles.categoriesGrid} role="list">
              {categories.map((cat) => (
                <article key={cat.title} className={styles.categoryCard} role="listitem">
                  <span className={styles.categoryEmoji} aria-hidden="true">{cat.emoji}</span>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </article>
              ))}
            </div>

            {/* embroidery tracing sample */}
            <div className={styles.imageWrapper}>
              <Image 
                src="/seo-images/peacock_floral_motif.png" 
                alt="Peacock and floral Aari motif tracing on a tablet"
                fill
                className={styles.seoImage}
              />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 7 — Tips for Better Tracing
            ══════════════════════════════════════════════ */}
        <section
          className={styles.section}
          aria-labelledby="tips-aari-tracing"
        >
          <div className={styles.container}>
            <h2 id="tips-aari-tracing" className={styles.sectionHeading}>
              Tips for Better{' '}
              <span className="text-gradient">Aari Design Tracing</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Small adjustments make a big difference in tracing quality. Follow these
              practitioner tips for clean, accurate results every time.
            </p>

            <div className={styles.tipsGrid} role="list">
              {tips.map((tip) => (
                <div key={tip.title} className={styles.tipItem} role="listitem">
                  <span className={styles.tipDot} aria-hidden="true" />
                  <p>
                    <strong>{tip.title}:</strong> {tip.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Mid CTA */}
            <div className={styles.ctaBanner} style={{ marginTop: '3rem' }}>
              <h3>Practise makes perfect — start tracing now</h3>
              <p>
                Upload any design, adjust the settings, and trace your first embroidery
                pattern in under five minutes.
              </p>
              <a href="#trace-tool-top" className={styles.ctaBtnPrimary} id="cta-try-tool-tips">
                ↑ Open the Aari Tracing Tool
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 8 — FAQ
            ══════════════════════════════════════════════ */}
        <section
          className={styles.section}
          aria-labelledby="faq-aari-tool"
        >
          <div className={styles.container}>
            <h2 id="faq-aari-tool" className={styles.sectionHeading}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubheading}>
              Everything you need to know about using our free online Aari tracing tool.
            </p>

            {/* FAQ list — matches JSON-LD schema above */}
            <div className={styles.faqList} role="list" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <article
                  key={i}
                  className={styles.faqItem}
                  role="listitem"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <div className={styles.faqQuestion} id={`faq-q-${i}`}>
                    <span itemProp="name">{faq.question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">?</span>
                  </div>
                  <div
                    className={styles.faqAnswer}
                    id={`faq-a-${i}`}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{faq.answer}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 9 — Internal Links
            ══════════════════════════════════════════════ */}
        <section
          className={`${styles.linksSection}`}
          aria-labelledby="explore-more-aari"
        >
          <div className={styles.container}>
            <h2 id="explore-more-aari" className={styles.sectionHeading}>
              Explore More{' '}
              <span className="text-gradient">Aari Work Designs</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Discover our growing library of Aari patterns, catalogues, and tracing
              design collections — all free to browse.
            </p>

            <nav className={styles.linksGrid} aria-label="Related Aari design pages">
              <Link href="/gallery" className={styles.internalLink} id="link-simple-aari-designs">
                Simple Aari Work Designs
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/catalogue" className={styles.internalLink} id="link-blouse-catalogue">
                Blouse Design Catalogue
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/gallery" className={styles.internalLink} id="link-bridal-designs">
                Bridal Aari Designs
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/trace" className={styles.internalLink} id="link-tracing-collection">
                Tracing Design Collection
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/gallery" className={styles.internalLink} id="link-sleeve-designs">
                Sleeve Design Ideas
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/blog" className={styles.internalLink} id="link-aari-blog">
                Aari Work Blog &amp; Tutorials
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
