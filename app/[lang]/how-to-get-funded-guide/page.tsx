'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Search, TrendingUp, DollarSign, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "How to Become a Funded Trader in 2025",
        subtitle: "Complete Guide: Get Funded Forex Account Steps & Funding for Forex Traders",
        description: "Learn the exact steps to get a funded forex account and access funding for forex traders without risking your own capital. Start with up to $100,000 in trading capital.",
        community: "Community of 10,000+ Traders",
        jumpToFirms: "Jump to Recommended Firms",
        journeyTitle: "Your Journey to Funding",
        steps: [
            { number: "1", title: "Start Here", desc: "Choose the right firm" },
            { number: "2", title: "Pass Evaluation", desc: "Prove your skills" },
            { number: "3", title: "Get Funded!", desc: "Earn up to 90% profit split" }
        ],
        educationalTitle: "Get Funded Forex Account Steps:",
        educationalSubtitle: "How to Become a Funded Trader",
        cards: [
            {
                step: "Step 1: Choose the Firm",
                tag: "CRITICAL",
                text: "Not all firms pay out. You need to choose a verified firm with transparent rules and tight spreads. A wrong choice here means wasted money and time."
            },
            {
                step: "Step 2: Pass the Challenge",
                tag: "THE TEST",
                text: "Demonstrate you can make 8-10% profit without exceeding the drawdown limit. This is the test of discipline, not just skill. Stick to your strategy."
            },
            {
                step: "Step 3: Get Funded & Paid",
                tag: "PROFIT TIME",
                text: "Once funded, you keep up to 90% of profits. Money is wired directly to your bank account or crypto wallet. Scale up to millions in buying power."
            }
        ],
        bridgeTitle: "Finding the Right Funding for Forex Traders:",
        bridgeSubtitle: "Where to Apply for Funded Accounts",
        bridgeText: "We've analyzed over 50+ prop firms offering funding for forex traders. Most have hidden rules and poor execution. We've selected only the top verified firms where you can successfully get a funded forex account with transparent conditions.",
        filters: {
            cheapest: "💰 Cheapest",
            noTimeLimit: "⏰ No Time Limit",
            instant: "⚡ Instant Funding"
        },
        tableHeaders: {
            firm: "Firm",
            rating: "Rating",
            price: "Price (100k)",
            advantage: "Unique Advantage",
            action: "Action"
        },
        visitSite: "Visit Site",
        seeFullTable: "See the full comparison table with 20+ firms",
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                question: 'Do I actually receive real money?',
                answer: 'Yes! Once you pass the evaluation and become a funded trader, you receive real profit splits (typically 70-90%) that are paid directly to your bank account or crypto wallet. The firms make money from the evaluation fees and from keeping their share of your profits.'
            },
            {
                question: 'How much does it cost to start?',
                answer: 'Prices vary by firm and account size. For a $100,000 account, fees typically range from $450 to $600. Smaller accounts ($10k-$50k) can start as low as $49-$250. Many firms offer refunds when you pass the evaluation.'
            },
            {
                question: 'Can I trade Crypto or during News events?',
                answer: 'Trading rules vary by firm. Some allow crypto trading and news trading, while others have restrictions. Always check the specific rules of each firm before purchasing an evaluation. Our comparison table highlights which firms allow these trading styles.'
            },
            {
                question: 'What happens if I fail the evaluation?',
                answer: 'If you fail the evaluation, you can purchase a new challenge or sometimes get a discounted retry. The evaluation fee is the firm\'s revenue model. That\'s why choosing a firm with fair rules and good spreads is crucial for your success.'
            },
            {
                question: 'How long does it take to get funded?',
                answer: 'It depends on your trading style and the firm\'s rules. Some traders pass in 2-3 weeks with aggressive trading, while conservative traders may take 2-3 months. Firms with "instant funding" options can get you live immediately, but you still need to prove consistency.'
            }
        ],
        finalCtaTitle: "Ready to Scale Your Trading?",
        finalCtaButton: "Find My Perfect Firm",
        disclaimer: "Disclaimer: Trading involves significant risks and is not suitable for all investors. This is an informational guide only. All prop firm accounts are demo/simulated environments."
    },
    ro: {
        title: "Cum să Devii un Trader Finanțat în 2025",
        subtitle: "Ghid Complet: Pașii pentru un Cont Forex Finanțat & Finanțare pentru Traderi",
        description: "Învață pașii exacti pentru a obține un cont forex finanțat și accesează finanțare pentru traderi forex fără a risca propriul capital. Începe cu până la $100,000 capital de trading.",
        community: "Comunitate de 10,000+ Traderi",
        jumpToFirms: "Sari la Firmele Recomandate",
        journeyTitle: "Călătoria Ta spre Finanțare",
        steps: [
            { number: "1", title: "Începe Aici", desc: "Alege firma potrivită" },
            { number: "2", title: "Treci Evaluarea", desc: "Dovedește-ți abilitățile" },
            { number: "3", title: "Fii Finanțat!", desc: "Câștigă până la 90% profit" }
        ],
        educationalTitle: "Pașii Contului Forex Finanțat:",
        educationalSubtitle: "Cum să Devii un Trader Finanțat",
        cards: [
            {
                step: "Pasul 1: Alege Firma",
                tag: "CRITIC",
                text: "Nu toate firmele plătesc. Trebuie să alegi o firmă verificată, cu reguli transparente și spread-uri mici. O alegere greșită aici înseamnă bani și timp pierdut."
            },
            {
                step: "Pasul 2: Treci Provocarea",
                tag: "TESTUL",
                text: "Demonstrează că poți face 8-10% profit fără a depăși limita de drawdown. Acesta este testul disciplinei, nu doar al abilității. Respectă-ți strategia."
            },
            {
                step: "Pasul 3: Fii Finanțat & Plătit",
                tag: "TIMPUL PROFITULUI",
                text: "Odată finanțat, păstrezi până la 90% din profituri. Banii sunt virați direct în contul tău bancar sau portofelul crypto. Scalează până la milioane în putere de cumpărare."
            }
        ],
        bridgeTitle: "Găsirea Finanțării Potrivite pentru Traderi:",
        bridgeSubtitle: "Unde să Aplici pentru Conturi Finanțate",
        bridgeText: "Am analizat peste 50+ firme prop care oferă finanțare. Majoritatea au reguli ascunse și execuție slabă. Am selectat doar firmele verificate de top unde poți obține cu succes un cont finanțat cu condiții transparente.",
        filters: {
            cheapest: "💰 Cele Mai Ieftine",
            noTimeLimit: "⏰ Fără Limită de Timp",
            instant: "⚡ Finanțare Imediată"
        },
        tableHeaders: {
            firm: "Firmă",
            rating: "Rating",
            price: "Preț (100k)",
            advantage: "Avantaj Unic",
            action: "Acțiune"
        },
        visitSite: "Vizitează Site",
        seeFullTable: "Vezi tabelul complet de comparație cu 20+ firme",
        faqTitle: "Întrebări Frecvente",
        faqs: [
            {
                question: 'Chiar primesc bani reali?',
                answer: 'Da! Odată ce treci evaluarea și devii trader finanțat, primești împărțiri reale de profit (tipic 70-90%) plătite direct în contul tău. Firmele fac bani din taxele de evaluare și din păstrarea unei părți din profiturile tale.'
            },
            {
                question: 'Cât costă să începi?',
                answer: 'Prețurile variază în funcție de firmă și mărimea contului. Pentru un cont de $100,000, taxele sunt tipic între $450 și $600. Conturile mai mici ($10k-$50k) pot începe de la $49-$250. Multe firme oferă rambursări când treci evaluarea.'
            },
            {
                question: 'Pot tranzacționa Crypto sau în timpul Știrilor?',
                answer: 'Regulile variază. Unele permit crypto și tranzacționarea știrilor, altele au restricții. Verifică întotdeauna regulile specifice înainte de a cumpăra. Tabelul nostru de comparație evidențiază ce firme permit aceste stiluri.'
            },
            {
                question: 'Ce se întâmplă dacă pic evaluarea?',
                answer: 'Dacă pici evaluarea, poți cumpăra o nouă provocare sau uneori primești o reîncercare cu reducere. Taxa de evaluare este modelul de venit al firmei. De aceea alegerea unei firme cu reguli corecte este crucială.'
            },
            {
                question: 'Cât durează să fii finanțat?',
                answer: 'Depinde de stilul tău și regulile firmei. Unii traderi trec în 2-3 săptămâni cu tranzacționare agresivă, în timp ce conservatorii pot dura 2-3 luni. Firmele cu "finanțare imediată" te pot pune live imediat, dar tot trebuie să dovedești consistență.'
            }
        ],
        finalCtaTitle: "Ești Pregătit să Scalezi Tranzacționarea?",
        finalCtaButton: "Găsește Firma Perfectă",
        disclaimer: "Declinare a responsabilității: Tranzacționarea implică riscuri semnificative și nu este potrivită pentru toți investitorii. Acesta este doar un ghid informativ. Toate conturile prop firm sunt medii demo/simulate."
    },
    es: {
        title: "Cómo Convertirse en un Trader Financiado en 2025",
        subtitle: "Guía Completa: Pasos para una Cuenta Forex Financiada & Financiación para Traders",
        description: "Aprende los pasos exactos para obtener una cuenta forex financiada y acceder a financiación para traders forex sin arriesgar tu propio capital. Comienza con hasta $100,000 en capital de trading.",
        community: "Comunidad de 10,000+ Traders",
        jumpToFirms: "Saltar a Firmas Recomendadas",
        journeyTitle: "Tu Viaje hacia la Financiación",
        steps: [
            { number: "1", title: "Empieza Aquí", desc: "Elige la firma adecuada" },
            { number: "2", title: "Pasa la Evaluación", desc: "Demuestra tus habilidades" },
            { number: "3", title: "¡Obtén Financiación!", desc: "Gana hasta 90% de ganancia" }
        ],
        educationalTitle: "Pasos para la Cuenta Forex Financiada:",
        educationalSubtitle: "Cómo Convertirse en un Trader Financiado",
        cards: [
            {
                step: "Paso 1: Elige la Firma",
                tag: "CRÍTICO",
                text: "No todas las firmas pagan. Necesitas elegir una firma verificada con reglas transparentes y spreads ajustados. Una elección incorrecta aquí significa dinero y tiempo perdido."
            },
            {
                step: "Paso 2: Pasa el Desafío",
                tag: "LA PRUEBA",
                text: "Demuestra que puedes hacer 8-10% de ganancia sin exceder el límite de pérdida. Esta es la prueba de disciplina, no solo de habilidad. Apégate a tu estrategia."
            },
            {
                step: "Paso 3: Financiación & Pago",
                tag: "HORA DEL BENEFICIO",
                text: "Una vez financiado, te quedas con hasta el 90% de las ganancias. El dinero se transfiere directamente a tu cuenta bancaria o billetera cripto. Escala hasta millones en poder adquisitivo."
            }
        ],
        bridgeTitle: "Encontrando la Financiación Adecuada para Traders:",
        bridgeSubtitle: "Dónde Aplicar para Cuentas Financiadas",
        bridgeText: "Hemos analizado más de 50+ firmas prop que ofrecen financiación. La mayoría tiene reglas ocultas y mala ejecución. Hemos seleccionado solo las mejores firmas verificadas donde puedes obtener con éxito una cuenta financiada con condiciones transparentes.",
        filters: {
            cheapest: "💰 Más Baratas",
            noTimeLimit: "⏰ Sin Límite de Tiempo",
            instant: "⚡ Financiación Instantánea"
        },
        tableHeaders: {
            firm: "Firma",
            rating: "Calificación",
            price: "Precio (100k)",
            advantage: "Ventaja Única",
            action: "Acción"
        },
        visitSite: "Visitar Sitio",
        seeFullTable: "Ver la tabla de comparación completa con 20+ firmas",
        faqTitle: "Preguntas Frecuentes",
        faqs: [
            {
                question: '¿Realmente recibo dinero real?',
                answer: '¡Sí! Una vez que pasas la evaluación y te conviertes en un trader financiado, recibes divisiones de ganancias reales (típicamente 70-90%) pagadas directamente a tu cuenta. Las firmas ganan dinero con las tarifas de evaluación y manteniendo su parte de tus ganancias.'
            },
            {
                question: '¿Cuánto cuesta empezar?',
                answer: 'Los precios varían según la firma y el tamaño de la cuenta. Para una cuenta de $100,000, las tarifas suelen oscilar entre $450 y $600. Las cuentas más pequeñas ($10k-$50k) pueden comenzar desde tan solo $49-$250. Muchas firmas ofrecen reembolsos cuando pasas la evaluación.'
            },
            {
                question: '¿Puedo operar con Cripto o durante noticias?',
                answer: 'Las reglas varían. Algunas permiten operar con cripto y durante noticias, mientras que otras tienen restricciones. Siempre verifica las reglas específicas antes de comprar. Nuestra tabla de comparación destaca qué firmas permiten estos estilos.'
            },
            {
                question: '¿Qué pasa si fallo la evaluación?',
                answer: 'Si fallas la evaluación, puedes comprar un nuevo desafío o a veces obtener un reintento con descuento. La tarifa de evaluación es el modelo de ingresos de la firma. Por eso es crucial elegir una firma con reglas justas.'
            },
            {
                question: '¿Cuánto tiempo toma obtener financiación?',
                answer: 'Depende de tu estilo y las reglas de la firma. Algunos traders pasan en 2-3 semanas con trading agresivo, mientras que los conservadores pueden tardar 2-3 meses. Las firmas con opciones de "financiación instantánea" pueden ponerte en vivo inmediatamente, pero aún necesitas demostrar consistencia.'
            }
        ],
        finalCtaTitle: "¿Listo para Escalar tu Trading?",
        finalCtaButton: "Encuentra Mi Firma Perfecta",
        disclaimer: "Descargo de responsabilidad: El trading implica riesgos significativos y no es adecuado para todos los inversores. Esta es solo una guía informativa. Todas las cuentas de firma prop son entornos demo/simulados."
    }
};

export default function HowToGetFundedGuide({ params }: PageProps) {
    const { lang } = use(params);
    const t = translations[lang] || translations.en;
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<'cheapest' | 'no-time-limit' | 'instant'>('cheapest');

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollToTable = () => {
        const element = document.getElementById('top-picks');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const topPicks: { [key: string]: any[] } = {
        cheapest: [
            { name: 'FundingPips', logo: 'https://logo.clearbit.com/fundingpips.com', rating: 4.8, price: '$399', advantage: lang === 'ro' ? 'Cel Mai Accesibil' : 'Most Affordable', link: 'https://app.fundingpips.com/register?ref=b5420489', coupon: 'b5420489', offer: '5% OFF' },
            { name: 'FTMO', logo: 'https://logo.clearbit.com/ftmo.com', rating: 4.9, price: '$482', advantage: lang === 'ro' ? 'Brand De Încredere' : 'Most Trusted Brand', link: 'https://trader.ftmo.com/?affiliates=4354', coupon: '', offer: '19% OFF (100k)' },
            { name: 'TradingCult', logo: 'https://logo.clearbit.com/tradingcult.com', rating: 4.8, price: '$299', advantage: lang === 'ro' ? 'Valoare Excelentă' : 'Great Value', link: 'https://my.tradingcult.com//challenges?affiliateId=hgc', coupon: 'NEWYEAR', offer: '40% OFF + Free Account' }
        ],
        'no-time-limit': [
            { name: 'TradingCult', logo: 'https://logo.clearbit.com/tradingcult.com', rating: 4.8, price: '$299', advantage: lang === 'ro' ? 'Fără Limită de Timp' : 'No Time Limit + Instant Funding', link: 'https://my.tradingcult.com//challenges?affiliateId=hgc', coupon: 'NEWYEAR', offer: '40% OFF + Free Account' },
            { name: 'FundingPips', logo: 'https://logo.clearbit.com/fundingpips.com', rating: 4.8, price: '$399', advantage: lang === 'ro' ? 'Timp Nelimitat' : 'Unlimited Time', link: 'https://app.fundingpips.com/register?ref=b5420489', coupon: 'b5420489', offer: '5% OFF' },
            { name: 'FTMO', logo: 'https://logo.clearbit.com/ftmo.com', rating: 4.9, price: '$482', advantage: lang === 'ro' ? 'Cel Mai De Încredere' : 'Most Trusted', link: 'https://trader.ftmo.com/?affiliates=4354', coupon: '', offer: '19% OFF (100k)' }
        ],
        instant: [
            { name: 'TradingCult', logo: 'https://logo.clearbit.com/tradingcult.com', rating: 4.8, price: '$299', advantage: lang === 'ro' ? 'Finanțare Instantă' : 'Instant Funding Available', link: 'https://my.tradingcult.com//challenges?affiliateId=hgc', coupon: 'NEWYEAR', offer: '40% OFF + Free Account' },
            { name: 'The Concept Trading', logo: 'https://logo.clearbit.com/theconcepttrading.com', rating: 4.8, price: '$648', advantage: lang === 'ro' ? 'Cale Expresă' : 'Express Path', link: 'https://theconcepttrading.com/ref/1837/', coupon: 'RESOLVE35', offer: '35% OFF (Ex-Instant)' },
            { name: 'FunderPro', logo: 'https://logo.clearbit.com/funderpro.com', rating: 4.8, price: '$549', advantage: lang === 'ro' ? 'Acces Rapid' : 'Quick Access', link: 'https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro', coupon: 'hgc', offer: '20% OFF' }
        ]
    };

    return (
        <div className="bg-[#050505] text-white">
            <Header lang={lang} />

            {/* Schema.org */}
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": t.faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                    }))
                })
            }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": t.title,
                    "description": t.description,
                    "author": { "@type": "Organization", "name": "PropFirmHub" },
                    "publisher": { "@type": "Organization", "name": "PropFirmHub", "logo": { "@type": "ImageObject", "url": "https://propfirms-hub.com/logo.png" } },
                    "datePublished": "2025-01-01",
                    "dateModified": new Date().toISOString().split('T')[0]
                })
            }} />

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-black to-black" />
                    <div className="container mx-auto px-4 py-20 md:py-32 relative">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                    <span className="text-emerald-400 text-sm font-medium">{t.community}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    {lang === 'ro' ? (
                                        <>Cum să Devii un <span className="text-emerald-400">Trader Finanțat</span> în 2025</>
                                    ) : (
                                        <>How to Become a <span className="text-emerald-400">Funded Trader</span> in 2025</>
                                    )}
                                </h1>
                                <p className="text-xl text-slate-300 mb-4">{t.subtitle}</p>
                                <p className="text-lg text-slate-400 mb-8">{t.description}</p>
                                <button onClick={scrollToTable} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                                    {t.jumpToFirms} <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Roadmap Visual */}
                            <div className="relative">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                                    <h3 className="text-xl font-bold mb-8 text-center text-slate-200">{t.journeyTitle}</h3>
                                    <div className="space-y-6">
                                        {t.steps.map((step, i) => (
                                            <div key={i}>
                                                <div className="flex items-center gap-4">
                                                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${i === 2 ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500/20 border border-emerald-500'}`}>
                                                        {i === 2 ? <DollarSign className="h-6 w-6 text-black" /> : <span className="text-emerald-400 font-bold">{step.number}</span>}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className={`font-semibold ${i === 2 ? 'text-emerald-400 text-lg' : 'text-white'}`}>{step.title}</div>
                                                        <div className={`text-sm ${i === 2 ? 'text-slate-300' : 'text-slate-400'}`}>{step.desc}</div>
                                                    </div>
                                                </div>
                                                {i < 2 && <div className="pl-6"><div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-emerald-500/20" /></div>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Educational Steps */}
                <section className="py-20 bg-gradient-to-b from-black to-slate-950">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                {t.educationalTitle}<br />
                                <span className="text-emerald-400">{t.educationalSubtitle}</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {t.cards.map((card, i) => (
                                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                                    <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                                        {i === 0 ? <Search className="h-8 w-8 text-emerald-400" /> : i === 1 ? <TrendingUp className="h-8 w-8 text-emerald-400" /> : <DollarSign className="h-8 w-8 text-emerald-400" />}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{card.step}</h3>
                                    <div className={`inline-block px-3 py-1 rounded-full mb-4 ${i === 0 ? 'bg-red-500/10 border-red-500/20 text-red-400' : i === 1 ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}>
                                        <span className="text-sm font-semibold">{card.tag}</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bridge */}
                <section className="py-16 bg-slate-950">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {t.bridgeTitle}<br />
                            <span className="text-emerald-400">{t.bridgeSubtitle}</span>
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">{t.bridgeText}</p>
                    </div>
                </section>

                {/* Top Picks Table */}
                <section id="top-picks" className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {Object.keys(t.filters).map((key) => {
                                const filterKey = key === 'noTimeLimit' ? 'no-time-limit' : key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveFilter(filterKey as any)}
                                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === filterKey ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                                    >
                                        {(t.filters as any)[key]}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full border border-slate-800 rounded-xl overflow-hidden">
                                <thead className="bg-slate-900">
                                    <tr>
                                        <th className="text-left p-4 text-slate-300 font-semibold">{t.tableHeaders.firm}</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">{t.tableHeaders.rating}</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">{t.tableHeaders.price}</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">{t.tableHeaders.advantage}</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">{t.tableHeaders.action}</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-slate-950">
                                    {topPicks[activeFilter].map((firm, index) => (
                                        <tr key={index} className="border-t border-slate-800 hover:bg-slate-900/50 transition-colors">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                                        <span className="text-xs font-bold text-slate-800">{firm.name.substring(0, 2)}</span>
                                                    </div>
                                                    <span className="font-semibold text-white">{firm.name}</span>
                                                </div>
                                            </td>
                                            <td className="p-4"><span className="text-yellow-400">⭐</span> <span className="text-white font-semibold">{firm.rating}</span></td>
                                            <td className="p-4"><span className="text-white font-semibold">{firm.price}</span></td>
                                            <td className="p-4"><span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">{firm.advantage}</span></td>
                                            <td className="p-4">
                                                <a href={`/api/analytics/track?dest=${encodeURIComponent(firm.link)}&firm=${encodeURIComponent(firm.name)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all">
                                                    {t.visitSite} <ArrowRight className="h-4 w-4" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-4">
                            {topPicks[activeFilter].map((firm, index) => (
                                <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                                <span className="text-xs font-bold text-slate-800">{firm.name.substring(0, 2)}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg">{firm.name}</h3>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <span className="text-yellow-400">⭐</span>
                                                    <span className="text-slate-300 text-sm font-semibold">{firm.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center justify-between py-2 border-b border-slate-800">
                                            <span className="text-slate-400 text-sm">{t.tableHeaders.price}</span>
                                            <span className="text-white font-bold text-lg">{firm.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-sm">{t.tableHeaders.advantage}</span>
                                            <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium">{firm.advantage}</span>
                                        </div>
                                        {firm.offer && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-400 text-sm">Active Offer:</span>
                                                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-medium">{firm.offer}</span>
                                            </div>
                                        )}
                                    </div>
                                    <a href={`/api/analytics/track?dest=${encodeURIComponent(firm.link)}&firm=${encodeURIComponent(firm.name)}`} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold transition-all">
                                        {t.visitSite} <ArrowRight className="h-5 w-5" />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link href="/#comparison" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-lg transition-colors">
                                {t.seeFullTable} <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-20 bg-slate-950">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.faqTitle}</h2>
                        <div className="space-y-4">
                            {t.faqs.map((faq, index) => (
                                <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
                                    <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors">
                                        <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                                        {openFaq === index ? <ChevronUp className="h-5 w-5 text-emerald-400 flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />}
                                    </button>
                                    {openFaq === index && <div className="px-6 pb-6 text-slate-300 leading-relaxed">{faq.answer}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-b from-black to-slate-950">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.finalCtaTitle}</h2>
                        <Link href="/#comparison" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
                            {t.finalCtaButton} <ArrowRight className="h-6 w-6" />
                        </Link>
                        <p className="text-slate-400 text-sm mt-8 max-w-2xl mx-auto"><strong>{t.disclaimer}</strong></p>
                    </div>
                </section>
            </main>

            <Footer lang={lang} />
        </div>
    );
}
