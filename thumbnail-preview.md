You are working on the existing **AariWorkDesigns.com** project.

Implement an optimized, production-ready **PDF preview and thumbnail system** while preserving the existing architecture.

## PRIMARY GOAL

We currently use separate thumbnail images for PDF products.

**Do NOT remove or unnecessarily replace the existing thumbnail architecture.**

Instead, improve it so that PDF thumbnails/previews can be **automatically generated from the uploaded PDF**, while keeping the website extremely fast.

The desired UX should feel similar to **WhatsApp/Google Drive PDF previews**:

* PDF thumbnail showing the first page/design
* PDF indicator
* Number of pages where available
* File/product information
* Clean preview card
* Open/view action
* Download/purchase action depending on access

The website must NOT render full PDFs on every product card.

---

# 1. FIRST AUDIT THE EXISTING CODE

Before modifying anything:

* Inspect the existing PDF/product system.
* Inspect the existing thumbnail implementation.
* Inspect Supabase Storage buckets.
* Inspect how PDFs are uploaded.
* Inspect how thumbnails are uploaded/generated.
* Inspect product database fields.
* Inspect product listing cards.
* Inspect product detail pages.
* Inspect the existing PDF viewer, if any.
* Inspect authentication and premium access.
* Inspect existing image optimization.
* Inspect existing caching/CDN behavior.

Determine:

1. How thumbnails are currently stored.
2. Whether thumbnails are manually uploaded.
3. Whether PDF previews already exist.
4. Whether PDF.js or another PDF renderer is already installed.
5. Where PDF processing can safely happen.
6. Whether the current hosting environment supports server-side PDF rendering.

Do not rewrite working functionality unnecessarily.

---

# 2. KEEP THE EXISTING THUMBNAIL SYSTEM

The existing product model should continue to support:

```text
product
├── title
├── description
├── pdf_file
├── thumbnail
├── price
├── access_type
└── ...
```

Do NOT force the frontend to generate thumbnails from PDFs every time a page loads.

The thumbnail should remain an optimized image asset.

Preferred format:

```text
WebP
```

Use JPEG only when WebP is unsuitable.

---

# 3. AUTOMATIC PDF THUMBNAIL GENERATION

Improve the admin upload workflow.

When an admin uploads:

```text
PDF
```

automatically:

```text
PDF
 ↓
Extract first page
 ↓
Render first page as image
 ↓
Apply AariWorkDesigns watermark
 ↓
Resize/optimize
 ↓
Convert to WebP
 ↓
Store thumbnail in Supabase Storage
 ↓
Save thumbnail path in database
```

The admin should NOT have to manually create the thumbnail.

Example:

```text
premium-pdfs/
    bridal-100.pdf

pdf-thumbnails/
    bridal-100.webp
```

Use the existing Supabase Storage conventions if different.

---

# 4. THUMBNAIL QUALITY

The generated thumbnail should:

* preserve the actual PDF design
* be sharp enough for a product card
* have appropriate aspect ratio
* avoid excessive file size
* be optimized for mobile
* contain the AariWorkDesigns watermark
* NOT expose the complete premium PDF

Recommended thumbnail dimensions:

```text
1200px maximum width
```

or another appropriate resolution based on the existing card dimensions.

Do not generate unnecessarily huge images.

---

# 5. WATERMARKING

The generated thumbnail must contain a visible watermark.

Example:

```text
AariWorkDesigns.com
```

The watermark should discourage users from simply downloading/reusing the preview.

Do not place the watermark so heavily that the design becomes impossible to understand.

The thumbnail is a **preview**, not the actual downloadable PDF.

Use a centralized watermark utility so all generated previews use consistent branding.

---

# 6. GENERATE MULTIPLE PREVIEW PAGES WHERE USEFUL

For product detail pages, optionally generate:

```text
page-1.webp
page-2.webp
page-3.webp
```

from the first 2–3 pages of the PDF.

Do NOT generate all pages as images.

Default:

```text
1 thumbnail
+
up to 3 preview pages
```

This should be configurable.

Example:

```text
pdf-previews/
    bridal-100/
        page-1.webp
        page-2.webp
        page-3.webp
```

These preview images should be watermarked.

---

# 7. PRODUCT CARD UX

On collection/category pages, display the generated thumbnail instead of loading the PDF.

Example conceptual UI:

```text
┌──────────────────────────┐
│                          │
│      PDF FIRST PAGE      │
│      WATERMARKED         │
│                          │
│                     PDF  │
├──────────────────────────┤
│ 100 Bridal Aari Designs  │
│ 100 Designs • PDF        │
│                          │
│ ₹149                     │
│                          │
│ [View Collection]        │
└──────────────────────────┘
```

Do not render PDF.js inside every card.

Use the static WebP thumbnail.

---

# 8. PDF BADGE

Add a subtle PDF badge to the thumbnail/card:

```text
PDF
```

Optionally display:

```text
100 Designs
```

or:

```text
85 Pages
```

if the page count is reliably available.

Do not fake the number of pages/designs.

---

# 9. PRODUCT DETAIL PAGE

When the user opens a PDF product:

Show:

* large thumbnail
* title
* description
* number of designs
* page count if available
* preview pages
* price
* purchase CTA
* subscription CTA if applicable

Example:

```text
100 Bridal Aari Designs

100 unique tracing designs
Printable PDF
High-resolution designs

[Preview Designs]

₹149

[Buy PDF]

OR

Get unlimited Premium access
[Join Premium]
```

Do not expose the private master PDF URL.

---

# 10. PDF VIEWER

If the project already has PDF.js or a PDF viewer:

reuse it where appropriate.

If not, determine whether PDF.js is necessary.

Use PDF.js only when the user actually opens a PDF preview/viewer.

Do NOT use PDF.js to render every product card.

Preferred architecture:

```text
Listing page
    ↓
WebP thumbnail

Product page
    ↓
WebP preview images

Full PDF viewer
    ↓
Only when user explicitly opens it
```

---

# 11. PREMIUM PDF SECURITY

Premium master PDFs must remain in a **private Supabase Storage bucket**.

Never use the master PDF as the public thumbnail.

Never expose:

```text
/public/premium-pdfs/file.pdf
```

through the frontend.

Premium download must continue using:

```text
Authentication
+
Purchase/subscription verification
+
Server-side authorization
+
Temporary protected download
```

The thumbnail and preview images may be public or appropriately cached if they contain only watermarked preview content.

---

# 12. DO NOT DUPLICATE CUSTOMER PDFs

This preview system must remain compatible with the watermark strategy.

Do NOT create:

```text
customer1.pdf
customer2.pdf
customer3.pdf
```

in Supabase merely for previews.

Maintain:

```text
ONE master PDF
+
ONE generated thumbnail
+
OPTIONAL 2–3 generated preview images
```

per product.

Customer-specific watermarking belongs to the **authorized download flow**, not the thumbnail system.

---

# 13. ADMIN UPLOAD EXPERIENCE

Improve the admin workflow.

When admin uploads a PDF:

```text
Select PDF
      ↓
Upload
      ↓
Server validates PDF
      ↓
Extract metadata
      ↓
Generate thumbnail
      ↓
Generate optional preview pages
      ↓
Optimize WebP
      ↓
Upload preview assets
      ↓
Save paths in database
      ↓
Product ready
```

Admin should see:

```text
✓ PDF uploaded
✓ Thumbnail generated
✓ Preview generated
✓ Product ready
```

If thumbnail generation fails:

* do not break the original PDF upload
* report the error clearly
* allow admin to retry generation
* optionally allow manual thumbnail replacement as a fallback

---

# 14. PDF METADATA

During upload, extract reliable metadata where possible:

* page count
* PDF dimensions
* file size
* filename

Save only useful metadata.

Do not calculate "number of designs" from page count unless the relationship is actually known.

For example:

```text
page_count = 25
design_count = 100
```

must remain separate values.

---

# 15. IMAGE OPTIMIZATION

Generated thumbnails/previews must be optimized.

Use:

```text
WebP
```

where supported.

Optimize:

* dimensions
* compression
* metadata removal where appropriate
* file size

Use responsive image loading:

```text
srcset
sizes
```

where appropriate.

Use:

```text
loading="lazy"
```

for images below the fold.

Do not lazy-load the primary above-the-fold product image if that harms LCP.

Use appropriate:

```text
width
height
aspect-ratio
```

to prevent layout shift.

---

# 16. PERFORMANCE REQUIREMENTS

The collection page should NOT download the PDF simply to show a thumbnail.

Target architecture:

```text
Product list
     ↓
small WebP
     ↓
fast rendering
```

Not:

```text
Product list
     ↓
PDF download
     ↓
PDF.js
     ↓
render first page
```

for every product.

This is especially important on:

* mobile networks
* low-end Android devices
* large product collections

---

# 17. CACHING

Generated thumbnails are static assets and should be cacheable.

Use appropriate long-lived caching where safe.

For example conceptually:

```text
Cache-Control:
public, max-age=31536000, immutable
```

if filenames are content/version hashed.

If filenames can change while the URL remains the same, use a shorter cache policy or versioned filenames.

Do not blindly apply immutable caching without cache invalidation/versioning.

---

# 18. THUMBNAIL REGENERATION

Admin should be able to regenerate previews if:

* PDF changes
* watermark style changes
* thumbnail quality changes
* preview pages change

Example admin action:

```text
[Regenerate Preview]
```

Regeneration should replace/update the existing preview assets safely.

Do not leave hundreds of obsolete preview files in Supabase.

Clean up old assets when appropriate.

---

# 19. FALLBACK SYSTEM

If an automatically generated thumbnail does not exist:

1. Use the existing manually uploaded thumbnail.
2. If no thumbnail exists, show a clean PDF placeholder.
3. Do NOT attempt expensive PDF rendering on every page request.

Example:

```text
Generated thumbnail
      ↓ unavailable
Existing thumbnail
      ↓ unavailable
PDF placeholder
```

This guarantees the product listing remains reliable.

---

# 20. SEO

Do not negatively affect SEO.

Ensure every product thumbnail has meaningful alt text.

Example:

```text
alt="100 Bridal Aari Work Designs PDF"
```

Do not use:

```text
alt="image"
```

or empty generic descriptions for meaningful product images.

Do not expose private premium PDFs to search engines.

Preview images can be indexable only if that fits the existing SEO strategy.

---

# 21. RESPONSIVE PREVIEW

The preview should work well on:

* mobile
* tablet
* desktop

Use the site's existing design system.

Do not introduce a completely different visual style.

The PDF card should look native to AariWorkDesigns.

---

# 22. ACCESSIBILITY

Ensure:

* proper alt text
* keyboard-accessible buttons
* sufficient contrast
* visible focus states
* meaningful button labels
* no image-only CTA
* accessible modal/preview if implemented

---

# 23. ANALYTICS

If analytics already exists, track useful events:

```text
pdf_preview_view
pdf_product_open
pdf_preview_page_view
pdf_buy_click
premium_cta_click
pdf_download
```

Do not introduce unnecessary tracking if an existing analytics system already handles these events.

---

# 24. TESTING

Test at least:

### PDF upload

* [ ] Small PDF
* [ ] Large PDF
* [ ] Multi-page PDF
* [ ] Invalid PDF
* [ ] PDF with unusual dimensions
* [ ] PDF with large images

### Preview

* [ ] Thumbnail generated
* [ ] Watermark visible
* [ ] Preview is sharp
* [ ] WebP loads correctly
* [ ] Mobile layout works
* [ ] Missing thumbnail fallback works

### Security

* [ ] Master PDF remains private
* [ ] Thumbnail does not expose master PDF
* [ ] Preview does not expose all pages
* [ ] Unauthorized user cannot download premium PDF

### Performance

* [ ] Product listing does not download PDFs
* [ ] Lazy loading works
* [ ] LCP is not unnecessarily delayed
* [ ] CLS is controlled
* [ ] Mobile performance is acceptable

---

# 25. FINAL ARCHITECTURE

Implement this architecture:

```text
                         ADMIN
                           │
                           ▼
                      Upload PDF
                           │
                           ▼
                    PRIVATE SUPABASE
                           │
                    ┌──────┴──────┐
                    │             │
                    ▼             ▼
                MASTER PDF     PDF PROCESSOR
                                  │
                          ┌───────┴────────┐
                          ▼                ▼
                     Thumbnail         2–3 previews
                       WebP              WebP
                          │                │
                          └───────┬────────┘
                                  ▼
                             DATABASE
                                  │
                                  ▼
                         PRODUCT LISTING
                                  │
                                  ▼
                         Fast WebP Card
                                  │
                                  ▼
                           PRODUCT PAGE
                                  │
                     ┌────────────┴────────────┐
                     ▼                         ▼
              Preview Images              Purchase
                                              │
                                              ▼
                                       PAYU VERIFIED
                                              │
                                              ▼
                                      AUTHORIZED PDF
                                              │
                                              ▼
                                  Optional personalized
                                       watermark
                                              │
                                              ▼
                                        DOWNLOAD
```

---

# 26. IMPORTANT FINAL RULES

1. **Keep the existing thumbnail system.**
2. Automate thumbnail generation instead of requiring manual thumbnail creation.
3. Do not render PDFs for every product card.
4. Do not store a separate PDF for every customer.
5. Keep master premium PDFs private.
6. Generate only 1 thumbnail + optionally 2–3 preview pages per product.
7. Use WebP for previews where appropriate.
8. Use PDF.js only when an actual PDF viewer is needed.
9. Do not expose premium PDF URLs.
10. Preserve existing SEO and performance.
11. Preserve existing UI/design system.
12. Do not unnecessarily rewrite the application.
13. Make automatic generation asynchronous/background where the existing architecture supports it.
14. Provide a manual regeneration fallback in admin.
15. If the existing system already has an equivalent implementation, improve it instead of creating a duplicate system.

## FINAL DELIVERABLE

After implementation, report:

* Existing PDF/thumbnail architecture
* What was changed
* Files modified
* Database changes
* Supabase Storage changes
* Thumbnail generation method
* Preview generation method
* Watermark implementation
* Security model
* Performance improvements
* Admin workflow
* Any new environment variables
* Any required Supabase configuration
* Any remaining manual setup
* Testing results
* Any limitations

Do not merely describe the solution. **Inspect the existing AariWorkDesigns project and implement it using the current architecture.**
