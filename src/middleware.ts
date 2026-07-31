import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n';

// Static assets and API routes to bypass redirection
const PUBLIC_FILE_PATTERN = /\.(.*)$/;
const BYPASS_PATHS = [
  '/_next',
  '/api',
  '/images',
  '/robots.txt',
  '/sitemap.xml',
  '/feed.xml',
  '/favicon.ico',
  '/logo.png',
  '/app-mockup.webp',
  '/studio-photo.webp',
  '/studio-text.webp',
];

function shouldBypass(pathname: string): boolean {
  if (BYPASS_PATHS.some((path) => pathname.startsWith(path) || pathname === path)) {
    return true;
  }
  // Allow all extensions (e.g. image files, json, webmanifest)
  if (PUBLIC_FILE_PATTERN.test(pathname)) {
    return true;
  }
  return false;
}

function getPreferredLocale(request: NextRequest): string {
  // 1. Check Cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferences = acceptLanguage
      .split(',')
      .map((entry) => {
        const [lang, qValue] = entry.split(';q=');
        return {
          code: lang.trim().split('-')[0], // e.g. "en" from "en-US"
          priority: qValue ? parseFloat(qValue) : 1.0,
        };
      })
      .sort((a, b) => b.priority - a.priority);

    for (const pref of preferences) {
      if (isValidLocale(pref.code)) {
        return pref.code;
      }
    }
  }

  // 3. Fallback to default
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // Bypass static files and API routes
  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  // Determine if pathname already begins with a valid locale
  const segments = pathname.split('/');
  const possibleLocale = segments[1]; // segment after the first slash

  if (isValidLocale(possibleLocale)) {
    // If the path contains a valid locale, check that the cookie matches it
    const response = NextResponse.next();
    const currentCookie = request.cookies.get('NEXT_LOCALE')?.value;
    if (currentCookie !== possibleLocale) {
      response.cookies.set('NEXT_LOCALE', possibleLocale, {
        path: '/',
        maxAge: 365 * 24 * 60 * 60, // 1 year sticky preference
      });
    }
    return response;
  }

  // Path is missing a valid locale prefix. Determine correct locale.
  const locale = getPreferredLocale(request);

  // Safely redirect to /locale/remaining-path
  // If pathname is `/`, we redirect to `/${locale}`
  // If pathname is `/about`, we redirect to `/${locale}/about`
  const redirectPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  const redirectUrl = new URL(`${redirectPath}${search}`, request.url);

  const response = NextResponse.redirect(redirectUrl);
  // Set the preference cookie on redirection
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60,
  });
  return response;
}

export const config = {
  // Run on all paths except explicit static assets
  matcher: ['/((?!_next|api|assets|favicon.ico|.*\\..*).*)'],
};
