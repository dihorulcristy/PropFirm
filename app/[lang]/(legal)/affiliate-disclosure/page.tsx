import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import type { Locale } from '@/lib/i18n/config';

interface PageProps {
    params: Promise<{ lang: Locale }>;
}

const translations = {
    en: {
        title: "Affiliate Disclosure",
        lastUpdated: "Last updated:",
        sections: [
            {
                title: "Affiliate Relationships",
                content: "PropFirmHub participates in affiliate marketing programs. This means that we may receive a commission when you click on links to products or services and make a purchase."
            },
            {
                title: "How It Works",
                content: "When you click on an affiliate link and make a purchase, the company pays us a commission. This comes at no additional cost to you. The price you pay is the same whether you use our affiliate link or not."
            },
            {
                title: "Our Commitment to You",
                content: "We only recommend products and services that we believe will add value to our readers. Our affiliate relationships do not influence our editorial independence or the accuracy of our reviews."
            },
            {
                title: "Transparency",
                content: "We are committed to transparency. All affiliate links are clearly marked, and we disclose our affiliate relationships in accordance with FTC guidelines and applicable laws."
            },
            {
                title: "Current Affiliate Partners",
                content: "We currently have affiliate relationships with the following proprietary trading firms:"
            }
        ]
    },
    ro: {
        title: "Divulgare Afiliere",
        lastUpdated: "Ultima actualizare:",
        sections: [
            {
                title: "Relații de Afiliere",
                content: "PropFirmHub participă la programe de marketing afiliat. Aceasta înseamnă că putem primi un comision atunci când faceți clic pe link-uri către produse sau servicii și efectuați o achiziție."
            },
            {
                title: "Cum Funcționează",
                content: "Când faceți clic pe un link de afiliere și efectuați o achiziție, compania ne plătește un comision. Acest lucru nu implică niciun cost suplimentar pentru dumneavoastră. Prețul pe care îl plătiți este același, indiferent dacă utilizați link-ul nostru de afiliere sau nu."
            },
            {
                title: "Angajamentul Nostru față de Dumneavoastră",
                content: "Recomandăm doar produse și servicii despre care credem că vor adăuga valoare cititorilor noștri. Relațiile noastre de afiliere nu influențează independența noastră editorială sau acuratețea recenziilor noastre."
            },
            {
                title: "Transparență",
                content: "Ne angajăm să fim transparenți. Toate link-urile de afiliere sunt marcate clar și dezvăluim relațiile noastre de afiliere în conformitate cu liniile directoare FTC și legile aplicabile."
            },
            {
                title: "Parteneri Afiliați Curenți",
                content: "În prezent avem relații de afiliere cu următoarele firme de trading proprietar:"
            }
        ]
    }
};

export default async function AffiliateDisclosure({ params }: PageProps) {
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
                            <p className="text-slate-300 mb-4">{section.content}</p>
                            {index === 4 && (
                                <ul className="list-disc list-inside text-slate-300 space-y-2">
                                    <li>FTMO</li>
                                    <li>TradingCult</li>
                                    <li>FundedX</li>
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
