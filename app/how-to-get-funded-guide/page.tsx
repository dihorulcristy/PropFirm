'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Search, TrendingUp, DollarSign, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HowToGetFundedGuide() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<'cheapest' | 'no-time-limit' | 'instant'>('cheapest');

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const scrollToTable = () => {
        const element = document.getElementById('top-picks');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const topPicks: { [key: string]: any[] } = {
        cheapest: [
            {
                name: 'FundingPips',
                logo: 'https://logo.clearbit.com/fundingpips.com',
                rating: 4.8,
                price: '$399',
                advantage: 'Most Affordable',
                link: 'https://app.fundingpips.com/register?ref=b5420489',
                coupon: 'b5420489',
                offer: '20% OFF'
            },
            {
                name: 'FTMO',
                logo: 'https://logo.clearbit.com/ftmo.com',
                rating: 4.9,
                price: '$482',
                advantage: 'Most Trusted Brand',
                link: 'https://trader.ftmo.com/?affiliates=4354',
                coupon: '',
                offer: '19% OFF (100k)'
            },
            {
                name: 'Blue Guardian',
                logo: 'https://unavatar.io/twitter/BlueGuardianCom',
                rating: 4.7,
                price: '$497',
                advantage: 'Great Value',
                link: 'https://blueguardian.com/?afmc=1scz',
                coupon: '1scz',
                offer: '50% OFF (All)'
            }
        ],
        'no-time-limit': [
            {
                name: 'TradingCult',
                logo: 'https://logo.clearbit.com/tradingcult.com',
                rating: 4.8,
                price: '$499',
                advantage: 'No Time Limit + Instant Funding',
                link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
                coupon: 'TC30',
                offer: '30% OFF (All)'
            },
            {
                name: 'FundedX',
                logo: '/logos/fundedx.jpg',
                rating: 4.7,
                price: '$500',
                advantage: 'Unlimited Time',
                link: 'https://prop.fundedx.com/buy-challenge/?referral=d79822dc',
                coupon: 'BF30',
                offer: '30% OFF'
            },
            {
                name: 'FTMO',
                logo: 'https://logo.clearbit.com/ftmo.com',
                rating: 4.9,
                price: '$482',
                advantage: 'Most Trusted',
                link: 'https://trader.ftmo.com/?affiliates=4354',
                coupon: '',
                offer: '19% OFF (100k)'
            }
        ],
        instant: [
            {
                name: 'TradingCult',
                logo: 'https://logo.clearbit.com/tradingcult.com',
                rating: 4.8,
                price: '$499',
                advantage: 'Instant Funding Available',
                link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
                coupon: 'TC30',
                offer: '30% OFF (All)'
            },
            {
                name: 'The Concept Trading',
                logo: 'https://logo.clearbit.com/theconcepttrading.com',
                rating: 4.8,
                price: '$997',
                advantage: 'Express Path',
                link: 'https://theconcepttrading.com/ref/1837/',
                coupon: 'SPECIAL_INSTANT20',
                offer: '20% OFF (Instant)'
            },
            {
                name: 'FunderPro',
                logo: 'https://logo.clearbit.com/funderpro.com',
                rating: 4.8,
                price: '$549',
                advantage: 'Quick Access',
                link: 'https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro',
                coupon: 'hgc',
                offer: '30% OFF'
            }
        ]
    };

    const faqs = [
        {
            question: 'Do I actually receive real money?',
            answer: 'Yes! Once you pass the evaluation and become a funded trader, you receive real profit splits (typically 70-90%) that are paid directly to your bank account or crypto wallet. The firms make money from the evaluation fees and from keeping their share of your profits.'
        },
        {
            question: 'How much does it cost to start?',
            answer: 'Prices vary by firm and account size. For a $100,000 account, fees typically range from $450 to $600. Smaller accounts ($10k-$50k) can start as low as $49-$250. Many firms offer refunds when you pass the evaluation.'
        },
        {
            question: 'Can I trade Crypto or during News events?',
            answer: 'Trading rules vary by firm. Some allow crypto trading and news trading, while others have restrictions. Always check the specific rules of each firm before purchasing an evaluation. Our comparison table highlights which firms allow these trading styles.'
        },
        {
            question: 'What happens if I fail the evaluation?',
            answer: 'If you fail the evaluation, you can purchase a new challenge or sometimes get a discounted retry. The evaluation fee is the firm\'s revenue model. That\'s why choosing a firm with fair rules and good spreads is crucial for your success.'
        },
        {
            question: 'How long does it take to get funded?',
            answer: 'It depends on your trading style and the firm\'s rules. Some traders pass in 2-3 weeks with aggressive trading, while conservative traders may take 2-3 months. Firms with "instant funding" options can get you live immediately, but you still need to prove consistency.'
        }
    ];

    return (
        <>
            <Header />

            {/* Schema.org Structured Data for SEO */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "How to Become a Funded Trader in 2025",
                        "description": "Complete guide on how to become a funded trader. Learn the steps to get a funded forex account and discover funding for forex traders.",
                        "author": {
                            "@type": "Organization",
                            "name": "PropFirmHub"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "PropFirmHub",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://propfirmhub.com/logo.png"
                            }
                        },
                        "datePublished": "2025-01-01",
                        "dateModified": new Date().toISOString().split('T')[0]
                    })
                }}
            />

            <main className="bg-black text-white">
                {/* Hero Section */}
                <section className="relative overflow-hidden border-b border-slate-800">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-black to-black" />

                    <div className="container mx-auto px-4 py-20 md:py-32 relative">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Text Content */}
                            <div>
                                <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                                    <span className="text-emerald-400 text-sm font-medium">Community of 10,000+ Traders</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                    How to Become a <span className="text-emerald-400">Funded Trader</span> in 2025
                                </h1>

                                <p className="text-xl text-slate-300 mb-4">
                                    Complete Guide: Get Funded Forex Account Steps & Funding for Forex Traders
                                </p>

                                <p className="text-lg text-slate-400 mb-8">
                                    Learn the exact steps to get a funded forex account and access funding for forex traders without risking your own capital. Start with up to $100,000 in trading capital.
                                </p>

                                <button
                                    onClick={scrollToTable}
                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                                >
                                    Jump to Recommended Firms
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Right: Roadmap Visual */}
                            <div className="relative">
                                <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl">
                                    <h3 className="text-xl font-bold mb-8 text-center text-slate-200">Your Journey to Funding</h3>

                                    <div className="space-y-6">
                                        {/* Step 1 */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center">
                                                <span className="text-emerald-400 font-bold">1</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white font-semibold">Start Here</div>
                                                <div className="text-sm text-slate-400">Choose the right firm</div>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="pl-6">
                                            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-emerald-500/20" />
                                        </div>

                                        {/* Step 2 */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center">
                                                <span className="text-emerald-400 font-bold">2</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white font-semibold">Pass Evaluation</div>
                                                <div className="text-sm text-slate-400">Prove your skills</div>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="pl-6">
                                            <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-500 to-emerald-500/20" />
                                        </div>

                                        {/* Step 3 */}
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                                                <DollarSign className="h-6 w-6 text-black" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-emerald-400 font-bold text-lg">Get Funded!</div>
                                                <div className="text-sm text-slate-300">Earn up to 90% profit split</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The 3 Steps Educational Section */}
                <section className="py-20 bg-gradient-to-b from-black to-slate-950">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Get Funded Forex Account Steps:<br />
                                <span className="text-emerald-400">How to Become a Funded Trader</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Step 1 Card */}
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <Search className="h-8 w-8 text-emerald-400" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">Step 1: Choose the Firm</h3>
                                <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                                    <span className="text-red-400 text-sm font-semibold">CRITICAL</span>
                                </div>

                                <p className="text-slate-300 leading-relaxed">
                                    Not all firms pay out. You need to choose a <strong className="text-white">verified firm</strong> with transparent rules and tight spreads. A wrong choice here means wasted money and time.
                                </p>
                            </div>

                            {/* Step 2 Card */}
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <TrendingUp className="h-8 w-8 text-emerald-400" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">Step 2: Pass the Challenge</h3>
                                <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                                    <span className="text-amber-400 text-sm font-semibold">THE TEST</span>
                                </div>

                                <p className="text-slate-300 leading-relaxed">
                                    Demonstrate you can make 8-10% profit without exceeding the drawdown limit. This is the <strong className="text-white">test of discipline</strong>, not just skill. Stick to your strategy.
                                </p>
                            </div>

                            {/* Step 3 Card */}
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-emerald-500/50 transition-all">
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <DollarSign className="h-8 w-8 text-emerald-400" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4">Step 3: Get Funded & Paid</h3>
                                <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                                    <span className="text-emerald-400 text-sm font-semibold">PROFIT TIME</span>
                                </div>

                                <p className="text-slate-300 leading-relaxed">
                                    Once funded, you keep <strong className="text-white">up to 90% of profits</strong>. Money is wired directly to your bank account or crypto wallet. Scale up to millions in buying power.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bridge Section */}
                <section className="py-16 bg-slate-950">
                    <div className="container mx-auto px-4 text-center max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Finding the Right Funding for Forex Traders:<br />
                            <span className="text-emerald-400">Where to Apply for Funded Accounts</span>
                        </h2>

                        <p className="text-lg text-slate-300 leading-relaxed">
                            We've analyzed over <strong className="text-white">50+ prop firms</strong> offering funding for forex traders. Most have hidden rules and poor execution.
                            We've selected only the <strong className="text-emerald-400">top verified firms</strong> where you can successfully get a funded forex account with transparent conditions.
                        </p>
                    </div>
                </section>

                {/* Top Picks Table Section */}
                <section id="top-picks" className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <button
                                onClick={() => setActiveFilter('cheapest')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'cheapest'
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                💰 Cheapest
                            </button>
                            <button
                                onClick={() => setActiveFilter('no-time-limit')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'no-time-limit'
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                ⏰ No Time Limit
                            </button>
                            <button
                                onClick={() => setActiveFilter('instant')}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === 'instant'
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                            >
                                ⚡ Instant Funding
                            </button>
                        </div>

                        {/* Desktop Table (Hidden on Mobile) */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full border border-slate-800 rounded-xl overflow-hidden">
                                <thead className="bg-slate-900">
                                    <tr>
                                        <th className="text-left p-4 text-slate-300 font-semibold">Firm</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">Rating</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">Price (100k)</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">Unique Advantage</th>
                                        <th className="text-left p-4 text-slate-300 font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-slate-950">
                                    {topPicks[activeFilter].map((firm, index) => (
                                        <tr key={index} className="border-t border-slate-800 hover:bg-slate-900/50 transition-colors">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                                        <span className="text-xs font-bold text-slate-800">{firm.name.substring(0, 2)}</span>
                                                    </div>
                                                    <span className="font-semibold text-white">{firm.name}</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-yellow-400">⭐</span>
                                                    <span className="text-white font-semibold">{firm.rating}</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="text-white font-semibold">{firm.price}</span>
                                            </td>
                                            <td className="p-4">
                                                <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                                                    {firm.advantage}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <Link
                                                    href={firm.link}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                                                >
                                                    Visit Site
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards (Shown on Mobile Only) */}
                        <div className="md:hidden space-y-4">
                            {topPicks[activeFilter].map((firm, index) => (
                                <div key={index} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
                                    {/* Firm Name & Rating */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                                                <span className="text-xs font-bold text-slate-800">{firm.name.substring(0, 2)}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg">{firm.name}</h3>
                                                <div className="flex items-center gap-1 mt-1">
                                                    <span className="text-yellow-400">⭐</span>
                                                    <span className="text-slate-300 text-sm font-semibold">{firm.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price & Advantage */}
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center justify-between py-2 border-b border-slate-800">
                                            <span className="text-slate-400 text-sm">Price (100k):</span>
                                            <span className="text-white font-bold text-lg">{firm.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-sm">Advantage:</span>
                                            <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium">
                                                {firm.advantage}
                                            </span>
                                        </div>
                                        {firm.offer && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-slate-400 text-sm">Active Offer:</span>
                                                <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-medium">
                                                    {firm.offer}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={firm.link}
                                        target="_blank"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold transition-all"
                                    >
                                        Visit Site
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* CTA Below Table */}
                        <div className="text-center mt-8">
                            <Link
                                href="/#comparison"
                                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-lg transition-colors"
                            >
                                See the full comparison table with 20+ firms
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-slate-950">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                                    >
                                        <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                                        {openFaq === index ? (
                                            <ChevronUp className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                                        )}
                                    </button>

                                    {openFaq === index && (
                                        <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-20 bg-gradient-to-b from-black to-slate-950">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to <span className="text-emerald-400">Scale Your Trading</span>?
                        </h2>

                        <Link
                            href="/#comparison"
                            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20"
                        >
                            Find My Perfect Firm
                            <ArrowRight className="h-6 w-6" />
                        </Link>

                        <p className="text-slate-400 text-sm mt-8 max-w-2xl mx-auto">
                            <strong>Disclaimer:</strong> Trading involves significant risks and is not suitable for all investors.
                            This is an informational guide only. All prop firm accounts are demo/simulated environments.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
