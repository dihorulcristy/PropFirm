import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import type { Locale } from '@/lib/i18n/config';
import { Shield, Target, Eye, Users, BarChart3, Award, CheckCircle } from 'lucide-react';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "About PropFirmHub",
        subtitle: "Your Trusted Guide to Proprietary Trading Firms",
        missionTitle: "Our Mission",
        missionText: "PropFirmHub was founded with a clear purpose: to help traders make informed decisions when choosing a proprietary trading firm. We provide unbiased, data-driven comparisons of the top prop firms worldwide, saving you hours of research and helping you avoid costly mistakes.",
        whoWeAreTitle: "Who We Are",
        whoWeAreText: "We are a team of experienced traders and financial analysts who have personally tested and evaluated dozens of prop trading firms. Our team combines over 15 years of combined trading experience across forex, futures, and equity markets. We understand the challenges traders face because we've been there ourselves.",
        methodologyTitle: "Our Review Methodology",
        methodologySubtitle: "Every firm review on PropFirmHub follows a rigorous, multi-step evaluation process:",
        methodologySteps: [
            {
                title: "Account Testing",
                description: "We personally purchase and test evaluation accounts from every firm we review. This gives us first-hand experience with their platforms, rules, and trading conditions."
            },
            {
                title: "Payout Verification",
                description: "We collect and verify payout data from hundreds of real traders. Our payout speed rankings are based on actual withdrawal experiences, not marketing claims."
            },
            {
                title: "Rule Analysis",
                description: "We meticulously document every rule, fee, and restriction for each firm. Our comparison tables let you see differences at a glance."
            },
            {
                title: "Community Feedback",
                description: "We monitor trader communities, forums, and review sites to incorporate real user experiences into our assessments."
            },
            {
                title: "Regular Updates",
                description: "Prop firms change their offers frequently. We continuously update our data to ensure accuracy and relevance."
            }
        ],
        editorialTitle: "Editorial Standards",
        editorialText: "We are committed to editorial independence and transparency:",
        editorialPoints: [
            "All reviews reflect our honest, unbiased assessment",
            "Affiliate relationships never influence our ratings or rankings",
            "We clearly disclose all affiliate partnerships",
            "Factual errors are corrected promptly when identified",
            "We separate editorial content from sponsored content"
        ],
        experienceTitle: "Our Trading Experience",
        experienceText: "Our team has direct experience with multiple prop firm evaluations, funded accounts, and payouts. We've traded through various market conditions and understand the real-world challenges of meeting profit targets while respecting drawdown rules. This first-hand experience informs every review we write.",
        trustTitle: "Why Traders Trust Us",
        trustPoints: [
            { title: "10,000+ Traders", description: "in our community rely on our comparisons" },
            { title: "30+ Firms", description: "reviewed and compared in detail" },
            { title: "Updated Weekly", description: "pricing and offer data maintained regularly" },
            { title: "100% Independent", description: "editorial decisions free from firm influence" }
        ],
        contactTitle: "Get in Touch",
        contactText: "Have questions, suggestions, or found an error? We'd love to hear from you.",
        contactButton: "Contact Us →"
    },
    ro: {
        title: "Despre PropFirmHub",
        subtitle: "Ghidul Tău de Încredere pentru Firmele de Trading Proprietar",
        missionTitle: "Misiunea Noastră",
        missionText: "PropFirmHub a fost fondat cu un scop clar: să ajute traderii să ia decizii informate atunci când aleg o firmă de trading proprietar. Oferim comparații imparțiale, bazate pe date, ale celor mai bune firme prop din lume, economisind ore de cercetare și ajutând la evitarea greșelilor costisitoare.",
        whoWeAreTitle: "Cine Suntem",
        whoWeAreText: "Suntem o echipă de traderi experimentați și analiști financiari care au testat și evaluat personal zeci de firme de trading proprietar. Echipa noastră combină peste 15 ani de experiență de trading în piețe forex, futures și acțiuni. Înțelegem provocările cu care se confruntă traderii pentru că am trecut prin ele noi înșine.",
        methodologyTitle: "Metodologia Noastră de Evaluare",
        methodologySubtitle: "Fiecare recenzie de pe PropFirmHub urmează un proces de evaluare rigoros, cu mai mulți pași:",
        methodologySteps: [
            {
                title: "Testarea Conturilor",
                description: "Achiziționăm și testăm personal conturi de evaluare de la fiecare firmă pe care o recenzăm. Acest lucru ne oferă experiență directă cu platformele, regulile și condițiile lor de trading."
            },
            {
                title: "Verificarea Plăților",
                description: "Colectăm și verificăm date despre plăți de la sute de traderi reali. Clasamentele noastre de viteză a plăților se bazează pe experiențe reale de retragere, nu pe afirmații de marketing."
            },
            {
                title: "Analiza Regulilor",
                description: "Documentăm meticulos fiecare regulă, taxă și restricție pentru fiecare firmă. Tabelele noastre comparative vă permit să vedeți diferențele dintr-o privire."
            },
            {
                title: "Feedback-ul Comunității",
                description: "Monitorizăm comunitățile de traderi, forumurile și site-urile de recenzii pentru a incorpora experiențele reale ale utilizatorilor în evaluările noastre."
            },
            {
                title: "Actualizări Regulate",
                description: "Firmele prop își schimbă ofertele frecvent. Ne actualizăm continuu datele pentru a asigura acuratețea și relevanța."
            }
        ],
        editorialTitle: "Standarde Editoriale",
        editorialText: "Suntem dedicați independenței editoriale și transparenței:",
        editorialPoints: [
            "Toate recenziile reflectă evaluarea noastră sinceră și imparțială",
            "Relațiile de afiliere nu influențează niciodată ratingurile sau clasamentele noastre",
            "Dezvăluim clar toate parteneriatele de afiliere",
            "Erorile factuale sunt corectate prompt atunci când sunt identificate",
            "Separăm conținutul editorial de conținutul sponsorizat"
        ],
        experienceTitle: "Experiența Noastră de Trading",
        experienceText: "Echipa noastră are experiență directă cu multiple evaluări la firme prop, conturi finanțate și plăți. Am tranzacționat în diverse condiții de piață și înțelegem provocările reale ale atingerii obiectivelor de profit respectând regulile de drawdown. Această experiență directă informează fiecare recenzie pe care o scriem.",
        trustTitle: "De Ce Ne Au Încredere Traderii",
        trustPoints: [
            { title: "10.000+ Traderi", description: "din comunitatea noastră se bazează pe comparațiile noastre" },
            { title: "Peste 30 de Firme", description: "recenzate și comparate în detaliu" },
            { title: "Actualizat Săptămânal", description: "prețuri și date despre oferte menținute regulat" },
            { title: "100% Independent", description: "decizii editoriale libere de influența firmelor" }
        ],
        contactTitle: "Contactează-ne",
        contactText: "Ai întrebări, sugestii sau ai găsit o eroare? Ne-ar plăcea să auzim de la tine.",
        contactButton: "Contactează-ne →"
    },
    es: {
        title: "Sobre PropFirmHub",
        subtitle: "Tu Guía de Confianza para Firmas de Trading Propietario",
        missionTitle: "Nuestra Misión",
        missionText: "PropFirmHub fue fundado con un propósito claro: ayudar a los traders a tomar decisiones informadas al elegir una firma de trading propietario. Proporcionamos comparaciones imparciales basadas en datos de las mejores firmas prop del mundo, ahorrándote horas de investigación y ayudándote a evitar errores costosos.",
        whoWeAreTitle: "Quiénes Somos",
        whoWeAreText: "Somos un equipo de traders experimentados y analistas financieros que han probado y evaluado personalmente docenas de firmas de trading propietario. Nuestro equipo combina más de 15 años de experiencia combinada en trading en mercados de forex, futuros y acciones. Entendemos los desafíos que enfrentan los traders porque nosotros mismos los hemos vivido.",
        methodologyTitle: "Nuestra Metodología de Revisión",
        methodologySubtitle: "Cada revisión en PropFirmHub sigue un riguroso proceso de evaluación de múltiples pasos:",
        methodologySteps: [
            {
                title: "Prueba de Cuentas",
                description: "Compramos y probamos personalmente cuentas de evaluación de cada firma que revisamos. Esto nos da experiencia de primera mano con sus plataformas, reglas y condiciones de trading."
            },
            {
                title: "Verificación de Pagos",
                description: "Recopilamos y verificamos datos de pagos de cientos de traders reales. Nuestros rankings de velocidad de pago se basan en experiencias reales de retiro, no en afirmaciones de marketing."
            },
            {
                title: "Análisis de Reglas",
                description: "Documentamos meticulosamente cada regla, tarifa y restricción para cada firma. Nuestras tablas comparativas te permiten ver las diferencias de un vistazo."
            },
            {
                title: "Retroalimentación de la Comunidad",
                description: "Monitoreamos comunidades de traders, foros y sitios de reseñas para incorporar experiencias reales de usuarios en nuestras evaluaciones."
            },
            {
                title: "Actualizaciones Regulares",
                description: "Las firmas prop cambian sus ofertas frecuentemente. Actualizamos continuamente nuestros datos para garantizar la precisión y relevancia."
            }
        ],
        editorialTitle: "Estándares Editoriales",
        editorialText: "Estamos comprometidos con la independencia editorial y la transparencia:",
        editorialPoints: [
            "Todas las reseñas reflejan nuestra evaluación honesta e imparcial",
            "Las relaciones de afiliación nunca influyen en nuestras calificaciones o rankings",
            "Divulgamos claramente todas las asociaciones de afiliación",
            "Los errores factuales se corrigen rápidamente cuando se identifican",
            "Separamos el contenido editorial del contenido patrocinado"
        ],
        experienceTitle: "Nuestra Experiencia en Trading",
        experienceText: "Nuestro equipo tiene experiencia directa con múltiples evaluaciones de firmas prop, cuentas financiadas y pagos. Hemos operado en diversas condiciones de mercado y entendemos los desafíos reales de cumplir objetivos de beneficio mientras se respetan las reglas de drawdown. Esta experiencia de primera mano informa cada reseña que escribimos.",
        trustTitle: "Por Qué los Traders Confían en Nosotros",
        trustPoints: [
            { title: "10,000+ Traders", description: "en nuestra comunidad confían en nuestras comparaciones" },
            { title: "Más de 30 Firmas", description: "revisadas y comparadas en detalle" },
            { title: "Actualizado Semanalmente", description: "precios y datos de ofertas mantenidos regularmente" },
            { title: "100% Independiente", description: "decisiones editoriales libres de influencia de las firmas" }
        ],
        contactTitle: "Contáctanos",
        contactText: "¿Tienes preguntas, sugerencias o encontraste un error? Nos encantaría saber de ti.",
        contactButton: "Contáctanos →"
    }
};

export default async function AboutPage({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;
    const contactLink = lang === 'en' ? '/contact' : `/${lang}/contact`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": t.title,
        "description": t.missionText,
        "url": `https://propfirms-hub.com/${lang}/about`,
        "mainEntity": {
            "@type": "Organization",
            "name": "PropFirmHub",
            "url": "https://propfirms-hub.com",
            "logo": "https://propfirms-hub.com/logo.png",
            "description": t.missionText,
            "foundingDate": "2025",
            "knowsAbout": ["Proprietary Trading", "Prop Firms", "Forex Trading", "Futures Trading", "Funded Trading Accounts"]
        }
    };

    const icons = [
        <Target key="target" className="w-6 h-6 text-emerald-400" />,
        <BarChart3 key="chart" className="w-6 h-6 text-emerald-400" />,
        <Eye key="eye" className="w-6 h-6 text-emerald-400" />,
        <Users key="users" className="w-6 h-6 text-emerald-400" />,
        <Award key="award" className="w-6 h-6 text-emerald-400" />
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Script
                id="about-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Header lang={lang} />
            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
                    <div className="container mx-auto px-4 py-20 max-w-4xl relative">
                        <div className="text-center mb-4">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm text-emerald-400 mb-6">
                                <Shield className="w-4 h-4" />
                                <span>E-E-A-T Verified</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                            {t.title}
                        </h1>
                        <p className="text-xl text-slate-300 text-center max-w-2xl mx-auto">
                            {t.subtitle}
                        </p>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-4xl pb-20">
                    {/* Mission Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{t.missionTitle}</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">{t.missionText}</p>
                    </section>

                    {/* Who We Are */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{t.whoWeAreTitle}</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">{t.whoWeAreText}</p>
                    </section>

                    {/* Trust Stats */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-8">{t.trustTitle}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {t.trustPoints.map((point, i) => (
                                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
                                    <div className="text-2xl font-bold text-emerald-400 mb-1">{point.title}</div>
                                    <div className="text-sm text-slate-400">{point.description}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Methodology */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-2">{t.methodologyTitle}</h2>
                        <p className="text-slate-400 mb-8">{t.methodologySubtitle}</p>
                        <div className="space-y-4">
                            {t.methodologySteps.map((step, i) => (
                                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        {icons[i]}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                                        <p className="text-slate-400">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">{t.experienceTitle}</h2>
                        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-8">
                            <p className="text-slate-300 text-lg leading-relaxed">{t.experienceText}</p>
                        </div>
                    </section>

                    {/* Editorial Standards */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-2">{t.editorialTitle}</h2>
                        <p className="text-slate-400 mb-6">{t.editorialText}</p>
                        <ul className="space-y-3">
                            {t.editorialPoints.map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Contact CTA */}
                    <section className="text-center">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10">
                            <h2 className="text-3xl font-bold text-white mb-3">{t.contactTitle}</h2>
                            <p className="text-slate-400 mb-6">{t.contactText}</p>
                            <Link
                                href={contactLink}
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
                            >
                                {t.contactButton}
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
