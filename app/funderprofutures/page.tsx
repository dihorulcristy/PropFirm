'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, DollarSign, Shield, Zap, Globe, ArrowRight, ChevronDown, Star, Copy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function FunderProFuturesPage() {
    const affiliateLink = `/api/analytics/track?dest=${encodeURIComponent("https://dashboard.funderprofutures.com/identity/account/register?aff=hgc")}&firm=${encodeURIComponent("FunderPro Futures")}`;
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText("HGC");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const features = [
        {
            icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
            title: "Keep 100% of First $10k",
            description: "You keep every penny of your first $10,000 in profits. After that, enjoy a generous 90% profit split."
        },
        {
            icon: <Shield className="w-6 h-6 text-emerald-400" />,
            title: "No Daily Drawdown",
            description: "Trade with freedom. We only have an End-of-Day drawdown, giving you more room to breathe during volatile sessions."
        },
        {
            icon: <Zap className="w-6 h-6 text-emerald-400" />,
            title: "Trade During News",
            description: "Don't let restrictions hold you back. Trade through major news events and capitalize on market volatility."
        },
        {
            icon: <Globe className="w-6 h-6 text-emerald-400" />,
            title: "Tradovate & Rithmic",
            description: "Execute your trades on top-tier platforms. Choose between Tradovate or Rithmic for low-latency execution."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Choose Your Account",
            description: "Select the account size that fits your trading style, from $25k up to $200k."
        },
        {
            number: "02",
            title: "Pass the Evaluation",
            description: "Show us your skills. Reach the profit target while managing risk to get funded."
        },
        {
            number: "03",
            title: "Get Funded & Earn",
            description: "Start trading with real capital. Withdraw your profits weekly with fast payouts."
        }
    ];

    const rules = [
        { label: "Profit Target", value: "$3,000", sub: "(For $50k Account)" },
        { label: "Max Drawdown", value: "$2,000", sub: "(End of Day)" },
        { label: "Daily Drawdown", value: "None", sub: "Trade freely" },
        { label: "Minimum Days", value: "5 Days", sub: "To get funded" },
    ];

    const reviews = [
        {
            name: "Michael R.",
            rating: 5,
            text: "Best futures prop firm I've tried. The no daily drawdown rule is a game changer for my strategy.",
            date: "2 days ago"
        },
        {
            name: "Sarah K.",
            rating: 5,
            text: "Payouts are super fast. I requested my withdrawal on Monday and got it by Wednesday. Highly recommend!",
            date: "1 week ago"
        },
        {
            name: "David L.",
            rating: 4,
            text: "Great platforms. Rithmic connection is stable and execution is instant. Support is also very responsive.",
            date: "2 weeks ago"
        }
    ];

    const faqs = [
        {
            question: "What platforms can I use?",
            answer: "FunderPro Futures supports both Tradovate and Rithmic, giving you access to industry-standard tools like NinjaTrader and TradingView."
        },
        {
            question: "Is there a time limit?",
            answer: "No! Take as much time as you need to pass the evaluation. There are no minimum or maximum trading day requirements."
        },
        {
            question: "How do payouts work?",
            answer: "Payouts are processed weekly. You can request your first payout after just 5 trading days."
        },
        {
            question: "Can I hold positions overnight?",
            answer: "For the evaluation phase, positions must be closed before the market close. Funded traders can request overnight holding permissions."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-slate-50 font-sans selection:bg-emerald-500/30">
            <Header />

            <main className="flex-1 pt-20">
                {/* Discount Banner */}
                <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white py-3 sm:py-4 px-4 text-center relative overflow-hidden shadow-[0_0_20px_rgba(245,158,11,0.4)] z-50 animate-gradient bg-[length:200%_200%] border-b border-white/10">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 text-base sm:text-lg font-bold tracking-wide">
                        <div className="drop-shadow-lg flex flex-wrap items-center justify-center gap-x-1.5 leading-relaxed">
                            <span className="animate-bounce">🔥</span>
                            <span>Exclusive Offer: Get</span>
                            <span className="text-white bg-white/20 px-2 py-0.5 rounded-md animate-pulse border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap text-lg sm:text-xl">20% OFF</span>
                            <span>your challenge!</span>
                        </div>
                        <div className="flex items-center gap-3 bg-black/30 rounded-xl px-4 py-1.5 backdrop-blur-md border border-white/40 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer group mt-1 md:mt-0" onClick={copyCode}>
                            <span className="font-mono text-yellow-300 font-black text-lg sm:text-xl tracking-widest drop-shadow-md group-hover:text-white transition-colors">hgc</span>
                            <button
                                className="text-white/80 group-hover:text-white transition-colors"
                                title="Copy Code"
                            >
                                {copied ? <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> : <Copy className="w-5 h-5 sm:w-6 sm:h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#020617] to-[#020617] pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
                                🚀 Launch Your Futures Trading Career
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-display">
                                Trade Futures with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    FunderPro
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Get funded up to <span className="text-white font-semibold">$200,000</span>. Keep 100% of your first $10k profits. No time limits.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href={affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
                                >
                                    Get Funded Now
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#features"
                                    className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all backdrop-blur-sm"
                                >
                                    Learn More
                                </a>
                            </div>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <span className="text-xl font-bold text-white flex items-center gap-2"><Globe className="w-5 h-5" /> Tradovate</span>
                            <span className="text-xl font-bold text-white flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Rithmic</span>
                            <span className="text-xl font-bold text-white flex items-center gap-2"><Shield className="w-5 h-5" /> NinjaTrader</span>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-20 bg-[#03081c]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Why Choose FunderPro Futures?</h2>
                            <p className="text-slate-400">Built for traders, by traders. Experience the difference.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trading Rules Section */}
                <section className="py-20 relative">
                    <div className="absolute inset-0 bg-emerald-900/5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Simple Trading Rules</h2>
                            <p className="text-slate-400">Clear objectives to help you succeed.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {rules.map((rule, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-[#020617] border border-emerald-500/20 p-6 rounded-2xl text-center hover:border-emerald-500/50 transition-colors shadow-lg shadow-emerald-900/10"
                                >
                                    <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">{rule.label}</p>
                                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">{rule.value}</p>
                                    <p className="text-xs text-emerald-500">{rule.sub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Your Path to Funding</h2>
                            <p className="text-slate-400">Three simple steps to become a professional funded trader.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />

                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative text-center"
                                >
                                    <div className="w-24 h-24 mx-auto bg-[#020617] border-4 border-emerald-500/20 rounded-full flex items-center justify-center text-3xl font-bold text-emerald-500 mb-6 relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                                    <p className="text-slate-400">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trustpilot Reviews */}
                <section className="py-20 bg-[#03081c]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Star className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                                <span className="text-2xl font-bold text-white">Trustpilot</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Traders Say</h2>
                            <p className="text-slate-400">Rated Excellent by traders worldwide.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 p-8 rounded-2xl border border-white/5 relative"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-emerald-400 fill-emerald-400" : "text-slate-600"}`} />
                                        ))}
                                    </div>
                                    <p className="text-slate-300 mb-6 leading-relaxed">"{review.text}"</p>
                                    <div className="flex justify-between items-end">
                                        <span className="font-bold text-white">{review.name}</span>
                                        <span className="text-xs text-slate-500">{review.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-white/10 p-12 text-center">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Start Trading?</h2>
                                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                    Join thousands of traders who have already secured their funding with FunderPro.
                                </p>
                                <a
                                    href={affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors transform hover:scale-105"
                                >
                                    Start Your Challenge
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-[#03081c]">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Frequently Asked Questions</h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/5 border border-white/5 rounded-xl overflow-hidden"
                                >
                                    <details className="group">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                            <span className="font-semibold text-lg text-white">{faq.question}</span>
                                            <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
