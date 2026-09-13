# Full Website Performance + SEO + GEO + AEO Audit & Optimization

You are a senior web performance engineer, technical SEO specialist, GEO (Generative Engine Optimization) specialist, and AEO (Answer Engine Optimization) specialist.

Your task is to **inspect my existing website/codebase comprehensively**, identify bottlenecks, and then implement improvements where appropriate.

Do NOT blindly rewrite the website or change its visual design.

Your priorities are:

1. ⚡ Lightning-fast performance
2. 🔎 Technical + on-page SEO
3. 🌍 GEO — visibility and understandability for AI/search engines
4. 🤖 AEO — ability to appear as direct answers in search/AI results
5. 📱 Mobile performance
6. ♿ Accessibility
7. 🔐 Security and best practices
8. 🧩 Maintainability

---

# PHASE 1 — UNDERSTAND THE EXISTING PROJECT

Before making any changes:

* Inspect the complete project structure.
* Identify the framework/library being used.
* Identify the build system.
* Identify hosting/deployment configuration.
* Identify whether the site is static, SSR, SSG, ISR, SPA, or hybrid.
* Inspect package.json and dependencies.
* Inspect routing.
* Inspect API calls.
* Inspect database usage if present.
* Inspect image handling.
* Inspect fonts.
* Inspect CSS architecture.
* Inspect JavaScript bundles.
* Inspect environment/configuration files.
* Inspect robots.txt.
* Inspect sitemap.xml.
* Inspect metadata.
* Inspect structured data/schema markup.
* Inspect canonical URLs.
* Inspect redirects.
* Inspect headers.
* Inspect caching strategy.
* Inspect Cloudflare/CDN configuration if present.

First produce a concise architecture summary.

Do not modify anything yet.

---

# PHASE 2 — PERFORMANCE AUDIT

Analyze the site as if you are optimizing it for extremely fast real-world loading.

## A. Initial HTML / TTFB

Check:

* Time to First Byte
* Server response time
* HTML size
* compression
* caching
* CDN usage
* edge caching
* unnecessary redirects
* render-blocking resources

Determine whether pages can be:

* statically generated
* pre-rendered
* cached at the edge
* partially hydrated
* server-rendered only where necessary

Prefer the simplest architecture that provides the required functionality.

---

# B. JavaScript

Analyze:

* total JS size
* initial JS payload
* unused JavaScript
* duplicate dependencies
* large dependencies
* third-party scripts
* hydration cost
* client-side rendering
* code splitting
* dynamic imports
* route-level chunks
* unnecessary hydration

Look specifically for JavaScript that can be:

* removed
* deferred
* lazy loaded
* dynamically imported
* replaced with native browser functionality
* moved server-side

Do not ship large libraries for trivial functionality.

---

# C. CSS

Check:

* CSS bundle size
* unused CSS
* render-blocking CSS
* duplicate styles
* excessive framework CSS
* critical CSS
* font-related layout issues

Optimize without changing the visual appearance.

---

# D. Images

Audit every significant image.

Check:

* JPEG/PNG usage
* WebP usage
* AVIF usage
* image dimensions
* responsive images
* srcset
* sizes
* lazy loading
* eager loading
* image compression
* oversized images
* images loaded below the fold
* missing width/height attributes
* CLS caused by images

The LCP image should NOT be lazy-loaded.

Use modern image formats wherever practical.

Do not unnecessarily convert images if quality or compatibility would suffer.

---

# E. Fonts

Audit:

* number of font families
* number of font weights
* font file sizes
* external font providers
* font preloading
* font-display
* unused font weights
* layout shifts caused by fonts

Prefer self-hosting where appropriate.

Avoid loading font weights that aren't actually used.

---

# F. Third-Party Scripts

Identify:

* analytics
* advertising
* social widgets
* chat widgets
* tracking scripts
* embeds
* external libraries

For every third-party script determine:

1. Is it necessary?
2. Does it block rendering?
3. Can it load after interaction?
4. Can it be deferred?
5. Can it be replaced?

Do not remove functionality without explaining the impact.

---

# G. Network Optimization

Check:

* HTTP/2
* HTTP/3
* compression
* Brotli
* cache-control
* ETags
* immutable asset caching
* CDN caching
* preconnect
* dns-prefetch
* preload
* prefetch
* connection reuse

Do not add preload/prefetch directives blindly.

Only preload resources that materially affect the critical rendering path.

---

# H. Core Web Vitals

Optimize specifically for:

* LCP
* INP
* CLS

Also measure:

* FCP
* TTFB
* Speed Index
* Total Blocking Time where applicable

Target:

LCP < 2.5s
INP < 200ms
CLS < 0.1

Aim for substantially better results where realistic.

Do not optimize only for Lighthouse scores. Prioritize real-user performance.

---

# PHASE 3 — SEO AUDIT

Perform a complete technical SEO audit.

## Crawlability

Check:

* robots.txt
* sitemap.xml
* canonical URLs
* indexability
* noindex directives
* redirects
* broken links
* orphan pages
* duplicate pages
* URL structure
* trailing slash consistency
* HTTP/HTTPS consistency
* www/non-www consistency

---

## Metadata

Check every important page for:

* unique title
* meta description
* canonical
* robots directives
* viewport
* language
* Open Graph
* Twitter/X metadata

Titles and descriptions should be useful to humans, not keyword-stuffed.

---

# ON-PAGE SEO

Analyze:

* H1
* H2/H3 hierarchy
* keyword targeting
* search intent
* semantic relevance
* internal linking
* anchor text
* image alt text
* content depth
* duplicate content
* thin content
* topical coverage

Identify important pages that lack clear search intent.

---

# STRUCTURED DATA

Audit and implement appropriate Schema.org structured data.

Potential schemas include:

* Organization
* WebSite
* WebPage
* BreadcrumbList
* Article
* BlogPosting
* FAQPage where genuinely appropriate
* Product
* Review
* LocalBusiness where applicable
* Person where applicable

Only use schema that accurately describes visible page content.

Never add fake reviews, fake ratings, or misleading structured data.

Validate JSON-LD syntax.

Avoid duplicate/conflicting schema.

---

# INTERNAL LINKING

Build an internal-linking analysis.

Identify:

* important pages with few internal links
* pages with excessive links
* orphan pages
* weak anchor text
* opportunities to create topic clusters

Recommend and implement sensible contextual internal links.

Do not create spammy keyword-heavy anchors.

---

# PHASE 4 — GEO (GENERATIVE ENGINE OPTIMIZATION)

Optimize the website so search engines and AI systems can clearly understand:

* what the website is
* who operates it
* what topics it covers
* what entities it discusses
* what products/services/content it provides
* how different pages relate to one another

Improve:

### Entity clarity

Clearly establish:

* organization/entity name
* website identity
* author identity where applicable
* about information
* contact information
* social profiles where legitimate
* relevant entity relationships

Use appropriate Schema.org relationships.

---

### Semantic structure

Make content easy for machines to understand.

Prefer:

* clear headings
* concise definitions
* factual statements
* descriptive section headings
* meaningful HTML elements
* tables where comparisons are useful
* lists where appropriate

Avoid relying on:

* text embedded inside images
* JavaScript-only content
* vague headings
* decorative markup for important information

---

### Topical authority

Analyze whether the website demonstrates depth around its primary subject.

Identify:

* core topics
* supporting topics
* missing subtopics
* content clusters
* internal-link opportunities

Do NOT generate large amounts of low-quality AI content simply to increase page count.

Prioritize genuinely useful information.

---

# PHASE 5 — AEO (ANSWER ENGINE OPTIMIZATION)

Optimize important pages for direct-answer retrieval.

Identify questions users are likely to ask about the site's subject.

Where appropriate, structure answers using:

* Question-style H2/H3 headings
* concise answer paragraphs
* definitions
* step-by-step instructions
* bullet lists
* comparison tables
* clearly labeled facts
* FAQs

For important questions, provide the answer near the beginning and then expand with supporting detail.

Example structure:

## What is [topic]?

[Clear 40–60 word answer.]

### How does it work?

...

### Benefits

...

### Common mistakes

...

Do not keyword-stuff or artificially repeat questions.

The content must remain natural for human readers.

---

# PHASE 6 — ACCESSIBILITY

Audit:

* semantic HTML
* heading hierarchy
* alt text
* keyboard navigation
* focus states
* buttons
* form labels
* contrast
* ARIA usage
* screen-reader behavior
* touch target sizes

Do not add unnecessary ARIA when native HTML already provides the semantics.

---

# PHASE 7 — SECURITY / BEST PRACTICES

Check:

* exposed secrets
* API keys
* client-side secrets
* insecure dependencies
* outdated packages
* unsafe external resources
* security headers
* CSP where appropriate
* HTTPS
* mixed content

Never expose secrets in frontend code.

Do not modify production credentials.

---

# PHASE 8 — MOBILE-FIRST AUDIT

Analyze the site at mobile dimensions.

Check:

* layout shifts
* image sizes
* touch targets
* mobile navigation
* font sizes
* horizontal overflow
* JavaScript execution
* network payload
* viewport behavior

Assume a mid-range Android device on a relatively slow mobile connection.

The site should remain usable before every non-essential asset finishes loading.

---

# PHASE 9 — PERFORMANCE BUDGET

Establish practical budgets.

Aim for approximately:

HTML: < 100 KB where realistic
Initial JS: preferably < 150 KB compressed
Initial CSS: preferably < 75 KB compressed
LCP image: optimized and appropriately sized
Fonts: minimal
Third-party JS: minimal

These are guidelines, not absolute rules.

Do not sacrifice functionality merely to hit arbitrary numbers.

---

# PHASE 10 — IMPLEMENTATION

After completing the audit:

Create a prioritized list:

## P0 — Critical

Issues that seriously harm:

* indexing
* usability
* security
* performance
* Core Web Vitals

## P1 — High Impact

Issues with significant SEO/performance benefits.

## P2 — Medium

Useful improvements.

## P3 — Nice to Have

Low-impact improvements.

Then IMPLEMENT the P0 and P1 fixes automatically where they are safe and clearly beneficial.

Do not make destructive changes.

Do not redesign the site.

Do not change branding.

Do not change content meaning.

Do not remove functionality without justification.

---

# PHASE 11 — BEFORE / AFTER MEASUREMENT

Before changing anything, record:

* build size
* JS size
* CSS size
* image payload
* number of requests
* Lighthouse Performance
* Lighthouse SEO
* Lighthouse Accessibility
* LCP
* CLS
* INP/TBT where available
* TTFB

After optimization, measure again.

Create a comparison:

| Metric        | Before | After | Improvement |
| ------------- | -----: | ----: | ----------: |
| Performance   |        |       |             |
| SEO           |        |       |             |
| Accessibility |        |       |             |
| LCP           |        |       |             |
| CLS           |        |       |             |
| INP/TBT       |        |       |             |
| TTFB          |        |       |             |
| JS            |        |       |             |
| CSS           |        |       |             |
| Image payload |        |       |             |
| Requests      |        |       |             |

Never claim an improvement unless it was actually measured.

---

# PHASE 12 — FINAL REPORT

Create:

## 1. Executive Summary

Explain the biggest issues found.

## 2. Performance Report

Explain exactly what makes the current site slow.

## 3. SEO Report

Explain technical and content-related SEO issues.

## 4. GEO Report

Explain how clearly search/AI systems can understand the website and its entities.

## 5. AEO Report

Explain how well the content answers user questions.

## 6. Accessibility Report

List major issues.

## 7. Changes Made

List every meaningful code/configuration change.

## 8. Remaining Issues

Clearly distinguish issues requiring:

* developer decisions
* external services
* content changes
* hosting/CDN configuration
* Search Console actions

## 9. Validation

Run the project's:

* build
* tests
* lint
* type checks

Fix any errors introduced by your changes.

---

# IMPORTANT RULES

1. Inspect first. Modify second.
2. Do not blindly optimize.
3. Do not optimize only for Lighthouse.
4. Do not sacrifice UX for SEO.
5. Do not sacrifice accessibility for performance.
6. Do not add fake SEO content.
7. Do not create fake structured data.
8. Do not keyword-stuff.
9. Do not add unnecessary JavaScript.
10. Do not add unnecessary dependencies.
11. Do not replace the framework merely because another framework benchmarks faster.
12. Preserve the existing visual identity.
13. Preserve existing functionality.
14. Prefer measurable improvements.
15. Verify every major change with a build/test.
16. Clearly report anything you could not verify.
17. Never claim "Google ranking will improve" as a guaranteed result.
18. Treat GEO/AEO as discoverability and machine-understandability optimization, not a guaranteed ranking mechanism.

---

# FINAL OBJECTIVE

The final website should behave like a modern, high-performance website:

User
↓
CDN / Edge
↓
Fast HTML
↓
Immediate above-the-fold rendering
↓
Optimized LCP image
↓
Minimal critical CSS/JS
↓
Lazy-loaded non-critical resources
↓
Cached API/data
↓
Progressive enhancement

At the same time, the site should have:

* excellent technical SEO
* strong semantic HTML
* valid structured data
* clear entity relationships
* strong internal linking
* useful answer-oriented content
* excellent mobile UX
* strong accessibility
* optimized Core Web Vitals

Start with the audit.

**Do not modify the code until you have completed the initial inspection and produced the prioritized findings.**
