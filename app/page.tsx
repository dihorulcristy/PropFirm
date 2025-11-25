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
        "name": "PropFirmHub",
        "url": "https://propfirmhub.com",
        "logo": "https://propfirmhub.com/og-image.jpg",
        "description": "Compare the best prop trading firms with exclusive discount codes",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "name": "PropFirmHub",
        "url": "https://propfirmhub.com",
        "description": "Compare top prop trading firms of 2025",
        "publisher": {
          "@type": "Organization",
          "name": "PropFirmHub"
        }
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
