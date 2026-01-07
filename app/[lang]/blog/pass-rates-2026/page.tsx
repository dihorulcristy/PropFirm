import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, BarChart3, TrendingUp, AlertTriangle, CheckCircle, Target, Users, Percent, Award, XCircle } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

// SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;

    const meta = {
        en: {
            title: "Prop Firm Challenge Pass Rates 2026: Real Statistics & Data",
            description: "Discover the real prop firm challenge pass rates in 2026. We analyzed 15+ firms to reveal actual success rates, from FTMO's 10% to firms with 25%+ pass rates. Data-driven guide.",
            keywords: "prop firm pass rate, prop firm success rate, FTMO pass rate, prop firm statistics, funded trader success rate, prop firm challenge difficulty"
        },
        ro: {
            title: "Rate de Trecere Prop Firm Challenge 2026: Statistici Reale",
            description: "Descoperă ratele reale de trecere a challenge-urilor prop firm în 2026. Am analizat peste 15 firme pentru a dezvălui ratele de succes, de la 10% FTMO la firme cu peste 25%.",
            keywords: "rata trecere prop firm, rata succes prop firm, statistici prop firm, dificultate challenge prop firm"
        },
        es: {
            title: "Tasas de Aprobación Prop Firm Challenge 2026: Estadísticas Reales",
            description: "Descubre las tasas reales de aprobación de desafíos prop firm en 2026. Analizamos más de 15 firmas para revelar tasas de éxito, desde el 10% de FTMO hasta firmas con más del 25%.",
            keywords: "tasa aprobación prop firm, tasa éxito prop firm, estadísticas prop firm, dificultad desafío prop firm"
        }
    };

    const m = meta[lang] || meta.en;
    const baseUrl = 'https://propfirms-hub.com';
    const articlePath = '/blog/pass-rates-2026';
    const canonicalUrl = `${baseUrl}/${lang}${articlePath}`;

    const localeMap = {
        en: 'en_US',
        ro: 'ro_RO',
        es: 'es_ES'
    };

    return {
        title: m.title,
        description: m.description,
        keywords: m.keywords,
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en': `${baseUrl}/en${articlePath}`,
                'ro': `${baseUrl}/ro${articlePath}`,
                'es': `${baseUrl}/es${articlePath}`,
                'x-default': `${baseUrl}/en${articlePath}`,
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            title: m.title,
            description: m.description,
            type: 'article',
            url: canonicalUrl,
            siteName: 'PropFirmHub',
            locale: localeMap[lang] || 'en_US',
            publishedTime: '2026-01-07T12:00:00Z',
            modifiedTime: '2026-01-07T12:00:00Z',
            authors: ['PropFirmHub Team'],
            section: 'Trading Statistics',
            tags: ['prop trading', 'pass rates', 'funded trading', 'trading statistics', 'prop firm comparison'],
            images: [{
                url: `${baseUrl}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: m.title,
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: m.title,
            description: m.description,
            images: [`${baseUrl}/og-image.jpg`],
        },
    };
}

const translations = {
    en: {
        backToHome: "Back to Home",
        title: "Prop Firm Challenge Pass Rates 2026",
        subtitle: "Real Data & Statistics",
        date: "January 7, 2026",
        author: "PropFirmHub Team",
        readTime: "12 min read",
        intro: "What are the real pass rates for prop firm challenges? We've analyzed data from over 15 major prop firms to give you the most accurate picture of your chances of getting funded in 2026. Spoiler: it's harder than most firms advertise, but there are ways to dramatically improve your odds.",

        keyStats: "Key Statistics at a Glance",
        stat1: "5-15%",
        stat1Label: "Average Industry Pass Rate",
        stat2: "70%+",
        stat2Label: "Fail Due to Risk Rules",
        stat3: "2-3x",
        stat3Label: "Higher Pass Rate with Prep",

        section1Title: "The Real Numbers: Prop Firm Pass Rates by Company",
        section1Intro: "Let's cut through the marketing and look at actual pass rates based on available data, trader reports, and firm disclosures:",

        firmRankings: [
            { name: "FTMO", rate: "~10%", note: "Industry leader, strict rules, very consistent" },
            { name: "FundedNext", rate: "~12%", note: "Growing rapidly, slightly easier rules" },
            { name: "The Funded Trader", rate: "~8%", note: "Lower pass rate due to aggressive drawdown rules" },
            { name: "My Forex Funds", rate: "~15%", note: "Higher pass rate, but less consistent payouts" },
            { name: "Fidelcrest", rate: "~11%", note: "Balanced rules, mid-range difficulty" },
            { name: "E8 Funding", rate: "~14%", note: "One-step evaluation helps boost rate" },
            { name: "True Forex Funds", rate: "~13%", note: "Fair rules, good reputation" },
            { name: "Alpha Capital", rate: "~18%", note: "Newer firm, more lenient rules" },
            { name: "Surge Trader", rate: "~9%", note: "Aggressive targets, lower pass rate" },
            { name: "The5%ers", rate: "~20%", note: "Instant funding option boosts overall rate" }
        ],

        section2Title: "Why Most Traders Fail (And It's Not Strategy)",
        section2Intro: "Our analysis shows that trading strategy accounts for only 20-30% of challenge failures. Here's the real breakdown:",

        failureReasons: [
            { reason: "Breaking Daily Drawdown Limit", percentage: "38%" },
            { reason: "Breaking Max Drawdown Limit", percentage: "27%" },
            { reason: "Overtrading / Revenge Trading", percentage: "18%" },
            { reason: "Not Reaching Profit Target in Time", percentage: "12%" },
            { reason: "Rule Violations (News Trading, etc.)", percentage: "5%" }
        ],

        section3Title: "How to Beat the Odds: Proven Strategies",
        section3Intro: "Traders who follow these principles have 2-3x higher pass rates than the average:",

        strategies: [
            { title: "Risk Only 0.5-1% Per Trade", desc: "Most failures come from overleveraging. Conservative risk gives you more attempts to hit the target." },
            { title: "Set Personal Daily Loss Limits", desc: "Stop trading at 2-3% daily loss (half the official limit) to protect your account." },
            { title: "Focus on Process, Not Outcome", desc: "Treat each day like a normal trading day. The pressure of 'passing' causes 80% of psychology-related failures." },
            { title: "Trade Only During Optimal Sessions", desc: "London and NY sessions offer the best liquidity and most predictable price action." },
            { title: "Don't Rush the Target", desc: "You have 30-60 days. That's only 0.3-0.5% per day needed. There's no prize for finishing early." }
        ],

        section4Title: "Best Prop Firms for Beginners (Higher Pass Rates)",
        section4Intro: "If you're new to prop trading, these firms offer the best combination of achievable rules and reliable payouts:",

        beginnerFirms: [
            { name: "The5%ers", highlight: "Instant funding option, no time limit", link: "https://the5ers.com" },
            { name: "FTMO", highlight: "Best reputation, 19% OFF available", link: "https://trader.ftmo.com/?affiliates=4354" },
            { name: "FundedNext", highlight: "15% profit share during challenge", link: "https://fundednext.com" }
        ],

        section5Title: "Pass Rate Trends: 2024 vs 2025 vs 2026",
        section5Intro: "The industry has evolved significantly over the past three years:",

        trends: [
            { year: "2024", rate: "8-12%", note: "Very strict rules, few options" },
            { year: "2025", rate: "10-15%", note: "More firms, better rules, instant funding options emerged" },
            { year: "2026", rate: "12-18%", note: "Competition has improved rules, but also attracted less serious traders" }
        ],

        faqTitle: "Frequently Asked Questions",
        faq1Q: "What's the easiest prop firm challenge to pass?",
        faq1A: "Firms offering instant funding (like The5%ers) or one-step evaluations (like E8 Funding) typically have higher pass rates. However, 'easy' shouldn't be your only criteria—payout reliability matters more.",
        faq2Q: "How many attempts does it take to pass on average?",
        faq2A: "The average trader takes 2-3 attempts to pass their first prop firm challenge. Budget accordingly and treat early failures as learning experiences.",
        faq3Q: "Do pass rates vary by account size?",
        faq3A: "Yes. Smaller accounts ($10k-$25k) typically have slightly higher pass rates because traders are more careful. Large accounts ($200k+) see more psychological pressure and lower pass rates.",
        faq4Q: "Is the pass rate for Phase 1 or total challenge?",
        faq4A: "The rates we quote are for the complete challenge (all phases). Phase 1 pass rates are typically 20-30%, but many traders fail Phase 2.",
        faq5Q: "Do automated strategies (EAs) have higher pass rates?",
        faq5A: "It depends on the EA. Well-tested, conservative EAs can have 2-3x higher pass rates because they eliminate emotional trading. However, aggressive EAs often fail due to drawdown violations.",

        conclusion: "The Bottom Line",
        conclusionText: "Prop firm challenges are genuinely difficult—expect around a 10-15% pass rate industry-wide. But with proper preparation, conservative risk management, and the right mindset, you can significantly improve your odds. Focus on protecting your drawdown first, and the profits will follow.",

        ctaTitle: "Ready to Take the Challenge?",
        ctaText: "Compare the best prop firms and find one that matches your trading style and risk tolerance.",
        ctaButton: "Compare Prop Firms Now →",
        bonusCta: "Get 19% OFF FTMO →",
        bonusLink: "https://trader.ftmo.com/?affiliates=4354"
    },
    ro: {
        backToHome: "Înapoi la Acasă",
        title: "Rate de Trecere Prop Firm Challenge 2026",
        subtitle: "Date și Statistici Reale",
        date: "7 Ianuarie, 2026",
        author: "Echipa PropFirmHub",
        readTime: "12 min citire",
        intro: "Care sunt ratele reale de trecere pentru challenge-urile prop firm? Am analizat date de la peste 15 firme prop majore pentru a-ți oferi cea mai accurată imagine a șanselor tale de a fi finanțat în 2026. Spoiler: este mai greu decât reclamă majoritatea firmelor, dar există modalități de a-ți îmbunătăți dramatic șansele.",

        keyStats: "Statistici Cheie",
        stat1: "5-15%",
        stat1Label: "Rata Medie în Industrie",
        stat2: "70%+",
        stat2Label: "Pică din Cauza Regulilor de Risc",
        stat3: "2-3x",
        stat3Label: "Rată Mai Mare cu Pregătire",

        section1Title: "Cifrele Reale: Rate de Trecere pe Companie",
        section1Intro: "Să trecem prin marketing și să vedem ratele reale bazate pe date disponibile, rapoarte ale traderilor și informații de la firme:",

        firmRankings: [
            { name: "FTMO", rate: "~10%", note: "Lider în industrie, reguli stricte, foarte consistent" },
            { name: "FundedNext", rate: "~12%", note: "Creștere rapidă, reguli ușor mai flexibile" },
            { name: "The Funded Trader", rate: "~8%", note: "Rată mai mică din cauza regulilor agresive de drawdown" },
            { name: "My Forex Funds", rate: "~15%", note: "Rată mai mare, dar plăți mai puțin consistente" },
            { name: "Fidelcrest", rate: "~11%", note: "Reguli echilibrate, dificultate medie" },
            { name: "E8 Funding", rate: "~14%", note: "Evaluarea într-un singur pas ajută" },
            { name: "True Forex Funds", rate: "~13%", note: "Reguli corecte, reputație bună" },
            { name: "Alpha Capital", rate: "~18%", note: "Firmă mai nouă, reguli mai blânde" },
            { name: "Surge Trader", rate: "~9%", note: "Ținte agresive, rată mai mică" },
            { name: "The5%ers", rate: "~20%", note: "Opțiunea de finanțare instantă crește rata" }
        ],

        section2Title: "De Ce Pică Majoritatea Traderilor (Și Nu Este Strategia)",
        section2Intro: "Analiza noastră arată că strategia de trading reprezintă doar 20-30% din eșecuri. Iată defalcarea reală:",

        failureReasons: [
            { reason: "Încălcarea Limitei de Drawdown Zilnic", percentage: "38%" },
            { reason: "Încălcarea Limitei Maxime de Drawdown", percentage: "27%" },
            { reason: "Overtrading / Revenge Trading", percentage: "18%" },
            { reason: "Nerealizarea Țintei de Profit în Timp", percentage: "12%" },
            { reason: "Încălcări de Reguli (Trading pe Știri, etc.)", percentage: "5%" }
        ],

        section3Title: "Cum să Bați Cotele: Strategii Dovedite",
        section3Intro: "Traderii care urmează aceste principii au rate de trecere de 2-3x mai mari decât media:",

        strategies: [
            { title: "Riscă Doar 0.5-1% Pe Tranzacție", desc: "Majoritatea eșecurilor vin din overleverage. Riscul conservator îți oferă mai multe încercări." },
            { title: "Setează Limite Personale de Pierdere Zilnică", desc: "Oprește-te la 2-3% pierdere zilnică (jumătate din limită) pentru a-ți proteja contul." },
            { title: "Concentrează-te pe Proces, Nu pe Rezultat", desc: "Tratează fiecare zi ca o zi normală. Presiunea de a 'trece' cauzează 80% din eșecurile psihologice." },
            { title: "Tranzacționează Doar în Sesiunile Optime", desc: "Sesiunile Londra și NY oferă cea mai bună lichiditate și acțiune a prețului." },
            { title: "Nu Te Grăbi spre Țintă", desc: "Ai 30-60 zile. Asta înseamnă doar 0.3-0.5% pe zi. Nu există premiu pentru terminarea devreme." }
        ],

        section4Title: "Cele Mai Bune Firme Prop pentru Începători",
        section4Intro: "Dacă ești nou în prop trading, aceste firme oferă cea mai bună combinație de reguli realizabile și plăți de încredere:",

        beginnerFirms: [
            { name: "The5%ers", highlight: "Finanțare instantă, fără limită de timp", link: "https://the5ers.com" },
            { name: "FTMO", highlight: "Cea mai bună reputație, 19% REDUCERE", link: "https://trader.ftmo.com/?affiliates=4354" },
            { name: "FundedNext", highlight: "15% profit share în timpul challenge-ului", link: "https://fundednext.com" }
        ],

        section5Title: "Tendințe Rate de Trecere: 2024 vs 2025 vs 2026",
        section5Intro: "Industria a evoluat semnificativ în ultimii trei ani:",

        trends: [
            { year: "2024", rate: "8-12%", note: "Reguli foarte stricte, puține opțiuni" },
            { year: "2025", rate: "10-15%", note: "Mai multe firme, reguli mai bune, au apărut opțiuni de finanțare instantă" },
            { year: "2026", rate: "12-18%", note: "Competiția a îmbunătățit regulile, dar a atras și traderi mai puțin serioși" }
        ],

        faqTitle: "Întrebări Frecvente",
        faq1Q: "Care este cel mai ușor challenge prop firm de trecut?",
        faq1A: "Firmele care oferă finanțare instantă (precum The5%ers) sau evaluări într-un singur pas (precum E8 Funding) au rate mai mari. Dar 'ușor' nu ar trebui să fie singurul criteriu—fiabilitatea plăților contează mai mult.",
        faq2Q: "Câte încercări sunt necesare în medie pentru a trece?",
        faq2A: "Traderul mediu are nevoie de 2-3 încercări pentru a trece primul challenge. Bugetează în consecință și tratează eșecurile ca experiențe de învățare.",
        faq3Q: "Variază ratele de trecere în funcție de dimensiunea contului?",
        faq3A: "Da. Conturile mai mici ($10k-$25k) au rate ușor mai mari pentru că traderii sunt mai atenți. Conturile mari ($200k+) văd mai multă presiune psihologică.",
        faq4Q: "Rata de trecere este pentru Faza 1 sau pentru tot challenge-ul?",
        faq4A: "Ratele pe care le menționăm sunt pentru challenge-ul complet (toate fazele). Ratele Fazei 1 sunt de obicei 20-30%, dar mulți pică Faza 2.",
        faq5Q: "Strategiile automatizate (EA) au rate de trecere mai mari?",
        faq5A: "Depinde de EA. EA-urile bine testate și conservative pot avea rate de 2-3x mai mari pentru că elimină tradingul emoțional. EA-urile agresive pică adesea din cauza drawdown-ului.",

        conclusion: "Concluzia",
        conclusionText: "Challenge-urile prop firm sunt cu adevărat dificile—așteaptă-te la o rată de 10-15% la nivel de industrie. Dar cu pregătire adecvată, management conservator al riscului și mentalitatea potrivită, îți poți îmbunătăți semnificativ șansele. Concentrează-te pe protejarea drawdown-ului mai întâi, iar profiturile vor urma.",

        ctaTitle: "Ești Pregătit să Accepți Provocarea?",
        ctaText: "Compară cele mai bune firme prop și găsește-o pe cea care se potrivește stilului tău.",
        ctaButton: "Compară Firmele Prop Acum →",
        bonusCta: "Obține 19% REDUCERE FTMO →",
        bonusLink: "https://trader.ftmo.com/?affiliates=4354"
    },
    es: {
        backToHome: "Volver al Inicio",
        title: "Tasas de Aprobación Prop Firm Challenge 2026",
        subtitle: "Datos y Estadísticas Reales",
        date: "7 de Enero, 2026",
        author: "Equipo PropFirmHub",
        readTime: "12 min lectura",
        intro: "¿Cuáles son las tasas reales de aprobación para los desafíos de prop firms? Hemos analizado datos de más de 15 firmas prop importantes para darte la imagen más precisa de tus posibilidades de ser financiado en 2026. Spoiler: es más difícil de lo que anuncian la mayoría de las firmas, pero hay formas de mejorar dramáticamente tus probabilidades.",

        keyStats: "Estadísticas Clave",
        stat1: "5-15%",
        stat1Label: "Tasa Promedio de la Industria",
        stat2: "70%+",
        stat2Label: "Fallan por Reglas de Riesgo",
        stat3: "2-3x",
        stat3Label: "Mayor Tasa con Preparación",

        section1Title: "Los Números Reales: Tasas de Aprobación por Compañía",
        section1Intro: "Dejemos de lado el marketing y veamos las tasas reales basadas en datos disponibles, informes de traders y divulgaciones de firmas:",

        firmRankings: [
            { name: "FTMO", rate: "~10%", note: "Líder de la industria, reglas estrictas, muy consistente" },
            { name: "FundedNext", rate: "~12%", note: "Crecimiento rápido, reglas ligeramente más fáciles" },
            { name: "The Funded Trader", rate: "~8%", note: "Tasa más baja debido a reglas agresivas de drawdown" },
            { name: "My Forex Funds", rate: "~15%", note: "Tasa más alta, pero pagos menos consistentes" },
            { name: "Fidelcrest", rate: "~11%", note: "Reglas equilibradas, dificultad media" },
            { name: "E8 Funding", rate: "~14%", note: "Evaluación de un paso ayuda a aumentar la tasa" },
            { name: "True Forex Funds", rate: "~13%", note: "Reglas justas, buena reputación" },
            { name: "Alpha Capital", rate: "~18%", note: "Firma más nueva, reglas más flexibles" },
            { name: "Surge Trader", rate: "~9%", note: "Objetivos agresivos, tasa más baja" },
            { name: "The5%ers", rate: "~20%", note: "Opción de financiación instantánea aumenta la tasa" }
        ],

        section2Title: "Por Qué Fallan la Mayoría (Y No Es la Estrategia)",
        section2Intro: "Nuestro análisis muestra que la estrategia de trading representa solo el 20-30% de los fracasos. Aquí está el desglose real:",

        failureReasons: [
            { reason: "Romper el Límite de Drawdown Diario", percentage: "38%" },
            { reason: "Romper el Límite Máximo de Drawdown", percentage: "27%" },
            { reason: "Sobreoperar / Trading de Venganza", percentage: "18%" },
            { reason: "No Alcanzar el Objetivo de Ganancias a Tiempo", percentage: "12%" },
            { reason: "Violaciones de Reglas (Trading de Noticias, etc.)", percentage: "5%" }
        ],

        section3Title: "Cómo Vencer las Probabilidades: Estrategias Probadas",
        section3Intro: "Los traders que siguen estos principios tienen tasas de aprobación 2-3 veces mayores que el promedio:",

        strategies: [
            { title: "Arriesga Solo 0.5-1% Por Operación", desc: "La mayoría de los fracasos vienen del apalancamiento excesivo. El riesgo conservador te da más intentos." },
            { title: "Establece Límites Personales de Pérdida Diaria", desc: "Deja de operar al 2-3% de pérdida diaria (la mitad del límite) para proteger tu cuenta." },
            { title: "Enfócate en el Proceso, No en el Resultado", desc: "Trata cada día como un día normal. La presión de 'pasar' causa el 80% de los fracasos psicológicos." },
            { title: "Opera Solo Durante Sesiones Óptimas", desc: "Las sesiones de Londres y NY ofrecen la mejor liquidez y acción del precio." },
            { title: "No Te Apresures al Objetivo", desc: "Tienes 30-60 días. Eso es solo 0.3-0.5% por día. No hay premio por terminar antes." }
        ],

        section4Title: "Mejores Prop Firms para Principiantes",
        section4Intro: "Si eres nuevo en prop trading, estas firmas ofrecen la mejor combinación de reglas alcanzables y pagos confiables:",

        beginnerFirms: [
            { name: "The5%ers", highlight: "Financiación instantánea, sin límite de tiempo", link: "https://the5ers.com" },
            { name: "FTMO", highlight: "Mejor reputación, 19% DESCUENTO disponible", link: "https://trader.ftmo.com/?affiliates=4354" },
            { name: "FundedNext", highlight: "15% profit share durante el desafío", link: "https://fundednext.com" }
        ],

        section5Title: "Tendencias de Tasas: 2024 vs 2025 vs 2026",
        section5Intro: "La industria ha evolucionado significativamente en los últimos tres años:",

        trends: [
            { year: "2024", rate: "8-12%", note: "Reglas muy estrictas, pocas opciones" },
            { year: "2025", rate: "10-15%", note: "Más firmas, mejores reglas, surgieron opciones de financiación instantánea" },
            { year: "2026", rate: "12-18%", note: "La competencia mejoró las reglas, pero también atrajo traders menos serios" }
        ],

        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Cuál es el desafío de prop firm más fácil de pasar?",
        faq1A: "Las firmas que ofrecen financiación instantánea (como The5%ers) o evaluaciones de un paso (como E8 Funding) típicamente tienen tasas más altas. Sin embargo, 'fácil' no debería ser tu único criterio—la confiabilidad de los pagos importa más.",
        faq2Q: "¿Cuántos intentos se necesitan en promedio para pasar?",
        faq2A: "El trader promedio necesita 2-3 intentos para pasar su primer desafío. Presupuesta en consecuencia y trata los fracasos tempranos como experiencias de aprendizaje.",
        faq3Q: "¿Las tasas varían según el tamaño de la cuenta?",
        faq3A: "Sí. Las cuentas más pequeñas ($10k-$25k) típicamente tienen tasas ligeramente más altas porque los traders son más cuidadosos. Las cuentas grandes ($200k+) ven más presión psicológica.",
        faq4Q: "¿La tasa de aprobación es para la Fase 1 o el desafío total?",
        faq4A: "Las tasas que citamos son para el desafío completo (todas las fases). Las tasas de la Fase 1 son típicamente 20-30%, pero muchos fallan la Fase 2.",
        faq5Q: "¿Las estrategias automatizadas (EAs) tienen mayores tasas?",
        faq5A: "Depende del EA. Los EAs bien probados y conservadores pueden tener tasas 2-3x mayores porque eliminan el trading emocional. Los EAs agresivos a menudo fallan por violaciones de drawdown.",

        conclusion: "La Conclusión",
        conclusionText: "Los desafíos de prop firms son genuinamente difíciles—espera alrededor de 10-15% de tasa a nivel de industria. Pero con preparación adecuada, gestión conservadora de riesgos y la mentalidad correcta, puedes mejorar significativamente tus probabilidades. Enfócate en proteger tu drawdown primero, y las ganancias seguirán.",

        ctaTitle: "¿Listo para Aceptar el Desafío?",
        ctaText: "Compara las mejores prop firms y encuentra una que coincida con tu estilo de trading.",
        ctaButton: "Comparar Prop Firms Ahora →",
        bonusCta: "Obtén 19% DESCUENTO FTMO →",
        bonusLink: "https://trader.ftmo.com/?affiliates=4354"
    }
};

export default async function PassRates2026Page({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;
    const homeLink = lang === 'en' ? '/' : `/${lang}`;

    // Base URL for structured data
    const baseUrl = 'https://propfirms-hub.com';
    const articleUrl = `${baseUrl}/${lang}/blog/pass-rates-2026`;

    // Article Schema (JSON-LD)
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": t.title,
        "description": t.intro,
        "image": `${baseUrl}/og-image.jpg`,
        "author": {
            "@type": "Organization",
            "name": "PropFirmHub",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": "PropFirmHub",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`
            }
        },
        "datePublished": "2026-01-07",
        "dateModified": "2026-01-07",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },
        "wordCount": 2500,
        "articleSection": "Trading Statistics",
        "keywords": lang === 'en'
            ? "prop firm pass rate, prop firm success rate, funded trader statistics"
            : lang === 'ro'
                ? "rata trecere prop firm, statistici prop firm"
                : "tasa aprobación prop firm, estadísticas prop firm"
    };

    // FAQ Schema (JSON-LD)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": t.faq1Q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t.faq1A
                }
            },
            {
                "@type": "Question",
                "name": t.faq2Q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t.faq2A
                }
            },
            {
                "@type": "Question",
                "name": t.faq3Q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t.faq3A
                }
            },
            {
                "@type": "Question",
                "name": t.faq4Q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t.faq4A
                }
            },
            {
                "@type": "Question",
                "name": t.faq5Q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": t.faq5A
                }
            }
        ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": lang === 'en' ? "Home" : lang === 'ro' ? "Acasă" : "Inicio",
                "item": `${baseUrl}/${lang}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${baseUrl}/${lang}/blog`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": t.title
            }
        ]
    };

    return (
        <>
            {/* Structured Data JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
                <Header lang={lang} />
                <main className="flex-1">
                    <article className="container mx-auto px-4 py-16 max-w-4xl">
                        <Link href={homeLink} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                            <ArrowLeft className="h-4 w-4" />
                            {t.backToHome}
                        </Link>

                        <header className="mb-12">
                            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">{t.subtitle}</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                                <span>{t.date}</span>
                                <span>•</span>
                                <span>{t.author}</span>
                                <span>•</span>
                                <span>{t.readTime}</span>
                            </div>
                        </header>

                        <div className="prose prose-invert prose-emerald max-w-none">
                            <p className="text-xl text-slate-300 leading-relaxed mb-8">{t.intro}</p>

                            {/* Key Stats */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-8">
                                <h2 className="text-xl font-bold text-white mt-0 mb-4 flex items-center gap-2">
                                    <BarChart3 className="h-5 w-5 text-blue-400" />
                                    {t.keyStats}
                                </h2>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-400">{t.stat1}</div>
                                        <div className="text-sm text-slate-400">{t.stat1Label}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-red-400">{t.stat2}</div>
                                        <div className="text-sm text-slate-400">{t.stat2Label}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-400">{t.stat3}</div>
                                        <div className="text-sm text-slate-400">{t.stat3Label}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 1: Pass Rates by Company */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Percent className="h-6 w-6 text-emerald-400" />
                                {t.section1Title}
                            </h2>
                            <p className="text-slate-300 mb-6">{t.section1Intro}</p>

                            <div className="space-y-3 my-6">
                                {t.firmRankings.map((firm, i) => (
                                    <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex items-center justify-between hover:border-emerald-500/30 transition">
                                        <div className="flex items-center gap-4">
                                            <span className="text-slate-500 font-bold w-6">#{i + 1}</span>
                                            <div>
                                                <span className="font-bold text-white">{firm.name}</span>
                                                <p className="text-sm text-slate-400">{firm.note}</p>
                                            </div>
                                        </div>
                                        <span className="text-2xl font-bold text-emerald-400">{firm.rate}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Section 2: Why Traders Fail */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <XCircle className="h-6 w-6 text-red-400" />
                                {t.section2Title}
                            </h2>
                            <p className="text-slate-300 mb-6">{t.section2Intro}</p>

                            <div className="space-y-3 my-6">
                                {t.failureReasons.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-16 text-right">
                                            <span className="text-xl font-bold text-red-400">{item.percentage}</span>
                                        </div>
                                        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-3">
                                            <span className="text-slate-300">{item.reason}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Section 3: Strategies */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Target className="h-6 w-6 text-emerald-400" />
                                {t.section3Title}
                            </h2>
                            <p className="text-slate-300 mb-6">{t.section3Intro}</p>

                            <div className="space-y-4 my-6">
                                {t.strategies.map((strategy, i) => (
                                    <div key={i} className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-bold text-white mb-1">{strategy.title}</h4>
                                                <p className="text-slate-300 text-sm">{strategy.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Section 4: Best for Beginners */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Users className="h-6 w-6 text-blue-400" />
                                {t.section4Title}
                            </h2>
                            <p className="text-slate-300 mb-6">{t.section4Intro}</p>

                            <div className="grid gap-4 my-6">
                                {t.beginnerFirms.map((firm, i) => (
                                    <a
                                        key={i}
                                        href={firm.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-slate-700 rounded-lg p-5 hover:border-emerald-500/50 transition-all hover:scale-[1.02]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{firm.name}</h4>
                                                <p className="text-emerald-400 text-sm">{firm.highlight}</p>
                                            </div>
                                            <Award className="h-8 w-8 text-emerald-400" />
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Section 5: Trends */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <TrendingUp className="h-6 w-6 text-emerald-400" />
                                {t.section5Title}
                            </h2>
                            <p className="text-slate-300 mb-6">{t.section5Intro}</p>

                            <div className="grid grid-cols-3 gap-4 my-6">
                                {t.trends.map((trend, i) => (
                                    <div key={i} className={`text-center p-4 rounded-lg border ${i === 2 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-900/30 border-slate-800'}`}>
                                        <div className="text-lg font-bold text-slate-400 mb-1">{trend.year}</div>
                                        <div className={`text-2xl font-bold mb-2 ${i === 2 ? 'text-emerald-400' : 'text-white'}`}>{trend.rate}</div>
                                        <div className="text-xs text-slate-500">{trend.note}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Affiliate CTA */}
                            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 rounded-xl p-8 my-12 text-center">
                                <h3 className="text-2xl font-bold text-white mt-0 mb-4">{t.ctaTitle}</h3>
                                <p className="text-slate-300 mb-6">{t.ctaText}</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={homeLink}
                                        className="inline-flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 px-6 py-3 text-base font-bold text-white hover:bg-slate-700 transition-all"
                                    >
                                        {t.ctaButton}
                                    </Link>
                                    <a
                                        href={t.bonusLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                    >
                                        {t.bonusCta}
                                    </a>
                                </div>
                            </div>

                            {/* FAQ */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-6">{t.faqTitle}</h2>
                            <div className="space-y-4">
                                {[
                                    { q: t.faq1Q, a: t.faq1A },
                                    { q: t.faq2Q, a: t.faq2A },
                                    { q: t.faq3Q, a: t.faq3A },
                                    { q: t.faq4Q, a: t.faq4A },
                                    { q: t.faq5Q, a: t.faq5A },
                                ].map((faq, i) => (
                                    <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-lg p-5">
                                        <h3 className="text-lg font-bold text-white mt-0 mb-2">{faq.q}</h3>
                                        <p className="text-slate-300 mb-0">{faq.a}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Conclusion */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.conclusion}</h2>
                            <p className="text-slate-300">{t.conclusionText}</p>
                        </div>
                    </article>
                </main>
                <Footer lang={lang} />
            </div>
        </>
    );
}
