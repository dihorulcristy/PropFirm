import type { Metadata } from "next";

export const metadata: Metadata = {
    // Primary SEO - Target Keywords
    title: "DNA Funded Discount Code 2026 | Get 15% OFF + FREE 5K Account",
    description: "Get the latest DNA Funded coupon code and promo code for January 2026. Exclusive DNA Funded discount: FREE 5K Two-Phase account with $150+ purchase. Save big on your prop trading challenge!",

    // Keywords
    keywords: [
        "dna funded discount code",
        "dna funded coupon code",
        "dna funded coupon",
        "dna funded promo code",
        "dna funded discount",
        "dna funded code",
        "dna funded promotion",
        "dna funded free account",
        "prop firm discount code",
        "prop trading coupon"
    ],

    // Open Graph
    openGraph: {
        title: "DNA Funded Discount Code 2026 | FREE 5K Account Offer",
        description: "Exclusive DNA Funded coupon code: Get a FREE 5K Two-Phase account with any $150+ purchase. Limited time offer valid until March 2026.",
        url: "https://propfirms-hub.com/dnafunded",
        siteName: "PropFirms Hub",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/logos/dnafunded.png",
                width: 800,
                height: 600,
                alt: "DNA Funded Discount Code - Free 5K Account Promotion",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "DNA Funded Discount Code 2026 | FREE 5K Account",
        description: "Get the best DNA Funded promo code. FREE 5K Two-Phase account with $150+ purchase. Limited time!",
    },

    // Canonical URL
    alternates: {
        canonical: "https://propfirms-hub.com/dnafunded",
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// JSON-LD Structured Data
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://propfirms-hub.com/dnafunded",
            "url": "https://propfirms-hub.com/dnafunded",
            "name": "DNA Funded Discount Code 2026 | FREE 5K Account Offer",
            "description": "Get the latest DNA Funded coupon code and promo code. Exclusive offer: FREE 5K Two-Phase account with $150+ purchase.",
            "isPartOf": {
                "@id": "https://propfirms-hub.com/#website"
            },
            "primaryImageOfPage": {
                "@id": "https://propfirms-hub.com/logos/dnafunded.png"
            },
            "datePublished": "2026-01-01",
            "dateModified": "2026-01-04"
        },
        {
            "@type": "Organization",
            "@id": "https://propfirms-hub.com/#organization",
            "name": "PropFirms Hub",
            "url": "https://propfirms-hub.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://propfirms-hub.com/logo.png"
            }
        },
        {
            "@type": "Offer",
            "name": "DNA Funded Free 5K Account Promotion",
            "description": "Get a FREE 5K Two-Phase account with any purchase of $150 or more at DNA Funded",
            "url": "https://propfirms-hub.com/dnafunded",
            "priceCurrency": "USD",
            "price": "0",
            "availability": "https://schema.org/InStock",
            "validFrom": "2026-01-01",
            "validThrough": "2026-03-31",
            "seller": {
                "@type": "Organization",
                "name": "DNA Funded"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the DNA Funded discount code for 2026?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The current DNA Funded promotion offers a FREE 5K Two-Phase account with any purchase of $150 or more. This offer is valid from January 1, 2026 until March 31, 2026."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I use the DNA Funded coupon code?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The DNA Funded free account offer is automatically applied when you spend $150 or more. No coupon code needed - simply make a qualifying purchase and your free 5K account will be added automatically."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the DNA Funded promo code valid?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, the DNA Funded promotion is valid until March 31, 2026. You can receive up to 5 free 5K Two-Phase accounts by making multiple qualifying purchases of $150+."
                    }
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://propfirms-hub.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "DNA Funded Discount Code",
                    "item": "https://propfirms-hub.com/dnafunded"
                }
            ]
        }
    ]
};

export default function DnaFundedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
