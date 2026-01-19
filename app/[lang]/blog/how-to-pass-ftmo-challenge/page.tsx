import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RelatedArticles from '../../../components/RelatedArticles';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Target, TrendingDown, Shield, CheckCircle, Calculator, ExternalLink, Zap, Clock, Percent } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

// SEO Metadata
const seoData = {
    en: {
        title: "How to Pass FTMO Challenge – Why Most Traders Fail [2025 Guide]",
        description: "Discover why 8 out of 10 traders fail the FTMO challenge and learn the exact strategies to pass. Daily loss rules, risk management, and proven tips from funded traders.",
        keywords: "how to pass ftmo challenge, ftmo challenge fail, ftmo daily loss rule, ftmo max loss rule, ftmo challenge tips, ftmo risk management, ftmo challenge strategy"
    },
    ro: {
        title: "Cum să Treci Challenge-ul FTMO – De Ce Majoritatea Pică [Ghid 2025]",
        description: "Descoperă de ce 8 din 10 traderi pică challenge-ul FTMO și învață strategiile exacte pentru a trece. Reguli daily loss, risk management și sfaturi dovedite.",
        keywords: "cum sa treci challenge ftmo, de ce pici challenge ftmo, ftmo daily loss, ftmo reguli, ftmo sfaturi, ftmo strategie"
    },
    es: {
        title: "Cómo Pasar el Desafío FTMO – Por Qué la Mayoría Falla [Guía 2025]",
        description: "Descubre por qué 8 de cada 10 traders fallan el desafío FTMO y aprende las estrategias exactas para aprobarlo. Reglas de pérdida diaria, gestión de riesgo y consejos probados.",
        keywords: "como pasar desafio ftmo, por que fallan ftmo, ftmo daily loss, ftmo reglas, ftmo consejos, ftmo estrategia"
    }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { lang } = await params;
    const seo = seoData[lang] || seoData.en;
    const baseUrl = 'https://propfirms-hub.com';
    const path = lang === 'en' ? '/blog/how-to-pass-ftmo-challenge' : `/${lang}/blog/how-to-pass-ftmo-challenge`;

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
            canonical: `${baseUrl}${path}`,
            languages: {
                'en': `${baseUrl}/blog/how-to-pass-ftmo-challenge`,
                'ro': `${baseUrl}/ro/blog/how-to-pass-ftmo-challenge`,
                'es': `${baseUrl}/es/blog/how-to-pass-ftmo-challenge`
            }
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: `${baseUrl}${path}`,
            type: 'article',
            publishedTime: '2025-01-10T00:00:00Z',
            modifiedTime: '2025-01-10T00:00:00Z',
            authors: ['PropFirmHub Team']
        }
    };
}

const translations = {
    en: {
        backToBlog: "Back to Blog",
        title: "How to Pass the FTMO Challenge",
        subtitle: "Why Most Traders Fail",
        date: "January 10, 2025",
        author: "PropFirmHub Team",
        readTime: "12 min read",
        intro: "8 out of 10 traders fail the FTMO challenge. Most fail within the first 5 days. Not because FTMO is a scam. Not because they lack a strategy. But because they don't understand the rules that matter most.",
        introHighlight: "This guide will show you exactly why traders fail and how to avoid the same mistakes.",

        // H2: Why Most Traders Fail
        whyFailTitle: "Why Most Traders Fail the FTMO Challenge",
        whyFailIntro: "The biggest pain in prop trading isn't finding a strategy. It's executing it under strict risk rules. Here's what actually kills accounts:",
        failReason1Title: "They don't understand the daily loss limit",
        failReason1Text: "One bad trade. One emotional revenge trade. Account blown in hours.",
        failReason2Title: "They overtrade",
        failReason2Text: "Multiple small losses add up faster than you think.",
        failReason3Title: "They risk too much per trade",
        failReason3Text: "Even 1% can be too much when you're chasing targets.",
        failReason4Title: "No daily plan",
        failReason4Text: "Emotions take over. Strategy goes out the window.",

        // H2: Daily Loss Rule
        dailyLossTitle: "FTMO Daily Loss Rule Explained",
        dailyLossIntro: "The 5% daily loss limit is the biggest account killer. Here's how it works:",
        dailyLossRule: "If your account drops 5% from the starting equity of the day, you're out. Immediately.",
        dailyLossExample: "Example on a $100,000 account:",
        dailyLossCalc1: "Starting equity: $100,000",
        dailyLossCalc2: "Maximum daily loss: $5,000",
        dailyLossCalc3: "If equity drops to $95,000 → Challenge failed",
        dailyLossWarning: "This includes unrealized losses. Open positions count against you.",
        dailyLossMistake: "Common mistake: Traders take a loss, then revenge trade to recover. They lose again. Account gone in one session.",
        dailyLossSolution: "Solution: Set a personal daily loss limit of 2-3%. Stop trading after hitting it. Come back tomorrow.",

        // H2: Max Loss Rule
        maxLossTitle: "FTMO Max Loss Rule and Real Risk",
        maxLossIntro: "The 10% maximum loss is your total buffer for the entire challenge.",
        maxLossRule: "If your account drops 10% from the initial balance at any point, you fail.",
        maxLossCalc: "On $100,000 account: You cannot let equity drop below $90,000. Ever.",
        maxLossReality: "Reality check:",
        maxLossPoint1: "If you lose 3% today, you only have 7% left for the entire challenge",
        maxLossPoint2: "If you hit 5% daily loss twice, you're at 0% buffer",
        maxLossPoint3: "Most traders burn through this in the first week",
        maxLossTip: "Pro tip: Trade like you only have a 6% max loss. Keep 4% as emergency buffer.",

        // H2: Risk Management
        riskTitle: "Risk Management for FTMO Challenge",
        riskIntro: "This is where 90% of traders mess up. Let's do the math:",
        riskScenario: "Scenario: You risk 2% per trade",
        riskCalc1: "3 losing trades = 6% drawdown",
        riskCalc2: "4 losing trades = 8% drawdown",
        riskCalc3: "5 losing trades = 10% drawdown = FAILED",
        riskQuestion: "Think about it: How often do you have 5 losing trades in a row?",
        riskAnswer: "More often than you think. Especially under pressure.",
        riskRecommended: "Recommended risk settings for FTMO:",
        riskSetting1: "Risk per trade: 0.5% - 1% maximum",
        riskSetting2: "Daily loss limit (personal): 2% - 3%",
        riskSetting3: "Maximum open positions: 2-3",
        riskSetting4: "Take profit: 1.5:1 to 2:1 risk-reward minimum",

        // H2: Simple Plan
        planTitle: "Simple Plan to Increase Your Chances",
        planIntro: "Here's a realistic approach that actually works:",
        planDay: "Daily routine:",
        planStep1: "Check economic calendar. No trading during major news.",
        planStep2: "Define 2-3 setups you're looking for. Nothing else.",
        planStep3: "Set maximum 2 trades per day.",
        planStep4: "Use 0.5% - 1% risk per trade.",
        planStep5: "If you lose 2%, stop for the day. No exceptions.",
        planStep6: "Track every trade. Review weekly.",
        planTarget: "Target: The FTMO challenge requires 10% profit. With 30 days and proper risk management, you only need 0.33% per day average. That's one good trade.",
        planMindset: "Mindset shift: You're not trying to get rich. You're trying to prove you can manage risk. FTMO wants consistent, boring traders. Be boring.",

        // H2: FTMO Rules
        rulesTitle: "FTMO Rules and Official Conditions",
        rulesIntro: "Know the exact rules before you start:",
        rulesTable: [
            { rule: "Profit Target", phase1: "10%", phase2: "5%" },
            { rule: "Daily Loss Limit", phase1: "5%", phase2: "5%" },
            { rule: "Maximum Loss", phase1: "10%", phase2: "10%" },
            { rule: "Minimum Trading Days", phase1: "4 days", phase2: "4 days" },
            { rule: "Time Limit", phase1: "30 days", phase2: "60 days" },
            { rule: "Profit Split", phase1: "-", phase2: "80% (up to 90%)" }
        ],
        rulesPhase1: "Phase 1",
        rulesPhase2: "Phase 2 (Verification)",
        rulesNote: "Note: FTMO has updated their rules to be more trader-friendly. Check official conditions before starting.",

        // CTA Section
        ctaTitle: "Ready to Start Your FTMO Challenge?",
        ctaText: "Now you know why traders fail and how to avoid it. Start informed, start prepared.",
        ctaButton: "Start FTMO Challenge →",
        ctaDiscount: "19% OFF Available",
        ctaNote: "Apply proper risk management from day one. Trade small, trade consistently.",

        // FAQ
        faqTitle: "Frequently Asked Questions",
        faq1Q: "Can you really pass the FTMO challenge?",
        faq1A: "Yes. About 10-20% of traders pass. The difference is discipline and risk management, not strategy. If you can control your losses and stay consistent, you can pass.",
        faq2Q: "What happens if I fail the FTMO challenge?",
        faq2A: "You lose your challenge fee. However, you can buy a new challenge and try again. Many funded traders failed 2-3 times before passing. Learn from mistakes.",
        faq3Q: "How many trades do I need to pass FTMO?",
        faq3A: "There's no minimum number of trades. You only need to hit the profit target while respecting the loss limits. Some traders pass with 10 trades, others with 100.",
        faq4Q: "Is FTMO the best prop firm for beginners?",
        faq4A: "FTMO is the most trusted and established prop firm. Their rules are strict but fair. For beginners, the clear structure helps develop discipline. It's a great place to start."
    },
    ro: {
        backToBlog: "Înapoi la Blog",
        title: "Cum să Treci Challenge-ul FTMO",
        subtitle: "De Ce Majoritatea Traderilor Pică",
        date: "10 Ianuarie, 2025",
        author: "Echipa PropFirmHub",
        readTime: "12 min citire",
        intro: "8 din 10 traderi pică challenge-ul FTMO. Majoritatea pică în primele 5 zile. Nu pentru că FTMO ar fi o țeapă. Nu pentru că le lipsește o strategie. Ci pentru că nu înțeleg regulile care contează cu adevărat.",
        introHighlight: "Acest ghid îți arată exact de ce pică traderii și cum să eviți aceleași greșeli.",

        // H2: Why Most Traders Fail
        whyFailTitle: "De Ce Majoritatea Traderilor Pică Challenge-ul FTMO",
        whyFailIntro: "Cea mai mare durere în prop trading nu este găsirea unei strategii. Este executarea ei sub reguli stricte de risc. Iată ce distruge cu adevărat conturile:",
        failReason1Title: "Nu înțeleg limita de pierdere zilnică",
        failReason1Text: "O tranzacție proastă. Un trade emoțional de revanșă. Contul dispărut în câteva ore.",
        failReason2Title: "Fac overtrading",
        failReason2Text: "Pierderile mici multiple se adună mai repede decât crezi.",
        failReason3Title: "Riscă prea mult pe tranzacție",
        failReason3Text: "Chiar și 1% poate fi prea mult când urmărești ținte.",
        failReason4Title: "Fără plan zilnic",
        failReason4Text: "Emoțiile preiau controlul. Strategia dispare pe fereastră.",

        // H2: Daily Loss Rule
        dailyLossTitle: "Regula FTMO Daily Loss Explicată",
        dailyLossIntro: "Limita de pierdere zilnică de 5% este cel mai mare ucigaș de conturi. Iată cum funcționează:",
        dailyLossRule: "Dacă contul tău scade cu 5% față de equity-ul de la începutul zilei, ai pierdut. Imediat.",
        dailyLossExample: "Exemplu pe un cont de $100.000:",
        dailyLossCalc1: "Equity inițial: $100.000",
        dailyLossCalc2: "Pierdere zilnică maximă: $5.000",
        dailyLossCalc3: "Dacă equity-ul scade la $95.000 → Challenge picat",
        dailyLossWarning: "Asta include pierderile nerealizate. Pozițiile deschise contează împotriva ta.",
        dailyLossMistake: "Greșeală comună: Traderii iau o pierdere, apoi fac trade de revanșă pentru a recupera. Pierd din nou. Contul dispărut într-o sesiune.",
        dailyLossSolution: "Soluție: Setează o limită personală de pierdere zilnică de 2-3%. Oprește-te după ce o atingi. Revino mâine.",

        // H2: Max Loss Rule
        maxLossTitle: "Regula FTMO Max Loss și Riscul Real",
        maxLossIntro: "Pierderea maximă de 10% este bufferul tău total pentru întregul challenge.",
        maxLossRule: "Dacă contul tău scade cu 10% față de balanța inițială în orice moment, ai picat.",
        maxLossCalc: "Pe cont de $100.000: Nu poți lăsa equity-ul să scadă sub $90.000. Niciodată.",
        maxLossReality: "Verificare de realitate:",
        maxLossPoint1: "Dacă pierzi 3% azi, ai doar 7% rămas pentru întregul challenge",
        maxLossPoint2: "Dacă atingi 5% daily loss de două ori, ai 0% buffer",
        maxLossPoint3: "Majoritatea traderilor consumă asta în prima săptămână",
        maxLossTip: "Sfat pro: Tranzacționează ca și cum ai doar 6% max loss. Păstrează 4% ca buffer de urgență.",

        // H2: Risk Management
        riskTitle: "Risk Management pentru Challenge-ul FTMO",
        riskIntro: "Aici greșesc 90% din traderi. Să facem calculele:",
        riskScenario: "Scenariu: Riști 2% pe tranzacție",
        riskCalc1: "3 tranzacții pierdute = 6% drawdown",
        riskCalc2: "4 tranzacții pierdute = 8% drawdown",
        riskCalc3: "5 tranzacții pierdute = 10% drawdown = PICAT",
        riskQuestion: "Gândește-te: Cât de des ai 5 tranzacții pierdute la rând?",
        riskAnswer: "Mai des decât crezi. Mai ales sub presiune.",
        riskRecommended: "Setări de risc recomandate pentru FTMO:",
        riskSetting1: "Risc pe tranzacție: 0.5% - 1% maxim",
        riskSetting2: "Limită pierdere zilnică (personală): 2% - 3%",
        riskSetting3: "Poziții deschise maxime: 2-3",
        riskSetting4: "Take profit: minim 1.5:1 până la 2:1 risk-reward",

        // H2: Simple Plan
        planTitle: "Plan Simplu pentru a-ți Crește Șansele",
        planIntro: "Iată o abordare realistă care funcționează:",
        planDay: "Rutină zilnică:",
        planStep1: "Verifică calendarul economic. Nu tranzacționa în timpul știrilor majore.",
        planStep2: "Definește 2-3 setup-uri pe care le cauți. Nimic altceva.",
        planStep3: "Setează maxim 2 tranzacții pe zi.",
        planStep4: "Folosește risc de 0.5% - 1% pe tranzacție.",
        planStep5: "Dacă pierzi 2%, oprește-te pentru ziua respectivă. Fără excepții.",
        planStep6: "Înregistrează fiecare tranzacție. Revizuiește săptămânal.",
        planTarget: "Țintă: Challenge-ul FTMO necesită 10% profit. Cu 30 de zile și risk management adecvat, ai nevoie doar de 0.33% pe zi în medie. Asta înseamnă o tranzacție bună.",
        planMindset: "Schimbare de mentalitate: Nu încerci să te îmbogățești. Încerci să demonstrezi că poți gestiona riscul. FTMO vrea traderi consistenți, plictisitori. Fii plictisitor.",

        // H2: FTMO Rules
        rulesTitle: "Regulile și Condițiile Oficiale FTMO",
        rulesIntro: "Cunoaște regulile exacte înainte să începi:",
        rulesTable: [
            { rule: "Țintă Profit", phase1: "10%", phase2: "5%" },
            { rule: "Limită Pierdere Zilnică", phase1: "5%", phase2: "5%" },
            { rule: "Pierdere Maximă", phase1: "10%", phase2: "10%" },
            { rule: "Zile Minime Trading", phase1: "4 zile", phase2: "4 zile" },
            { rule: "Limită Timp", phase1: "30 zile", phase2: "60 zile" },
            { rule: "Împărțire Profit", phase1: "-", phase2: "80% (până la 90%)" }
        ],
        rulesPhase1: "Faza 1",
        rulesPhase2: "Faza 2 (Verificare)",
        rulesNote: "Notă: FTMO și-a actualizat regulile pentru a fi mai prietenoase cu traderii. Verifică condițiile oficiale înainte de a începe.",

        // CTA Section
        ctaTitle: "Ești Pregătit să Începi Challenge-ul FTMO?",
        ctaText: "Acum știi de ce pică traderii și cum să eviți asta. Începe informat, începe pregătit.",
        ctaButton: "Începe Challenge-ul FTMO →",
        ctaDiscount: "19% REDUCERE Disponibilă",
        ctaNote: "Aplică risk management adecvat din prima zi. Tranzacționează mic, tranzacționează consistent.",

        // FAQ
        faqTitle: "Întrebări Frecvente",
        faq1Q: "Poți într-adevăr să treci challenge-ul FTMO?",
        faq1A: "Da. Aproximativ 10-20% din traderi trec. Diferența este disciplina și risk management-ul, nu strategia. Dacă poți controla pierderile și rămâi consistent, poți trece.",
        faq2Q: "Ce se întâmplă dacă pic challenge-ul FTMO?",
        faq2A: "Pierzi taxa de challenge. Totuși, poți cumpăra un nou challenge și încerca din nou. Mulți traderi finanțați au picat de 2-3 ori înainte să treacă. Învață din greșeli.",
        faq3Q: "Câte tranzacții am nevoie pentru a trece FTMO?",
        faq3A: "Nu există un număr minim de tranzacții. Trebuie doar să atingi ținta de profit respectând limitele de pierdere. Unii traderi trec cu 10 tranzacții, alții cu 100.",
        faq4Q: "Este FTMO cea mai bună firmă prop pentru începători?",
        faq4A: "FTMO este cea mai de încredere și stabilită firmă prop. Regulile lor sunt stricte dar corecte. Pentru începători, structura clară ajută la dezvoltarea disciplinei. Este un loc excelent pentru a începe."
    },
    es: {
        backToBlog: "Volver al Blog",
        title: "Cómo Pasar el Desafío FTMO",
        subtitle: "Por Qué la Mayoría de Traders Fallan",
        date: "10 de Enero, 2025",
        author: "Equipo PropFirmHub",
        readTime: "12 min lectura",
        intro: "8 de cada 10 traders fallan el desafío FTMO. La mayoría falla en los primeros 5 días. No porque FTMO sea una estafa. No porque les falte una estrategia. Sino porque no entienden las reglas que realmente importan.",
        introHighlight: "Esta guía te mostrará exactamente por qué fallan los traders y cómo evitar los mismos errores.",

        // H2: Why Most Traders Fail
        whyFailTitle: "Por Qué la Mayoría de Traders Fallan el Desafío FTMO",
        whyFailIntro: "El mayor dolor en prop trading no es encontrar una estrategia. Es ejecutarla bajo reglas estrictas de riesgo. Esto es lo que realmente mata las cuentas:",
        failReason1Title: "No entienden el límite de pérdida diaria",
        failReason1Text: "Una mala operación. Una operación emocional de venganza. Cuenta destruida en horas.",
        failReason2Title: "Hacen overtrading",
        failReason2Text: "Las pérdidas pequeñas múltiples se acumulan más rápido de lo que piensas.",
        failReason3Title: "Arriesgan demasiado por operación",
        failReason3Text: "Incluso el 1% puede ser demasiado cuando persigues objetivos.",
        failReason4Title: "Sin plan diario",
        failReason4Text: "Las emociones toman el control. La estrategia desaparece.",

        // H2: Daily Loss Rule
        dailyLossTitle: "Regla de Pérdida Diaria FTMO Explicada",
        dailyLossIntro: "El límite de pérdida diaria del 5% es el mayor asesino de cuentas. Así es como funciona:",
        dailyLossRule: "Si tu cuenta cae un 5% desde el equity inicial del día, has perdido. Inmediatamente.",
        dailyLossExample: "Ejemplo en una cuenta de $100,000:",
        dailyLossCalc1: "Equity inicial: $100,000",
        dailyLossCalc2: "Pérdida diaria máxima: $5,000",
        dailyLossCalc3: "Si el equity cae a $95,000 → Desafío fallido",
        dailyLossWarning: "Esto incluye pérdidas no realizadas. Las posiciones abiertas cuentan en tu contra.",
        dailyLossMistake: "Error común: Los traders toman una pérdida, luego hacen operaciones de venganza para recuperar. Pierden de nuevo. Cuenta desaparecida en una sesión.",
        dailyLossSolution: "Solución: Establece un límite personal de pérdida diaria de 2-3%. Deja de operar al alcanzarlo. Vuelve mañana.",

        // H2: Max Loss Rule
        maxLossTitle: "Regla FTMO Max Loss y Riesgo Real",
        maxLossIntro: "La pérdida máxima del 10% es tu buffer total para todo el desafío.",
        maxLossRule: "Si tu cuenta cae un 10% desde el balance inicial en cualquier momento, has fallado.",
        maxLossCalc: "En cuenta de $100,000: No puedes dejar que el equity caiga por debajo de $90,000. Nunca.",
        maxLossReality: "Verificación de realidad:",
        maxLossPoint1: "Si pierdes 3% hoy, solo tienes 7% restante para todo el desafío",
        maxLossPoint2: "Si alcanzas 5% daily loss dos veces, tienes 0% de buffer",
        maxLossPoint3: "La mayoría de traders consumen esto en la primera semana",
        maxLossTip: "Consejo pro: Opera como si solo tuvieras 6% max loss. Guarda 4% como buffer de emergencia.",

        // H2: Risk Management
        riskTitle: "Gestión de Riesgo para el Desafío FTMO",
        riskIntro: "Aquí es donde el 90% de los traders fallan. Hagamos los cálculos:",
        riskScenario: "Escenario: Arriesgas 2% por operación",
        riskCalc1: "3 operaciones perdidas = 6% drawdown",
        riskCalc2: "4 operaciones perdidas = 8% drawdown",
        riskCalc3: "5 operaciones perdidas = 10% drawdown = FALLIDO",
        riskQuestion: "Piénsalo: ¿Con qué frecuencia tienes 5 operaciones perdidas seguidas?",
        riskAnswer: "Más a menudo de lo que crees. Especialmente bajo presión.",
        riskRecommended: "Configuración de riesgo recomendada para FTMO:",
        riskSetting1: "Riesgo por operación: 0.5% - 1% máximo",
        riskSetting2: "Límite de pérdida diaria (personal): 2% - 3%",
        riskSetting3: "Posiciones abiertas máximas: 2-3",
        riskSetting4: "Take profit: mínimo 1.5:1 a 2:1 riesgo-recompensa",

        // H2: Simple Plan
        planTitle: "Plan Simple para Aumentar Tus Posibilidades",
        planIntro: "Aquí tienes un enfoque realista que realmente funciona:",
        planDay: "Rutina diaria:",
        planStep1: "Revisa el calendario económico. No operes durante noticias importantes.",
        planStep2: "Define 2-3 setups que estás buscando. Nada más.",
        planStep3: "Establece máximo 2 operaciones por día.",
        planStep4: "Usa riesgo de 0.5% - 1% por operación.",
        planStep5: "Si pierdes 2%, detente por el día. Sin excepciones.",
        planStep6: "Registra cada operación. Revisa semanalmente.",
        planTarget: "Objetivo: El desafío FTMO requiere 10% de ganancia. Con 30 días y gestión de riesgo adecuada, solo necesitas 0.33% por día en promedio. Eso es una buena operación.",
        planMindset: "Cambio de mentalidad: No estás tratando de hacerte rico. Estás tratando de demostrar que puedes gestionar el riesgo. FTMO quiere traders consistentes y aburridos. Sé aburrido.",

        // H2: FTMO Rules
        rulesTitle: "Reglas y Condiciones Oficiales de FTMO",
        rulesIntro: "Conoce las reglas exactas antes de empezar:",
        rulesTable: [
            { rule: "Objetivo de Ganancia", phase1: "10%", phase2: "5%" },
            { rule: "Límite de Pérdida Diaria", phase1: "5%", phase2: "5%" },
            { rule: "Pérdida Máxima", phase1: "10%", phase2: "10%" },
            { rule: "Días Mínimos de Trading", phase1: "4 días", phase2: "4 días" },
            { rule: "Límite de Tiempo", phase1: "30 días", phase2: "60 días" },
            { rule: "División de Ganancias", phase1: "-", phase2: "80% (hasta 90%)" }
        ],
        rulesPhase1: "Fase 1",
        rulesPhase2: "Fase 2 (Verificación)",
        rulesNote: "Nota: FTMO ha actualizado sus reglas para ser más amigables con los traders. Verifica las condiciones oficiales antes de empezar.",

        // CTA Section
        ctaTitle: "¿Listo para Empezar Tu Desafío FTMO?",
        ctaText: "Ahora sabes por qué fallan los traders y cómo evitarlo. Empieza informado, empieza preparado.",
        ctaButton: "Empezar Desafío FTMO →",
        ctaDiscount: "19% DESCUENTO Disponible",
        ctaNote: "Aplica gestión de riesgo adecuada desde el primer día. Opera pequeño, opera consistente.",

        // FAQ
        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Realmente puedes pasar el desafío FTMO?",
        faq1A: "Sí. Aproximadamente 10-20% de los traders pasan. La diferencia es disciplina y gestión de riesgo, no estrategia. Si puedes controlar tus pérdidas y mantenerte consistente, puedes pasar.",
        faq2Q: "¿Qué pasa si fallo el desafío FTMO?",
        faq2A: "Pierdes la tarifa del desafío. Sin embargo, puedes comprar un nuevo desafío e intentar de nuevo. Muchos traders financiados fallaron 2-3 veces antes de pasar. Aprende de los errores.",
        faq3Q: "¿Cuántas operaciones necesito para pasar FTMO?",
        faq3A: "No hay un número mínimo de operaciones. Solo necesitas alcanzar el objetivo de ganancia respetando los límites de pérdida. Algunos traders pasan con 10 operaciones, otros con 100.",
        faq4Q: "¿Es FTMO la mejor firma prop para principiantes?",
        faq4A: "FTMO es la firma prop más confiable y establecida. Sus reglas son estrictas pero justas. Para principiantes, la estructura clara ayuda a desarrollar disciplina. Es un excelente lugar para empezar."
    }
};

export default async function HowToPassFTMOChallengePage({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;
    const blogLink = lang === 'en' ? '/blog' : `/${lang}/blog`;
    const ftmoLink = 'https://trader.ftmo.com/?affiliates=4354';

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-16 max-w-4xl">
                    <Link href={blogLink} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        {t.backToBlog}
                    </Link>

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{t.title}</h1>
                        <p className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4">{t.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span>{t.date}</span>
                            <span>•</span>
                            <span>{t.author}</span>
                            <span>•</span>
                            <span>{t.readTime}</span>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-emerald max-w-none">
                        {/* Introduction */}
                        <p className="text-xl text-slate-300 leading-relaxed mb-4">{t.intro}</p>
                        <p className="text-lg text-emerald-400 font-semibold mb-8">{t.introHighlight}</p>

                        {/* H2: Why Most Traders Fail */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <AlertTriangle className="h-8 w-8 text-red-400" />
                            {t.whyFailTitle}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-6">{t.whyFailIntro}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {[
                                { title: t.failReason1Title, text: t.failReason1Text, icon: TrendingDown },
                                { title: t.failReason2Title, text: t.failReason2Text, icon: Zap },
                                { title: t.failReason3Title, text: t.failReason3Text, icon: Percent },
                                { title: t.failReason4Title, text: t.failReason4Text, icon: Clock }
                            ].map((item, i) => (
                                <div key={i} className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <item.icon className="h-5 w-5 text-red-400" />
                                        <h4 className="text-white font-bold m-0">{item.title}</h4>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-0">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* H2: Daily Loss Rule */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Target className="h-8 w-8 text-amber-400" />
                            {t.dailyLossTitle}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-4">{t.dailyLossIntro}</p>

                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
                            <p className="text-amber-400 font-bold text-lg mb-0">{t.dailyLossRule}</p>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-6">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Calculator className="h-5 w-5 text-emerald-400" />
                                {t.dailyLossExample}
                            </h4>
                            <ul className="space-y-2 text-slate-300 mb-0">
                                <li>{t.dailyLossCalc1}</li>
                                <li>{t.dailyLossCalc2}</li>
                                <li className="text-red-400 font-bold">{t.dailyLossCalc3}</li>
                            </ul>
                        </div>

                        <p className="text-slate-300 mb-4">
                            <span className="text-amber-400 font-bold">⚠️ </span>{t.dailyLossWarning}
                        </p>
                        <p className="text-slate-300 mb-4">
                            <span className="text-red-400 font-bold">{lang === 'en' ? 'Common mistake: ' : lang === 'ro' ? 'Greșeală comună: ' : 'Error común: '}</span>
                            {t.dailyLossMistake.replace(/^(Common mistake:|Greșeală comună:|Error común:)\s*/, '')}
                        </p>
                        <p className="text-emerald-400 font-semibold mb-8">
                            <span className="text-emerald-400">✅ </span>{t.dailyLossSolution}
                        </p>

                        {/* H2: Max Loss Rule */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Shield className="h-8 w-8 text-blue-400" />
                            {t.maxLossTitle}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-4">{t.maxLossIntro}</p>

                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
                            <p className="text-blue-400 font-bold text-lg mb-2">{t.maxLossRule}</p>
                            <p className="text-slate-300 mb-0">{t.maxLossCalc}</p>
                        </div>

                        <p className="text-white font-bold mb-3">{t.maxLossReality}</p>
                        <ul className="space-y-2 text-slate-300 mb-6">
                            <li>• {t.maxLossPoint1}</li>
                            <li>• {t.maxLossPoint2}</li>
                            <li className="text-red-400">• {t.maxLossPoint3}</li>
                        </ul>
                        <p className="text-emerald-400 font-semibold mb-8">💡 {t.maxLossTip}</p>

                        {/* H2: Risk Management */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Calculator className="h-8 w-8 text-purple-400" />
                            {t.riskTitle}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-6">{t.riskIntro}</p>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-6">
                            <p className="text-white font-bold mb-3">{t.riskScenario}</p>
                            <ul className="space-y-2 text-slate-300 mb-4">
                                <li>{t.riskCalc1}</li>
                                <li>{t.riskCalc2}</li>
                                <li className="text-red-400 font-bold">{t.riskCalc3}</li>
                            </ul>
                            <p className="text-amber-400 mb-2">{t.riskQuestion}</p>
                            <p className="text-slate-400 italic mb-0">{t.riskAnswer}</p>
                        </div>

                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-8">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-emerald-400" />
                                {t.riskRecommended}
                            </h4>
                            <ul className="space-y-2 text-slate-300 mb-0">
                                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> {t.riskSetting1}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> {t.riskSetting2}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> {t.riskSetting3}</li>
                                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> {t.riskSetting4}</li>
                            </ul>
                        </div>

                        {/* H2: Simple Plan */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                            <Target className="h-8 w-8 text-emerald-400" />
                            {t.planTitle}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-6">{t.planIntro}</p>

                        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-6 mb-6">
                            <h4 className="text-white font-bold mb-4">{t.planDay}</h4>
                            <ol className="space-y-3 text-slate-300 mb-0">
                                {[t.planStep1, t.planStep2, t.planStep3, t.planStep4, t.planStep5, t.planStep6].map((step, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
                            <p className="text-blue-400 font-bold mb-2">📊 {lang === 'en' ? 'Target:' : lang === 'ro' ? 'Țintă:' : 'Objetivo:'}</p>
                            <p className="text-slate-300 mb-0">{t.planTarget.replace(/^Target:\s*|^Țintă:\s*|^Objetivo:\s*/, '')}</p>
                        </div>

                        <p className="text-emerald-400 font-semibold text-lg mb-8">🧠 {t.planMindset}</p>

                        {/* H2: FTMO Rules */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">{t.rulesTitle}</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">{t.rulesIntro}</p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-slate-800">
                                        <th className="text-left p-4 text-white font-bold">{lang === 'en' ? 'Rule' : lang === 'ro' ? 'Regulă' : 'Regla'}</th>
                                        <th className="text-center p-4 text-white font-bold">{t.rulesPhase1}</th>
                                        <th className="text-center p-4 text-white font-bold">{t.rulesPhase2}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {t.rulesTable.map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/50'}>
                                            <td className="p-4 text-slate-300 border-t border-slate-800">{row.rule}</td>
                                            <td className="p-4 text-center text-emerald-400 font-bold border-t border-slate-800">{row.phase1}</td>
                                            <td className="p-4 text-center text-emerald-400 font-bold border-t border-slate-800">{row.phase2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-slate-400 text-sm mb-8">{t.rulesNote}</p>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 border-2 border-emerald-500/50 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-3xl font-bold text-white mt-0 mb-4">{t.ctaTitle}</h3>
                            <p className="text-slate-300 text-lg mb-6">{t.ctaText}</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                                <a
                                    href={ftmoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                >
                                    {t.ctaButton}
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                                <span className="px-4 py-2 bg-amber-500 text-black font-bold rounded-lg">{t.ctaDiscount}</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-0">{t.ctaNote}</p>
                        </div>

                        {/* FAQ */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-6">{t.faqTitle}</h2>
                        <div className="space-y-4">
                            {[
                                { q: t.faq1Q, a: t.faq1A },
                                { q: t.faq2Q, a: t.faq2A },
                                { q: t.faq3Q, a: t.faq3A },
                                { q: t.faq4Q, a: t.faq4A }
                            ].map((faq, i) => (
                                <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-white mt-0">{faq.q}</h3>
                                    <p className="text-slate-300 mb-0">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* Related Articles */}
                        <RelatedArticles lang={lang} currentSlug="how-to-pass-ftmo-challenge" />
                    </div>
                </article>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
