import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import DealOfTheWeek from './components/DealOfTheWeek';
import BlogSection from './components/BlogSection';
import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://propfirmhub.com/#organization",
        "name": "PropFirmHub",
        "url": "https://propfirmhub.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://propfirmhub.com/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "description": "Compare the best prop trading firms with exclusive discount codes. Find FTMO, FunderPro, TradingCult and more.",
        "foundingDate": "2025",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://propfirmhub.com/#website",
        "name": "PropFirmHub",
        "url": "https://propfirmhub.com",
        "description": "Compare top prop trading firms of 2025. Find exclusive discounts, compare evaluation rules, and choose the perfect firm for your trading style.",
        "publisher": {
          "@id": "https://propfirmhub.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://propfirmhub.com/?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://propfirmhub.com/#webpage",
        "url": "https://propfirmhub.com",
        "name": "PropFirmHub - Compare Top Prop Trading Firms 2025",
        "description": "Compare the best prop trading firms of 2025. Find exclusive discount codes, compare evaluation rules, pricing, and payout speeds.",
        "isPartOf": {
          "@id": "https://propfirmhub.com/#website"
        },
        "about": {
          "@id": "https://propfirmhub.com/#organization"
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
            "item": "https://propfirmhub.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Compare Firms",
            "item": "https://propfirmhub.com/#comparison"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Blog",
            "item": "https://propfirmhub.com/#blog"
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
      <Header />
      <main className="flex-1">
        <div id="hero">
          <Hero />
        </div>
        <DealOfTheWeek />
        <div id="comparison">
          <ComparisonTable />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="blog">
          <BlogSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
