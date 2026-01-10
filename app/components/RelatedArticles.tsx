'use client';

import Link from 'next/link';
import { ArrowRight, Tag, BookOpen } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

interface RelatedItem {
    type: 'article' | 'deal';
    slug: string;
    title: string;
    description?: string;
    highlight?: string; // For deals: "19% OFF", "Free Trial", etc.
}

interface RelatedArticlesProps {
    lang: Locale;
    currentSlug: string; // To exclude current article
}

const translations = {
    en: {
        title: "You Might Also Like",
        readMore: "Read More",
        viewDeal: "View Deal",
        articles: "More Articles",
        deals: "Top Deals"
    },
    ro: {
        title: "S-ar Putea Să-ți Placă",
        readMore: "Citește Mai Mult",
        viewDeal: "Vezi Oferta",
        articles: "Alte Articole",
        deals: "Cele Mai Bune Oferte"
    },
    es: {
        title: "También Te Puede Gustar",
        readMore: "Leer Más",
        viewDeal: "Ver Oferta",
        articles: "Más Artículos",
        deals: "Mejores Ofertas"
    }
};

// Related content data
const relatedContent: Record<Locale, RelatedItem[]> = {
    en: [
        {
            type: 'article',
            slug: 'how-to-pass-ftmo-challenge',
            title: 'How to Pass FTMO Challenge – Why Most Traders Fail',
            description: 'The exact strategies to pass your FTMO challenge.'
        },
        {
            type: 'article',
            slug: 'how-to-pass-prop-firm-challenge',
            title: 'How to Pass a Prop Firm Challenge: 10 Proven Steps',
            description: 'Master the strategies that help traders pass their evaluations.'
        },
        {
            type: 'article',
            slug: 'pass-rates-2026',
            title: 'Prop Firm Pass Rates 2026: Real Statistics',
            description: 'Discover actual success rates from 15+ prop firms.'
        },
        {
            type: 'article',
            slug: 'how-hard-is-it-to-get-funded-trading',
            title: 'How Hard Is It To Get Funded Trading?',
            description: 'The real difficulty of becoming a funded trader.'
        },
        {
            type: 'deal',
            slug: 'ftmo',
            title: 'FTMO',
            highlight: '19% OFF',
            description: 'Industry leader with consistent payouts.'
        },
        {
            type: 'deal',
            slug: 'fundednext',
            title: 'FundedNext',
            highlight: '15% Profit Share',
            description: 'Earn during your challenge phase.'
        }
    ],
    ro: [
        {
            type: 'article',
            slug: 'how-to-pass-ftmo-challenge',
            title: 'Cum să Treci Challenge-ul FTMO – De Ce Majoritatea Pică',
            description: 'Strategiile exacte pentru a trece challenge-ul FTMO.'
        },
        {
            type: 'article',
            slug: 'how-to-pass-prop-firm-challenge',
            title: 'Cum să Treci un Challenge Prop Firm: 10 Pași',
            description: 'Stăpânește strategiile care ajută traderii să treacă evaluările.'
        },
        {
            type: 'article',
            slug: 'pass-rates-2026',
            title: 'Rate de Trecere Prop Firm 2026: Statistici Reale',
            description: 'Descoperă ratele reale de succes de la peste 15 firme.'
        },
        {
            type: 'article',
            slug: 'how-hard-is-it-to-get-funded-trading',
            title: 'Cât de Greu Este să Fii Finanțat?',
            description: 'Dificultatea reală de a deveni trader finanțat.'
        },
        {
            type: 'deal',
            slug: 'ftmo',
            title: 'FTMO',
            highlight: '19% REDUCERE',
            description: 'Lider în industrie cu plăți consistente.'
        },
        {
            type: 'deal',
            slug: 'fundednext',
            title: 'FundedNext',
            highlight: '15% Profit Share',
            description: 'Câștigă în timpul fazei de challenge.'
        }
    ],
    es: [
        {
            type: 'article',
            slug: 'how-to-pass-ftmo-challenge',
            title: 'Cómo Pasar el Desafío FTMO – Por Qué la Mayoría Falla',
            description: 'Las estrategias exactas para aprobar tu desafío FTMO.'
        },
        {
            type: 'article',
            slug: 'how-to-pass-prop-firm-challenge',
            title: 'Cómo Pasar un Desafío Prop Firm: 10 Pasos',
            description: 'Domina las estrategias que ayudan a los traders a pasar.'
        },
        {
            type: 'article',
            slug: 'pass-rates-2026',
            title: 'Tasas de Aprobación Prop Firm 2026',
            description: 'Descubre las tasas reales de éxito de más de 15 firmas.'
        },
        {
            type: 'article',
            slug: 'how-hard-is-it-to-get-funded-trading',
            title: '¿Qué tan Difícil es Conseguir Financiación?',
            description: 'La dificultad real de convertirse en trader financiado.'
        },
        {
            type: 'deal',
            slug: 'ftmo',
            title: 'FTMO',
            highlight: '19% DESCUENTO',
            description: 'Líder de la industria con pagos consistentes.'
        },
        {
            type: 'deal',
            slug: 'fundednext',
            title: 'FundedNext',
            highlight: '15% Profit Share',
            description: 'Gana durante tu fase de desafío.'
        }
    ]
};

// Affiliate links for deals
const dealLinks: Record<string, string> = {
    'ftmo': 'https://trader.ftmo.com/?affiliates=4354',
    'fundednext': 'https://fundednext.com/?ref=propfirmhub',
    'the5ers': 'https://the5ers.com',
};

export default function RelatedArticles({ lang, currentSlug }: RelatedArticlesProps) {
    const t = translations[lang] || translations.en;
    const content = relatedContent[lang] || relatedContent.en;

    // Filter out current article and get up to 4 items (2 articles + 2 deals)
    const articles = content
        .filter(item => item.type === 'article' && item.slug !== currentSlug)
        .slice(0, 2);

    const deals = content
        .filter(item => item.type === 'deal')
        .slice(0, 2);

    const linkPrefix = lang === 'en' ? '' : `/${lang}`;

    return (
        <section className="mt-16 pt-8 border-t border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-emerald-400" />
                {t.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Related Articles */}
                {articles.map((item, i) => (
                    <Link
                        key={`article-${i}`}
                        href={`${linkPrefix}/blog/${item.slug}`}
                        className="group block bg-slate-900/30 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 hover:bg-slate-900/50 transition-all"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="h-4 w-4 text-emerald-400" />
                            <span className="text-xs text-emerald-400 font-medium uppercase">{t.articles}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                            {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-3 line-clamp-2">
                            {item.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                            {t.readMore}
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </Link>
                ))}

                {/* Deals */}
                {deals.map((item, i) => (
                    <a
                        key={`deal-${i}`}
                        href={dealLinks[item.slug] || `${linkPrefix}/coupons`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-5 hover:border-emerald-500/50 hover:scale-[1.02] transition-all"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <Tag className="h-4 w-4 text-amber-400" />
                                <span className="text-xs text-amber-400 font-medium uppercase">{t.deals}</span>
                            </div>
                            {item.highlight && (
                                <span className="px-2 py-1 bg-emerald-500 text-white text-xs font-bold rounded">
                                    {item.highlight}
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-3">
                            {item.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-emerald-400 text-sm font-medium group-hover:gap-2 transition-all">
                            {t.viewDeal}
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
