import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

// Translations
const translations = {
    en: {
        title: "PropFirmHub Blog",
        subtitle: "Expert insights, in-depth guides, and the latest trends in prop trading. Everything you need to succeed as a funded trader.",
        featured: "Featured",
        readArticle: "Read Article",
        latestArticles: "Latest Articles",
        readMore: "Read More",
        ctaTitle: "Ready to Find Your Perfect Prop Firm?",
        ctaSubtitle: "Compare top prop firms side-by-side and find the best fit for your trading style.",
        ctaButton: "Compare Prop Firms →"
    },
    ro: {
        title: "Blog PropFirmHub",
        subtitle: "Ghiduri de expert, analize detaliate și cele mai noi tendințe în prop trading. Tot ce ai nevoie pentru a reuși ca trader finanțat.",
        featured: "Recomandat",
        readArticle: "Citește Articolul",
        latestArticles: "Articole Recente",
        readMore: "Citește Mai Mult",
        ctaTitle: "Ești Pregătit să Găsești Firma Potrivită?",
        ctaSubtitle: "Compară cele mai bune firme prop și găsește-o pe cea potrivită stilului tău de trading.",
        ctaButton: "Compară Firmele Prop →"
    },
    es: {
        title: "Blog PropFirmHub",
        subtitle: "Perspectivas de expertos, guías detalladas y las últimas tendencias en prop trading. Todo lo que necesitas para tener éxito como trader financiado.",
        featured: "Destacado",
        readArticle: "Leer Artículo",
        latestArticles: "Artículos Recientes",
        readMore: "Leer Más",
        ctaTitle: "¿Listo para Encontrar tu Firma Perfecta?",
        ctaSubtitle: "Compara las mejores firmas prop una al lado de la otra y encuentra la que mejor se adapte a tu estilo de trading.",
        ctaButton: "Comparar Firmas Prop →"
    }
};

// Blog posts data with translations
const blogPosts = {
    en: [
        {
            slug: 'how-to-pass-ftmo-challenge',
            title: 'How to Pass FTMO Challenge – Why Most Traders Fail',
            description: 'Discover why 8 out of 10 traders fail the FTMO challenge and learn the exact strategies to pass. Daily loss rules, risk management, and proven tips.',
            date: 'January 10, 2025',
            readTime: '12 min read',
            category: 'Guide',
            featured: true,
        },
        {
            slug: 'how-to-pass-prop-firm-challenge',
            title: 'How to Pass a Prop Firm Challenge: 10 Proven Steps',
            description: 'Learn exactly how to pass prop firm challenges with our comprehensive guide. Discover risk management strategies, profit targets, drawdown rules, and psychology tips.',
            date: 'December 30, 2025',
            readTime: '15 min read',
            category: 'Guide',
            featured: false,
        },
        {
            slug: 'pass-rates-2026',
            title: 'Prop Firm Challenge Pass Rates 2026: Real Statistics & Data',
            description: 'Discover the real prop firm challenge pass rates in 2026. We analyzed 15+ firms to reveal actual success rates, from FTMO\'s 10% to firms with 25%+ pass rates.',
            date: 'January 7, 2026',
            readTime: '12 min read',
            category: 'Statistics',
            featured: false,
        },
        {
            slug: 'how-hard-is-it-to-get-funded-trading',
            title: 'How Hard Is It To Get Funded Trading?',
            description: 'Discover the real difficulty of getting funded in prop trading. Learn success rates, key challenges, and proven strategies to increase your chances of passing prop firm evaluations.',
            date: 'November 27, 2025',
            readTime: '12 min read',
            category: 'Guide',
            featured: false,
        },
        {
            slug: 'what-is-prop-firm-account',
            title: 'What Is a Prop Firm Account?',
            description: 'Learn everything about prop firm accounts: how they work, benefits, risks, and how to get one. Complete guide to proprietary trading accounts for forex and futures traders.',
            date: 'December 2, 2025',
            readTime: '10 min read',
            category: 'Guide',
            featured: false,
        },
        {
            slug: 'top-payouts',
            title: 'Top 30 Fastest Prop Firm Payouts in 2025',
            description: 'Getting paid quickly is crucial. Some firms pay in 24 hours, others take 60+ days. We\'ve analyzed thousands of payouts to rank the 30 fastest-paying prop firms.',
            date: 'November 25, 2025',
            readTime: '20 min read',
            category: 'Rankings',
            featured: false,
        },
        {
            slug: 'taxes-2025',
            title: 'Prop Firm Taxes 2025: Complete Guide for Traders',
            description: 'Taxes on prop firm profits can be confusing. Are you an employee? Independent contractor? This complete guide answers all your questions about prop firm taxation.',
            date: 'November 25, 2025',
            readTime: '18 min read',
            category: 'Finance',
            featured: false,
        },
    ],
    ro: [
        {
            slug: 'how-to-pass-ftmo-challenge',
            title: 'Cum să Treci Challenge-ul FTMO – De Ce Majoritatea Pică',
            description: 'Descoperă de ce 8 din 10 traderi pică challenge-ul FTMO și învață strategiile exacte pentru a trece. Reguli daily loss, risk management și sfaturi dovedite.',
            date: '10 Ianuarie, 2025',
            readTime: '12 min citire',
            category: 'Ghid',
            featured: true,
        },
        {
            slug: 'how-to-pass-prop-firm-challenge',
            title: 'Cum să Treci un Challenge Prop Firm: 10 Pași Dovediți',
            description: 'Învață exact cum să treci challenge-urile prop firm cu ghidul nostru complet. Descoperă strategii de risk management, obiective de profit și sfaturi de psihologie.',
            date: '30 Decembrie, 2025',
            readTime: '15 min citire',
            category: 'Ghid',
            featured: false,
        },
        {
            slug: 'pass-rates-2026',
            title: 'Rate de Trecere Prop Firm Challenge 2026: Statistici Reale',
            description: 'Descoperă ratele reale de trecere a challenge-urilor prop firm în 2026. Am analizat peste 15 firme pentru a dezvălui ratele de succes.',
            date: '7 Ianuarie, 2026',
            readTime: '12 min citire',
            category: 'Statistici',
            featured: false,
        },
        {
            slug: 'how-hard-is-it-to-get-funded-trading',
            title: 'Cât de Greu Este să Fii Finanțat la Trading?',
            description: 'Descoperă dificultatea reală de a fi finanțat în prop trading. Află ratele de succes, provocările cheie și strategii dovedite pentru a-ți crește șansele de a trece evaluările.',
            date: '27 Noiembrie, 2025',
            readTime: '12 min citire',
            category: 'Ghid',
            featured: false,
        },
        {
            slug: 'what-is-prop-firm-account',
            title: 'Ce Este un Cont la o Firmă Prop?',
            description: 'Învață totul despre conturile prop firm: cum funcționează, beneficii, riscuri și cum să obții unul. Ghid complet pentru conturi de trading cu capital propriu.',
            date: '2 Decembrie, 2025',
            readTime: '10 min citire',
            category: 'Ghid',
            featured: false,
        },
        {
            slug: 'top-payouts',
            title: 'Top 30 Cele Mai Rapide Plăți Prop Firm 2025',
            description: 'A fi plătit rapid este crucial. Unele firme plătesc în 24 ore, altele în 60+ zile. Am analizat mii de plăți pentru a clasifica cele 30 de firme care plătesc cel mai rapid.',
            date: '25 Noiembrie, 2025',
            readTime: '20 min citire',
            category: 'Clasamente',
            featured: false,
        },
        {
            slug: 'taxes-2025',
            title: 'Taxe Prop Firm 2025: Ghid Complet pentru Traderi',
            description: 'Taxele pe profiturile prop firm pot fi confuze. Ești angajat? Contractor independent? Acest ghid complet răspunde la toate întrebările despre taxarea prop firm.',
            date: '25 Noiembrie, 2025',
            readTime: '18 min citire',
            category: 'Finanțe',
            featured: false,
        },
    ],
    es: [
        {
            slug: 'how-to-pass-ftmo-challenge',
            title: 'Cómo Pasar el Desafío FTMO – Por Qué la Mayoría Falla',
            description: 'Descubre por qué 8 de cada 10 traders fallan el desafío FTMO y aprende las estrategias exactas para aprobarlo. Reglas de pérdida diaria y gestión de riesgo.',
            date: '10 Enero, 2025',
            readTime: '12 min lectura',
            category: 'Guía',
            featured: true,
        },
        {
            slug: 'how-to-pass-prop-firm-challenge',
            title: 'Cómo Pasar un Desafío de Firma Prop: 10 Pasos Probados',
            description: 'Aprende exactamente cómo pasar los desafíos de firmas prop con nuestra guía completa. Descubre estrategias de gestión de riesgos y consejos de psicología.',
            date: '30 Diciembre, 2025',
            readTime: '15 min lectura',
            category: 'Guía',
            featured: false,
        },
        {
            slug: 'pass-rates-2026',
            title: 'Tasas de Aprobación Prop Firm Challenge 2026: Estadísticas Reales',
            description: 'Descubre las tasas reales de aprobación de desafíos prop firm en 2026. Analizamos más de 15 firmas para revelar las tasas de éxito reales.',
            date: '7 Enero, 2026',
            readTime: '12 min lectura',
            category: 'Estadísticas',
            featured: false,
        },
        {
            slug: 'how-hard-is-it-to-get-funded-trading',
            title: '¿Qué tan difícil es conseguir financiación para operar?',
            description: 'Descubre la verdadera dificultad de conseguir financiación en prop trading. Aprende tasas de éxito, desafíos clave y estrategias probadas para aumentar tus posibilidades de pasar las evaluaciones.',
            date: '27 Noviembre, 2025',
            readTime: '12 min lectura',
            category: 'Guía',
            featured: false,
        },
        {
            slug: 'what-is-prop-firm-account',
            title: '¿Qué es una Cuenta de Firma Prop?',
            description: 'Aprende todo sobre las cuentas de firmas prop: cómo funcionan, beneficios, riesgos y cómo obtener una. Guía completa para cuentas de trading propietario para traders de forex y futuros.',
            date: '2 Diciembre, 2025',
            readTime: '10 min lectura',
            category: 'Guía',
            featured: false,
        },
        {
            slug: 'top-payouts',
            title: 'Top 30 Pagos Más Rápidos de Firmas Prop en 2025',
            description: 'Recibir el pago rápidamente es crucial. Algunas firmas pagan en 24 horas, otras tardan más de 60 días. Hemos analizado miles de pagos para clasificar las 30 firmas prop que pagan más rápido.',
            date: '25 Noviembre, 2025',
            readTime: '20 min lectura',
            category: 'Análisis',
            featured: false,
        },
        {
            slug: 'taxes-2025',
            title: 'Impuestos de Firmas Prop 2025: Guía Completa para Traders',
            description: 'Los impuestos sobre las ganancias de firmas prop pueden ser confusos. ¿Eres empleado? ¿Contratista independiente? Esta guía completa responde a todas tus preguntas sobre la tributación de firmas prop.',
            date: '25 Noviembre, 2025',
            readTime: '18 min lectura',
            category: 'Finanzas',
            featured: false,
        },
    ]
};

interface BlogContentProps {
    lang?: Locale;
}

export default function BlogContent({ lang = 'en' }: BlogContentProps) {
    const t = translations[lang] || translations.en;
    const posts = blogPosts[lang] || blogPosts.en;
    const featuredPost = posts.find(post => post.featured);
    const regularPosts = posts.filter(post => !post.featured);
    const linkPrefix = lang === 'en' ? '' : `/${lang}`;

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            {t.title}
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            {t.subtitle}
                        </p>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-2xl p-8 md:p-12 hover:border-emerald-500/50 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white w-fit">
                                        {t.featured}
                                    </span>
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {featuredPost.date}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    {featuredPost.description}
                                </p>
                                <Link
                                    href={`${linkPrefix}/blog/${featuredPost.slug}`}
                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                >
                                    {t.readArticle}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Regular Posts Grid */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            {t.latestArticles}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {regularPosts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 hover:bg-slate-900/50 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-slate-700">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4 line-clamp-3">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-sm text-slate-500">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </span>
                                        <Link
                                            href={`${linkPrefix}/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm"
                                        >
                                            {t.readMore}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {t.ctaTitle}
                        </h3>
                        <p className="text-slate-300 mb-6">
                            {t.ctaSubtitle}
                        </p>
                        <Link
                            href={linkPrefix || "/"}
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                        >
                            {t.ctaButton}
                        </Link>
                    </div>
                </section>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
