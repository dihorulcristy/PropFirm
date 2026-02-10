import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, DollarSign, TrendingDown, Zap, CheckCircle, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cheapest Prop Firms Under $100 in 2026 (15 Budget Options) | PropFirmHub',
    description: 'Find the cheapest prop trading firms under $100. We ranked 15 affordable prop firms by price, features, and value. Start trading with as little as $32.',
    keywords: 'cheapest prop firms, prop firms under $100, affordable prop firms, cheap prop trading, budget prop firms 2026, low cost prop firms',
    openGraph: {
        title: 'Cheapest Prop Firms Under $100 in 2026 (15 Budget Options)',
        description: 'Find the cheapest prop trading firms under $100. Start trading with as little as $32.',
        type: 'article',
        publishedTime: '2026-01-31T00:00:00Z',
    },
    alternates: {
        canonical: 'https://propfirms-hub.com/en/blog/cheapest-prop-firms',
    },
};

// Cheapest firms data - sorted by price
const cheapestFirms = [
    {
        rank: 1,
        name: 'FundingPips',
        price: 32,
        accountSize: '5K',
        profitSplit: '80-100%',
        maxDD: '10%',
        platforms: 'Match-Trader, cTrader',
        usaAccepted: false,
        discount: '5% OFF',
        coupon: 'b5420489',
        link: 'https://app.fundingpips.com/register?ref=b5420489',
        highlight: 'Lowest price + up to 100% profit split',
    },
    {
        rank: 2,
        name: 'InstantFunding',
        price: 39,
        accountSize: '5K',
        profitSplit: '80-90%',
        maxDD: '10%',
        platforms: 'MT5, cTrader',
        usaAccepted: true,
        discount: '10% OFF',
        coupon: 'AFF011I4E8CIH8',
        link: 'https://instantfunding.com/?partner=419',
        highlight: 'USA accepted + multiple platforms',
    },
    {
        rank: 3,
        name: 'DnaFunded',
        price: 42,
        accountSize: '5K',
        profitSplit: '80%',
        maxDD: '10%',
        platforms: 'TradeLocker',
        usaAccepted: false,
        discount: '15% OFF',
        coupon: 'DNAFUNDED15',
        link: 'https://partners.dnafunded.com/click?campaign_id=1&ref_id=259',
        highlight: 'Great entry-level pricing',
    },
    {
        rank: 4,
        name: 'YRM Prop',
        price: 69,
        accountSize: '50K',
        profitSplit: '90%',
        maxDD: '10%',
        platforms: 'NinjaTrader, Rithmic',
        usaAccepted: true,
        discount: 'Extra 5% OFF',
        coupon: 'HGC',
        link: 'https://yrmprop.com/ref/dihorulcristy/',
        highlight: '$69 for 50K account! Best value',
    },
    {
        rank: 5,
        name: 'SpiceProp',
        price: 45,
        accountSize: '6K',
        profitSplit: '80-85%',
        maxDD: '11%',
        platforms: 'MT5',
        usaAccepted: false,
        discount: '10% OFF + 5% Split',
        coupon: 'SANTANEXT',
        link: 'https://my.spiceprop.com/agent_pp.html?agent_pp=28203897',
        highlight: 'Higher 11% drawdown limit',
    },
    {
        rank: 6,
        name: 'FundedNext',
        price: 59,
        accountSize: '6K',
        profitSplit: '80-95%',
        maxDD: '10%',
        platforms: 'MT4, MT5, cTrader',
        usaAccepted: false,
        discount: '5% OFF',
        coupon: 'REFER7DVQ',
        link: 'https://fundednext.com/',
        highlight: 'Earn 15% during challenge',
    },
    {
        rank: 7,
        name: 'TradingCult',
        price: 59,
        accountSize: '10K',
        profitSplit: 'Up to 95%',
        maxDD: '10%',
        platforms: 'MT4',
        usaAccepted: true,
        discount: '40% OFF + Free Account',
        coupon: 'NEWYEAR',
        link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
        highlight: 'USA accepted + 95% profit split',
    },
    {
        rank: 8,
        name: 'The Concept Trading',
        price: 65,
        accountSize: '5K',
        profitSplit: 'Up to 90%',
        maxDD: '6%',
        platforms: 'MT4, MT5',
        usaAccepted: true,
        discount: '35% OFF',
        coupon: 'RESOLVE35',
        link: 'https://theconcepttrading.com/ref/1837/',
        highlight: 'Instant funding available',
    },
    {
        rank: 11,
        name: 'Dominion Funding',
        price: 62,
        accountSize: '7.5K',
        profitSplit: '80%',
        maxDD: '10%',
        platforms: 'cTrader, Match-Trader',
        usaAccepted: false,
        discount: '30% OFF',
        coupon: 'PROPHUB',
        link: 'https://dominionfunding.trade//?affId=06bqracaI4',
        highlight: '30% permanent discount',
    },
    {
        rank: 13,
        name: 'SpiceProp',
        price: 89,
        accountSize: '10K',
        profitSplit: '80-85%',
        maxDD: '11%',
        platforms: 'MT5',
        usaAccepted: false,
        discount: '10% OFF + 5% Split',
        coupon: 'SANTANEXT',
        link: 'https://my.spiceprop.com/agent_pp.html?agent_pp=28203897',
        highlight: 'Higher 11% drawdown',
    },
];

export default function CheapestPropFirmsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header />
            <main className="flex-1">
                <article className="container mx-auto px-4 py-16 max-w-5xl">
                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition mb-8">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    {/* Article Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white">
                                Budget Picks
                            </span>
                            <span className="text-slate-400 text-sm">January 31, 2026 • 12 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Cheapest Prop Firms Under $100 in 2026
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Don't break the bank to start prop trading. We found <strong className="text-emerald-400">15 prop firms under $100</strong> so you can start trading funded accounts on any budget.
                        </p>
                    </header>

                    {/* Value Proposition */}
                    <div className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                    <DollarSign className="h-8 w-8 text-amber-400" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-2">Why Start Cheap?</h2>
                                <p className="text-slate-300 mb-0">
                                    Most traders don't pass their first challenge. Starting with a $32-$50 account means you can learn the evaluation process without risking hundreds of dollars. Once you pass your first challenge, you can scale up to larger accounts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <TrendingDown className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">$32</div>
                            <div className="text-xs text-slate-400">Cheapest Option</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <DollarSign className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">14</div>
                            <div className="text-xs text-slate-400">Firms Under $100</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <Zap className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs text-slate-400">Max Profit Split</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <CheckCircle className="h-6 w-6 text-amber-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">7</div>
                            <div className="text-xs text-slate-400">Accept USA</div>
                        </div>
                    </div>

                    {/* Price Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">All Prop Firms Under $100 (Sorted by Price)</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-slate-900/30 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-slate-800/50">
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Price</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Firm</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Account</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Split</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">USA</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Discount</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cheapestFirms.map((firm, idx) => (
                                        <tr key={idx} className="border-t border-slate-800 hover:bg-slate-800/30">
                                            <td className="px-4 py-3">
                                                <span className="text-2xl font-bold text-amber-400">${firm.price}</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="font-bold text-white">{firm.name}</div>
                                                <div className="text-xs text-slate-400">{firm.platforms}</div>
                                            </td>
                                            <td className="px-4 py-3 text-white font-medium">{firm.accountSize}</td>
                                            <td className="px-4 py-3 text-emerald-400 font-bold">{firm.profitSplit}</td>
                                            <td className="px-4 py-3">{firm.usaAccepted ? '✅' : '❌'}</td>
                                            <td className="px-4 py-3">
                                                <div className="text-amber-400 font-bold text-sm">{firm.discount}</div>
                                                <div className="text-xs text-slate-400">Code: {firm.coupon}</div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <a
                                                    href={firm.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition"
                                                >
                                                    Get →
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Top 5 Detailed */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Top 5 Best Value Picks</h2>
                        <div className="space-y-6">
                            {cheapestFirms.slice(0, 5).map((firm) => (
                                <div
                                    key={firm.rank}
                                    className="bg-slate-900/30 border border-amber-500/20 rounded-2xl p-6 hover:border-amber-500/40 transition"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex-shrink-0 text-center">
                                            <div className="text-3xl font-bold text-amber-400">${firm.price}</div>
                                            <div className="text-xs text-slate-400">{firm.accountSize} account</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-white">{firm.name}</h3>
                                                {firm.usaAccepted && (
                                                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400">
                                                        🇺🇸 USA
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-emerald-400 font-medium mb-2">{firm.highlight}</p>
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                                                <span>Split: <strong className="text-white">{firm.profitSplit}</strong></span>
                                                <span>Max DD: <strong className="text-white">{firm.maxDD}</strong></span>
                                                <span>Platforms: {firm.platforms}</span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a
                                                href={firm.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-amber-900/40 transition-all hover:scale-105"
                                            >
                                                {firm.discount} →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Best Overall Value */}
                    <section className="mt-16 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-amber-500/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Award className="h-6 w-6 text-amber-400" />
                            Best Value Recommendations
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl mb-2">💰</div>
                                <h3 className="text-lg font-bold text-white mb-1">Cheapest Overall</h3>
                                <div className="text-amber-400 font-bold mb-1">FundingPips - $32</div>
                                <div className="text-xs text-slate-400 mb-2">5K account + 100% split potential</div>
                                <a
                                    href="https://app.fundingpips.com/register?ref=b5420489"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-amber-500 transition"
                                >
                                    Get Started →
                                </a>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">🏆</div>
                                <h3 className="text-lg font-bold text-white mb-1">Best Value</h3>
                                <div className="text-amber-400 font-bold mb-1">YRM Prop - $45</div>
                                <div className="text-xs text-slate-400 mb-2">50K account for just $45!</div>
                                <a
                                    href="https://yrmprop.com/ref/dihorulcristy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-amber-500 transition"
                                >
                                    Get Started →
                                </a>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">🇺🇸</div>
                                <h3 className="text-lg font-bold text-white mb-1">Best for USA</h3>
                                <div className="text-amber-400 font-bold mb-1">InstantFunding - $39</div>
                                <div className="text-xs text-slate-400 mb-2">USA accepted + 90% split</div>
                                <a
                                    href="https://instantfunding.com/?partner=419"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-bold text-white hover:bg-amber-500 transition"
                                >
                                    Get Started →
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-16 bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Want to Compare All Features?</h3>
                        <p className="text-slate-300 mb-6">
                            View our complete comparison table with filtering by price, features, and account size.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                        >
                            Compare All Prop Firms →
                        </Link>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    );
}
