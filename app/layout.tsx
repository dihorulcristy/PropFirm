import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GDPRBanner from "./components/GDPRBanner";
import EmailCapturePopup from "./components/EmailCapturePopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PropFirmHub - Compare Top Prop Trading Firms 2025 | Exclusive Discounts",
  description: "Compare top prop firms 2025. Exclusive discounts, evaluation rules & pricing. FTMO, FunderPro, TradingCult & more. Find your perfect firm!",
  keywords: ["prop trading", "prop firms", "FTMO", "funded trading", "trading evaluation", "prop firm comparison", "FunderPro", "TradingCult", "forex prop firms", "futures prop firms"],
  authors: [{ name: "PropFirmHub Team" }],
  creator: "PropFirmHub",
  publisher: "PropFirmHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://propfirms-hub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PropFirmHub - Compare Top Prop Trading Firms 2025',
    description: 'Compare the best prop trading firms with exclusive discount codes. FTMO, FunderPro, TradingCult & more. Find the perfect firm for your trading style.',
    url: 'https://propfirms-hub.com',
    siteName: 'PropFirmHub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PropFirmHub - Compare Top Prop Trading Firms',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PropFirmHub - Compare Top Prop Trading Firms 2025',
    description: 'Compare the best prop trading firms with exclusive discount codes. Find the perfect firm for your trading style.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        {children}
      </body>
    </html>
  );
}
