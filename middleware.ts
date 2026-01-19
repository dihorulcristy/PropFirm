import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, getLocaleFromHeaders, type Locale } from './lib/i18n/config';

// Paths that should not be localized
const publicPaths = [
    '/api',
    '/_next',
    '/favicon.ico',
    '/logo.png',
    '/og-image.jpg',
    '/logos',
    '/admin',
];

function getLocaleFromPath(pathname: string): Locale | null {
    const segments = pathname.split('/');
    const potentialLocale = segments[1];
    if (locales.includes(potentialLocale as Locale)) {
        return potentialLocale as Locale;
    }
    return null;
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Specialized redirect for prop-firm pages that are missing from root app directory
    // This fixes the issue where /prop-firm/slug return 404 because the file only exists in [lang]
    if (pathname.startsWith('/prop-firm/')) {
        const url = request.nextUrl.clone();
        url.pathname = `/en${pathname}`;
        return NextResponse.redirect(url);
    }

    // Skip public paths
    if (publicPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.next();
    }

    // Check if path already has a locale
    const pathnameLocale = getLocaleFromPath(pathname);

    if (pathnameLocale) {
        // Special case: Redirect /en to / (root) to avoid duplicate content
        // This ensures the main English page is served from path / instead of /en
        if (pathnameLocale === 'en' && pathname === '/en') {
            const url = request.nextUrl.clone();
            url.pathname = '/';
            return NextResponse.redirect(url);
        }

        // Path has locale, save preference to cookie
        const response = NextResponse.next();
        response.cookies.set('NEXT_LOCALE', pathnameLocale, {
            maxAge: 60 * 60 * 24 * 365, // 1 year
            path: '/',
        });
        return response;
    }

    // Path doesn't have locale - determine which one to use
    let locale: Locale;

    // 1. Check cookie for saved preference
    const savedLocale = request.cookies.get('NEXT_LOCALE')?.value as Locale | undefined;
    if (savedLocale && locales.includes(savedLocale)) {
        locale = savedLocale;
    } else {
        // 2. Detect from headers (geo/language)
        const acceptLanguage = request.headers.get('accept-language');
        // Vercel provides x-vercel-ip-country, Netlify provides x-country
        const country = request.headers.get('x-vercel-ip-country') ||
            request.headers.get('x-country') ||
            null;

        locale = getLocaleFromHeaders(acceptLanguage, country);
    }

    // Don't redirect for default locale (keep URLs clean)
    if (locale === defaultLocale) {
        const response = NextResponse.next();
        response.cookies.set('NEXT_LOCALE', locale, {
            maxAge: 60 * 60 * 24 * 365,
            path: '/',
        });
        return response;
    }

    // Redirect to localized path
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;

    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', locale, {
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
    });

    return response;
}

export const config = {
    matcher: [
        // Match all paths except static files and api
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
