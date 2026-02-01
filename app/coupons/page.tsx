'use client';

import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, Zap, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Firm interface for deals page
interface DealFirm {
    id: number;
    name: string;
    logoUrl: string;
    discount: string;
    coupon: string;
    offer: string;
    link: string;
    verified: boolean;
    priority: number; // For sorting (lower = higher priority)
    hasActiveCoupon: boolean;
}

// All firms with deals - ordered by priority
const allDeals: DealFirm[] = [
    {
        id: 1,
        name: 'FTMO',
        logoUrl: '/logos/ftmo.png',
        discount: '20% OFF',
        coupon: 'No Code Used',
        offer: '20% OFF (New Year Sale)',
        link: 'https://trader.ftmo.com/?affiliates=4354',
        verified: true,
        priority: 1,
        hasActiveCoupon: true
    },
    {
        id: 6,
        name: 'FunderPro',
        logoUrl: '/logos/funderpro.png',
        discount: '20% OFF',
        coupon: 'hgc',
        offer: '20% OFF',
        link: 'https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro',
        verified: true,
        priority: 2,
        hasActiveCoupon: true
    },
    {
        id: 5,
        name: 'FundingPips',
        logoUrl: '/logos/fundingpips.png',
        discount: '5% OFF',
        coupon: 'b5420489',
        offer: '5% OFF',
        link: 'https://app.fundingpips.com/register?ref=b5420489',
        verified: true,
        priority: 3,
        hasActiveCoupon: true
    },
    {
        id: 2,
        name: 'TradingCult',
        logoUrl: '/logos/tradingcult.png',
        discount: '40% OFF + Free Account',
        coupon: 'NEWYEAR',
        offer: '40% OFF + Free Account on Payout',
        link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
        verified: true,
        priority: 4,
        hasActiveCoupon: true
    },
    {
        id: 4,
        name: 'FundedNext',
        logoUrl: '/logos/fundednext.png',
        discount: '5% OFF',
        coupon: 'REFER7DVQ',
        offer: '5% OFF',
        link: 'https://fundednext.com/',
        verified: true,
        priority: 6,
        hasActiveCoupon: true
    },
    {
        id: 7,
        name: 'The Concept Trading',
        logoUrl: 'https://logo.clearbit.com/theconcepttrading.com',
        discount: '35% OFF',
        coupon: 'RESOLVE35',
        offer: '35% OFF (Ex-Instant)',
        link: 'https://theconcepttrading.com/ref/1837/',
        verified: true,
        priority: 7,
        hasActiveCoupon: true
    },

    {
        id: 9,
        name: 'Dominion Funding',
        logoUrl: '/logos/dominion-funding.png',
        discount: '5% OFF',
        coupon: 'PROPHUB',
        offer: '5% OFF',
        link: 'https://dominionfunding.trade//?affId=06bqracaI4',
        verified: true,
        priority: 9,
        hasActiveCoupon: true
    },
    {
        id: 10,
        name: 'FunderPro Futures',
        logoUrl: '/logos/funderpro-futures.png',
        discount: '10% OFF',
        coupon: 'HGC',
        offer: '10% OFF',
        link: 'https://checkout.funderprofutures.com/products?aff=hgc',
        verified: true,
        priority: 10,
        hasActiveCoupon: true
    },
    {
        id: 11,
        name: 'Funded Futures Network',
        logoUrl: '/logos/funded-futures-network.png',
        discount: '50% OFF',
        coupon: 'T2ISFNWP',
        offer: '50% OFF',
        link: 'https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian',
        verified: true,
        priority: 11,
        hasActiveCoupon: true
    },

    {
        id: 15,
        name: 'InstantFunding',
        logoUrl: '/logos/instantfunding.png',
        discount: '10% OFF',
        coupon: 'AFF011I4E8CIH8',
        offer: '10% OFF',
        link: 'https://instantfunding.com/?partner=419',
        verified: true,
        priority: 15,
        hasActiveCoupon: true
    },

    {
        id: 22,
        name: 'DnaFunded',
        logoUrl: '/logos/dnafunded.png',
        discount: '15% OFF',
        coupon: 'DNAFUNDED15',
        offer: '15% OFF (All)',
        link: 'https://partners.dnafunded.com/click?campaign_id=1&ref_id=259',
        verified: true,
        priority: 2,
        hasActiveCoupon: true
    },
    {
        id: 23,
        name: 'SpiceProp',
        logoUrl: '/logos/spiceprop.png',
        discount: '10% OFF + 5% Profit',
        coupon: 'SANTANEXT',
        offer: '10% OFF + 5% Extra Profit Split + Free Reset',
        link: 'https://my.spiceprop.com/agent_pp.html?agent_pp=28203897',
        verified: true,
        priority: 1,
        hasActiveCoupon: true
    },
    {
        id: 24,
        name: 'QTFunded',
        logoUrl: '/logos/qtfunded.png',
        discount: '40% OFF + FREE Account',
        coupon: 'QTINSTANT40',
        offer: '40% OFF + FREE QT Instant',
        link: 'https://qtfunded.quanttekel.com/ref/5570/',
        verified: true,
        priority: 3,
        hasActiveCoupon: true
    },
];

export default function CouponsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedId, setCopiedId] = useState<number | null>(null);

    // Filter deals based on search
    const filteredDeals = useMemo(() => {
        if (!searchQuery) return allDeals;

        return allDeals.filter(deal =>
            deal.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Copy to clipboard and open link
    const handleCopyAndRedirect = (deal: DealFirm) => {
        if (deal.hasActiveCoupon) {
            // Copy coupon code to clipboard
            navigator.clipboard.writeText(deal.coupon);
            setCopiedId(deal.id);
            setTimeout(() => setCopiedId(null), 3000);
        }

        // Open affiliate link in new tab
        window.open(deal.link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header />
            <main className="flex-1">
                <div className="min-h-screen bg-black">
                    {/* Hero Section */}
                    <section className="relative py-20 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="container mx-auto px-4 relative z-10">
                            {/* Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center font-display uppercase tracking-tight">
                                Best Prop Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Discount Codes</span>
                            </h1>
                            <p className="text-xl text-slate-400 text-center mb-2">
                                <span className="text-emerald-400 font-semibold">Active Today</span> · We negotiate directly with firms to offer you exclusive discounts
                            </p>
                            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-12" />

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto mb-8">
                                <div className="relative">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder="Search for your firm here..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Content: Deals Grid + Flash Sales */}
                    <section className="pb-20">
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Flash Sales Sidebar - First on mobile */}
                                <div className="lg:col-span-1 order-first lg:order-last">
                                    <FlashSalesSection />
                                </div>

                                {/* Deals Grid - Second on mobile */}
                                <div className="lg:col-span-2 order-last lg:order-first">
                                    <div className="grid gap-6">
                                        {filteredDeals.map((deal) => (
                                            <DealCard
                                                key={deal.id}
                                                deal={deal}
                                                isCopied={copiedId === deal.id}
                                                onCopyAndRedirect={handleCopyAndRedirect}
                                            />
                                        ))}
                                    </div>

                                    {filteredDeals.length === 0 && (
                                        <div className="text-center py-20">
                                            <p className="text-slate-400 text-xl">No firms found with this name.</p>
                                            <button
                                                onClick={() => setSearchQuery('')}
                                                className="mt-4 text-emerald-400 hover:text-emerald-300 underline"
                                            >
                                                Reset search
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

// Deal Card Component
interface DealCardProps {
    deal: DealFirm;
    isCopied: boolean;
    onCopyAndRedirect: (deal: DealFirm) => void;
}

function DealCard({ deal, isCopied, onCopyAndRedirect }: DealCardProps) {
    return (
        <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
            {/* Verified Badge */}
            {deal.verified && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 sm:gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-1 sm:px-3 sm:py-1.5">
                    <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                    <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">Verified</span>
                </div>
            )}

            <div className="flex items-start gap-3 sm:gap-6">
                {/* Logo */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 bg-white/10 rounded-xl p-2 sm:p-3 border border-white/10 group-hover:border-white/20 transition-all">
                    <img
                        src={deal.logoUrl}
                        alt={`${deal.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23334155" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="24" fill="%23cbd5e1"%3E' + deal.name[0] + '%3C/text%3E%3C/svg%3E';
                        }}
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Firm Name */}
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 pr-16 sm:pr-0">{deal.name}</h3>

                    {/* Discount Badge */}
                    <div className="inline-block mb-2 sm:mb-4">
                        <div className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-pulse">
                            {deal.discount}
                        </div>
                    </div>

                    {/* Coupon Code or Free Trial */}
                    {deal.hasActiveCoupon ? (
                        <div className="mb-3 sm:mb-4">
                            <p className="text-xs sm:text-sm text-slate-400 mb-1 sm:mb-2">Coupon Code:</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                <div className="bg-black/40 border border-white/20 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-white font-mono text-sm sm:text-lg tracking-wider">
                                    {deal.coupon.slice(0, 4)}****
                                </div>
                                <div className="text-[10px] sm:text-xs text-slate-500">
                                    (click button for full code)
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-3 sm:mb-4">
                            <p className="text-slate-300 text-xs sm:text-sm">
                                No active codes at the moment, but you get a <span className="text-emerald-400 font-semibold">Free Trial</span>
                            </p>
                        </div>
                    )}

                    {/* CTA Button */}
                    <button
                        onClick={() => onCopyAndRedirect(deal)}
                        className="group/btn relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 overflow-hidden text-xs sm:text-base w-full sm:w-auto justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />

                        {isCopied ? (
                            <>
                                <Check className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                                <span className="relative z-10">Copied! Redirecting...</span>
                            </>
                        ) : deal.hasActiveCoupon ? (
                            <>
                                <Copy className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                                <span className="relative z-10">Show Code & Copy</span>
                            </>
                        ) : (
                            <>
                                <Zap className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                                <span className="relative z-10">Activate Free Trial</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Flash Sales Section Component
function FlashSalesSection() {
    return (
        <div className="sticky top-6">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Zap className="h-6 w-6 text-orange-400 animate-pulse" />
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Flash Sales</h3>
                </div>

                <div className="space-y-4">
                    {/* Flash Sale - Funded Futures Network */}
                    <div className="bg-gradient-to-br from-yellow-900/60 to-yellow-950/60 border border-yellow-500/30 rounded-xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                            <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5 animate-pulse" />
                            <div>
                                <p className="text-sm font-bold text-yellow-400 mb-1">🎁 BOGO + NO ACTIVATION FEE!</p>
                                <p className="text-white font-semibold">Funded Futures Network</p>
                                <p className="text-sm text-slate-300">50% OFF + BOGO with code <span className="text-yellow-400 font-mono">NEWYEAR50</span></p>
                            </div>
                        </div>
                        <Link
                            href="https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian"
                            target="_blank"
                            className="text-xs text-yellow-400 hover:text-yellow-300 font-medium underline"
                        >
                            Get 50% OFF + BOGO →
                        </Link>
                    </div>

                    {/* Flash Sale 1 - FTMO New Year Sale */}
                    <div className="bg-gradient-to-br from-emerald-900/60 to-emerald-950/60 border border-emerald-500/30 rounded-xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                            <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-emerald-400 mb-1">🔥 Kickstart 2026!</p>
                                <p className="text-white font-semibold">FTMO - New Year Sale</p>
                                <p className="text-sm text-slate-300">20% OFF all challenges <span className="text-emerald-400 font-mono">(Discount on Link)</span></p>
                            </div>
                        </div>
                        <Link
                            href="https://trader.ftmo.com/?affiliates=4354"
                            target="_blank"
                            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline"
                        >
                            Claim 20% OFF →
                        </Link>
                    </div>

                    {/* Flash Sale - SpiceProp FREE RESET */}
                    <div className="bg-gradient-to-br from-red-900/60 to-red-950/60 border border-red-500/30 rounded-xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                            <Zap className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5 animate-pulse" />
                            <div>
                                <p className="text-sm font-bold text-red-400 mb-1">🌶️ FREE RESET!</p>
                                <p className="text-white font-semibold">SpiceProp</p>
                                <p className="text-sm text-slate-300">Free Reset + 10% OFF with code <span className="text-red-400 font-mono">SANTARESET</span></p>
                            </div>
                        </div>
                        <Link
                            href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897"
                            target="_blank"
                            className="text-xs text-red-400 hover:text-red-300 font-medium underline"
                        >
                            Get Free Reset →
                        </Link>
                    </div>

                    {/* Flash Sale 2 - FundedNext */}
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                            <Clock className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-red-400 mb-1">🔥 New Offer!</p>
                                <p className="text-white font-semibold">FundedNext</p>
                                <p className="text-sm text-slate-300">5% OFF with code <span className="text-emerald-400 font-mono">REFER7DVQ</span></p>
                            </div>
                        </div>
                        <Link
                            href="#fundednext"
                            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline"
                        >
                            View Offer →
                        </Link>
                    </div>

                    {/* Flash Sale 3 - FunderPro */}
                    <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                        <div className="flex items-start gap-3 mb-3">
                            <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5 animate-pulse" />
                            <div>
                                <p className="text-sm font-bold text-yellow-400 mb-1">Weekend Special</p>
                                <p className="text-white font-semibold">FunderPro</p>
                                <p className="text-sm text-slate-300">20% OFF with code <span className="text-emerald-400 font-mono">hgc</span></p>
                            </div>
                        </div>
                        <Link
                            href="#funderpro"
                            className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline"
                        >
                            View Offer →
                        </Link>
                    </div>


                </div>

                {/* Info Box */}
                <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-slate-400 leading-relaxed">
                        💡 <span className="text-white font-semibold">Pro Tip:</span> Codes are verified daily. Use them as soon as possible for the best price!
                    </p>
                </div>
            </div>
        </div>
    );
}
