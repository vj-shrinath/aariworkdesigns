// ─── i18n Configuration ───────────────────────────────────────────────
// Centralised locale registry, dictionary loader, and helpers.

export const defaultLocale = 'en';

export const locales = [
  'en', 'hi', 'mr', 'ta', 'te',
  'es', 'fr', 'ar', 'de', 'pt', 'ja', 'ko',
] as const;

export type Locale = (typeof locales)[number];

/** RTL languages */
export const rtlLocales: Locale[] = ['ar'];

export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

/** Native display names for each locale */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  mr: 'मराठी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  de: 'Deutsch',
  pt: 'Português',
  ja: '日本語',
  ko: '한국어',
};

/** Check whether a string is a valid locale */
export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

// ─── Dictionary Loader (server-side) ──────────────────────────────────
// Lazy-load the appropriate JSON. This keeps the bundle lean because
// only the requested locale is ever imported.

export type Dictionary = Record<string, any>;

const dictionaryCache = new Map<Locale, Dictionary>();

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!;
  }

  try {
    const dict = (await import(`@/locales/${locale}.json`)).default;
    dictionaryCache.set(locale, dict);
    return dict;
  } catch {
    // Fallback to English if the file is missing
    if (locale !== defaultLocale) {
      return getDictionary(defaultLocale);
    }
    return {};
  }
}

// ─── Translation helpers ──────────────────────────────────────────────

/**
 * Safely retrieve a nested key from a dictionary object.
 * Example: t(dict, 'header.nav.home')  →  dict.header.nav.home
 */
export function t(dict: Dictionary, key: string, fallback?: string): string {
  const parts = key.split('.');
  let current: any = dict;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return fallback ?? key;
    current = current[part];
  }
  return typeof current === 'string' ? current : (fallback ?? key);
}

/**
 * For dynamic DB content: pick a localised field if it exists, else fall
 * back to the base field. E.g. translateField(item, 'title', 'hi')
 * checks item.title_hi → item.title.
 */
export function translateField(obj: any, field: string, locale: Locale): string {
  if (!obj) return '';
  if (locale !== defaultLocale) {
    const localisedKey = `${field}_${locale}`;
    if (obj[localisedKey]) return obj[localisedKey];
  }
  return obj[field] ?? '';
}
