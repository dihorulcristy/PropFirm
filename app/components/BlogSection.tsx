import Link from 'next/link';
import { TrendingUp, FileText, DollarSign } from 'lucide-react';

export default function BlogSection() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                    {/* Card 1: HFT vs Swing */}
                    <Link href="/blog/hft-vs-swing" className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer">
                        <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                            <TrendingUp className="h-12 w-12 text-emerald-500 relative z-10" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">HFT vs Swing</h3>
                            <p className="mt-2 text-sm text-slate-400">
                                We compare and test innovation. HFT vs Swing and the impact on profitability.
                            </p>
                        </div>
                    </Link>

                    {/* Card 2: Taxes 2025 */}
                    <Link href="/blog/taxes-2025" className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer">
                        <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
                            <FileText className="h-12 w-12 text-slate-300 relative z-10" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Taxes 2025</h3>
                            <p className="mt-2 text-sm text-slate-400">
                                Compare taxes and fees for 2025. Complete guide for traders.
                            </p>
                        </div>
                    </Link>

                    {/* Card 3: Top Payouts */}
                    <Link href="/blog/top-payouts" className="group relative overflow-hidden rounded-2xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer">
                        <div className="aspect-video w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-emerald-900/20 opacity-20 mix-blend-overlay"></div>
                            <DollarSign className="h-12 w-12 text-emerald-400 relative z-10" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Top Payouts</h3>
                            <p className="mt-2 text-sm text-slate-400">
                                Top 10 payouts processed last month. See who pays the fastest.
                            </p>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
