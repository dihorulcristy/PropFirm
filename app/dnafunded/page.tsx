'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, DollarSign, Shield, Zap, Globe, ArrowRight, ChevronDown, Star, Copy } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function DnaFundedPage() {
    const affiliateLink = "https://partners.dnafunded.com/click?campaign_id=1&ref_id=259";
    const [copied, setCopied] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText("DNAFUNDED15");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const features = [
        {
            icon: <Globe className="w-6 h-6 text-emerald-400" />,
            title: "TradeLocker Platform",
            description: "Trade on the cutting-edge TradeLocker platform with advanced charting, fast execution, and intuitive interface."
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
            title: "2-Step Challenge",
            description: "Prove your skills through our structured 2-step evaluation process designed to identify consistent traders."
        },
        {
            icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
            title: "Crypto Payouts",
            description: "Get paid in cryptocurrency for faster, more flexible withdrawals. Traditional payment methods also available."
        },
        {
            icon: <Zap className="w-6 h-6 text-emerald-400" />,
            title: "Trade During News",
            description: "No restrictions on news trading. Capitalize on market volatility during major economic announcements."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Choose Your Account",
            description: "Select from account sizes ranging from $5k to $200k to match your trading style and goals."
        },
        {
            number: "02",
            title: "Pass the Challenge",
            description: "Complete our 2-step evaluation: 10% profit target in Phase 1, 5% in Phase 2 with 10% max drawdown."
        },
        {
            number: "03",
            title: "Get Funded & Trade",
            description: "Start trading with real capital and keep 80% of your profits. Request payouts every 14 days."
        }
    ];

    const rules = [
        { label: "Phase 1 Target", value: "10%", sub: "First challenge" },
        { label: "Phase 2 Target", value: "5%", sub: "Second challenge" },
        { label: "Max Drawdown", value: "10%", sub: "Balance-based" },
        { label: "Profit Split", value: "80%", sub: "You keep" },
    ];

    const reviews = [
        {
            name: "Alex M.",
            rating: 5,
            text: "TradeLocker platform is amazing! Fast execution and the 15% discount made it even better. Passed my challenge in 3 weeks.",
            date: "3 days ago"
        },
        {
            name: "Jordan P.",
            rating: 5,
            text: "Love that I can trade during news. No other restrictions holding me back. Great prop firm for active traders.",
            date: "1 week ago"
        },
        {
            name: "Taylor S.",
            rating: 4,
            text: "Crypto payouts are super convenient. The 2-step challenge is fair and achievable. Support team is responsive.",
            date: "2 weeks ago"
        }
    ];

    const faqs = [
        {
            question: "What platform does DNA Funded use?",
            answer: "DNA Funded uses TradeLocker, a modern trading platform with advanced charting tools, fast execution, and a user-friendly interface perfect for forex trading."
        },
        {
            question: "Is there a time limit to pass the challenge?",
            answer: "No! There's no time limit on the challenge. Take as long as you need to reach the profit targets while managing your risk properly."
        },
        {
            question: "Can I trade during news events?",
            answer: "Yes! DNA Funded allows news trading without restrictions. You're free to trade during major economic announcements and capitalize on market volatility."
        },
        {
            question: "What countries are accepted?",
            answer: "DNA Funded accepts traders from most countries worldwide. However, traders from the United States are currently not accepted due to regulatory restrictions."
        },
        {
            question: "How do payouts work?",
            answer: "You can request payouts every 14 days. DNA Funded offers crypto payouts for faster processing, as well as traditional payment methods. You keep 80% of your profits."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-[#020617] text-slate-50 font-sans selection:bg-emerald-500/30">
            <Header />

            <main className="flex-1 pt-20">
                {/* Discount Banner */}
                <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white py-3 sm:py-4 px-4 text-center relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.4)] z-50 animate-gradient bg-[length:200%_200%] border-b border-white/10">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-3 text-base sm:text-lg font-bold tracking-wide">
                        <div className="drop-shadow-lg flex flex-wrap items-center justify-center gap-x-1.5 leading-relaxed">
                            <span className="animate-bounce">🎉</span>
                            <span>Exclusive Offer: Get</span>
                            <span className="text-white bg-white/20 px-2 py-0.5 rounded-md animate-pulse border border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap text-lg sm:text-xl">15% OFF</span>
                            <span>all account sizes!</span>
                        </div>
                        <div className="flex items-center gap-3 bg-black/30 rounded-xl px-4 py-1.5 backdrop-blur-md border border-white/40 shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer group mt-1 md:mt-0" onClick={copyCode}>
                            <span className="font-mono text-yellow-300 font-black text-lg sm:text-xl tracking-widest drop-shadow-md group-hover:text-white transition-colors">DNAFUNDED15</span>
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
                                📊 Complete DNA Funded Review & Guide
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display">
                                Why Choose <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                                    DNA Funded?
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-4 leading-relaxed">
                                Find everything you need to know about DNA Funded: <span className="text-white font-semibold">detailed information</span>, <span className="text-white font-semibold">trading rules</span>, <span className="text-white font-semibold">exclusive discounts</span>, and <span className="text-white font-semibold">honest reviews</span>.
                            </p>
                            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10">
                                Get funded up to $200,000 • TradeLocker Platform • 80% Profit Split • 15% OFF with code DNAFUNDED15
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href={affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"
                                >
                                    Visit Official Website
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="#features"
                                    className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all backdrop-blur-sm"
                                >
                                    Learn More
                                </a>
                            </div>

                            {/* Affiliate Disclosure */}
                            <p className="text-xs text-slate-500 mt-6 max-w-xl mx-auto">
                                💡 <span className="text-slate-400">Transparency Note:</span> We may earn a commission if you sign up through our link, at no extra cost to you. This helps us keep the site running and provide you with exclusive discounts like the 15% OFF code above.
                            </p>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                        >
                            <span className="text-xl font-bold text-white flex items-center gap-2"><Globe className="w-5 h-5" /> TradeLocker</span>
                            <span className="text-xl font-bold text-white flex items-center gap-2"><Shield className="w-5 h-5" /> 2-Step Challenge</span>
                            <span className="text-xl font-bold text-white flex items-center gap-2"><DollarSign className="w-5 h-5" /> 80% Profit Split</span>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-20 bg-[#03081c]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Why Choose DNA Funded?</h2>
                            <p className="text-slate-400">Modern platform, fair rules, and trader-friendly policies.</p>
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

                {/* Value Proposition - Why This Page Exists */}
                <section className="py-16 bg-gradient-to-b from-[#03081c] to-[#020617]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white/5 border border-emerald-500/20 rounded-2xl p-8 md:p-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">💡</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why We Created This Page</h3>
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            We're passionate about helping traders find the best prop firms. DNA Funded is one of our top recommendations because of their modern TradeLocker platform, fair rules, and transparent policies.
                                        </p>
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            <span className="text-emerald-400 font-semibold">Here's what you get:</span>
                                        </p>
                                        <ul className="space-y-3 mb-6">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300"><span className="font-semibold text-white">15% OFF</span> with code DNAFUNDED15 - exclusive discount negotiated for our community</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300"><span className="font-semibold text-white">Honest reviews</span> - we only recommend firms we've thoroughly researched</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-slate-300"><span className="font-semibold text-white">No extra cost</span> - you pay the same price (or less with our discount)</span>
                                            </li>
                                        </ul>
                                        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                                            <p className="text-sm text-slate-400">
                                                <span className="font-semibold text-emerald-400">Full Transparency:</span> If you sign up through our link, we may earn a small commission from DNA Funded. This doesn't affect your price - in fact, you save 15% with our exclusive code. These commissions help us maintain this website and continue providing valuable comparisons and discounts to traders like you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trading Rules Section */}
                <section className="py-20 relative">
                    <div className="absolute inset-0 bg-emerald-900/5 pointer-events-none" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Challenge Rules</h2>
                            <p className="text-slate-400">Clear and achievable targets for consistent traders.</p>
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

                {/* Reviews */}
                <section className="py-20 bg-[#03081c]">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Star className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                                <span className="text-2xl font-bold text-white">Trustpilot</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">What Traders Say</h2>
                            <p className="text-slate-400">Join thousands of satisfied traders worldwide.</p>
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
                                    Visit DNA Funded's official website and use code <span className="font-bold text-white">DNAFUNDED15</span> for 15% off your challenge.
                                </p>
                                <a
                                    href={affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors transform hover:scale-105"
                                >
                                    Go to DNA Funded →
                                </a>
                                <p className="text-sm text-slate-400 mt-4">
                                    Official DNA Funded website • Secure checkout • 15% discount applied
                                </p>
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
