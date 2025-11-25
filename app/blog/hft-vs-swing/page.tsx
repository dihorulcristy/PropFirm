import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HFTvsSwing() {
    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-16 max-w-4xl">
                    {/* Back Button */}
                    <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            HFT vs Swing Trading: Which Strategy Works Best for Prop Firms?
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                            <span>November 25, 2025</span>
                            <span>•</span>
                            <span>PropFirmHub Team</span>
                            <span>•</span>
                            <span>15 min read</span>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-invert prose-emerald max-w-none">
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Choosing the right trading strategy can make or break your prop firm evaluation. High-Frequency Trading (HFT) and Swing Trading represent two completely different approaches - but which one gives you the best chance of success?
                        </p>

                        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-8">
                            <h2 className="text-2xl font-bold text-white mt-0">Coming Soon!</h2>
                            <p className="text-slate-300 mb-0">
                                This comprehensive guide is currently being prepared. It will cover:
                            </p>
                            <ul className="text-slate-300 mt-4 space-y-2">
                                <li>✅ Strategy comparison (HFT vs Swing)</li>
                                <li>✅ Profitability analysis with real examples</li>
                                <li>✅ Prop firm evaluation impact</li>
                                <li>✅ Which firms allow HFT</li>
                                <li>✅ Cost analysis and spread impact</li>
                                <li>✅ Time commitment comparison</li>
                                <li>✅ Risk management profiles</li>
                                <li>✅ Firm recommendations by strategy</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 my-8">
                            <h3 className="text-xl font-bold text-white mt-0">Ready to Get Started?</h3>
                            <p className="text-slate-300 mb-4">
                                While we prepare this detailed guide, explore our comparison table to find the perfect prop firm for your trading style.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                            >
                                Compare Prop Firms →
                            </Link>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
