import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "Terms of Service",
        lastUpdated: "Last updated:",
        sections: [
            {
                title: "1. Acceptance of Terms",
                content: "By accessing and using PropFirmHub, you accept and agree to be bound by the terms and provision of this agreement."
            },
            {
                title: "2. Use License",
                content: "Permission is granted to temporarily access the materials on PropFirmHub for personal, non-commercial transitory viewing only."
            },
            {
                title: "3. Disclaimer",
                content: "The materials on PropFirmHub are provided on an 'as is' basis. PropFirmHub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability."
            },
            {
                title: "4. Limitations",
                content: "In no event shall PropFirmHub or its suppliers be liable for any damages arising out of the use or inability to use the materials on PropFirmHub."
            },
            {
                title: "5. Affiliate Links",
                content: "PropFirmHub contains affiliate links to third-party websites. We may receive compensation when you click on these links. This does not affect the price you pay or our editorial independence."
            }
        ]
    },
    ro: {
        title: "Termeni și Condiții",
        lastUpdated: "Ultima actualizare:",
        sections: [
            {
                title: "1. Acceptarea Termenilor",
                content: "Prin accesarea și utilizarea PropFirmHub, acceptați și sunteți de acord să respectați termenii și prevederile acestui acord."
            },
            {
                title: "2. Licență de Utilizare",
                content: "Se acordă permisiunea de a accesa temporar materialele de pe PropFirmHub doar pentru vizualizare personală, necomercială și tranzitorie."
            },
            {
                title: "3. Declinarea Responsabilității",
                content: "Materialele de pe PropFirmHub sunt furnizate 'ca atare'. PropFirmHub nu oferă garanții, exprese sau implicite, și prin prezenta declină și neagă toate celelalte garanții inclusiv, fără limitare, garanțiile implicite sau condițiile de vandabilitate."
            },
            {
                title: "4. Limitări",
                content: "În niciun caz PropFirmHub sau furnizorii săi nu vor fi răspunzători pentru orice daune care rezultă din utilizarea sau incapacitatea de a utiliza materialele de pe PropFirmHub."
            },
            {
                title: "5. Link-uri de Afiliere",
                content: "PropFirmHub conține link-uri de afiliere către site-uri terțe. Putem primi o compensație atunci când faceți clic pe aceste link-uri. Acest lucru nu afectează prețul pe care îl plătiți sau independența noastră editorială."
            }
        ]
    }
};

export default async function TermsOfService({ params }: PageProps) {
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
                            <p className="text-slate-300 mb-4">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
