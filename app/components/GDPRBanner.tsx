'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface GDPRBannerProps {
    lang?: Locale;
}

const translations = {
    en: {
        title: "🍪 Cookie Consent",
        text: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking \"Accept\", you consent to our use of cookies. Read our",
        privacy: "Privacy Policy",
        and: "and",
        cookie: "Cookie Policy",
        moreInfo: "for more information.",
        decline: "Decline",
        accept: "Accept Cookies"
    },
    ro: {
        title: "🍪 Acord Cookie-uri",
        text: "Folosim cookie-uri pentru a îmbunătăți experiența de navigare, a analiza traficul și a personaliza conținutul. Făcând clic pe „Acceptă”, îți dai acordul pentru utilizarea cookie-urilor. Citește",
        privacy: "Politica de Confidențialitate",
        and: "și",
        cookie: "Politica Cookie",
        moreInfo: "pentru mai multe informații.",
        decline: "Refuză",
        accept: "Acceptă Cookie-uri"
    },
    es: {
        title: "🍪 Consentimiento de Cookies",
        text: "Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en \"Aceptar\", das tu consentimiento para nuestro uso de cookies. Lee nuestra",
        privacy: "Política de Privacidad",
        and: "y",
        cookie: "Política de Cookies",
        moreInfo: "para más información.",
        decline: "Rechazar",
        accept: "Aceptar Cookies"
    },
    it: {
        title: "🍪 Consenso sui Cookie",
        text: "Utilizziamo i cookie per migliorare la tua esperienza di navigazione, analizzare il traffico del sito e personalizzare i contenuti. Cliccando \"Accetta\", acconsenti al nostro uso dei cookie. Leggi la nostra",
        privacy: "Informativa sulla Privacy",
        and: "e la",
        cookie: "Politica sui Cookie",
        moreInfo: "per maggiori informazioni.",
        decline: "Rifiuta",
        accept: "Accetta Cookie"
    }
};

export default function GDPRBanner({ lang = 'en' }: GDPRBannerProps) {
    const [showBanner, setShowBanner] = useState(false);
    const t = translations[lang] || translations.en;
    const linkPrefix = lang === 'en' ? '' : `/${lang}`;

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-4 md:p-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">{t.title}</h3>
                        <p className="text-slate-300 text-sm">
                            {t.text}{' '}
                            <Link href={`${linkPrefix}/privacy-policy`} className="text-emerald-400 hover:text-emerald-300 underline">
                                {t.privacy}
                            </Link>{' '}
                            {t.and}{' '}
                            <Link href={`${linkPrefix}/cookie-policy`} className="text-emerald-400 hover:text-emerald-300 underline">
                                {t.cookie}
                            </Link>{' '}
                            {t.moreInfo}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={declineCookies}
                            className="px-6 py-2.5 rounded-lg border border-slate-700 bg-black/80 text-slate-300 hover:border-slate-600 hover:bg-black transition-all text-sm font-medium"
                        >
                            {t.decline}
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-lg hover:shadow-emerald-900/30 transition-all text-sm font-bold"
                        >
                            {t.accept}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
