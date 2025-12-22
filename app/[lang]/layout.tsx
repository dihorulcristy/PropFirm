import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import GDPRBanner from "../components/GDPRBanner";
import EmailCapturePopup from "../components/EmailCapturePopup";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";

// Fonts and globals are already handled in root layout

export async function generateStaticParams() {
    return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<any>;
}): Promise<Metadata> {
    const resolvedParams = await params;
    const lang = resolvedParams.lang as Locale;
    const dict = await getDictionary(lang);

    const baseUrl = 'https://propfirmhub.com';
    const currentUrl = lang === 'en' ? baseUrl : `${baseUrl}/${lang}`;

    return {
        title: dict.seo.title,
        description: dict.seo.description,
        keywords: dict.seo.keywords.split(', '),
        authors: [{ name: "PropFirmHub Team" }],
        creator: "PropFirmHub",
        publisher: "PropFirmHub",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: currentUrl,
            languages: {
                'en': baseUrl,
                'ro': `${baseUrl}/ro`,
                'x-default': baseUrl,
            },
        },
        openGraph: {
            title: dict.seo.title,
            description: dict.seo.description,
            url: currentUrl,
            siteName: 'PropFirmHub',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'PropFirmHub - Compare Top Prop Trading Firms',
                },
            ],
            locale: lang === 'ro' ? 'ro_RO' : 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: dict.seo.title,
            description: dict.seo.description,
            images: ['/og-image.jpg'],
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
        verification: {
            google: 'your-google-verification-code',
        },
    };
}

export default async function LocaleLayout(props: {
    children: React.ReactNode;
    params: Promise<any>;
}) {
    const params = await props.params;
    const lang = params.lang as Locale;
    const { children } = props;

    return (
        <>
            {/* Note: Metadata, Fonts, and Scripts are inherited from Root Layout (app/layout.tsx).
                We only include content specific to this layout segment here to avoid hydration errors 
                (double html/body tags) and duplicate scripts. 
            */}

            <EmailCapturePopup delay={3000} lang={lang} />
            {children}
            <GDPRBanner lang={lang} />
        </>
    );
}
