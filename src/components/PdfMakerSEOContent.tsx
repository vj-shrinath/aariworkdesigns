/**
 * PdfMakerSEOContent.tsx
 *
 * Fully SEO-optimised content section rendered BELOW the client-side PdfMaker selection tool.
 * Covers all requested copy sections:
 *   1 - H1 Headline & Subheadline
 *   2 - Tool Introduction Section
 *   3 - Key Features & Capabilities (H2)
 *   4 - Step-by-Step Guide (H2)
 *   5 - Resource Library (H2)
 *   6 - Frequently Asked Questions (FAQ Section - H2 with Schema)
 *   7 - Internal navigation links
 *
 * Naturally integrates keywords:
 *   - aari tracing designs book pdf free download
 *   - simple aari work design drawings pdf
 *   - aari work trace paper design pdf
 *   - aari work materials list pdf
 *   - simple aari work blouse designs pdf free download
 *   - aari work materials name list with images pdf
 *   - simple aari work catalogue book pdf
 *   - complete knowledge of aari work materials pdf
 *   - flower aari work designs drawings pdf
 */

import Link from 'next/link';
import styles from './PdfMakerSEOContent.module.css';

/* ========================================================
   FAQ DATA — also used to build JSON-LD FAQPage schema
   ======================================================== */
const faqs = [
  {
    question: 'How do I print Aari work trace paper designs on standard paper sizes?',
    answer:
      'To print your generated aari work trace paper design pdf or blouse pattern patterns, open the downloaded PDF on a device linked to a printer. Load standard A4 paper or transparent butter tracing paper. Ensure you set your system print settings to "100%" or "Actual Size" (rather than "Fit to Page") so that neckline sizing and border widths print at their exact embroidery dimensions.',
  },
  {
    question: 'Is complete knowledge of Aari work materials included in the PDF guide?',
    answer:
      'Yes, absolutely. The tool renders a comprehensive aari work materials name list with images pdf as part of our recommended guide suite. This gives you a complete knowledge of aari work materials pdf, identifying everything from metallic zari threads, silk skeins, carbon sheets, fabric glue, to professional needles (No. 14, No. 24) with visual templates.',
  },
  {
    question: 'Can I download simple Aari work blouse design catalogues for free?',
    answer:
      'Yes! Creating and exporting a simple aari work blouse designs pdf free download or creating a customized simple aari work catalogue book pdf is 100% free of charge. Select your favorite mockups from the layout grid, adjust your page preview layout, and download the print-ready bundle instantly.',
  },
];

export default function PdfMakerSEOContent() {
  // Built JSON-LD FAQ schema
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
      {/* JSON-LD Schema markup for Google search engine */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.seoWrapper}>
        <div className={styles.divider} aria-hidden="true" />

        {/* ══════════════════════════════════════════════
            SECTION 1 & 2 — H1 & Tool Intro (Above/Mid fold)
            ══════════════════════════════════════════════ */}
        <section className={`${styles.section} ${styles.heroSection}`} aria-labelledby="pdf-generator-h1">
          <div className={styles.container}>
            <div className={styles.badge}>✦ PDF Tool & Resource Library</div>
            
            <h1 id="pdf-generator-h1" className={styles.h1}>
              Aari Work PDF Generator & Free <span className="text-gradient">Aari Tracing Design PDF</span> Downloads
            </h1>
            
            <p className={styles.subheadline}>
              Select embroidery patterns, generate customized Aari work catalogues, 
              compile essential Aari work materials lists, and download print-ready PDFs instantly for free.
            </p>

            <div className={styles.twoCol}>
              <div>
                <h2 className={styles.sectionHeading} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                  Struggling to Find Printable Aari Tracing Sheets?
                </h2>
                <p className={styles.sectionPara}>
                  For professional Aari work practitioners, boutique curators, embroidery instructors, and tailors, sourcing high-quality tracing templates is a constant bottleneck. Most online patterns are low-resolution, leaving you to deal with pixelated printouts when scaling.
                </p>
                <p className={styles.sectionPara}>
                  Our free web-based <strong>Aari Work PDF Creator & Pattern Download Tool</strong> solves this problem. It allows you to select high-definition drawings directly from our collection, arrange them in your preferred sequence, preview the pages, and output a print-ready, high-resolution <strong>aari tracing designs book pdf free download</strong>.
                </p>
              </div>

              <div>
                <p className={styles.sectionPara}>
                  Use this tool to simplify your design-to-fabric workflow:
                </p>
                <ul className={styles.featureList} role="list">
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon} aria-hidden="true">✓</span>
                    <span>No registration or signups required to output A4-friendly PDF files.</span>
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon} aria-hidden="true">✓</span>
                    <span>Browse patterns from basic circles and border lines to grand bridal designs.</span>
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon} aria-hidden="true">✓</span>
                    <span>Select up to 20 designs at a time to export a comprehensive <strong>simple aari work catalogue book pdf</strong>.</span>
                  </li>
                  <li className={styles.featureItem}>
                    <span className={styles.featureIcon} aria-hidden="true">✓</span>
                    <span>Outputs perfectly scaled layouts to print on butter paper or tracing sheets.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — Key Features (H2)
            ══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="key-features-title">
          <div className={styles.container}>
            <h2 id="key-features-title" className={styles.sectionHeading}>
              Key Features of Our <span className="text-gradient">Aari Work PDF Creator</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Everything you need to compile, preview, and download custom tracing sheets and material checklists.
            </p>

            <div className={styles.resourcesGrid} role="list">
              <div className={styles.resourceCard} role="listitem">
                <span className={styles.resourceIcon} aria-hidden="true">📝</span>
                <h3>Free Printable Tracing Paper Design PDFs</h3>
                <p>
                  Compile traditional embroidery drawings including net necklines, elegant peacock motifs, and classic <strong>flower aari work designs drawings pdf</strong> templates for easy transfer.
                </p>
                <span className={styles.pdfBadge}>PDF Sheets</span>
              </div>

              <div className={styles.resourceCard} role="listitem">
                <span className={styles.resourceIcon} aria-hidden="true">💎</span>
                <h3>Aari Material Checklist Creator</h3>
                <p>
                  Generate a structured <strong>aari work materials name list with images pdf</strong>. Ensure your students or boutique tailors always have the exact tools required.
                </p>
                <span className={styles.pdfBadge}>Checklist exporter</span>
              </div>

              <div className={styles.resourceCard} role="listitem">
                <span className={styles.resourceIcon} aria-hidden="true">📖</span>
                <h3>Blouse Design Catalogue Exporter</h3>
                <p>
                  Select custom blouse designs and combine them into a clean <strong>simple aari work catalogue book pdf</strong>. Present professional choices to walk-in boutique clients.
                </p>
                <span className={styles.pdfBadge}>Catalogue book</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — How-to Step-by-Step (H2)
            ══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="how-to-generate-title" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(45,5,5,0.3) 0%, transparent 70%)' }}>
          <div className={styles.container}>
            <h2 id="how-to-generate-title" className={styles.sectionHeading}>
              How to Generate Your <span className="text-gradient">Aari Work PDF</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Follow these three straightforward steps to compile and export your custom embroidery guidebooks.
            </p>

            <ol className={styles.stepsGrid} aria-label="Step-by-step PDF creator guide">
              <li className={styles.stepCard}>
                <div className={styles.stepNumber} aria-hidden="true">1</div>
                <div className={styles.stepContent}>
                  <h3>Select Your Category</h3>
                  <p>
                    Scroll to the interactive dashboard. Browse and filter our library by categories such as Tracing Designs, Materials List, or Blouse Catalogue to find what you need.
                  </p>
                </div>
              </li>

              <li className={styles.stepCard}>
                <div className={styles.stepNumber} aria-hidden="true">2</div>
                <div className={styles.stepContent}>
                  <h3>Customize Patterns</h3>
                  <p>
                    Select individual patterns such as <strong>simple aari work design drawings pdf</strong> templates, heavy bridal sleeves, or <strong>flower aari work designs drawings pdf</strong> motifs to build your custom document.
                  </p>
                </div>
              </li>

              <li className={styles.stepCard}>
                <div className={styles.stepNumber} aria-hidden="true">3</div>
                <div className={styles.stepContent}>
                  <h3>Generate &amp; Download Free PDF</h3>
                  <p>
                    Tap the &ldquo;Preview PDF&rdquo; button to review your page sequence, then click the download action to save your custom <strong>aari tracing designs book pdf free download</strong>.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — Resource Library (H2)
            ══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="resources-library-title">
          <div className={styles.container}>
            <h2 id="resources-library-title" className={styles.sectionHeading}>
              Curated Aari Embroidery <span className="text-gradient">PDF Resource Library</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Check out our pre-packaged downloads compiled to help quicken your design training.
            </p>

            <div className={styles.resourcesGrid} role="list">
              <div className={styles.resourceCard} role="listitem">
                <span className={styles.resourceIcon} aria-hidden="true">📚</span>
                <h3>Aari Work Materials List PDF (With Images)</h3>
                <p>
                  Acquire a <strong>complete knowledge of aari work materials pdf</strong> containing a detailed <strong>aari work materials name list with images pdf</strong>. Explains needle thicknesses, thread values, and beads.
                </p>
                <div className={styles.sectionPara} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Includes: Sugar beads, kundan gems, zari yarns, cutdaan needles, and standard embroidery frames.
                </div>
              </div>

              <div className={styles.resourceCard} role="listitem">
                <span className={styles.resourceIcon} aria-hidden="true">👘</span>
                <h3>Simple Blouse Neck &amp; Sleeve Pattern Book PDF</h3>
                <p>
                  Download a curated set of <strong>simple aari work blouse designs pdf free download</strong> files. Features simple neck outlines, round backs, and easy sleeve borders perfect for beginners.
                </p>
                <div className={styles.sectionPara} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Includes: Simple chain stitch borders, beadwork outlines, and flower motifs drawings.
                </div>
              </div>

              <div className={styles.resourceCard} role="listitem">
                <span className={styles.resourceIcon} aria-hidden="true">🌸</span>
                <h3>Flower &amp; Motif Tracing Drawings PDF</h3>
                <p>
                  A pack of gorgeous <strong>flower aari work designs drawings pdf</strong> files, paisley leaf shapes, and detailed peacock tracing papers formatted for simple tracing transfer.
                </p>
                <div className={styles.sectionPara} style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Includes: Lotus flowers, mango prints, rose borders, and standard motif layouts.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — Frequently Asked Questions (FAQ)
            ══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="faq-section-title">
          <div className={styles.container}>
            <h2 id="faq-section-title" className={styles.sectionHeading}>
              Frequently Asked Questions (FAQ)
            </h2>
            <p className={styles.sectionSubheading}>
              Find quick answers to common questions about using our PDF maker and tracing guides.
            </p>

            <div className={styles.faqList} role="list">
              {faqs.map((faq, idx) => (
                <article key={idx} className={styles.faqItem} role="listitem">
                  <h3 className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">?</span>
                  </h3>
                  <div className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Mid page CTA Banner */}
            <div className={styles.ctaBanner}>
              <h3>Ready to Compile Your Embroidery patterns?</h3>
              <p>
                Select your patterns from our collection above, preview your A4 workbook sheets, and download.
              </p>
              <Link href="#pdf-maker-top" className={styles.ctaBtnPrimary}>
                ↑ Start Generating PDF Now
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 7 — Internal Nav Links
            ══════════════════════════════════════════════ */}
        <section className={styles.section} aria-labelledby="explore-internal-links">
          <div className={styles.container}>
            <h2 id="explore-internal-links" className={styles.sectionHeading}>
              Explore More <span className="text-gradient">Aari Embroideries</span>
            </h2>
            <p className={styles.sectionSubheading}>
              Navigate to our digital tracing tools, blouse gallery, blogs, and other free training guides.
            </p>

            <nav className={styles.linksGrid} aria-label="Aari Design internal navigation">
              <Link href="/trace" className={styles.internalLink}>
                Online Screen Tracing Board
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/gallery" className={styles.internalLink}>
                Latest Blouse Designs Gallery
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/catalogue" className={styles.internalLink}>
                Boutique Client Catalogue
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
              <Link href="/blog" className={styles.internalLink}>
                Aari Tutorials &amp; Blogs
                <span className={styles.internalLinkArrow} aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
