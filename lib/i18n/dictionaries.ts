import type { Locale } from './config';

// Dynamically import dictionaries
const dictionaries = {
    en: () => import('@/locales/en.json').then((module) => module.default),
    ro: () => import('@/locales/ro.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
