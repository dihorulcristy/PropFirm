import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "Privacy Policy",
        lastUpdated: "Last updated:",
        sections: [
            {
                title: "1. Information We Collect",
                content: "We collect information that you provide directly to us, including when you use our website, subscribe to our newsletter, or contact us for support."
            },
            {
                title: "2. How We Use Your Information",
                content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations."
            },
            {
                title: "3. Cookies",
                content: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
            },
            {
                title: "4. Data Security",
                content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing and against accidental loss, destruction, or damage."
            },
            {
                title: "5. Your Rights",
                content: "You have the right to access, correct, or delete your personal data. You may also object to processing or request restriction of processing of your personal data."
            },
            {
                title: "6. Contact Us",
                content: "If you have any questions about this Privacy Policy, please contact us at",
                linkText: "our contact page"
            }
        ]
    },
    ro: {
        title: "Politica de Confidențialitate",
        lastUpdated: "Ultima actualizare:",
        sections: [
            {
                title: "1. Informațiile pe care le Colectăm",
                content: "Colectăm informațiile pe care ni le furnizați direct, inclusiv atunci când utilizați site-ul nostru, vă abonați la newsletter-ul nostru sau ne contactați pentru asistență."
            },
            {
                title: "2. Cum Utilizăm Informațiile Dumneavoastră",
                content: "Utilizăm informațiile colectate pentru a furniza, menține și îmbunătăți serviciile noastre, pentru a comunica cu dumneavoastră și pentru a respecta obligațiile legale."
            },
            {
                title: "3. Cookie-uri",
                content: "Utilizăm cookie-uri și tehnologii de urmărire similare pentru a urmări activitatea pe site-ul nostru și pentru a reține anumite informații. Puteți instrui browserul să refuze toate cookie-urile sau să indice când este trimis un cookie."
            },
            {
                title: "4. Securitatea Datelor",
                content: "Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva prelucrării neautorizate sau ilegale și împotriva pierderii accidentale, distrugerii sau deteriorării."
            },
            {
                title: "5. Drepturile Dumneavoastră",
                content: "Aveți dreptul de a accesa, corecta sau șterge datele dumneavoastră personale. De asemenea, vă puteți opune prelucrării sau puteți solicita restricționarea prelucrării datelor dumneavoastră personale."
            },
            {
                title: "6. Contactați-ne",
                content: "Dacă aveți întrebări despre această Politică de Confidențialitate, vă rugăm să ne contactați la",
                linkText: "pagina noastră de contact"
            }
        ]
    }
};

export default async function PrivacyPolicy({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;
    const contactLink = lang === 'en' ? '/contact' : `/${lang}/contact`;

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">{t.title}</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 mb-6">
                        {t.lastUpdated} {new Date().toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-US')}
                    </p>

                    {t.sections.map((section, index) => (
                        <section key={index} className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                            <p className="text-slate-300 mb-4">
                                {section.content}
                                {section.linkText && (
                                    <>
                                        {' '}
                                        <Link href={contactLink} className="text-emerald-400 hover:text-emerald-300 underline">
                                            {section.linkText}
                                        </Link>
                                        .
                                    </>
                                )}
                            </p>
                        </section>
                    ))}
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
