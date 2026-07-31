You are an expert Next.js 15, React, TypeScript, Tailwind CSS, and internationalization (i18n) engineer.

Your task is to modify my existing AariWorkDesigns.com project to support multilingual functionality while preserving all existing features, UI, APIs, authentication, database logic, tracing tool, and design viewer.

Requirements:

## 1. Internationalization
- Implement a scalable i18n architecture.
- Use locale-based routing.
- URLs should be:

/en
/hi
/mr
/ta
/te
/es
/fr
/ar
/de
/pt
/ja
/ko
...

Every page should have its translated version.

## 2. Automatic Language Detection

On the first visit:
- Detect browser language.
- Redirect users to the appropriate locale.
- Store the selected language in cookies/localStorage.
- Never redirect again if the user manually changes language.

## 3. Language Switcher

Add a language selector in the top navigation.

Requirements:
- Globe icon
- Searchable dropdown
- Display native language names:
  English
  हिन्दी
 मराठी
  தமிழ்
  తెలుగు
  Español
  Français
  العربية
  日本語
  한국어
- Remember the user's choice.

## 4. Translation Structure

Do NOT hardcode text.

Move all UI strings into translation files.

Example:

locales/
    en.json
    hi.json
    mr.json
    ta.json
    te.json
    es.json
    fr.json

Every button, label, heading, tooltip, dialog, toast, error message, placeholder, validation message, menu item, modal, and footer text must come from translation files.

## 5. Dynamic Database Content

Support multilingual fields for:

- Design titles
- Categories
- Tags
- Tutorials
- Blog posts
- FAQs
- SEO descriptions

If a translation doesn't exist:
- Show English automatically.

## 6. SEO

Generate localized:

- Title
- Meta description
- Canonical URL
- OpenGraph tags
- Twitter Cards
- JSON-LD
- Image ALT text

Generate proper hreflang tags for every language.

Example:

en
hi
mr
ta
te
es
fr

Create localized sitemap.xml.

## 7. Search

Search should work across all translated titles.

Searching:

"मोर"

should find

"Peacock Design"

Searching:

"neck"

should also return

"नेक डिज़ाइन"

if translations exist.

## 8. Performance

Do NOT increase bundle size unnecessarily.

Requirements:
- Lazy-load translation files.
- Cache locale files.
- Use server components where possible.
- Maintain excellent Core Web Vitals.

## 9. UI

Do NOT redesign the website.

Keep:
- Existing colors
- Existing layout
- Existing animations
- Existing spacing
- Existing tracing tool
- Existing upload flow

Only add multilingual support.

## 10. RTL Support

Arabic should automatically switch to RTL.

Everything else remains LTR.

## 11. Future Expansion

Adding a new language should require only:
- Creating one JSON file
- Adding one locale entry

No code duplication.

## 12. Code Quality

- Clean architecture
- Modular components
- Strong TypeScript typing
- Reusable hooks
- Proper folder structure
- No breaking changes

## 13. Deliverables

Implement the complete multilingual system across the entire project.

At the end:
1. Explain every file that was modified.
2. Explain why each change was made.
3. List all new dependencies.
4. Show the updated folder structure.
5. Ensure the project builds successfully without errors.

Do not simplify the implementation. Produce production-ready code that follows Next.js best practices and is optimized for SEO, scalability, and maintainability.