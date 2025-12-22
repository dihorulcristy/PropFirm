export const locales = ['en', 'ro', 'es'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    ro: 'Română',
    es: 'Español',
};

export const localeFlags: Record<Locale, string> = {
    en: '🇬🇧',
    ro: '🇷🇴',
    es: '🇪🇸',
};

// Country codes that should default to Romanian
export const romanianCountries = ['RO', 'MD'];

// Language codes that should default to Romanian
export const romanianLanguages = ['ro', 'ro-RO', 'ro-MD'];

export function getLocaleFromHeaders(
    acceptLanguage: string | null,
    country: string | null
): Locale {
    // First check country
    if (country && romanianCountries.includes(country.toUpperCase())) {
        return 'ro';
    }

    // Then check Accept-Language header
    if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
        for (const lang of languages) {
            if (romanianLanguages.some(rl => lang.toLowerCase().startsWith(rl.toLowerCase()))) {
                return 'ro';
            }
        }
    }

    return defaultLocale;
}
