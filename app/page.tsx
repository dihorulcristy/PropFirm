'use client';

import { useEffect } from 'react';
import GDPRBanner from './components/GDPRBanner';
import EmailCapturePopup from './components/EmailCapturePopup';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import DealOfTheWeek from './components/DealOfTheWeek';
import BlogSection from './components/BlogSection';
import TelegramAnnouncement from './components/TelegramAnnouncement';
import Script from 'next/script';

export default function Home() {
  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # and get the section id
      const sectionId = hash.substring(1);
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://propfirms-hub.com/#organization",
        "name": "PropFirmHub",
        "url": "https://propfirms-hub.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://propfirms-hub.com/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "description": "Compare the best prop trading firms with exclusive discount codes. Find FTMO, FunderPro, TradingCult and more.",
        "foundingDate": "2025",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://propfirms-hub.com/#website",
        "name": "PropFirmHub",
        "url": "https://propfirms-hub.com",
        "description": "Compare top prop trading firms of 2025. Find exclusive discounts, compare evaluation rules, and choose the perfect firm for your trading style.",
        "publisher": {
          "@id": "https://propfirms-hub.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://propfirms-hub.com/?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://propfirms-hub.com/#webpage",
        "url": "https://propfirms-hub.com",
        "name": "PropFirmHub - Compare Top Prop Trading Firms 2025",
        "description": "Compare the best prop trading firms of 2025. Find exclusive discount codes, compare evaluation rules, pricing, and payout speeds.",
        "isPartOf": {
          "@id": "https://propfirms-hub.com/#website"
        },
        "about": {
          "@id": "https://propfirms-hub.com/#organization"
        },
        "datePublished": "2025-11-25",
        "dateModified": "2025-11-25"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a prop trading firm?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A prop trading firm (proprietary trading firm) provides traders with capital to trade financial markets. Traders keep a percentage of profits (typically 70-90%) while the firm provides the funding, risk management, and infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get funded by a prop firm?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To get funded, you must pass an evaluation challenge where you demonstrate consistent profitability while following specific rules (profit targets, drawdown limits, etc.). Once you pass, you receive a funded account to trade."
            }
          },
          {
            "@type": "Question",
            "name": "Which prop firm is the best?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best prop firm depends on your trading style. FTMO is best for safety and reputation, FunderPro offers great discounts, and TradingCult allows HFT/scalping. Compare firms based on your needs."
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
            "name": "Compare Firms",
            "item": "https://propfirms-hub.com/#comparison"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Blog",
            "item": "https://propfirms-hub.com/#blog"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header lang="en" />
      <TelegramAnnouncement lang="en" />
      <main className="flex-1">
        <div id="hero">
          <Hero lang="en" />
        </div>
        <DealOfTheWeek lang="en" />
        <div id="comparison">
          <ComparisonTable lang="en" />
        </div>
        <div id="faq">
          <FAQ lang="en" />
        </div>
        <div id="blog">
          <BlogSection lang="en" />
        </div>
      </main>
      <Footer lang="en" />
      <EmailCapturePopup delay={3000} />
      <GDPRBanner />
    </div>
  );
}
