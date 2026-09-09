
# Aari Work Designs --- Final Google Antigravity Implementation Specification

## Sanity CMS + Multilingual + SEO + AdSense Readiness

Website: https://aariworkdesigns.com/en

------------------------------------------------------------------------

# 0. PRIMARY OBJECTIVE

Improve the existing Aari Work Designs website for a future Google
AdSense review while preserving its existing architecture and business
functionality.

The site is:

-   powered by **Sanity CMS**
-   **multilingual**
-   dynamically rendered
-   dependent on Sanity content for
    posts/designs/categories/authors/images and other editorial content

The implementation must therefore improve:

**Sanity CMS → localized content model → GROQ queries → language-aware
routing → frontend rendering → localized SEO → indexing → UX → AdSense
readiness**

## CRITICAL RULE

**DO NOT hardcode Sanity-managed posts, designs, categories, authors,
descriptions, or other CMS content into the frontend.**

Sanity remains the source of truth.

Do not replace Sanity with hardcoded content.

Do not create fake CMS data merely to make pages appear fuller.

------------------------------------------------------------------------

# 1. IMPORTANT: INSPECT BEFORE MODIFYING

Before changing code or Sanity data:

1.  Inspect the entire repository.
2.  Identify the framework and routing architecture.
3.  Identify the Sanity project configuration.
4.  Identify all Sanity schemas.
5.  Identify the internationalization/localization architecture.
6.  Identify all language codes and supported languages.
7.  Identify how translated documents are related.
8.  Identify all GROQ queries.
9.  Identify all public routes.
10. Identify all SEO/metadata code.
11. Identify sitemap generation.
12. Identify robots.txt.
13. Identify structured data.
14. Identify gallery implementation.
15. Identify article implementation.
16. Identify author implementation.
17. Identify image handling.
18. Identify Trace Tool.
19. Identify PDF Maker.
20. Identify affiliate links.
21. Identify authentication/payment routes.
22. Identify draft/preview behavior.

Do not make assumptions about the existing architecture.

------------------------------------------------------------------------

# 2. BUILD AN ARCHITECTURE MAP

Before implementation, document:

``` text
Frontend framework
       ↓
Routing
       ↓
Language detection / locale routing
       ↓
Sanity client
       ↓
GROQ
       ↓
Sanity schemas/documents
       ↓
Localized references
       ↓
Page rendering
       ↓
Metadata
       ↓
Structured data
       ↓
Sitemap / robots
```

Clearly identify where each language is handled.

------------------------------------------------------------------------

# 3. MULTILINGUAL ARCHITECTURE --- CRITICAL

The website is multilingual.

Treat multilingual SEO and content quality as first-class requirements.

Do NOT fix only `/en`.

Audit every supported language.

For each language determine:

-   URL prefix
-   language code
-   Sanity representation
-   document relationship
-   fallback behavior
-   metadata behavior
-   sitemap behavior
-   canonical behavior
-   hreflang behavior
-   language switcher behavior

Examples may include:

``` text
/en/...
/mr/...
/hi/...
```

but do not assume these are the actual supported routes.

Inspect the repository and Sanity data first.

------------------------------------------------------------------------

# 4. IDENTIFY SANITY INTERNATIONALIZATION MODEL

Determine which model the project uses.

Possible models include:

### Model A

Separate document per language.

### Model B

One document with a language field.

### Model C

Translated references using a translation-group/document relationship.

### Model D

Sanity internationalization plugin.

### Model E

Custom localization architecture.

Use the architecture that already exists unless there is a strong reason
to change it.

Do NOT migrate the entire content model simply because another model may
be cleaner.

------------------------------------------------------------------------

# 5. SANITY SCHEMA AUDIT

Inspect all relevant schemas.

Potential schemas:

-   post/article
-   design/gallery item
-   category
-   author
-   product/catalogue
-   FAQ
-   site settings
-   navigation
-   SEO
-   translation metadata

Determine which fields are localized.

Examples:

``` text
title
excerpt
body
description
category name
author bio
SEO title
SEO description
image alt text
```

Language-independent fields may include:

``` text
image asset
document ID
design identifier
technical values
```

Do not localize a field unnecessarily.

------------------------------------------------------------------------

# 6. SANITY CONTENT AUDIT

Create a non-destructive audit.

For every language identify:

-   total posts
-   total designs
-   total categories
-   published documents
-   draft documents
-   duplicate documents
-   duplicate slugs
-   missing translations
-   thin translations
-   missing authors
-   missing images
-   missing alt text
-   missing SEO title
-   missing SEO description
-   duplicate titles
-   duplicate descriptions
-   orphaned references
-   broken references

Produce a report before bulk changes.

------------------------------------------------------------------------

# 7. TRANSLATION QUALITY

Do not publish poor translations merely to create more indexed URLs.

Each public language page should be genuinely useful in that language.

Check:

-   natural grammar
-   correct terminology
-   complete article content
-   translated headings
-   translated metadata
-   translated breadcrumbs
-   translated CTAs
-   translated image alt text where appropriate
-   correct author information
-   correct category labels

Do not simply translate the title while leaving the main content in
another language.

Do not mix languages unintentionally.

------------------------------------------------------------------------

# 8. MISSING TRANSLATIONS

If an English page exists but its translation does not exist:

Do NOT automatically generate a low-quality translation just for SEO.

Instead determine the site's intended behavior.

Possible options:

-   don't expose the untranslated URL
-   don't include it in the language sitemap
-   do not mark it as a valid alternate
-   provide a useful language switcher fallback
-   show a clear translated-content availability state where appropriate

Do not index empty language pages.

Do not create fake localized pages.

------------------------------------------------------------------------

# 9. LANGUAGE SWITCHER

The language switcher must point to the equivalent page whenever a
translation exists.

Example:

``` text
English article
      ↕
Marathi equivalent
      ↕
Hindi equivalent
```

Do NOT make every language switch simply redirect to:

``` text
/en/
/mr/
/hi/
```

when the equivalent article/design exists.

If a translation is unavailable, handle it intentionally rather than
creating a broken route.

The switcher should preserve:

-   article slug where applicable
-   design slug where applicable
-   category
-   relevant page context

------------------------------------------------------------------------

# 10. LOCALIZED URLS

Audit:

-   language prefix
-   slug generation
-   slug uniqueness
-   translated slugs
-   trailing slash policy
-   query parameters
-   canonical URL

Do not assume translated slugs are required.

If the current architecture supports localized slugs, use them
consistently.

If it uses shared slugs, preserve that architecture unless there is a
real SEO/UX problem.

------------------------------------------------------------------------

# 11. HREFLANG --- REQUIRED

For equivalent localized pages, generate correct `hreflang`.

Example concept:

``` html
<link rel="alternate" hreflang="en" href="..." />
<link rel="alternate" hreflang="mr" href="..." />
<link rel="alternate" hreflang="hi" href="..." />
```

Also use:

``` text
x-default
```

only where appropriate.

Important:

-   Every alternate must point to a real URL.
-   URLs must be canonical/indexable versions.
-   Do not reference nonexistent translations.
-   Do not create hreflang entries for unpublished pages.
-   Do not create hreflang entries for empty/thin translations.
-   Maintain reciprocal relationships where appropriate.

Generate these dynamically from actual Sanity translation relationships.

Do NOT hardcode the URL list.

------------------------------------------------------------------------

# 12. CANONICALS FOR MULTILINGUAL PAGES

Each valid localized version should generally have its own correct
canonical URL.

Example:

``` text
/en/article-a → canonical /en/article-a
/mr/article-a → canonical /mr/article-a
/hi/article-a → canonical /hi/article-a
```

Do NOT canonicalize every language version to English merely because
English is the primary language.

A localized page that is intended to be independently indexable should
have its own canonical.

Avoid:

-   canonical chains
-   canonical to redirects
-   canonical to unrelated language
-   canonical to homepage
-   canonical mismatch with hreflang

------------------------------------------------------------------------

# 13. MULTILINGUAL SITEMAP

The sitemap must be generated dynamically.

Include only:

-   published
-   public
-   canonical
-   indexable
-   valid
-   200-status URLs

Include valid language versions.

Exclude:

-   drafts
-   private pages
-   noindex pages
-   empty translation pages
-   search results
-   filter combinations
-   checkout
-   login
-   preview
-   duplicate URLs
-   redirects

Do not hardcode sitemap URLs.

If multiple sitemap files are useful, use a sitemap index.

------------------------------------------------------------------------

# 14. MULTILINGUAL ROBOTS.TXT

Audit robots.txt.

Do not accidentally block language routes.

Check:

``` text
/en/
/mr/
/hi/
```

or whatever the actual languages are.

Block only genuinely private/internal areas.

Remember:

robots.txt is not a substitute for noindex.

------------------------------------------------------------------------

# 15. LANGUAGE HTML ATTRIBUTE

Ensure rendered HTML has the correct language attribute.

Example concept:

``` html
<html lang="en">
```

For Marathi:

``` html
<html lang="mr">
```

For Hindi:

``` html
<html lang="hi">
```

Use the actual locale.

Do not hardcode one language across the entire application.

------------------------------------------------------------------------

# 16. LOCALIZED METADATA

Every localized page must generate localized:

-   title
-   meta description
-   Open Graph title
-   Open Graph description
-   Open Graph image where appropriate
-   Twitter/X metadata where used

Use Sanity editorial SEO fields if available.

Fallbacks should be generated from actual localized content.

Do not use English metadata on Marathi/Hindi/etc. pages unless the
actual page language is English.

------------------------------------------------------------------------

# 17. LOCALIZED STRUCTURED DATA

Structured data must match the language/version being displayed.

For an article, use the actual localized:

-   headline
-   description
-   author
-   dates
-   image
-   canonical URL

Do not use English article text inside Marathi structured data.

Do not create fake ratings/reviews.

------------------------------------------------------------------------

# 18. MULTILINGUAL ARTICLE AUTHOR DATA

If the author bio is localized:

Use the correct language version.

If author information is intentionally language-independent, keep it
consistent.

Do not duplicate or invent authors for each language.

If an author has one genuine identity across languages, use the same
author entity where appropriate.

------------------------------------------------------------------------

# 19. MULTILINGUAL ARTICLE CONTENT

Audit every article in every language.

Classify:

A --- strong and complete B --- useful but needs editing C ---
incomplete translation D --- duplicate E --- thin F --- inaccurate

Do not automatically translate/rewrite all articles.

Prioritize the most important public pages first.

------------------------------------------------------------------------

# 20. AI-LIKE WRITING CLEANUP

Inspect Sanity article content for:

-   repeated phrases
-   repetitive introductions
-   generic filler
-   strange sentence structures
-   awkward punctuation
-   sentence fragments
-   excessive rhetorical language
-   fake personal experience
-   unsupported claims

Rewrite the actual Sanity content.

Do NOT rewrite content in frontend code.

Do NOT fabricate:

-   students
-   customers
-   qualifications
-   years of experience
-   professional credentials
-   testing procedures
-   personal stories

Only publish verified information.

------------------------------------------------------------------------

# 21. GALLERY DUPLICATION --- CRITICAL

The previously observed repeated gallery entries may be caused by:

1.  duplicated Sanity documents
2.  duplicated Sanity references
3.  incorrect GROQ joins
4.  array flattening
5.  incorrect frontend mapping
6.  article-to-design relationship logic
7.  pagination bugs
8.  category filtering bugs

Do not assume the database contains duplicates.

First determine the root cause.

Example:

``` text
Article A
  Design 1
  Design 2
  Design 3
  Design 4
```

must not become:

``` text
Article A
Article A
Article A
Article A
```

because the frontend maps the article reference once per design.

The correct output should represent the actual design entities.

------------------------------------------------------------------------

# 22. SANITY GALLERY MODEL

Inspect whether the site uses:

``` text
Article → embedded designs
```

or:

``` text
Article → references Design documents
```

or another model.

Prefer individual Design documents when they genuinely need:

-   unique URLs
-   metadata
-   categories
-   related content
-   Trace Tool integration
-   search visibility

But do NOT migrate the schema unnecessarily.

------------------------------------------------------------------------

# 23. DESIGN INDEXING

Not every design needs a standalone indexable URL.

Index a design page when it has genuine unique value.

A standalone design page can contain:

-   unique title
-   image
-   description
-   category
-   placement
-   difficulty
-   size
-   fabric
-   materials
-   tracing guidance
-   related designs
-   related articles

If a design has only an image and a title, consider keeping it within a
useful gallery collection rather than generating thousands of thin
pages.

------------------------------------------------------------------------

# 24. CATEGORY PAGES

Category pages must be useful in each supported language.

For each localized category:

-   localized title
-   localized description
-   relevant designs
-   related articles
-   breadcrumbs
-   related categories

Do not expose empty categories.

Do not use the same generic English description on every language page.

------------------------------------------------------------------------

# 25. IMAGE ALT TEXT

Use actual image information.

If Sanity stores localized alt text, use the appropriate language.

Otherwise use accurate image descriptions.

Do not keyword stuff.

Example:

Good:

"Floral Aari embroidery sleeve design with curved vine and pearl
accents"

Bad:

"best aari work blouse design aari blouse design tracing design"

Do not describe visual details that are not present.

------------------------------------------------------------------------

# 26. ARTICLE PAGE STRUCTURE

For substantial articles:

-   title
-   author
-   published date
-   updated date if genuine
-   introduction
-   headings
-   paragraphs
-   lists
-   images
-   captions where useful
-   practical instructions
-   related designs
-   related articles
-   author information

Use Sanity Portable Text or the actual rich-text system.

Do not flatten everything into a generic text block.

------------------------------------------------------------------------

# 27. DESIGN PAGE STRUCTURE

Recommended:

# Design Name

Image

Short description

Design details:

-   category
-   placement
-   difficulty
-   size
-   fabric
-   materials

## Tracing

Practical tracing information.

## Embroidery suggestions

Only accurate information.

## Common mistakes

Useful guidance.

## Related designs

## Related articles

CTA:

"Trace this design"

only if that functionality actually exists.

------------------------------------------------------------------------

# 28. ABOUT PAGE

Improve the About page using genuine information.

Explain:

-   what Aari Work Designs is
-   who it serves
-   why it exists
-   Trace Tool
-   PDF Maker
-   design library
-   genuine creator information
-   genuine experience
-   support/contact

If About content is managed through Sanity, keep it there.

Do not hardcode editorial content into the frontend.

------------------------------------------------------------------------

# 29. AUTHOR PAGE

If useful, create a dynamic Sanity-powered author page.

Potential:

``` text
/[language]/author/[slug]
```

Use:

-   genuine name
-   genuine bio
-   genuine role
-   genuine expertise
-   articles

Do not fabricate credentials.

------------------------------------------------------------------------

# 30. AFFILIATE CONTENT

Keep legitimate affiliate recommendations if they provide value.

Each affiliate recommendation should contain original information.

Include:

-   what the product is
-   who it may suit
-   considerations
-   limitations
-   practical selection guidance

Do not copy retailer/manufacturer descriptions.

Add appropriate disclosure.

Do not create thin affiliate-only pages.

------------------------------------------------------------------------

# 31. INTERNAL LINKING

Make internal linking language-aware.

English pages should preferentially link to English equivalents.

Marathi pages should preferentially link to Marathi equivalents.

Hindi pages should preferentially link to Hindi equivalents.

Use translation relationships where available.

Avoid sending users from one language to another unnecessarily.

Related content should be dynamically selected from Sanity.

Do not hardcode related article arrays.

------------------------------------------------------------------------

# 32. LANGUAGE-AWARE RELATED CONTENT

For a localized article:

1.  Prefer related content in the same language.
2.  Prefer equivalent translated content.
3.  Only link to another language when there is a clear UX reason.
4.  Do not show untranslated titles inside a localized content list
    unless intentionally labeled.

------------------------------------------------------------------------

# 33. SEARCH / FILTER URLS

Audit all search/filter combinations across languages.

Examples:

``` text
/en/gallery?category=...
/mr/gallery?category=...
/hi/gallery?category=...
```

Control indexability of:

-   internal search
-   arbitrary filters
-   sort parameters
-   tracking parameters
-   empty results

Keep useful localized category pages indexable.

Do not accidentally noindex the main gallery.

------------------------------------------------------------------------

# 34. NAVIGATION

Keep primary navigation simple.

Recommended concept:

Home Gallery Trace Designs PDF Maker Articles About

Use the actual localized labels.

Footer:

Contact Privacy Policy Terms Refund Policy if applicable Affiliate
Disclosure if applicable

All navigation labels should be correctly localized.

------------------------------------------------------------------------

# 35. LANGUAGE SWITCHER UX

The switcher must be easy to understand.

Recommended:

English मराठी हिन्दी

or the site's actual supported language names.

When clicked, it should open the equivalent page.

Do not send every switch to the homepage.

If a translation doesn't exist, handle it safely.

------------------------------------------------------------------------

# 36. TRACE TOOL

Preserve the Trace Tool.

Improve its public informational content.

Explain:

-   purpose
-   how it works
-   loading a design
-   scaling
-   positioning
-   tracing
-   device support
-   practical tips
-   limitations

Make informational text crawlable.

Do not hardcode CMS content.

Do not make unsupported claims.

------------------------------------------------------------------------

# 37. PDF MAKER

Preserve the PDF Maker.

Provide useful documentation:

-   purpose
-   supported input
-   paper sizes
-   scaling
-   printing
-   common problems
-   limitations

Use actual functionality.

------------------------------------------------------------------------

# 38. PERFORMANCE

Optimize:

-   Sanity image transformations
-   responsive image sizes
-   image loading
-   LCP
-   INP
-   CLS
-   JS bundles
-   fonts
-   third-party scripts

Do not load huge original images unnecessarily.

Do not damage image quality required for embroidery design viewing.

Reserve image dimensions.

------------------------------------------------------------------------

# 39. MOBILE UX

Test all languages on mobile.

Check:

-   language switcher
-   navigation
-   gallery
-   articles
-   design pages
-   Trace Tool
-   PDF Maker
-   forms
-   affiliate links
-   legal pages

No horizontal scrolling.

------------------------------------------------------------------------

# 40. ACCESSIBILITY

Check:

-   heading hierarchy
-   alt text
-   button labels
-   form labels
-   keyboard navigation
-   color contrast
-   focus states
-   language attributes

Do not rely on color alone.

------------------------------------------------------------------------

# 41. SANITY DRAFT/PUBLISHED SAFETY

Production must not expose:

-   drafts
-   private documents
-   preview-only data
-   internal notes
-   unpublished translations
-   broken references

Verify the correct dataset/configuration.

------------------------------------------------------------------------

# 42. SANITY IMAGE CDN

Use Sanity image transformations where practical.

Check:

-   width
-   quality
-   format
-   crop
-   hotspot
-   responsive rendering

Do not alter the original asset unnecessarily.

------------------------------------------------------------------------

# 43. SANITY VALIDATION

Where practical, add validation for:

Posts:

-   title
-   slug
-   body
-   author
-   language/translation relationship
-   image where applicable

Designs:

-   title
-   slug
-   image
-   category
-   language if applicable

SEO:

-   title
-   description

Do not make fields mandatory if existing legitimate content cannot
support them.

------------------------------------------------------------------------

# 44. LOCALIZED SLUG VALIDATION

Ensure localized slugs are unique within their language/route system.

Prevent:

-   duplicate localized slugs
-   accidental collision
-   broken translated references

Do not assume English and Marathi slugs must be identical.

------------------------------------------------------------------------

# 45. TECHNICAL SEO QA

Create a route crawler for all supported languages.

For each URL report:

-   status
-   language
-   title
-   meta description
-   H1
-   canonical
-   hreflang
-   robots
-   word count
-   image count
-   alt text
-   structured data
-   internal links
-   broken links
-   redirect
-   indexability

------------------------------------------------------------------------

# 46. MULTILINGUAL SEO QA

Create a report like:

``` text
Language: English
Pages:
Indexed candidates:
Missing metadata:
Missing translations:
Broken hreflang:
Duplicate canonical:
Thin pages:

Language: Marathi
Pages:
Indexed candidates:
Missing metadata:
Missing translations:
Broken hreflang:
Duplicate canonical:
Thin pages:

Language: Hindi
Pages:
Indexed candidates:
Missing metadata:
Missing translations:
Broken hreflang:
Duplicate canonical:
Thin pages:
```

Use actual supported languages.

------------------------------------------------------------------------

# 47. DUPLICATE CONTENT DETECTION

Compare:

-   title
-   body
-   description
-   gallery descriptions
-   translated versions
-   URLs

Flag potential duplicates.

Do not automatically classify legitimate translations as duplicates.

Localized equivalent pages are expected to contain equivalent
information, but they must have correct language, metadata, canonical
and hreflang implementation.

------------------------------------------------------------------------

# 48. CONTENT CONSOLIDATION

If multiple posts in the same language cover the same intent:

1.  Select strongest article.
2.  Merge genuinely useful information.
3.  Update Sanity.
4.  Redirect obsolete URL.
5.  Update internal links.
6.  Update sitemap.

Do not merge simply because keywords overlap.

------------------------------------------------------------------------

# 49. NOINDEX STRATEGY

Potential noindex candidates:

-   internal search
-   empty results
-   temporary pages
-   account pages
-   checkout
-   preview
-   test routes
-   duplicate filter URLs
-   low-value utility states

Do not noindex:

-   all gallery pages
-   all articles
-   all localized pages
-   valuable design pages

Noindex should be intentional.

------------------------------------------------------------------------

# 50. SITEMAP + HREFLANG CONSISTENCY

The following must agree:

-   canonical
-   sitemap
-   hreflang
-   actual route
-   Sanity publication state

Never create:

``` text
hreflang → 404
sitemap → noindex
canonical → redirect
```

------------------------------------------------------------------------

# 51. REDIRECTS

When consolidating pages:

``` text
old URL → relevant new canonical URL
```

Avoid:

``` text
A → B → C
```

Prefer:

``` text
A → C
```

Do not redirect unrelated pages to the homepage.

------------------------------------------------------------------------

# 52. ERROR STATES

Localized 404 pages should be understandable in the user's language
where practical.

Provide:

-   page-not-found explanation
-   homepage
-   gallery
-   articles

Do not pretend missing content exists.

------------------------------------------------------------------------

# 53. NO DECEPTIVE UI

Every CTA must do what it says.

Examples:

"Trace Design" → actual Trace Tool

"Download PDF" → actual PDF flow

"Get Full Catalogue" → actual catalogue/purchase flow

Do not disguise ads as navigation.

Do not use misleading redirects.

------------------------------------------------------------------------

# 54. ADSENSE CONTENT QUALITY

The website should provide substantial value without advertisements.

The main value should be:

-   original Aari design resources
-   useful educational content
-   practical embroidery guidance
-   original design presentation
-   Trace Tool
-   PDF Maker
-   useful categories

Ads should be secondary.

Do not redesign the site around ads before approval.

------------------------------------------------------------------------

# 55. DO NOT MASS-GENERATE CONTENT

Do not create large numbers of generic AI articles.

Do not generate pages simply to target:

-   "best"
-   "top"
-   "simple"
-   "new"
-   "latest"

unless the pages genuinely serve distinct user intent.

Quality and usefulness matter more than URL count.

------------------------------------------------------------------------

# 56. DO NOT GAME GOOGLE

Never:

-   hide text
-   use invisible SEO text
-   keyword stuff
-   fabricate expertise
-   fabricate reviews
-   fabricate testimonials
-   fabricate statistics
-   fabricate business information
-   manipulate structured data
-   create doorway pages
-   create mass thin pages
-   buy fake traffic
-   create misleading redirects
-   disguise advertisements

------------------------------------------------------------------------

# 57. DATABASE / SANITY SAFETY

Before any mutation:

1.  Backup/export affected Sanity documents.
2.  Record document IDs.
3.  Record old slugs.
4.  Record references.
5.  Test migration.
6.  Run migration.
7.  Verify data.
8.  Verify frontend.
9.  Verify localized routes.
10. Verify sitemap/hreflang.

Never bulk-delete without backup.

------------------------------------------------------------------------

# 58. REQUIRED CONTENT CHANGE LOG

For content changes produce:

``` text
Document ID
Language
Old title
New title
Fields changed
Reason
Old slug
New slug
Redirect required
```

This must be retained as an audit trail.

------------------------------------------------------------------------

# 59. FINAL TESTING

Run:

-   production build
-   lint
-   TypeScript/typecheck
-   tests
-   full route crawl
-   mobile QA
-   desktop QA
-   broken-link check
-   image check
-   sitemap validation
-   robots validation
-   structured-data validation
-   canonical validation
-   hreflang validation
-   Sanity reference validation

Fix critical errors before completion.

------------------------------------------------------------------------

# 60. FINAL SANITY AUDIT

After changes report:

``` text
Posts:
Total:
Strong:
Needs editing:
Consolidated:
Thin:
Noindex:
Removed:

Designs:
Total:
Unique:
Duplicate references fixed:
Thin:
Missing metadata:

Translations:
Language:
Published:
Missing:
Needs review:
```

Use actual data.

------------------------------------------------------------------------

# 61. FINAL ADSENSE READINESS CHECK

## CONTENT

\[ \] Original useful content \[ \] Natural writing \[ \] No obvious AI
filler \[ \] No copied content \[ \] No mass-generated thin content \[
\] No repeated gallery records \[ \] Useful information around images \[
\] Affiliate content adds value \[ \] No fake claims

## MULTILINGUAL

\[ \] Every supported language audited \[ \] Correct language content \[
\] Correct HTML lang \[ \] Correct localized metadata \[ \] Correct
localized structured data \[ \] Correct canonical \[ \] Correct hreflang
\[ \] Correct language sitemap \[ \] No empty translation pages \[ \]
Language switcher maps equivalent pages

## TRUST

\[ \] About accurate \[ \] Author accurate \[ \] Contact works \[ \]
Privacy accurate \[ \] Terms accurate \[ \] Refund policy accurate where
applicable \[ \] Affiliate disclosure accurate

## TECHNICAL

\[ \] HTTPS \[ \] Sitemap valid \[ \] Robots valid \[ \] Canonicals
valid \[ \] Hreflang valid \[ \] Structured data valid \[ \] No
accidental noindex \[ \] No broken links \[ \] No redirect chains \[ \]
Public content crawlable

## UX

\[ \] Mobile good \[ \] Desktop good \[ \] Navigation clear \[ \]
Language switcher works \[ \] Gallery works \[ \] Trace Tool works \[ \]
PDF Maker works \[ \] No deceptive UI \[ \] No intrusive popups

------------------------------------------------------------------------

# 62. REQUIRED FINAL REPORT FROM ANTIGRAVITY

Do not respond with only "done".

Return:

## A. Architecture

-   framework
-   routing
-   Sanity architecture
-   localization architecture
-   GROQ architecture

## B. Sanity

-   schemas inspected
-   documents audited
-   documents changed
-   migrations
-   duplicate records
-   reference fixes

## C. Multilingual

For each language: - pages - content status - metadata - canonical -
hreflang - sitemap - missing translations

## D. Gallery

-   original issue
-   root cause
-   fix
-   duplicates
-   unique designs

## E. Articles

-   audited
-   rewritten
-   merged
-   noindexed
-   removed
-   remaining risks

## F. SEO

-   metadata
-   canonicals
-   hreflang
-   sitemap
-   robots
-   structured data
-   breadcrumbs
-   internal linking

## G. Performance

-   image optimization
-   JS
-   fonts
-   Core Web Vitals work

## H. UX

-   mobile
-   desktop
-   accessibility
-   navigation
-   language switching

## I. Testing

-   build
-   lint
-   typecheck
-   tests
-   crawl
-   broken links
-   sitemap
-   structured data
-   hreflang

## J. Remaining risks

Explicitly list unresolved issues.

## K. AdSense readiness

Use:

PASS WARN FAIL

Do not claim guaranteed approval.

------------------------------------------------------------------------

# 63. HUMAN REVIEW BEFORE ADSENSE RESUBMISSION

The owner must review all:

-   creator information
-   author biographies
-   business information
-   experience claims
-   product claims
-   design claims
-   affiliate disclosure
-   legal information
-   translations

Correct anything inaccurate.

Only after the site is genuinely ready should an AdSense review be
requested.

------------------------------------------------------------------------

# 64. GOOGLE DOCUMENTATION BASELINE

Use current official Google documentation before final submission.

Review:

-   AdSense site approval/readiness guidance
-   AdSense Program Policies
-   Google Publisher Policies
-   Google Search Essentials
-   Google Search spam policies
-   scaled content guidance
-   hreflang documentation
-   canonical documentation
-   sitemap documentation
-   structured data documentation
-   Core Web Vitals documentation

Google policies/documentation can change. Verify the current versions
before resubmission.

------------------------------------------------------------------------

# 65. FINAL IMPLEMENTATION COMMAND

Treat this document as an engineering + content-quality specification.

Do not rebuild the website unnecessarily.

Do not hardcode Sanity content.

Do not replace Sanity.

Do not assume the gallery duplication is a Sanity database problem until
the GROQ/query/rendering path has been inspected.

Do not modify all articles automatically.

Do not fabricate facts or expertise.

Do not create low-quality translations.

Do not create pages solely for SEO.

Do not use noindex to hide problems instead of fixing them.

Do not delete content without backup.

Preserve existing working business functionality.

The final website should be:

**a genuine, useful, multilingual Aari embroidery resource powered by
Sanity, with strong original content, clean localized SEO, reliable
navigation, useful tools, and a technically clean indexable architecture
suitable for an AdSense review.**
