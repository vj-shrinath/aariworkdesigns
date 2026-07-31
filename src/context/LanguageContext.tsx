'use client';

import React, { createContext, useContext, useMemo, useCallback } from 'react';
import type { Locale, Dictionary } from '@/lib/i18n';
import { defaultLocale } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  dict: Dictionary;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  dict: {},
  t: (key: string) => key,
});

export function LanguageProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const tFn = useCallback(
    (key: string, fallback?: string): string => {
      const parts = key.split('.');
      let current: any = dict;
      for (const part of parts) {
        if (current == null || typeof current !== 'object') return fallback ?? key;
        current = current[part];
      }
      return typeof current === 'string' ? current : (fallback ?? key);
    },
    [dict]
  );

  const value = useMemo(
    () => ({ locale, dict, t: tFn }),
    [locale, dict, tFn]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
