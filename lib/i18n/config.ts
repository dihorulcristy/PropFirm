export const locales = ['en', 'ro', 'es', 'it'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
    en: 'English',
    ro: 'Română',
    es: 'Español',
    it: 'Italiano',
};

export const localeFlags: Record<Locale, string> = {
    en: '🇬🇧',
    ro: '🇷🇴',
    es: '🇪🇸',
    it: '🇮🇹',
};

// Country codes that should default to Romanian
export const romanianCountries = ['RO', 'MD'];

// Language codes that should default to Romanian
export const romanianLanguages = ['ro', 'ro-RO', 'ro-MD'];

// Country codes that should default to Spanish
export const spanishCountries = ['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'];

// Language codes that should default to Spanish
export const spanishLanguages = ['es', 'es-ES', 'es-MX', 'es-AR', 'es-CO', 'es-CL'];

// Country codes that should default to Italian
export const italianCountries = ['IT', 'SM', 'VA'];

// Language codes that should default to Italian
export const italianLanguages = ['it', 'it-IT', 'it-CH'];

export function getLocaleFromHeaders(
    acceptLanguage: string | null,
    country: string | null
): Locale {
    // First check country
    if (country) {
        const upperCountry = country.toUpperCase();
        if (romanianCountries.includes(upperCountry)) {
            return 'ro';
        }
        if (spanishCountries.includes(upperCountry)) {
            return 'es';
        }
        if (italianCountries.includes(upperCountry)) {
            return 'it';
        }
    }

    // Then check Accept-Language header
    if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
        for (const lang of languages) {
            if (romanianLanguages.some(rl => lang.toLowerCase().startsWith(rl.toLowerCase()))) {
                return 'ro';
            }
            if (spanishLanguages.some(sl => lang.toLowerCase().startsWith(sl.toLowerCase()))) {
                return 'es';
            }
            if (italianLanguages.some(il => lang.toLowerCase().startsWith(il.toLowerCase()))) {
                return 'it';
            }
        }
    }

    return defaultLocale;
}
