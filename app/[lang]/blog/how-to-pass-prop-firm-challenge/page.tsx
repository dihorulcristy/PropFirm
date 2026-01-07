import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RelatedArticles from '../../../components/RelatedArticles';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Target, Shield, Brain, TrendingUp, AlertTriangle, Clock, DollarSign, Award, Zap } from 'lucide-react';
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
            title: "How to Pass a Prop Firm Challenge: 10 Proven Steps (2025 Guide)",
            description: "Learn exactly how to pass prop firm challenges with our comprehensive guide. Discover risk management strategies, profit targets, drawdown rules, and psychology tips that help traders succeed.",
            keywords: "pass prop firm challenge, prop firm evaluation, how to get funded, prop trading tips, prop firm rules, risk management trading"
        },
        ro: {
            title: "Cum să Treci un Challenge Prop Firm: 10 Pași Dovediți (Ghid 2025)",
            description: "Învață exact cum să treci challenge-urile prop firm cu ghidul nostru complet. Descoperă strategii de risk management, obiective de profit și sfaturi de psihologie.",
            keywords: "cum treci prop firm challenge, evaluare prop firm, cum să fii finanțat, sfaturi prop trading, reguli prop firm"
        },
        es: {
            title: "Cómo Pasar un Desafío de Firma Prop: 10 Pasos Probados (Guía 2025)",
            description: "Aprende exactamente cómo pasar los desafíos de firmas prop con nuestra guía completa. Descubre estrategias de gestión de riesgos y consejos de psicología.",
            keywords: "pasar desafío prop firm, evaluación prop firm, cómo conseguir financiación, consejos prop trading"
        }
    };

    const m = meta[lang] || meta.en;
    const baseUrl = 'https://propfirms-hub.com';
    const articlePath = '/blog/how-to-pass-prop-firm-challenge';
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
            publishedTime: '2025-12-30T12:00:00Z',
            modifiedTime: '2026-01-02T12:00:00Z',
            authors: ['PropFirmHub Team'],
            section: 'Trading Education',
            tags: ['prop trading', 'prop firm challenge', 'funded trading', 'risk management', 'trading psychology'],
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
        title: "How to Pass a Prop Firm Challenge: 10 Proven Steps",
        subtitle: "The Complete 2025 Guide",
        date: "December 30, 2025",
        author: "PropFirmHub Team",
        readTime: "15 min read",
        intro: "Passing a prop firm challenge is the gateway to trading with professional capital. But with only 5-15% of traders succeeding, you need more than just trading skills—you need a strategic approach. This comprehensive guide reveals the exact steps successful funded traders use to pass their evaluations.",
        quickStats: "Quick Reality Check",
        stat1: "5-15%",
        stat1Label: "Average Pass Rate",
        stat2: "70%+",
        stat2Label: "Fail Due to Risk Rules",
        stat3: "2-3",
        stat3Label: "Average Attempts Needed",

        step1Title: "1. Understand the Rules BEFORE You Start",
        step1Text: "The #1 reason traders fail is violating rules they didn't fully understand. Before placing a single trade, memorize these key parameters:",
        step1List: ["Daily Drawdown Limit (typically 5%)", "Maximum Drawdown Limit (typically 10%)", "Profit Target (usually 8-10% Phase 1, 5% Phase 2)", "Minimum Trading Days (if applicable)", "Prohibited trading styles (news trading, weekend holding, etc.)"],
        step1Tip: "Pro Tip: Create a checklist and review it daily. One rule violation = instant failure.",

        step2Title: "2. Start with Proper Position Sizing",
        step2Text: "Most failed traders risk too much per trade. The math is simple: if you risk 2% per trade and hit 5 losses in a row, you've lost 10%—your entire max drawdown.",
        step2Rule: "The Golden Rule: Risk 0.5-1% per trade maximum during evaluations.",
        step2Math: "With a $100,000 account and 1% risk: Your max loss per trade = $1,000. This gives you 10 losing trades before hitting max drawdown.",

        step3Title: "3. Trade Your Proven Strategy Only",
        step3Text: "A prop firm challenge is NOT the place to experiment. Use only strategies you've backtested extensively and traded profitably for at least 3-6 months.",
        step3Warning: "Warning: Changing strategies mid-challenge because of a few losses is the fastest path to failure.",

        step4Title: "4. Master the Psychology Game",
        step4Text: "Trading psychology accounts for 80% of success in prop firm challenges. The pressure of evaluation creates unique mental challenges:",
        step4List: ["Fear of losing the challenge fee", "Overtrading to hit targets faster", "Revenge trading after losses", "Freezing up near the profit target"],
        step4Solution: "Solution: Treat every day as a normal trading day. Focus on process, not outcome. Take breaks after losses.",

        step5Title: "5. Prioritize Drawdown Over Profits",
        step5Text: "Here's a counterintuitive truth: protecting your drawdown is MORE important than hitting profit targets. Why? You can always make more profit, but one drawdown violation ends everything.",
        step5Strategy: "Strategy: Set a personal daily loss limit at 2-3% (half the official limit). Stop trading for the day if you hit it.",

        step6Title: "6. Choose Your Trading Sessions Wisely",
        step6Text: "Not all market hours are equal. Trade during high-liquidity sessions when spreads are tightest and price action is cleanest:",
        step6Sessions: ["London Session: 8:00-16:00 GMT (best for EUR pairs)", "New York Session: 13:00-21:00 GMT (best for USD pairs)", "London-NY Overlap: 13:00-16:00 GMT (highest volume)"],
        step6Avoid: "Avoid: Asian session (unless trading JPY), news events, and the first/last 30 minutes of sessions.",

        step7Title: "7. Use a Trading Journal Religiously",
        step7Text: "Document every trade with: entry reason, exit reason, emotions, and what you'd do differently. Patterns emerge that help you avoid repeated mistakes.",
        step7Key: "Key Insight: Traders who journal pass at 2x the rate of those who don't.",

        step8Title: "8. Don't Rush to Hit Targets",
        step8Text: "You typically have 30-60 days (or unlimited time) to hit an 8-10% target. That's only 0.3% per day if you spread it out. There's no prize for finishing early.",
        step8Math: "The Math: $100k account, 10% target = $10,000 profit needed. Over 30 days = $333/day average. That's just 3-4 pips on 1 lot.",

        step9Title: "9. Have a Scaling Plan",
        step9Text: "Start conservatively, then increase position sizes as you build a profit buffer. This protects you early while allowing growth later.",
        step9Plan: ["Days 1-10: Risk 0.5% per trade (build buffer)", "Days 11-20: Risk 0.75% per trade (if in profit)", "Days 21+: Risk 1% per trade (if buffer is solid)"],

        step10Title: "10. Prepare for Multiple Attempts",
        step10Text: "Even excellent traders rarely pass on their first attempt. Budget for 2-3 challenges and treat each as a learning experience.",
        step10Reality: "Reality Check: If you fail, analyze what went wrong. Most traders fail for the same 2-3 reasons repeatedly until they address them.",

        bonusTitle: "Bonus: Choose the Right Prop Firm",
        bonusText: "Not all prop firms are created equal. Look for firms with realistic rules, good reputation, and fair profit splits. FTMO is one of the most trusted firms in the industry with transparent rules and consistent payouts.",
        bonusCtaText: "Start Your FTMO Challenge",
        bonusCta: "Get 19% OFF on FTMO →",
        bonusLink: "https://trader.ftmo.com/?affiliates=4354",

        commonMistakes: "5 Mistakes That Guarantee Failure",
        mistake1: "Risking more than 1% per trade",
        mistake2: "Trading during high-impact news",
        mistake3: "Not having a daily loss limit",
        mistake4: "Changing strategies after losses",
        mistake5: "Overtrading to recover losses",

        successChecklist: "Your Success Checklist",
        checklistItems: [
            "I know all the rules by heart",
            "My risk per trade is 0.5-1%",
            "I have a proven, backtested strategy",
            "I set a personal daily loss limit",
            "I trade only during optimal sessions",
            "I keep a detailed trading journal",
            "I'm mentally prepared for the journey"
        ],

        faqTitle: "Frequently Asked Questions",
        faq1Q: "How long does it take to pass a prop firm challenge?",
        faq1A: "Most successful traders pass within 2-4 weeks, though you typically have 30-60 days. Focus on consistency over speed—there's no bonus for finishing early.",
        faq2Q: "What's the best prop firm for beginners?",
        faq2A: "FTMO and FundedNext are excellent for beginners due to their clear rules, educational resources, and reliable payouts. Start with a smaller account size to learn the process.",
        faq3Q: "Can I trade news events during a challenge?",
        faq3A: "Most firms prohibit or restrict news trading. Check your specific firm's rules. Even if allowed, news trading adds unnecessary risk during an evaluation.",
        faq4Q: "What happens if I fail the challenge?",
        faq4A: "You lose the challenge fee, but you can purchase a new challenge and try again. Many firms offer discounts on retry attempts.",
        faq5Q: "Is it better to trade more or less frequently?",
        faq5A: "Quality over quantity. Successful funded traders often take only 1-3 high-quality setups per day rather than overtrading.",

        conclusion: "Final Thoughts",
        conclusionText: "Passing a prop firm challenge is absolutely achievable if you approach it with the right mindset and strategy. Remember: the firms want you to succeed—funded traders are how they make money. Follow these 10 steps, prioritize risk management, and treat it like a business, not a gamble.",

        ctaTitle: "Ready to Start Your Funded Trading Journey?",
        ctaText: "Compare the best prop firms and find the perfect match for your trading style.",
        ctaButton: "Compare Prop Firms Now →"
    },
    ro: {
        backToHome: "Înapoi la Acasă",
        title: "Cum să Treci un Challenge Prop Firm: 10 Pași Dovediți",
        subtitle: "Ghidul Complet 2025",
        date: "30 Decembrie, 2025",
        author: "Echipa PropFirmHub",
        readTime: "15 min citire",
        intro: "Trecerea unui challenge prop firm este poarta către tranzacționarea cu capital profesional. Dar cu doar 5-15% dintre traderi reușind, ai nevoie de mai mult decât abilități de trading—ai nevoie de o abordare strategică. Acest ghid complet dezvăluie pașii exacti pe care traderii finanțați de succes îi folosesc pentru a trece evaluările.",
        quickStats: "Verificare Rapidă a Realității",
        stat1: "5-15%",
        stat1Label: "Rata Medie de Trecere",
        stat2: "70%+",
        stat2Label: "Pică din Cauza Regulilor de Risc",
        stat3: "2-3",
        stat3Label: "Încercări Necesare în Medie",

        step1Title: "1. Înțelege Regulile ÎNAINTE să Începi",
        step1Text: "Motivul #1 pentru care traderii pică este încălcarea regulilor pe care nu le-au înțeles complet. Înainte de a plasa o singură tranzacție, memorează acești parametri cheie:",
        step1List: ["Limita de Drawdown Zilnic (de obicei 5%)", "Limita Maximă de Drawdown (de obicei 10%)", "Obiectivul de Profit (de obicei 8-10% Faza 1, 5% Faza 2)", "Zile Minime de Trading (dacă este aplicabil)", "Stiluri de trading interzise (trading pe știri, menținere weekend, etc.)"],
        step1Tip: "Sfat Pro: Creează o listă de verificare și revizuiește-o zilnic. O singură încălcare = eșec instant.",

        step2Title: "2. Începe cu Dimensionare Corectă a Pozițiilor",
        step2Text: "Majoritatea traderilor care pică riscă prea mult pe tranzacție. Matematica este simplă: dacă riști 2% pe tranzacție și ai 5 pierderi la rând, ai pierdut 10%—întregul tău drawdown maxim.",
        step2Rule: "Regula de Aur: Riscă maxim 0.5-1% pe tranzacție în timpul evaluărilor.",
        step2Math: "Cu un cont de $100,000 și risc de 1%: Pierderea maximă pe tranzacție = $1,000. Aceasta îți oferă 10 tranzacții pierzătoare înainte de a atinge drawdown maxim.",

        step3Title: "3. Tranzacționează Doar Strategia Ta Dovedită",
        step3Text: "Un challenge prop firm NU este locul pentru experimente. Folosește doar strategii pe care le-ai testat extensiv și le-ai tranzacționat profitabil timp de cel puțin 3-6 luni.",
        step3Warning: "Atenție: Schimbarea strategiilor în mijlocul challenge-ului din cauza câtorva pierderi este calea cea mai rapidă către eșec.",

        step4Title: "4. Stăpânește Jocul Psihologic",
        step4Text: "Psihologia de trading reprezintă 80% din succes în challenge-urile prop firm. Presiunea evaluării creează provocări mentale unice:",
        step4List: ["Frica de a pierde taxa de challenge", "Overtrading pentru a atinge țintele mai repede", "Revenge trading după pierderi", "Blocaj aproape de ținta de profit"],
        step4Solution: "Soluție: Tratează fiecare zi ca o zi normală de trading. Concentrează-te pe proces, nu pe rezultat. Ia pauze după pierderi.",

        step5Title: "5. Prioritizează Drawdown-ul Peste Profituri",
        step5Text: "Iată un adevăr contraintuitiv: protejarea drawdown-ului este MAI importantă decât atingerea obiectivelor de profit. De ce? Poți oricând face mai mult profit, dar o încălcare a drawdown-ului încheie totul.",
        step5Strategy: "Strategie: Setează o limită personală de pierdere zilnică la 2-3% (jumătate din limita oficială). Oprește-te din trading pentru ziua respectivă dacă o atingi.",

        step6Title: "6. Alege-ți Sesiunile de Trading cu Înțelepciune",
        step6Text: "Nu toate orele de piață sunt egale. Tranzacționează în timpul sesiunilor cu lichiditate mare când spread-urile sunt cele mai strânse și acțiunea prețului este cea mai curată:",
        step6Sessions: ["Sesiunea Londra: 8:00-16:00 GMT (cea mai bună pentru perechile EUR)", "Sesiunea New York: 13:00-21:00 GMT (cea mai bună pentru perechile USD)", "Suprapunerea Londra-NY: 13:00-16:00 GMT (cel mai mare volum)"],
        step6Avoid: "Evită: sesiunea asiatică (cu excepția cazului în care tranzacționezi JPY), evenimentele de știri și primele/ultimele 30 minute ale sesiunilor.",

        step7Title: "7. Folosește un Jurnal de Trading cu Religiozitate",
        step7Text: "Documentează fiecare tranzacție cu: motivul intrării, motivul ieșirii, emoțiile și ce ai face diferit. Apar tipare care te ajută să eviți greșelile repetate.",
        step7Key: "Informație Cheie: Traderii care țin jurnal trec de 2x mai des decât cei care nu țin.",

        step8Title: "8. Nu Te Grăbi să Atingi Țintele",
        step8Text: "De obicei ai 30-60 de zile (sau timp nelimitat) să atingi o țintă de 8-10%. Asta înseamnă doar 0.3% pe zi dacă o distribui. Nu există premiu pentru terminarea devreme.",
        step8Math: "Matematica: cont de $100k, țintă 10% = $10,000 profit necesar. Pe 30 de zile = $333/zi în medie. Asta înseamnă doar 3-4 pips pe 1 lot.",

        step9Title: "9. Ai un Plan de Scalare",
        step9Text: "Începe conservator, apoi crește dimensiunile pozițiilor pe măsură ce îți construiești un buffer de profit. Aceasta te protejează devreme permițând creștere ulterioară.",
        step9Plan: ["Zilele 1-10: Riscă 0.5% pe tranzacție (construiește buffer)", "Zilele 11-20: Riscă 0.75% pe tranzacție (dacă ești pe profit)", "Zilele 21+: Riscă 1% pe tranzacție (dacă buffer-ul este solid)"],

        step10Title: "10. Pregătește-te pentru Încercări Multiple",
        step10Text: "Chiar și traderii excelenți rareori trec din prima încercare. Bugetează pentru 2-3 challenge-uri și tratează fiecare ca o experiență de învățare.",
        step10Reality: "Verificare Realitate: Dacă pici, analizează ce a mers prost. Majoritatea traderilor pică din aceleași 2-3 motive în mod repetat până le adresează.",

        bonusTitle: "Bonus: Alege Firma Prop Potrivită",
        bonusText: "Nu toate firmele prop sunt create egale. Caută firme cu reguli realiste, reputație bună și împărțiri corecte ale profitului. FTMO este una dintre cele mai de încredere firme din industrie cu reguli transparente și plăți consistente.",
        bonusCtaText: "Începe Challenge-ul FTMO",
        bonusCta: "Obține 19% REDUCERE la FTMO →",
        bonusLink: "https://trader.ftmo.com/?affiliates=4354",

        commonMistakes: "5 Greșeli Care Garantează Eșecul",
        mistake1: "Să riști mai mult de 1% pe tranzacție",
        mistake2: "Să tranzacționezi în timpul știrilor cu impact mare",
        mistake3: "Să nu ai o limită zilnică de pierdere",
        mistake4: "Să schimbi strategiile după pierderi",
        mistake5: "Overtrading pentru a recupera pierderile",

        successChecklist: "Lista Ta de Verificare pentru Succes",
        checklistItems: [
            "Cunosc toate regulile pe de rost",
            "Riscul meu pe tranzacție este 0.5-1%",
            "Am o strategie dovedită, testată",
            "Am setat o limită personală de pierdere zilnică",
            "Tranzacționez doar în sesiunile optime",
            "Țin un jurnal detaliat de trading",
            "Sunt pregătit mental pentru această călătorie"
        ],

        faqTitle: "Întrebări Frecvente",
        faq1Q: "Cât durează să treci un challenge prop firm?",
        faq1A: "Majoritatea traderilor de succes trec în 2-4 săptămâni, deși de obicei ai 30-60 de zile. Concentrează-te pe consistență peste viteză—nu există bonus pentru terminarea devreme.",
        faq2Q: "Care este cea mai bună firmă prop pentru începători?",
        faq2A: "FTMO și FundedNext sunt excelente pentru începători datorită regulilor clare, resurselor educaționale și plăților de încredere. Începe cu o dimensiune mai mică a contului pentru a învăța procesul.",
        faq3Q: "Pot tranzacționa evenimente de știri în timpul unui challenge?",
        faq3A: "Majoritatea firmelor interzic sau restricționează trading-ul pe știri. Verifică regulile firmei tale specifice. Chiar dacă este permis, trading-ul pe știri adaugă risc inutil în timpul unei evaluări.",
        faq4Q: "Ce se întâmplă dacă pic challenge-ul?",
        faq4A: "Pierzi taxa de challenge, dar poți cumpăra un nou challenge și încerca din nou. Multe firme oferă reduceri pentru încercări repetate.",
        faq5Q: "Este mai bine să tranzacționez mai frecvent sau mai puțin?",
        faq5A: "Calitate peste cantitate. Traderii finanțați de succes adesea iau doar 1-3 setup-uri de calitate pe zi în loc să tranzacționeze excesiv.",

        conclusion: "Concluzii",
        conclusionText: "Trecerea unui challenge prop firm este absolut realizabilă dacă o abordezi cu mentalitatea și strategia potrivite. Amintește-ți: firmele vor ca tu să reușești—traderii finanțați sunt modul în care fac bani. Urmează acești 10 pași, prioritizează managementul riscului și tratează-l ca o afacere, nu ca un joc de noroc.",

        ctaTitle: "Ești Pregătit să Îți Începi Călătoria de Trader Finanțat?",
        ctaText: "Compară cele mai bune firme prop și găsește potrivirea perfectă pentru stilul tău de trading.",
        ctaButton: "Compară Firmele Prop Acum →"
    },
    es: {
        backToHome: "Volver al Inicio",
        title: "Cómo Pasar un Desafío de Firma Prop: 10 Pasos Probados",
        subtitle: "La Guía Completa 2025",
        date: "30 de Diciembre, 2025",
        author: "Equipo PropFirmHub",
        readTime: "15 min lectura",
        intro: "Pasar un desafío de firma prop es la puerta de entrada para operar con capital profesional. Pero con solo el 5-15% de los traders teniendo éxito, necesitas más que solo habilidades de trading—necesitas un enfoque estratégico. Esta guía completa revela los pasos exactos que los traders financiados exitosos usan para pasar sus evaluaciones.",
        quickStats: "Verificación Rápida de la Realidad",
        stat1: "5-15%",
        stat1Label: "Tasa de Aprobación Promedio",
        stat2: "70%+",
        stat2Label: "Fallan por Reglas de Riesgo",
        stat3: "2-3",
        stat3Label: "Intentos Promedio Necesarios",

        step1Title: "1. Entiende las Reglas ANTES de Empezar",
        step1Text: "La razón #1 por la que los traders fallan es violar reglas que no entendieron completamente. Antes de colocar una sola operación, memoriza estos parámetros clave:",
        step1List: ["Límite de Pérdida Diaria (típicamente 5%)", "Límite de Pérdida Máxima (típicamente 10%)", "Objetivo de Ganancia (generalmente 8-10% Fase 1, 5% Fase 2)", "Días Mínimos de Trading (si aplica)", "Estilos de trading prohibidos (trading de noticias, mantener fin de semana, etc.)"],
        step1Tip: "Consejo Pro: Crea una lista de verificación y revísala diariamente. Una violación de reglas = fallo instantáneo.",

        step2Title: "2. Comienza con el Tamaño de Posición Correcto",
        step2Text: "La mayoría de los traders que fallan arriesgan demasiado por operación. Las matemáticas son simples: si arriesgas 2% por operación y tienes 5 pérdidas seguidas, perdiste 10%—todo tu drawdown máximo.",
        step2Rule: "La Regla de Oro: Arriesga máximo 0.5-1% por operación durante las evaluaciones.",
        step2Math: "Con una cuenta de $100,000 y 1% de riesgo: Tu pérdida máxima por operación = $1,000. Esto te da 10 operaciones perdedoras antes de alcanzar el drawdown máximo.",

        step3Title: "3. Opera Solo Tu Estrategia Probada",
        step3Text: "Un desafío de firma prop NO es el lugar para experimentar. Usa solo estrategias que hayas probado extensivamente y operado rentablemente durante al menos 3-6 meses.",
        step3Warning: "Advertencia: Cambiar estrategias a mitad del desafío debido a algunas pérdidas es el camino más rápido al fracaso.",

        step4Title: "4. Domina el Juego Psicológico",
        step4Text: "La psicología de trading representa el 80% del éxito en los desafíos de firmas prop. La presión de la evaluación crea desafíos mentales únicos:",
        step4List: ["Miedo a perder la tarifa del desafío", "Sobreoperar para alcanzar objetivos más rápido", "Trading de venganza después de pérdidas", "Congelarse cerca del objetivo de ganancia"],
        step4Solution: "Solución: Trata cada día como un día normal de trading. Enfócate en el proceso, no en el resultado. Toma descansos después de las pérdidas.",

        step5Title: "5. Prioriza el Drawdown Sobre las Ganancias",
        step5Text: "Aquí hay una verdad contraintuitiva: proteger tu drawdown es MÁS importante que alcanzar objetivos de ganancia. ¿Por qué? Siempre puedes hacer más ganancia, pero una violación de drawdown termina todo.",
        step5Strategy: "Estrategia: Establece un límite personal de pérdida diaria al 2-3% (la mitad del límite oficial). Deja de operar por el día si lo alcanzas.",

        step6Title: "6. Elige Tus Sesiones de Trading Sabiamente",
        step6Text: "No todas las horas de mercado son iguales. Opera durante sesiones de alta liquidez cuando los spreads son más ajustados y la acción del precio es más limpia:",
        step6Sessions: ["Sesión de Londres: 8:00-16:00 GMT (mejor para pares EUR)", "Sesión de Nueva York: 13:00-21:00 GMT (mejor para pares USD)", "Superposición Londres-NY: 13:00-16:00 GMT (mayor volumen)"],
        step6Avoid: "Evita: sesión asiática (a menos que operes JPY), eventos de noticias y los primeros/últimos 30 minutos de las sesiones.",

        step7Title: "7. Usa un Diario de Trading Religiosamente",
        step7Text: "Documenta cada operación con: razón de entrada, razón de salida, emociones y qué harías diferente. Emergen patrones que te ayudan a evitar errores repetidos.",
        step7Key: "Información Clave: Los traders que llevan diario pasan al doble de la tasa de los que no lo hacen.",

        step8Title: "8. No Te Apresures a Alcanzar los Objetivos",
        step8Text: "Típicamente tienes 30-60 días (o tiempo ilimitado) para alcanzar un objetivo del 8-10%. Eso es solo 0.3% por día si lo distribuyes. No hay premio por terminar antes.",
        step8Math: "Las Matemáticas: cuenta de $100k, objetivo 10% = $10,000 de ganancia necesaria. En 30 días = $333/día promedio. Eso son solo 3-4 pips en 1 lote.",

        step9Title: "9. Ten un Plan de Escalado",
        step9Text: "Comienza conservadoramente, luego aumenta el tamaño de las posiciones a medida que construyes un colchón de ganancias. Esto te protege temprano mientras permite crecimiento después.",
        step9Plan: ["Días 1-10: Arriesga 0.5% por operación (construye colchón)", "Días 11-20: Arriesga 0.75% por operación (si estás en ganancia)", "Días 21+: Arriesga 1% por operación (si el colchón es sólido)"],

        step10Title: "10. Prepárate para Múltiples Intentos",
        step10Text: "Incluso los excelentes traders rara vez pasan en su primer intento. Presupuesta para 2-3 desafíos y trata cada uno como una experiencia de aprendizaje.",
        step10Reality: "Verificación de Realidad: Si fallas, analiza qué salió mal. La mayoría de los traders fallan por las mismas 2-3 razones repetidamente hasta que las abordan.",

        bonusTitle: "Bonus: Elige la Firma Prop Correcta",
        bonusText: "No todas las firmas prop son iguales. Busca firmas con reglas realistas, buena reputación y divisiones de ganancias justas. FTMO es una de las firmas más confiables de la industria con reglas transparentes y pagos consistentes.",
        bonusCtaText: "Comienza Tu Desafío FTMO",
        bonusCta: "Obtén 19% DESCUENTO en FTMO →",
        bonusLink: "https://trader.ftmo.com/?affiliates=4354",

        commonMistakes: "5 Errores Que Garantizan el Fracaso",
        mistake1: "Arriesgar más del 1% por operación",
        mistake2: "Operar durante noticias de alto impacto",
        mistake3: "No tener un límite de pérdida diario",
        mistake4: "Cambiar estrategias después de pérdidas",
        mistake5: "Sobreoperar para recuperar pérdidas",

        successChecklist: "Tu Lista de Verificación para el Éxito",
        checklistItems: [
            "Conozco todas las reglas de memoria",
            "Mi riesgo por operación es 0.5-1%",
            "Tengo una estrategia probada y testeada",
            "He establecido un límite personal de pérdida diaria",
            "Opero solo durante sesiones óptimas",
            "Mantengo un diario de trading detallado",
            "Estoy mentalmente preparado para el viaje"
        ],

        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Cuánto tiempo toma pasar un desafío de firma prop?",
        faq1A: "La mayoría de los traders exitosos pasan en 2-4 semanas, aunque típicamente tienes 30-60 días. Enfócate en la consistencia sobre la velocidad—no hay bonificación por terminar antes.",
        faq2Q: "¿Cuál es la mejor firma prop para principiantes?",
        faq2A: "FTMO y FundedNext son excelentes para principiantes debido a sus reglas claras, recursos educativos y pagos confiables. Comienza con un tamaño de cuenta más pequeño para aprender el proceso.",
        faq3Q: "¿Puedo operar eventos de noticias durante un desafío?",
        faq3A: "La mayoría de las firmas prohíben o restringen el trading de noticias. Verifica las reglas específicas de tu firma. Incluso si está permitido, el trading de noticias agrega riesgo innecesario durante una evaluación.",
        faq4Q: "¿Qué pasa si fallo el desafío?",
        faq4A: "Pierdes la tarifa del desafío, pero puedes comprar un nuevo desafío e intentarlo de nuevo. Muchas firmas ofrecen descuentos en intentos de reintento.",
        faq5Q: "¿Es mejor operar más o menos frecuentemente?",
        faq5A: "Calidad sobre cantidad. Los traders financiados exitosos a menudo toman solo 1-3 configuraciones de alta calidad por día en lugar de sobreoperar.",

        conclusion: "Pensamientos Finales",
        conclusionText: "Pasar un desafío de firma prop es absolutamente alcanzable si lo abordas con la mentalidad y estrategia correctas. Recuerda: las firmas quieren que tengas éxito—los traders financiados son como hacen dinero. Sigue estos 10 pasos, prioriza la gestión de riesgos y trátalo como un negocio, no como una apuesta.",

        ctaTitle: "¿Listo para Comenzar Tu Viaje de Trader Financiado?",
        ctaText: "Compara las mejores firmas prop y encuentra la combinación perfecta para tu estilo de trading.",
        ctaButton: "Comparar Firmas Prop Ahora →"
    }
};

export default async function HowToPassPropFirmChallengePage({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;
    const homeLink = lang === 'en' ? '/' : `/${lang}`;
    const blogLink = lang === 'en' ? '/blog' : `/${lang}/blog`;

    // Base URL for structured data
    const baseUrl = 'https://propfirms-hub.com';
    const articleUrl = `${baseUrl}/${lang}/blog/how-to-pass-prop-firm-challenge`;

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
        "datePublished": "2025-12-30",
        "dateModified": "2026-01-02",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },
        "wordCount": 3000,
        "articleSection": "Trading Education",
        "keywords": lang === 'en'
            ? "prop firm challenge, funded trading, risk management, trading psychology"
            : lang === 'ro'
                ? "challenge prop firm, trading finanțat, management risc, psihologie trading"
                : "desafío prop firm, trading financiado, gestión de riesgos, psicología trading"
    };

    // FAQ Schema (JSON-LD) - Makes FAQs eligible for rich snippets
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

    // Breadcrumb Schema (JSON-LD)
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
                            <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-4">{t.subtitle}</span>
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

                            {/* Quick Stats */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-8">
                                <h2 className="text-xl font-bold text-white mt-0 mb-4">{t.quickStats}</h2>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-emerald-400">{t.stat1}</div>
                                        <div className="text-sm text-slate-400">{t.stat1Label}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-amber-400">{t.stat2}</div>
                                        <div className="text-sm text-slate-400">{t.stat2Label}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-400">{t.stat3}</div>
                                        <div className="text-sm text-slate-400">{t.stat3Label}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 1 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Target className="h-6 w-6 text-emerald-400" />
                                {t.step1Title}
                            </h2>
                            <p className="text-slate-300">{t.step1Text}</p>
                            <ul className="space-y-2 my-4">
                                {t.step1List.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300">
                                        <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4">
                                <p className="text-emerald-300 mb-0"><strong>💡 {t.step1Tip}</strong></p>
                            </div>

                            {/* Step 2 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <DollarSign className="h-6 w-6 text-emerald-400" />
                                {t.step2Title}
                            </h2>
                            <p className="text-slate-300">{t.step2Text}</p>
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 my-4">
                                <p className="text-amber-300 mb-0"><strong>🎯 {t.step2Rule}</strong></p>
                            </div>
                            <p className="text-slate-400 text-sm italic">{t.step2Math}</p>

                            {/* Step 3 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <TrendingUp className="h-6 w-6 text-emerald-400" />
                                {t.step3Title}
                            </h2>
                            <p className="text-slate-300">{t.step3Text}</p>
                            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 my-4">
                                <p className="text-red-300 mb-0 flex items-start gap-2">
                                    <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                    <span>{t.step3Warning}</span>
                                </p>
                            </div>

                            {/* Step 4 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Brain className="h-6 w-6 text-emerald-400" />
                                {t.step4Title}
                            </h2>
                            <p className="text-slate-300">{t.step4Text}</p>
                            <ul className="space-y-2 my-4">
                                {t.step4List.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300">
                                        <AlertTriangle className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4">
                                <p className="text-emerald-300 mb-0"><strong>✅ {t.step4Solution}</strong></p>
                            </div>

                            {/* Step 5 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Shield className="h-6 w-6 text-emerald-400" />
                                {t.step5Title}
                            </h2>
                            <p className="text-slate-300">{t.step5Text}</p>
                            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-4">
                                <p className="text-blue-300 mb-0"><strong>📊 {t.step5Strategy}</strong></p>
                            </div>

                            {/* Step 6 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-3">
                                <Clock className="h-6 w-6 text-emerald-400" />
                                {t.step6Title}
                            </h2>
                            <p className="text-slate-300">{t.step6Text}</p>
                            <ul className="space-y-2 my-4">
                                {t.step6Sessions.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300">
                                        <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-amber-400 text-sm">{t.step6Avoid}</p>

                            {/* Step 7 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.step7Title}</h2>
                            <p className="text-slate-300">{t.step7Text}</p>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 my-4">
                                <p className="text-emerald-300 mb-0"><strong>📈 {t.step7Key}</strong></p>
                            </div>

                            {/* Step 8 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.step8Title}</h2>
                            <p className="text-slate-300">{t.step8Text}</p>
                            <p className="text-slate-400 text-sm italic">{t.step8Math}</p>

                            {/* Step 9 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.step9Title}</h2>
                            <p className="text-slate-300">{t.step9Text}</p>
                            <ul className="space-y-2 my-4">
                                {t.step9Plan.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-300">
                                        <Zap className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Step 10 */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.step10Title}</h2>
                            <p className="text-slate-300">{t.step10Text}</p>
                            <p className="text-amber-400 text-sm">{t.step10Reality}</p>

                            {/* Bonus - Affiliate CTA */}
                            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 rounded-xl p-8 my-12">
                                <h2 className="text-2xl font-bold text-white mt-0 mb-4 flex items-center gap-3">
                                    <Award className="h-6 w-6 text-emerald-400" />
                                    {t.bonusTitle}
                                </h2>
                                <p className="text-slate-300 mb-6">{t.bonusText}</p>
                                <a
                                    href={t.bonusLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                >
                                    {t.bonusCta}
                                </a>
                            </div>

                            {/* Common Mistakes */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.commonMistakes}</h2>
                            <div className="space-y-3">
                                {[t.mistake1, t.mistake2, t.mistake3, t.mistake4, t.mistake5].map((mistake, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                                        <span className="text-red-400 font-bold">✗</span>
                                        <span className="text-slate-300">{mistake}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Success Checklist */}
                            <h2 className="text-2xl font-bold text-white mt-12 mb-4">{t.successChecklist}</h2>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                                <div className="space-y-3">
                                    {t.checklistItems.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="h-5 w-5 border-2 border-emerald-400 rounded flex items-center justify-center">
                                                <CheckCircle className="h-4 w-4 text-emerald-400" />
                                            </div>
                                            <span className="text-slate-300">{item}</span>
                                        </div>
                                    ))}
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

                            {/* Final CTA */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 my-8 text-center">
                                <h3 className="text-2xl font-bold text-white mt-0 mb-4">{t.ctaTitle}</h3>
                                <p className="text-slate-300 mb-6">{t.ctaText}</p>
                                <Link
                                    href={homeLink}
                                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                >
                                    {t.ctaButton}
                                </Link>
                            </div>

                            {/* Related Articles */}
                            <RelatedArticles lang={lang} currentSlug="how-to-pass-prop-firm-challenge" />
                        </div>
                    </article>
                </main>
                <Footer lang={lang} />
            </div>
        </>
    );
}
