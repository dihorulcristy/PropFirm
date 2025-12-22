'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';

// Translations inline for client component
const translations = {
    en: {
        about: "Your trusted source for comparing proprietary trading firms. Find the best prop firm for your trading style.",
        quickLinks: "Quick Links",
        compareFirms: "Compare Firms",
        dealOfTheWeek: "Deal of the Week",
        howToGetFunded: "How to Get Funded",
        contactUs: "Contact Us",
        legal: "Legal",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
        affiliateDisclosure: "Affiliate Disclosure",
        contact: "Contact",
        contactForm: "Contact Form →",
        riskDisclaimer: "⚠️ Risk Disclaimer",
        riskText1: "All trading activities involve significant risks and are not suitable for all investors. PropFirmHub does not provide investment services or financial advice. All accounts offered by the listed firms are demo accounts (simulated) with virtual funds. No transactions occur in the real market. Past performance does not guarantee future results.",
        riskText2: "Simulated Trading Environment: All proprietary trading firm evaluations and funded accounts operate in a simulated trading environment. Traders receive virtual capital allocation and trade on demo accounts. Profit splits are based on performance in this simulated environment.",
        affiliateText: "Affiliate Disclosure: Some links on this site are affiliate links. If you purchase a service through these links, we may receive a commission at no additional cost to you. This helps us maintain the site free of charge. We only recommend evaluation programs we believe will add value to traders.",
        copyright: "PropFirmHub. All rights reserved."
    },
    ro: {
        about: "Sursa ta de încredere pentru compararea firmelor de tranzacționare proprietară. Găsește cea mai bună prop firm pentru stilul tău de trading.",
        quickLinks: "Linkuri Rapide",
        compareFirms: "Compară Firme",
        dealOfTheWeek: "Oferta Săptămânii",
        howToGetFunded: "Cum Să Fii Finanțat",
        contactUs: "Contactează-ne",
        legal: "Legal",
        privacyPolicy: "Politica de Confidențialitate",
        termsOfService: "Termeni și Condiții",
        cookiePolicy: "Politica Cookie",
        affiliateDisclosure: "Declarație Afiliere",
        contact: "Contact",
        contactForm: "Formular Contact →",
        riskDisclaimer: "⚠️ Avertisment Risc",
        riskText1: "Toate activitățile de tranzacționare implică riscuri semnificative și nu sunt potrivite pentru toți investitorii. PropFirmHub nu oferă servicii de investiții sau consiliere financiară. Toate conturile oferite de firmele listate sunt conturi demo (simuladas) cu fonduri virtuale. Nu au loc tranzacții pe piața reală. Performanța trecută nu garantează rezultate viitoare.",
        riskText2: "Mediu de Trading Simulat: Toate evaluările firmelor de tranzacționare proprietară și conturile finanțate operează într-un mediu de tranzacționare simulat. Traderii primesc alocare de capital virtual și tranzacționează pe conturi demo. Împărțirea profitului se bazează pe performanța în acest mediu simulat.",
        affiliateText: "Declarație Afiliere: Unele link-uri de pe acest site sunt link-uri afiliate. Dacă achiziționezi un serviciu prin aceste link-uri, este posibil să primim un comision fără costuri suplimentare pentru tine. Acest lucru ne ajută să menținem site-ul gratuit. Recomandăm doar programele de evaluare despre care credem că vor adăuga valoare traderilor.",
        copyright: "PropFirmHub. Toate drepturile rezervate."
    },
    es: {
        about: "Tu fuente confiable para comparar firmas de trading propietario. Encuentra la mejor firma prop para tu estilo de trading.",
        quickLinks: "Enlaces Rápidos",
        compareFirms: "Comparar Firmas",
        dealOfTheWeek: "Oferta de la Semana",
        howToGetFunded: "Cómo Conseguir Financiación",
        contactUs: "Contáctanos",
        legal: "Legal",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
        cookiePolicy: "Política de Cookies",
        affiliateDisclosure: "Divulgación de Afiliados",
        contact: "Contacto",
        contactForm: "Formulario de Contacto →",
        riskDisclaimer: "⚠️ Descargo de Responsabilidad de Riesgo",
        riskText1: "Todas las actividades de trading implican riesgos significativos y no son adecuadas para todos los inversores. PropFirmHub no proporciona servicios de inversión ni asesoramiento financiero. Todas las cuentas ofrecidas por las firmas listadas son cuentas demo (simuladas) con fondos virtuales. No ocurren transacciones en el mercado real. El rendimiento pasado no garantiza resultados futuros.",
        riskText2: "Entorno de Trading Simulado: Todas las evaluaciones de firmas de trading propietario y cuentas financiadas operan en un entorno de trading simulado. Los traders reciben asignación de capital virtual y operan en cuentas demo. La división de ganancias se basa en el rendimiento en este entorno simulado.",
        affiliateText: "Divulgación de Afiliados: Algunos enlaces en este sitio son enlaces de afiliados. Si compras un servicio a través de estos enlaces, podemos recibir una comisión sin costo adicional para ti. Esto nos ayuda a mantener el sitio gratuito. Solo recomendamos programas de evaluación que creemos que agregarán valor a los traders.",
        copyright: "PropFirmHub. Todos los derechos reservados."
    }
};

interface FooterProps {
    lang?: Locale;
}

export default function Footer({ lang = 'en' }: FooterProps) {
    const t = translations[lang] || translations.en;
    const basePath = lang === 'en' ? '' : `/${lang}`;

    return (
        <footer className="bg-black border-t border-slate-800 mt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="PropFirmHub Logo"
                                width={32}
                                height={32}
                                className="rounded-lg"
                            />
                            <h3 className="text-white font-bold text-lg">PropFirmHub</h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            {t.about}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t.quickLinks}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href={`${basePath}/#compare`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.compareFirms}</Link></li>
                            <li><Link href={`${basePath}/#deal`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.dealOfTheWeek}</Link></li>
                            <li><Link href={`${basePath}/how-to-get-funded-guide`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.howToGetFunded}</Link></li>
                            <li><Link href={`${basePath}/contact`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.contactUs}</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t.legal}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href={`${basePath}/privacy-policy`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.privacyPolicy}</Link></li>
                            <li><Link href={`${basePath}/terms-of-service`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.termsOfService}</Link></li>
                            <li><Link href={`${basePath}/cookie-policy`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.cookiePolicy}</Link></li>
                            <li><Link href={`${basePath}/affiliate-disclosure`} className="text-slate-400 hover:text-emerald-400 transition-colors">{t.affiliateDisclosure}</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t.contact}</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Email: support@propfirms-hub.com</li>
                            <li>Address: 123 Trading St, Suite 100</li>
                            <li>Dubai, UAE</li>
                            <li><Link href={`${basePath}/contact`} className="text-emerald-400 hover:text-emerald-300 transition-colors">{t.contactForm}</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Google Ads Compliant Risk Disclaimer */}
                <div className="border-t border-slate-800 pt-8 mb-8">
                    <div className="bg-black/60 border border-slate-800 rounded-lg p-6">
                        <h5 className="text-white font-semibold text-sm mb-3">{t.riskDisclaimer}</h5>
                        <p className="text-slate-400 text-xs leading-relaxed mb-3">
                            <strong className="text-slate-300">{t.riskText1}</strong>
                        </p>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            <strong className="text-slate-300">{t.riskText2}</strong>
                        </p>
                    </div>
                </div>

                {/* Enhanced Affiliate Disclosure */}
                <div className="border-t border-slate-800 pt-6 mb-6">
                    <p className="text-slate-400 text-xs text-center leading-relaxed">
                        <strong className="text-slate-300">{t.affiliateText}</strong>
                    </p>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 pt-6 text-center">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} {t.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
