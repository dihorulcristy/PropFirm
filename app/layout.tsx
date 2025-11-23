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
  title: "PropFirmHub - Compare the Best Proprietary Trading Firms",
  description: "Find and compare the best prop trading firms. Discover exclusive deals, accurate reviews, and make informed decisions.",
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
