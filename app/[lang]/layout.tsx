import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import GDPRBanner from "../components/GDPRBanner";
import EmailCapturePopup from "../components/EmailCapturePopup";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, type Locale } from "@/lib/i18n/config";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

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
        <html lang={lang}>
            <head>
                {/* hreflang tags for SEO */}
                <link rel="alternate" hrefLang="en" href="https://propfirmhub.com" />
                <link rel="alternate" hrefLang="ro" href="https://propfirmhub.com/ro" />
                <link rel="alternate" hrefLang="x-default" href="https://propfirmhub.com" />

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-M10QTFTVBQ"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-M10QTFTVBQ');
            `,
                    }}
                />
                {/* End Google tag */}

                {/* Google Ads Tag */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11042536372"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11042536372');
            `,
                    }}
                />
                {/* End Google Ads Tag */}

                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P543DXDD');`,
                    }}
                />
                {/* End Google Tag Manager */}
            </head>
            <body
                className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-slate-950 text-white`}
            >
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P543DXDD"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <EmailCapturePopup delay={3000} lang={lang} />
                {children}
                <GDPRBanner lang={lang} />
            </body>
        </html>
    );
}
