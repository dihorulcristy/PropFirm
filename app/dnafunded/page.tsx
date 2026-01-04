'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, DollarSign, Clock, Globe, ArrowRight, Gift } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DnaFundedPage() {
    const affiliateLink = "https://partners.dnafunded.com/click?campaign_id=1&ref_id=259";

    const handleClaim = () => {
        window.open(affiliateLink, '_blank', 'noopener,noreferrer');
    };

    const benefits = [
        { icon: <Globe className="w-6 h-6" />, title: "TradeLocker", desc: "Modern trading platform" },
        { icon: <DollarSign className="w-6 h-6" />, title: "80% Profit Split", desc: "Keep your earnings" },
        { icon: <Clock className="w-6 h-6" />, title: "No Time Limit", desc: "Trade at your pace" },
        { icon: <Zap className="w-6 h-6" />, title: "Crypto Payouts", desc: "Fast withdrawals" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-slate-50 font-sans">
            <Header />

            <main className="flex-1 pt-20">
                {/* HERO SECTION - Main offer above the fold */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-12 px-4">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/30 via-[#020617] to-[#020617]" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        {/* Urgency Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-2 mb-8"
                        >
                            <Gift className="w-5 h-5 text-amber-400" />
                            <span className="text-amber-300 font-semibold">LIMITED TIME OFFER</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight"
                        >
                            Get a{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                                FREE 5K Account
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl sm:text-2xl text-slate-300 mb-8"
                        >
                            Spend <span className="font-bold text-white">$150+</span> on any DNA Funded challenge
                            <br />
                            <span className="text-emerald-400 font-semibold">→ Get a FREE 5K Two-Phase account</span>
                        </motion.p>

                        {/* MAIN CTA BUTTON */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            onClick={handleClaim}
                            className="group relative px-12 py-5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-slate-900 font-black text-xl sm:text-2xl rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:shadow-[0_0_60px_rgba(251,191,36,0.6)]"
                        >
                            <span className="flex items-center gap-3">
                                CLAIM YOUR FREE ACCOUNT
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>

                        {/* Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400"
                        >
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                Valid until March 31, 2026
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                Up to 5 free accounts
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="w-4 h-4 text-emerald-500" />
                                Automatic reward
                            </span>
                        </motion.div>
                    </div>
                </section>

                {/* HOW IT WORKS - 3 Simple Steps */}
                <section className="py-16 px-4 bg-slate-900/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-200">
                            How It Works
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { step: "1", title: "Click the Button", desc: "Go to DNA Funded official site" },
                                { step: "2", title: "Buy Any $150+ Plan", desc: "Choose your challenge size" },
                                { step: "3", title: "Get FREE 5K Account", desc: "Automatically added to your account" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center"
                                >
                                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-emerald-500/30">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BENEFITS - Quick cards */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-200">
                            Why Traders Love DNA Funded
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="bg-slate-800/30 border border-slate-700/30 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-colors"
                                >
                                    <div className="w-10 h-10 mx-auto mb-3 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="font-bold text-white text-sm mb-1">{benefit.title}</h3>
                                    <p className="text-slate-500 text-xs">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEO CONTENT SECTION */}
                <section className="py-12 px-4 bg-slate-900/30">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-slate-200">
                            DNA Funded Discount Code & Coupon 2026
                        </h2>
                        <div className="text-slate-400 text-sm sm:text-base leading-relaxed space-y-4">
                            <p>
                                Looking for a <strong className="text-white">DNA Funded discount code</strong>? You've found the best offer available!
                                Instead of a traditional <strong className="text-white">DNA Funded coupon code</strong>, DNA Funded is currently offering
                                something even better: a <span className="text-emerald-400">FREE 5K Two-Phase account</span> with any purchase of $150 or more.
                            </p>
                            <p>
                                This <strong className="text-white">DNA Funded promo code</strong> alternative is valid from January 1, 2026 until March 31, 2026.
                                Unlike typical <strong className="text-white">DNA Funded coupon</strong> offers, this promotion gives you an actual free account
                                worth real trading value, not just a small percentage discount.
                            </p>
                            <p className="text-center">
                                <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 text-emerald-400 font-medium">
                                    ✓ No code needed • Automatic reward • Up to 5 free accounts
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-20 px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 rounded-3xl p-8 sm:p-12">
                            <h2 className="text-2xl sm:text-4xl font-bold mb-4">
                                Don't Miss This Offer
                            </h2>
                            <p className="text-slate-300 mb-8">
                                Get your <span className="text-emerald-400 font-semibold">FREE 5K Two-Phase account</span> with any purchase of $150 or more.
                            </p>

                            <button
                                onClick={handleClaim}
                                className="group px-10 py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-slate-900 font-bold text-lg rounded-xl transform hover:scale-105 transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)]"
                            >
                                <span className="flex items-center gap-2">
                                    GET YOUR FREE ACCOUNT
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <p className="text-xs text-slate-500 mt-6">
                                Offer valid until March 31, 2026 • Official DNA Funded promotion
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* STICKY MOBILE CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent md:hidden z-50">
                <button
                    onClick={handleClaim}
                    className="w-full py-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 text-slate-900 font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                >
                    CLAIM FREE 5K ACCOUNT →
                </button>
            </div>
        </div>
    );
}
