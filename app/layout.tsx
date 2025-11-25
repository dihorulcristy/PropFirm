import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GDPRBanner from "./components/GDPRBanner";

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
  metadataBase: new URL('https://propfirmhub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PropFirmHub - Compare Top Prop Trading Firms 2025',
    description: 'Compare the best prop trading firms with exclusive discount codes. FTMO, FunderPro, TradingCult & more. Find the perfect firm for your trading style.',
    url: 'https://propfirmhub.com',
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
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-slate-950 text-white`}
      >
        {children}
        <GDPRBanner />
      </body>
    </html>
  );
}
