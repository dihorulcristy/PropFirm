import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "Cookie Policy",
        lastUpdated: "Last updated:",
        sections: [
            {
                title: "What Are Cookies",
                content: "Cookies are small text files that are placed on your computer or mobile device when you visit our website.",
                list: []
            },
            {
                title: "How We Use Cookies",
                content: "We use cookies to understand how you use our website and to improve your experience. This includes personalizing content and advertising.",
                list: []
            },
            {
                title: "Types of Cookies We Use",
                content: "",
                list: [
                    "<strong>Essential Cookies:</strong> Required for the website to function properly",
                    "<strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website",
                    "<strong>Advertising Cookies:</strong> Used to deliver relevant advertisements"
                ]
            },
            {
                title: "Managing Cookies",
                content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.",
                list: []
            }
        ]
    },
    ro: {
        title: "Politica Cookie",
        lastUpdated: "Ultima actualizare:",
        sections: [
            {
                title: "Ce Sunt Cookie-urile",
                content: "Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul mobil atunci când vizitați site-ul nostru.",
                list: []
            },
            {
                title: "Cum Utilizăm Cookie-urile",
                content: "Utilizăm cookie-uri pentru a înțelege cum utilizați site-ul nostru și pentru a vă îmbunătăți experiența. Aceasta include personalizarea conținutului și publicității.",
                list: []
            },
            {
                title: "Tipuri de Cookie-uri pe care le Folosim",
                content: "",
                list: [
                    "<strong>Cookie-uri Esențiale:</strong> Necesare pentru funcționarea corectă a site-ului",
                    "<strong>Cookie-uri de Analiză:</strong> Ne ajută să înțelegem cum interacționează vizitatorii cu site-ul nostru",
                    "<strong>Cookie-uri de Publicitate:</strong> Utilizate pentru a livra reclame relevante"
                ]
            },
            {
                title: "Gestionarea Cookie-urilor",
                content: "Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe computerul dumneavoastră și puteți seta majoritatea browserelor să împiedice plasarea lor.",
                list: []
            }
        ]
    }
};

export default async function CookiePolicy({ params }: PageProps) {
    const { lang } = await params;
    const t = translations[lang] || translations.en;

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
                            {section.content && <p className="text-slate-300 mb-4">{section.content}</p>}
                            {section.list.length > 0 && (
                                <ul className="list-disc list-inside text-slate-300 space-y-2">
                                    {section.list.map((item, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
