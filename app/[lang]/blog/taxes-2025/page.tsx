import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import RelatedArticles from '../../../components/RelatedArticles';
import Link from 'next/link';
import { ArrowLeft, FileText, DollarSign, Calculator, AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        backToHome: "Back to Blog",
        title: "Prop Firm Taxes 2026: Complete Guide for Traders",
        date: "November 25, 2026",
        author: "PropFirmHub Team",
        readTime: "18 min read",
        intro: "Taxes on prop firm profits can be confusing. Are you an employee or independent contractor? How much will you actually keep? This complete guide answers all your questions about prop firm taxation in 2026.",
        disclaimer: "Disclaimer",
        disclaimerText: "This guide provides general tax information. Always consult with a qualified tax professional in your jurisdiction for personalized advice. Tax laws vary by country and change frequently.",
        taxStatus: "Your Tax Status: Independent Contractor",
        keyFact: "Key Fact:",
        asTrader: "As a prop firm trader, you're classified as an",
        independent: "independent contractor",
        youreNot: "❌ You're NOT:",
        notItems: ["An employee of the prop firm", "Entitled to employee benefits", "Having taxes withheld automatically", "Receiving W-2 forms (US)", "Protected by employment laws"],
        youAre: "✅ You ARE:",
        areItems: ["Running your own business", "Responsible for ALL taxes", "Required to file quarterly taxes", "Receiving 1099 forms (US)", "Eligible for business deductions"],
        ratesByCountry: "Tax Rates by Country",
        usTitle: "🇺🇸 United States",
        federalTax: "Federal Income Tax (Progressive):",
        selfEmploymentTax: "Self-Employment Tax:",
        stateTax: "State Tax:",
        example: "Example:",
        ukTitle: "🇬🇧 United Kingdom",
        incomeTax: "Income Tax (Self-Employed):",
        nationalInsurance: "National Insurance (Class 2 & 4):",
        euTitle: "🇪🇺 European Union (Selected Countries)",
        deductions: "Tax Deductions: Maximize Your Savings",
        deductionsIntro: "As a self-employed trader, you can deduct ordinary and necessary business expenses. Here's what you can write off:",
        homeOffice: "Home Office Deduction",
        homeOfficeText: "Deduct a portion of your rent/mortgage, utilities, internet, and insurance based on the percentage of your home used exclusively for trading.",
        equipment: "Equipment & Software",
        equipmentText: "100% deductible in the year of purchase or depreciated over time:",
        education: "Education & Training",
        educationText: "Trading courses, books, webinars, conferences, and mentorship programs directly related to improving your trading skills.",
        professional: "Professional Services",
        professionalText: "Accountant fees, tax preparation software, legal consultations, and business formation costs (LLC, etc.).",
        quarterly: "Quarterly Estimated Taxes",
        quarterlyWarning: "Important: Pay as You Earn",
        quarterlyText: "Unlike employees, you don't have taxes withheld automatically. You must pay estimated taxes quarterly to avoid penalties.",
        usDeadlines: "US Quarterly Deadlines (2025):",
        proTip: "Pro Tip:",
        proTipText: "Set aside 25-40% of each payout for taxes. Open a separate \"tax savings\" account and transfer funds immediately.",
        optimization: "Tax Optimization Strategies",
        llcTitle: "Form an LLC or S-Corp",
        llcIntro: "Once you're consistently profitable ($75,000+/year), consider forming a business entity:",
        llc: "LLC (Limited Liability Company)",
        scorp: "S-Corp Election",
        retirement: "Max Out Retirement Contributions",
        retirementIntro: "Self-employed retirement accounts offer huge tax deductions:",
        faqTitle: "Frequently Asked Questions",
        faq1Q: "Do I pay taxes on challenge fees?",
        faq1A: "No. Challenge fees are business expenses and are tax-deductible. You only pay taxes on actual payouts you receive from the prop firm.",
        faq2Q: "Can I deduct trading losses?",
        faq2A: "With prop firms, you're not trading your own capital, so traditional trading loss deductions don't apply. However, challenge fees and business expenses are fully deductible.",
        faq3Q: "What if my prop firm is in another country?",
        faq3A: "You still report income where YOU live and pay taxes there. The prop firm's location doesn't change your tax obligations. Always report all worldwide income.",
        faq4Q: "How do I track everything for taxes?",
        faq4A: "Use accounting software (QuickBooks, FreshBooks, Wave) or spreadsheets. Track all payouts, expenses, and save receipts. Consider hiring a trading-specialized accountant.",
        calendar: "Tax Planning Calendar 2026",
        keyTakeaways: "Key Takeaways",
        takeaway1: "You're self-employed - plan to pay 25-40% of earnings in taxes",
        takeaway2: "Save tax money separately from every payout immediately",
        takeaway3: "Track ALL expenses - home office, equipment, software, education",
        takeaway4: "Pay quarterly estimated taxes to avoid penalties",
        takeaway5: "Consider LLC/S-Corp at $75,000+ income for tax savings",
        takeaway6: "Hire a trading-specialized accountant - the ROI is worth it",
        ctaTitle: "Ready to Start Earning?",
        ctaText: "Now that you understand the tax implications, compare prop firms and start your funded trading journey.",
        ctaButton: "Compare Prop Firms →"
    },
    ro: {
        backToHome: "Înapoi la Blog",
        title: "Taxe Prop Firm 2026: Ghid Complet pentru Traderi",
        date: "25 Noiembrie, 2026",
        author: "Echipa PropFirmHub",
        readTime: "18 min citire",
        intro: "Taxele pe profiturile prop firm pot fi confuze. Ești angajat sau contractor independent? Cât vei păstra de fapt? Acest ghid complet răspunde tuturor întrebărilor tale despre impozitarea prop firm în 2026.",
        disclaimer: "Declinarea Responsabilității",
        disclaimerText: "Acest ghid oferă informații fiscale generale. Consultă întotdeauna un profesionist fiscal calificat în jurisdicția ta pentru sfaturi personalizate. Legile fiscale variază în funcție de țară și se schimbă frecvent.",
        taxStatus: "Statutul Tău Fiscal: Contractor Independent",
        keyFact: "Fapt Cheie:",
        asTrader: "Ca trader prop firm, ești clasificat ca",
        independent: "contractor independent",
        youreNot: "❌ NU Ești:",
        notItems: ["Angajat al firmei prop", "Îndreptățit la beneficii de angajat", "Cu taxe reținute automat", "Primitor de formulare W-2 (SUA)", "Protejat de legile muncii"],
        youAre: "✅ EȘTI:",
        areItems: ["Conducător al propriei afaceri", "Responsabil pentru TOATE taxele", "Obligat să depui taxe trimestriale", "Primitor de formulare 1099 (SUA)", "Eligibil pentru deduceri de afaceri"],
        ratesByCountry: "Rate de Impozitare pe Țări",
        usTitle: "🇺🇸 Statele Unite",
        federalTax: "Impozit Federal pe Venit (Progresiv):",
        selfEmploymentTax: "Impozit pe Auto-Angajare:",
        stateTax: "Impozit de Stat:",
        example: "Exemplu:",
        ukTitle: "🇬🇧 Marea Britanie",
        incomeTax: "Impozit pe Venit (Auto-Angajat):",
        nationalInsurance: "Asigurare Națională (Clasa 2 & 4):",
        euTitle: "🇪🇺 Uniunea Europeană (Țări Selectate)",
        deductions: "Deduceri Fiscale: Maximizează-ți Economiile",
        deductionsIntro: "Ca trader independent, poți deduce cheltuielile de afaceri obișnuite și necesare. Iată ce poți deduce:",
        homeOffice: "Deducere pentru Birou Acasă",
        homeOfficeText: "Deduce o parte din chirie/ipotecă, utilități, internet și asigurări bazat pe procentul casei tale folosit exclusiv pentru trading.",
        equipment: "Echipamente & Software",
        equipmentText: "100% deductibile în anul achiziției sau amortizate în timp:",
        education: "Educație & Formare",
        educationText: "Cursuri de trading, cărți, webinarii, conferințe și programe de mentorat legate direct de îmbunătățirea abilităților tale de trading.",
        professional: "Servicii Profesionale",
        professionalText: "Taxe contabil, software de pregătire fiscală, consultații juridice și costuri de formare a afacerii (SRL, etc.).",
        quarterly: "Taxe Estimate Trimestriale",
        quarterlyWarning: "Important: Plătește Pe Măsură Ce Câștigi",
        quarterlyText: "Spre deosebire de angajați, nu ai taxe reținute automat. Trebuie să plătești taxe estimate trimestrial pentru a evita penalități.",
        usDeadlines: "Termene Trimestriale SUA (2025):",
        proTip: "Sfat Pro:",
        proTipText: "Pune deoparte 25-40% din fiecare plată pentru taxe. Deschide un cont separat \"economii pentru taxe\" și transferă fondurile imediat.",
        optimization: "Strategii de Optimizare Fiscală",
        llcTitle: "Formează un SRL sau S-Corp",
        llcIntro: "Odată ce ești constant profitabil ($75,000+/an), ia în considerare formarea unei entități de afaceri:",
        llc: "SRL (Societate cu Răspundere Limitată)",
        scorp: "Alegerea S-Corp",
        retirement: "Maximizează Contribuțiile la Pensie",
        retirementIntro: "Conturile de pensie pentru auto-angajați oferă deduceri fiscale uriașe:",
        faqTitle: "Întrebări Frecvente",
        faq1Q: "Plătesc taxe pe taxele de challenge?",
        faq1A: "Nu. Taxele de challenge sunt cheltuieli de afaceri și sunt deductibile fiscal. Plătești taxe doar pe plățile efective pe care le primești de la firma prop.",
        faq2Q: "Pot deduce pierderi din trading?",
        faq2A: "Cu firmele prop, nu tranzacționezi cu propriul capital, deci deducerile tradiționale pentru pierderi din trading nu se aplică. Totuși, taxele de challenge și cheltuielile de afaceri sunt complet deductibile.",
        faq3Q: "Ce se întâmplă dacă firma prop este în altă țară?",
        faq3A: "Tot raportezi veniturile unde TU locuiești și plătești taxe acolo. Locația firmei prop nu îți schimbă obligațiile fiscale. Raportează întotdeauna toate veniturile mondiale.",
        faq4Q: "Cum urmăresc totul pentru taxe?",
        faq4A: "Folosește software de contabilitate (QuickBooks, FreshBooks, Wave) sau foi de calcul. Urmărește toate plățile, cheltuielile și păstrează chitanțele. Ia în considerare angajarea unui contabil specializat în trading.",
        calendar: "Calendar de Planificare Fiscală 2026",
        keyTakeaways: "Concluzii Cheie",
        takeaway1: "Ești auto-angajat - planifică să plătești 25-40% din câștiguri în taxe",
        takeaway2: "Salvează banii pentru taxe separat din fiecare plată imediat",
        takeaway3: "Urmărește TOATE cheltuielile - birou acasă, echipamente, software, educație",
        takeaway4: "Plătește taxe estimate trimestrial pentru a evita penalități",
        takeaway5: "Ia în considerare SRL/S-Corp la venit de $75,000+ pentru economii fiscale",
        takeaway6: "Angajează un contabil specializat în trading - ROI-ul merită",
        ctaTitle: "Ești Pregătit să Începi să Câștigi?",
        ctaText: "Acum că înțelegi implicațiile fiscale, compară firmele prop și începe-ți călătoria de trading finanțat.",
        ctaButton: "Compară Firmele Prop →"
    },
    es: {
        backToHome: "Volver al Blog",
        title: "Impuestos de Firmas Prop 2026: Guía Completa para Traders",
        date: "25 de Noviembre, 2026",
        author: "Equipo PropFirmHub",
        readTime: "18 min lectura",
        intro: "Los impuestos sobre las ganancias de firmas prop pueden ser confusos. ¿Eres empleado o contratista independiente? ¿Cuánto te quedarás realmente? Esta guía completa responde todas tus preguntas sobre la fiscalidad de firmas prop en 2026.",
        disclaimer: "Descargo de Responsabilidad",
        disclaimerText: "Esta guía proporciona información fiscal general. Consulta siempre con un profesional fiscal calificado en tu jurisdicción para obtener asesoramiento personalizado. Las leyes fiscales varían según el país y cambian con frecuencia.",
        taxStatus: "Tu Estatus Fiscal: Contratista Independiente",
        keyFact: "Dato Clave:",
        asTrader: "Como trader de firma prop, estás clasificado como un",
        independent: "contratista independiente",
        youreNot: "❌ NO Eres:",
        notItems: ["Empleado de la firma prop", "Con derecho a beneficios laborales", "Sujeto a retenciones automáticas", "Receptor de formularios W-2 (EE. UU.)", "Protegido por leyes laborales"],
        youAre: "✅ SÍ Eres:",
        areItems: ["Dueño de tu propio negocio", "Responsable de TODOS los impuestos", "Obligado a presentar impuestos trimestrales", "Receptor de formularios 1099 (EE. UU.)", "Elegible para deducciones comerciales"],
        ratesByCountry: "Tasas Impositivas por País",
        usTitle: "🇺🇸 Estados Unidos",
        federalTax: "Impuesto Federal sobre la Renta (Progresivo):",
        selfEmploymentTax: "Impuesto de Trabajo Autónomo:",
        stateTax: "Impuesto Estatal:",
        example: "Ejemplo:",
        ukTitle: "🇬🇧 Reino Unido",
        incomeTax: "Impuesto sobre la Renta (Autónomo):",
        nationalInsurance: "Seguro Nacional (Clase 2 y 4):",
        euTitle: "🇪🇺 Unión Europea (Países Seleccionados)",
        deductions: "Deducciones Fiscales: Maximiza tus Ahorros",
        deductionsIntro: "Como trader independiente, puedes deducir gastos comerciales ordinarios y necesarios. Aquí tienes lo que puedes deducir:",
        homeOffice: "Deducción por Oficina en Casa",
        homeOfficeText: "Deduce una parte de tu alquiler/hipoteca, servicios, internet y seguros basándote en el porcentaje de tu hogar usado exclusivamente para trading.",
        equipment: "Equipo y Software",
        equipmentText: "100% deducible en el año de compra o depreciado con el tiempo:",
        education: "Educación y Formación",
        educationText: "Cursos de trading, libros, seminarios web, conferencias y programas de mentoría directamente relacionados con mejorar tus habilidades de trading.",
        professional: "Servicios Profesionales",
        professionalText: "Honorarios de contador, software de preparación de impuestos, consultas legales y costos de formación de negocios (LLC, etc.).",
        quarterly: "Impuestos Estimados Trimestrales",
        quarterlyWarning: "Importante: Paga a Medida que Ganas",
        quarterlyText: "A diferencia de los empleados, no tienes impuestos retenidos automáticamente. Debes pagar impuestos estimados trimestralmente para evitar multas.",
        usDeadlines: "Plazos Trimestrales EE. UU. (2025):",
        proTip: "Consejo Pro:",
        proTipText: "Aparta el 25-40% de cada pago para impuestos. Abre una cuenta separada de \"ahorros para impuestos\" y transfiere los fondos inmediatamente.",
        optimization: "Estrategias de Optimización Fiscal",
        llcTitle: "Forma una LLC o S-Corp",
        llcIntro: "Una vez que seas consistentemente rentable ($75,000+/año), considera formar una entidad comercial:",
        llc: "LLC (Sociedad de Responsabilidad Limitada)",
        scorp: "Elección S-Corp",
        retirement: "Maximiza las Contribuciones para el Retiro",
        retirementIntro: "Las cuentas de retiro para autónomos ofrecen enormes deducciones fiscales:",
        faqTitle: "Preguntas Frecuentes",
        faq1Q: "¿Pago impuestos sobre las tarifas de desafío?",
        faq1A: "No. Las tarifas de desafío son gastos comerciales y son deducibles de impuestos. Solo pagas impuestos sobre los pagos reales que recibes de la firma prop.",
        faq2Q: "¿Puedo deducir pérdidas de trading?",
        faq2A: "Con firmas prop, no estás operando tu propio capital, por lo que las deducciones tradicionales por pérdidas de trading no se aplican. Sin embargo, las tarifas de desafío y los gastos comerciales son totalmente deducibles.",
        faq3Q: "¿Qué pasa si mi firma prop está en otro país?",
        faq3A: "Todavía reportas ingresos donde TÚ vives y pagas impuestos allí. La ubicación de la firma prop no cambia tus obligaciones fiscales. Reporta siempre todos los ingresos mundiales.",
        faq4Q: "¿Cómo rastreo todo para los impuestos?",
        faq4A: "Usa software de contabilidad (QuickBooks, FreshBooks, Wave) o hojas de cálculo. Rastrea todos los pagos, gastos y guarda recibos. Considera contratar un contador especializado en trading.",
        calendar: "Calendario de Planificación Fiscal 2026",
        keyTakeaways: "Puntos Clave",
        takeaway1: "Eres autónomo - planea pagar el 25-40% de las ganancias en impuestos",
        takeaway2: "Guarda dinero para impuestos por separado de cada pago inmediatamente",
        takeaway3: "Rastrea TODOS los gastos - oficina en casa, equipo, software, educación",
        takeaway4: "Paga impuestos estimados trimestralmente para evitar multas",
        takeaway5: "Considera LLC/S-Corp con ingresos de $75,000+ para ahorros fiscales",
        takeaway6: "Contrata un contador especializado en trading - el ROI vale la pena",
        ctaTitle: "¿Listo para Empezar a Ganar?",
        ctaText: "Ahora que entiendes las implicaciones fiscales, compara firmas prop y comienza tu viaje de trading financiado.",
        ctaButton: "Compara Firmas Prop →"
    }
};

export default async function Taxes2025Page({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang as keyof typeof translations] || translations.en;
    const blogLink = lang === 'en' ? '/blog' : `/${lang}/blog`;
    const homeLink = lang === 'en' ? '/' : `/${lang}`;

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-16 max-w-4xl">
                    <Link href={blogLink} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        {t.backToHome}
                    </Link>

                    <header className="mb-12">
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

                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-8">
                            <h3 className="text-lg font-bold text-white mt-0 mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-400" />
                                {t.disclaimer}
                            </h3>
                            <p className="text-slate-300 text-sm mb-0">{t.disclaimerText}</p>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">{t.taxStatus}</h2>
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-white">{t.keyFact}</strong> {t.asTrader} <strong className="text-emerald-400">{t.independent}</strong>, {lang === 'ro' ? 'nu un angajat. Aceasta înseamnă:' : 'not an employee. This means:'}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mt-0 mb-4">{t.youreNot}</h3>
                                <ul className="text-slate-300 space-y-2 text-sm mb-0">
                                    {t.notItems.map((item, i) => <li key={i}>• {item}</li>)}
                                </ul>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-white mt-0 mb-4">{t.youAre}</h3>
                                <ul className="text-slate-300 space-y-2 text-sm mb-0">
                                    {t.areItems.map((item, i) => <li key={i}>• {item}</li>)}
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white mt-12 mb-4 flex items-center gap-2">
                            <Globe className="h-8 w-8 text-blue-400" />
                            {t.ratesByCountry}
                        </h2>

                        {/* US */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-6">
                            <h3 className="text-xl font-bold text-white mt-0 mb-4">{t.usTitle}</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white font-bold mb-2">{t.federalTax}</h4>
                                    <div className="bg-black/30 rounded-lg p-4 text-sm text-slate-300 space-y-1">
                                        <p>• 10% {lang === 'ro' ? 'pe venit până la' : 'on income up to'} $11,000</p>
                                        <p>• 12% {lang === 'ro' ? 'pe' : 'on'} $11,001 - $44,725</p>
                                        <p>• 22% {lang === 'ro' ? 'pe' : 'on'} $44,726 - $95,375</p>
                                        <p>• 24% {lang === 'ro' ? 'pe' : 'on'} $95,376 - $182,100</p>
                                        <p>• 32% {lang === 'ro' ? 'pe' : 'on'} $182,101 - $231,250</p>
                                        <p>• 35% {lang === 'ro' ? 'pe' : 'on'} $231,251 - $578,125</p>
                                        <p>• 37% {lang === 'ro' ? 'pe' : 'on'} $578,126+</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">{t.selfEmploymentTax}</h4>
                                    <p className="text-slate-300 text-sm">15.3% (Social Security 12.4% + Medicare 2.9%)</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">{t.stateTax}</h4>
                                    <p className="text-slate-300 text-sm">0-13.3% {lang === 'ro' ? 'în funcție de stat (CA cel mai mare, TX/FL/NV au $0)' : 'depending on state (CA highest, TX/FL/NV have $0)'}</p>
                                </div>
                                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                                    <p className="text-white font-bold mb-2">{t.example} $100,000 {lang === 'ro' ? 'câștiguri prop firm în California:' : 'prop firm earnings in California:'}</p>
                                    <div className="text-sm text-slate-300 space-y-1">
                                        <p>• {lang === 'ro' ? 'Impozit Federal pe Venit:' : 'Federal Income Tax:'} ~$18,000 (22% {lang === 'ro' ? 'efectiv' : 'effective'})</p>
                                        <p>• {lang === 'ro' ? 'Impozit Auto-Angajare:' : 'Self-Employment Tax:'} ~$14,130</p>
                                        <p>• {lang === 'ro' ? 'Impozit de Stat California:' : 'California State Tax:'} ~$6,000</p>
                                        <p className="text-emerald-400 font-bold pt-2 border-t border-emerald-500/30">
                                            {lang === 'ro' ? 'Total Taxe:' : 'Total Tax:'} ~$38,130 (38.1%)<br />
                                            Take-Home: ~$61,870
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UK */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-6">
                            <h3 className="text-xl font-bold text-white mt-0 mb-4">{t.ukTitle}</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-white font-bold mb-2">{t.incomeTax}</h4>
                                    <div className="bg-black/30 rounded-lg p-4 text-sm text-slate-300 space-y-1">
                                        <p>• 0% {lang === 'ro' ? 'pe venit sub' : 'on income below'} £12,570</p>
                                        <p>• 20% {lang === 'ro' ? 'pe' : 'on'} £12,571 - £50,270</p>
                                        <p>• 40% {lang === 'ro' ? 'pe' : 'on'} £50,271 - £125,140</p>
                                        <p>• 45% {lang === 'ro' ? 'pe' : 'on'} £125,141+</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2">{t.nationalInsurance}</h4>
                                    <p className="text-slate-300 text-sm">Class 2: £3.45/{lang === 'ro' ? 'săptămână' : 'week'}<br />Class 4: 9% {lang === 'ro' ? 'pe profituri' : 'on profits'} £12,570-£50,270, {lang === 'ro' ? 'apoi' : 'then'} 2%</p>
                                </div>
                            </div>
                        </div>

                        {/* EU */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-6">
                            <h3 className="text-xl font-bold text-white mt-0 mb-4">{t.euTitle}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇩🇪 Germania</h4>
                                    <p className="text-slate-300 text-sm">
                                        {lang === 'ro' ? 'Impozit pe Venit:' : 'Income Tax:'} 14-45%<br />
                                        Solidarity Surcharge: 5.5%<br />
                                        <strong className="text-emerald-400">Total: 15-48%</strong>
                                    </p>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇫🇷 {lang === 'ro' ? 'Franța' : 'France'}</h4>
                                    <p className="text-slate-300 text-sm">
                                        {lang === 'ro' ? 'Impozit pe Venit:' : 'Income Tax:'} 0-45%<br />
                                        {lang === 'ro' ? 'Contribuții Sociale:' : 'Social Contributions:'} 17.2%<br />
                                        <strong className="text-emerald-400">Total: 17-62%</strong>
                                    </p>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇪🇸 {lang === 'ro' ? 'Spania' : 'Spain'}</h4>
                                    <p className="text-slate-300 text-sm">
                                        {lang === 'ro' ? 'Impozit pe Venit:' : 'Income Tax:'} 19-47%<br />
                                        {lang === 'ro' ? 'Securitate Socială:' : 'Social Security:'} ~30%<br />
                                        <strong className="text-emerald-400">Total: 25-50%</strong>
                                    </p>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4">
                                    <h4 className="text-white font-bold mb-2">🇮🇹 Italia</h4>
                                    <p className="text-slate-300 text-sm">
                                        {lang === 'ro' ? 'Impozit pe Venit:' : 'Income Tax:'} 23-43%<br />
                                        INPS (social): ~26%<br />
                                        <strong className="text-emerald-400">Total: 30-50%</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Deductions */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4 flex items-center gap-2">
                            <Calculator className="h-8 w-8 text-emerald-400" />
                            {t.deductions}
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-6">{t.deductionsIntro}</p>

                        <div className="space-y-4 my-8">
                            {[
                                { title: t.homeOffice, text: t.homeOfficeText },
                                { title: t.equipment, text: t.equipmentText },
                                { title: t.education, text: t.educationText },
                                { title: t.professional, text: t.professionalText },
                            ].map((item, i) => (
                                <div key={i} className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-lg font-bold text-white mt-0 mb-2">{item.title}</h3>
                                            <p className="text-slate-300 text-sm mb-0">{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quarterly */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">{t.quarterly}</h2>
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 my-6">
                            <h3 className="text-lg font-bold text-white mt-0 mb-3 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-400" />
                                {t.quarterlyWarning}
                            </h3>
                            <p className="text-slate-300 text-sm mb-4">{t.quarterlyText}</p>
                            <div className="bg-black/30 rounded-lg p-4">
                                <h4 className="text-white font-bold mb-2 text-sm">{t.usDeadlines}</h4>
                                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                                    <div>• Q1: April 15, 2026</div>
                                    <div>• Q2: June 15, 2026</div>
                                    <div>• Q3: September 15, 2026</div>
                                    <div>• Q4: January 15, 2026</div>
                                </div>
                            </div>
                            <p className="text-slate-300 text-sm mt-4 mb-0">
                                <strong className="text-emerald-400">{t.proTip}</strong> {t.proTipText}
                            </p>
                        </div>

                        {/* FAQ */}
                        <h2 className="text-3xl font-bold text-white mt-12 mb-4">{t.faqTitle}</h2>
                        <div className="space-y-6">
                            {[
                                { q: t.faq1Q, a: t.faq1A },
                                { q: t.faq2Q, a: t.faq2A },
                                { q: t.faq3Q, a: t.faq3A },
                                { q: t.faq4Q, a: t.faq4A },
                            ].map((faq, i) => (
                                <div key={i} className="bg-slate-900/30 border border-slate-800 rounded-lg p-6">
                                    <h3 className="text-lg font-bold text-white mt-0">{faq.q}</h3>
                                    <p className="text-slate-300 mb-0">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* Key Takeaways */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-8 my-12">
                            <h2 className="text-2xl font-bold text-white mt-0 mb-4">{t.keyTakeaways}</h2>
                            <ul className="text-slate-300 space-y-2 mb-0">
                                {[t.takeaway1, t.takeaway2, t.takeaway3, t.takeaway4, t.takeaway5, t.takeaway6].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
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
                        <RelatedArticles lang={lang} currentSlug="taxes-2025" />
                    </div>
                </article>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
