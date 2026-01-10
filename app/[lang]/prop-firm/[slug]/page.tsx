import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Star, ShieldCheck, Check, X, Copy, ExternalLink, Clock, Percent, Globe, Zap, Calendar, CreditCard } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import { getFirmBySlug, getAllFirmSlugs, pageTranslations, allPropFirms } from '@/lib/firms-data';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ lang: Locale; slug: string }>;
}

// Generate static paths for all firms
export async function generateStaticParams() {
    const slugs = getAllFirmSlugs();
    const langs: Locale[] = ['en', 'ro', 'es'];

    return langs.flatMap(lang =>
        slugs.map(slug => ({ lang, slug }))
    );
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang, slug } = await params;
    const firm = getFirmBySlug(slug);

    if (!firm) return { title: 'Not Found' };

    const t = pageTranslations[lang] || pageTranslations.en;
    const baseUrl = 'https://propfirmhub.com';
    const path = lang === 'en' ? `/prop-firm/${slug}` : `/${lang}/prop-firm/${slug}`;

    const titles = {
        en: `${firm.name} Review 2025 – ${firm.offer} Discount Code & Pricing`,
        ro: `${firm.name} Recenzie 2025 – ${firm.offer} Cod Reducere & Prețuri`,
        es: `${firm.name} Reseña 2025 – ${firm.offer} Código Descuento & Precios`
    };

    const descriptions = {
        en: `${firm.name} review: ${firm.profitSplit} profit split, ${firm.maxDD} max drawdown. Get ${firm.offer} with code ${firm.coupon}. Full pricing, rules & trader reviews.`,
        ro: `${firm.name} recenzie: ${firm.profitSplit} împărțire profit, ${firm.maxDD} drawdown maxim. Obține ${firm.offer} cu codul ${firm.coupon}. Prețuri, reguli și recenzii.`,
        es: `${firm.name} reseña: ${firm.profitSplit} división de ganancias, ${firm.maxDD} drawdown máximo. Obtén ${firm.offer} con código ${firm.coupon}. Precios, reglas y reseñas.`
    };

    return {
        title: titles[lang] || titles.en,
        description: descriptions[lang] || descriptions.en,
        keywords: `${firm.name} review, ${firm.name} discount code, ${firm.name} coupon, ${firm.name} ${firm.coupon}, prop firm review, ${firm.name} pricing`,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/prop-firm/${slug}`,
                'ro': `${baseUrl}/ro/prop-firm/${slug}`,
                'es': `${baseUrl}/es/prop-firm/${slug}`
            }
        },
        openGraph: {
            title: titles[lang] || titles.en,
            description: descriptions[lang] || descriptions.en,
            url: `${baseUrl}${path}`,
            type: 'article'
        }
    };
}

export default async function PropFirmPage({ params }: PageProps) {
    const { lang, slug } = await params;
    const firm = getFirmBySlug(slug);

    if (!firm) {
        notFound();
    }

    const t = pageTranslations[lang] || pageTranslations.en;
    const homeLink = `/${lang}`;

    // Get related firms (same market type, exclude current)
    const relatedFirms = allPropFirms
        .filter(f => f.slug !== firm.slug && f.marketType === firm.marketType)
        .slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-16 max-w-5xl">
                    {/* Back link */}
                    <Link href={homeLink} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        {t.backToCompare}
                    </Link>

                    {/* Hero Section */}
                    <header className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            {/* Logo */}
                            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2 flex-shrink-0">
                                <img src={firm.logoUrl} alt={firm.name} className="w-full h-full object-contain" />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl md:text-4xl font-bold text-white">{firm.name}</h1>
                                    {firm.verified && (
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                                            <ShieldCheck className="h-3 w-3" />
                                            {t.verified}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                        {firm.rating}/5 {t.rating}
                                    </span>
                                    <span>{firm.challengeType} Challenge</span>
                                    <span className="capitalize">{firm.marketType}</span>
                                </div>

                                {/* Offer Badge */}
                                {firm.offer && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold">
                                        <Zap className="h-4 w-4" />
                                        {firm.offer}
                                        {firm.coupon && firm.coupon !== 'No Code' && (
                                            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-sm">
                                                {firm.coupon}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={firm.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                >
                                    {t.getFunded}
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <span className="text-center text-slate-400 text-sm">
                                    {t.price}: <span className="text-white font-bold">{firm.price}</span>
                                    {firm.oldPrice !== firm.price && (
                                        <span className="line-through ml-2 text-slate-500">{firm.oldPrice}</span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </header>

                    {/* Overview */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">{t.overview}</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {firm.description[lang] || firm.description.en}
                        </p>
                    </section>

                    {/* Key Features Grid */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">{t.keyFeatures}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                                <Percent className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                                <div className="text-sm text-slate-400">{t.maxDrawdown}</div>
                                <div className="text-xl font-bold text-white">{firm.maxDD}</div>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                                <CreditCard className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                                <div className="text-sm text-slate-400">{t.profitSplit}</div>
                                <div className="text-xl font-bold text-white">{firm.profitSplit}</div>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                                <Clock className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                                <div className="text-sm text-slate-400">{t.payoutSpeed}</div>
                                <div className="text-xl font-bold text-white">{firm.payoutDays} {t.days}</div>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                                <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                                <div className="text-sm text-slate-400">{t.usaAccepted}</div>
                                <div className="text-xl font-bold text-white">{firm.features.usaAccepted ? t.yes : t.no}</div>
                            </div>
                        </div>
                    </section>

                    {/* Trading Platforms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">{t.tradingPlatforms}</h2>
                        <div className="flex flex-wrap gap-3">
                            {firm.platforms.map((platform, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white font-medium">
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Features List */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-4">{t.challengeRules}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                { label: t.noTimeLimit, value: firm.features.noTimeLimit },
                                { label: t.weeklyPayouts, value: firm.features.weeklyPayouts },
                                { label: t.cryptoPayout, value: firm.features.cryptoPayout },
                                { label: t.newsTrading, value: firm.features.newsTrading },
                                { label: t.usaAccepted, value: firm.features.usaAccepted },
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${item.value ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-slate-900/30 border-slate-800 text-slate-500'}`}>
                                    {item.value ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Pricing Table */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">{t.pricingOptions}</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-800">
                                        <th className="text-left p-4 text-white font-bold">{t.accountSize}</th>
                                        <th className="text-center p-4 text-white font-bold">{t.price}</th>
                                        <th className="text-center p-4 text-white font-bold">{t.discount}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(firm.capitalPricing).map(([size, pricing], i) => (
                                        <tr key={size} className={i % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/50'}>
                                            <td className="p-4 text-slate-300 border-t border-slate-800 font-medium">
                                                ${parseInt(size).toLocaleString()}
                                            </td>
                                            <td className="p-4 text-center border-t border-slate-800">
                                                <span className="text-emerald-400 font-bold">{pricing.price}</span>
                                                {pricing.oldPrice !== pricing.price && (
                                                    <span className="text-slate-500 line-through ml-2 text-sm">{pricing.oldPrice}</span>
                                                )}
                                            </td>
                                            <td className="p-4 text-center border-t border-slate-800">
                                                {pricing.oldPrice !== pricing.price ? (
                                                    <span className="text-amber-400 font-bold">{firm.offer}</span>
                                                ) : (
                                                    <span className="text-slate-500">-</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Pros & Cons */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">{t.prosAndCons}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                    <Check className="h-5 w-5" />
                                    {t.pros}
                                </h3>
                                <ul className="space-y-2">
                                    {(firm.pros[lang] || firm.pros.en).map((pro, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-300">
                                            <Check className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
                                    <X className="h-5 w-5" />
                                    {t.cons}
                                </h3>
                                <ul className="space-y-2">
                                    {(firm.cons[lang] || firm.cons.en).map((con, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-300">
                                            <X className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-white mb-6">{t.faqTitle}</h2>
                        <div className="space-y-4">
                            {[
                                { q: t.faq1Q.replace('this prop firm', firm.name), a: t.faq1A.replace('this is', `${firm.name} is`) },
                                { q: t.faq2Q, a: t.faq2A },
                                { q: t.faq3Q, a: t.faq3A },
                            ].map((faq, i) => (
                                <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-slate-300">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 border-2 border-emerald-500/50 rounded-2xl p-8 mb-12 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
                        <p className="text-slate-300 text-lg mb-6">{t.ctaText}</p>
                        <a
                            href={firm.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-10 py-5 text-xl font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                        >
                            {t.getFunded} – {firm.offer}
                            <ExternalLink className="h-5 w-5" />
                        </a>
                        {firm.coupon && firm.coupon !== 'No Code' && (
                            <p className="mt-4 text-slate-400">
                                {t.copyCode}: <code className="px-2 py-1 bg-slate-800 rounded text-emerald-400 font-mono">{firm.coupon}</code>
                            </p>
                        )}
                    </section>

                    {/* Related Firms */}
                    {relatedFirms.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">{t.relatedFirms}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {relatedFirms.map(related => (
                                    <Link
                                        key={related.slug}
                                        href={`/${lang}/prop-firm/${related.slug}`}
                                        className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all group"
                                    >
                                        <div className="flex items-center gap-4 mb-3">
                                            <img src={related.logoUrl} alt={related.name} className="w-12 h-12 rounded-lg bg-white p-1 object-contain" />
                                            <div>
                                                <h3 className="text-white font-bold group-hover:text-emerald-400 transition">{related.name}</h3>
                                                <span className="text-emerald-400 text-sm">{related.offer}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-slate-400">
                                            <span>{related.profitSplit}</span>
                                            <span className="flex items-center gap-1">
                                                <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                                                {related.rating}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </article>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
