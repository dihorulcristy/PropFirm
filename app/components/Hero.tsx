'use client';

import { ShieldCheck, Zap, TrendingUp, Star, Trophy, DollarSign, Bot, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 lg:pb-32 xl:pb-36">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 animate-gradient pointer-events-none" />

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h1
                        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Compare Evaluation Programs{' '}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 drop-shadow-[0_0_2px_rgba(52,211,153,0.2)] sm:drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                            Up to $1M Virtual Capital
                        </span>
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg leading-8 text-slate-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        We compare trader evaluation programs and simulated funding opportunities. Find the best prop firm for your trading skills.
                    </motion.p>
                    <motion.p
                        className="mt-2 text-[10px] sm:text-xs text-slate-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        All trading activities are performed in a simulated environment with virtual funds.
                    </motion.p>
                </motion.div>



                {/* Top 3 Cards - Carousel on Mobile, Grid on Desktop */}
                <div className="mt-12 sm:mt-16">
                    {/* Mobile: Horizontal Carousel */}
                    <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 -mx-4 scrollbar-hide">
                        {/* Card 1: Best Overall */}
                        <div className="min-w-[85%] snap-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">
                                    <Trophy className="h-4 w-4" />
                                    Best Overall
                                </div>
                                <h3 className="text-xl font-bold text-white">FTMO</h3>
                                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-300">4.9/5</span>
                                </div>
                                <p className="text-sm text-slate-400">Maximum Safety</p>
                            </div>
                        </div>

                        {/* Card 2: Best Value */}
                        <div className="min-w-[85%] snap-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">
                                    <DollarSign className="h-4 w-4" />
                                    Best Value
                                </div>
                                <h3 className="text-xl font-bold text-white">SpiceProp</h3>
                                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-300">4.8/5</span>
                                </div>
                                <p className="text-sm text-slate-400">From €45</p>
                            </div>
                        </div>

                        {/* Card 3: HFT Allowed */}
                        <div className="min-w-[85%] snap-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">
                                    <Bot className="h-4 w-4" />
                                    HFT Allowed
                                </div>
                                <h3 className="text-xl font-bold text-white">TradingCult</h3>
                                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-300">4.8/5</span>
                                </div>
                                <p className="text-sm text-slate-400">Pass in 1 Step</p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Grid */}
                    <div className="hidden sm:grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5 lg:gap-6 xl:gap-8 max-w-5xl mx-auto">
                        {/* Card 1: Best Overall */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 backdrop-blur-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">
                                    <Trophy className="h-4 w-4" />
                                    Best Overall
                                </div>
                                <h3 className="text-xl font-bold text-white">FTMO</h3>
                                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-300">4.9/5</span>
                                </div>
                                <p className="text-sm text-slate-400">Maximum Safety</p>
                            </div>
                        </div>

                        {/* Card 2: Best Value */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 backdrop-blur-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">
                                    <DollarSign className="h-4 w-4" />
                                    Best Value
                                </div>
                                <h3 className="text-xl font-bold text-white">SpiceProp</h3>
                                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-300">4.8/5</span>
                                </div>
                                <p className="text-sm text-slate-400">From €45</p>
                            </div>
                        </div>

                        {/* Card 3: HFT Allowed */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 backdrop-blur-lg transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2">
                                    <Bot className="h-4 w-4" />
                                    HFT Allowed
                                </div>
                                <h3 className="text-xl font-bold text-white">TradingCult</h3>
                                <div className="flex items-center justify-center gap-1 my-2 text-amber-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <span className="text-sm font-medium text-slate-300">4.8/5</span>
                                </div>
                                <p className="text-sm text-slate-400">Pass in 1 Step</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badge Bar */}
                <div className="mt-12 sm:mt-16 border-t border-white/5 pt-8">
                    <p className="text-center text-xs text-slate-600 uppercase tracking-wider mb-6">Trusted Trading Platforms</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {/* cTrader */}
                        <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                            <img
                                src="/logos/ctrader.png"
                                alt="cTrader"
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-bold text-white">cTrader</span>
                        </div>

                        {/* MetaTrader */}
                        <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                            <img
                                src="/logos/metatrader.png"
                                alt="MetaTrader"
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-bold text-white">MT4/MT5</span>
                        </div>

                        {/* DXtrade */}
                        <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                            <img
                                src="/logos/dxtrade.png"
                                alt="DXtrade"
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-bold text-white">DXtrade</span>
                        </div>

                        {/* Match-Trader */}
                        <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                            <img
                                src="/logos/match-trader.png"
                                alt="Match-Trader"
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-bold text-white">Match-Trader</span>
                        </div>

                        {/* SSL Secure */}
                        <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                            <span className="text-sm font-bold text-white">SSL Secure</span>
                        </div>

                        {/* Trustpilot */}
                        <div className="flex items-center gap-2 opacity-60 hover:opacity-80 transition-opacity">
                            <img
                                src="/logos/trustpilot.svg"
                                alt="Trustpilot"
                                className="h-6 w-6"
                            />
                            <span className="text-sm font-bold text-white">Trustpilot</span>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.button
                    onClick={() => scrollToSection('comparison')}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="h-5 w-5 animate-bounce" />
                </motion.button>
            </div>
        </section>
    );
}



