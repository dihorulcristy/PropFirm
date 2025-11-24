import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import DealOfTheWeek from './components/DealOfTheWeek';
import BlogSection from './components/BlogSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <DealOfTheWeek />
        <ComparisonTable />
        <FAQ />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
