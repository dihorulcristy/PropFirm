'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Search, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n/config';

// Translations inline for client component
const translations = {
    en: {
        home: "Home",
        compare: "Compare",
        coupons: "Coupons",
        blog: "Blog",
        faq: "FAQ",
        searchPlaceholder: "Search firms..."
    },
    ro: {
        home: "Acasă",
        compare: "Compară",
        coupons: "Cupoane",
        blog: "Blog",
        faq: "Întrebări",
        searchPlaceholder: "Caută firme..."
    }
};

interface HeaderProps {
    lang?: Locale;
}

export default function Header({ lang = 'en' }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const t = translations[lang] || translations.en;

    // Close language menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setLangMenuOpen(false);
        if (langMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [langMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const basePath = lang === 'en' ? '/' : `/${lang}`;
        // If we're not on the homepage, navigate there first
        if (pathname !== basePath && pathname !== `/${lang}`) {
            router.push(`${basePath}#${sectionId}`);
            setMobileMenuOpen(false);
            return;
        }

        // If we're on homepage, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setMobileMenuOpen(false);
        }
    };

    const switchLanguage = (newLang: Locale) => {
        // Set cookie to persist preference
        document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;

        // Get current path without locale prefix
        let newPath = pathname;

        // Remove current locale prefix if exists
        for (const locale of locales) {
            if (pathname.startsWith(`/${locale}/`)) {
                newPath = pathname.substring(locale.length + 1);
                break;
            } else if (pathname === `/${locale}`) {
                newPath = '/';
                break;
            }
        }

        // Add new locale prefix (skip for default 'en')
        if (newLang === 'en') {
            const dest = newPath || '/';
            // Force reload for root path to ensure middleware re-runs with new cookie
            window.location.href = dest;
        } else {
            const dest = `/${newLang}${newPath === '/' ? '' : newPath}`;
            window.location.href = dest;
        }

        setLangMenuOpen(false);
        setMobileMenuOpen(false);
    };

    const getCouponsPath = () => lang === 'en' ? '/coupons' : `/${lang}/coupons`;
    const getBlogPath = () => lang === 'en' ? '/blog' : `/${lang}/blog`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href={lang === 'en' ? '/' : `/${lang}`} className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="PropFirmHub Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl font-bold text-white font-display">PropFirmHub</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                        <button onClick={() => scrollToSection('hero')} className="hover:text-emerald-500 transition-colors">
                            {t.home}
                        </button>
                        <button onClick={() => scrollToSection('comparison')} className="hover:text-emerald-500 transition-colors">
                            {t.compare}
                        </button>
                        <Link href={getCouponsPath()} className="hover:text-emerald-500 transition-colors">
                            {t.coupons}
                        </Link>
                        <Link href={getBlogPath()} className="hover:text-emerald-500 transition-colors">
                            {t.blog}
                        </Link>
                        <button onClick={() => scrollToSection('faq')} className="hover:text-emerald-500 transition-colors">
                            {t.faq}
                        </button>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Desktop Search */}
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                        <input
                            type="search"
                            placeholder={t.searchPlaceholder}
                            className="h-9 w-48 lg:w-56 xl:w-64 rounded-md border border-slate-800 bg-black/60 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                    </div>

                    {/* Language Switcher - Desktop */}
                    <div className="relative hidden md:block">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setLangMenuOpen(!langMenuOpen);
                            }}
                            className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg border border-slate-800 hover:border-slate-700"
                        >
                            <Globe className="h-4 w-4" />
                            <span>{localeFlags[lang]}</span>
                            <span className="hidden lg:inline">{localeNames[lang]}</span>
                        </button>

                        {langMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-40 bg-black/95 border border-slate-800 rounded-lg shadow-xl overflow-hidden z-50">
                                {locales.map((locale) => (
                                    <button
                                        key={locale}
                                        onClick={() => switchLanguage(locale)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${locale === lang
                                            ? 'bg-emerald-500/20 text-emerald-400'
                                            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                            }`}
                                    >
                                        <span className="text-lg">{localeFlags[locale]}</span>
                                        <span>{localeNames[locale]}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed right-0 top-16 h-[calc(100vh-4rem)] w-64 bg-black/80 backdrop-blur border-l border-slate-800 md:hidden animate-slide-in">
                        <nav className="flex flex-col p-4 gap-2">
                            {/* Language Switcher - Mobile */}
                            <div className="pb-4 mb-2 border-b border-slate-800">
                                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 px-4">Language</p>
                                <div className="flex gap-2">
                                    {locales.map((locale) => (
                                        <button
                                            key={locale}
                                            onClick={() => switchLanguage(locale)}
                                            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${locale === lang
                                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                                                : 'text-slate-400 hover:bg-slate-800 border border-slate-700'
                                                }`}
                                        >
                                            <span>{localeFlags[locale]}</span>
                                            <span>{localeNames[locale]}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                {t.home}
                            </button>
                            <button
                                onClick={() => scrollToSection('comparison')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                {t.compare}
                            </button>
                            <Link
                                href={getCouponsPath()}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                {t.coupons}
                            </Link>
                            <Link
                                href={getBlogPath()}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                {t.blog}
                            </Link>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className="text-left px-4 py-3 text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all"
                            >
                                {t.faq}
                            </button>

                            {/* Mobile Search */}
                            <div className="relative mt-4">
                                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                                <input
                                    type="search"
                                    placeholder={t.searchPlaceholder}
                                    className="w-full h-10 rounded-lg border border-slate-700 bg-slate-800 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                />
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
}
