import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Star, DollarSign, Users, Clock, Award, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '10 Best Prop Firms for Beginners in 2026 (Easy to Pass) | PropFirmHub',
    description: 'Discover the best prop trading firms for beginners. We analyzed 15+ firms to rank the 10 easiest prop firms to pass based on pricing, rules, and beginner-friendliness.',
    keywords: 'best prop firms for beginners, easiest prop firms, prop firms beginners, best prop trading firms for beginners, beginner prop firms 2026',
    openGraph: {
        title: '10 Best Prop Firms for Beginners in 2026 (Easy to Pass)',
        description: 'Discover the best prop trading firms for beginners. Ranked by ease of passing, pricing, and beginner-friendliness.',
        type: 'article',
        publishedTime: '2026-01-31T00:00:00Z',
    },
    alternates: {
        canonical: 'https://propfirms-hub.com/en/blog/best-for-beginners',
    },
};

// Firm data for the listicle
const beginnerFirms = [
    {
        rank: 1,
        name: 'TradingCult',
        badge: '🥇 Best Overall',
        price: '$59',
        accountSize: '10K',
        profitSplit: '95%',
        maxDD: '10%',
        payoutDays: 7,
        usaAccepted: true,
        discount: '40% OFF + Free Account',
        coupon: 'NEWYEAR',
        link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
        bestFor: 'Complete beginners who want affordable pricing with high profit splits',
        pros: ['Up to 95% profit split', 'USA traders accepted', 'Instant funding option', 'No time limit'],
    },
    {
        rank: 2,
        name: 'YRM Prop',
        badge: '🥈 Cheapest Futures',
        price: '$45',
        accountSize: '50K',
        profitSplit: '90%',
        maxDD: '10%',
        payoutDays: 14,
        usaAccepted: true,
        discount: 'Extra 5% OFF',
        coupon: 'HGC',
        link: 'https://yrmprop.com/ref/dihorulcristy/',
        bestFor: 'Beginners interested in futures trading on a tight budget',
        pros: ['Lowest prices in industry', '90% profit split', 'Weekly payouts', 'USA accepted'],
    },
    {
        rank: 3,
        name: 'InstantFunding',
        badge: '🥉 Best Forex Entry',
        price: '$39',
        accountSize: '5K',
        profitSplit: '90%',
        maxDD: '10%',
        payoutDays: 14,
        usaAccepted: true,
        discount: '35% OFF + 90% Split',
        coupon: 'TRADER2026',
        link: 'https://instantfunding.com/?partner=419',
        bestFor: 'Forex beginners looking for the cheapest entry point',
        pros: ['Cheapest starting price', 'USA accepted', 'Multiple platforms', 'No time limit'],
    },
    {
        rank: 4,
        name: 'FundingPips',
        badge: 'Best Rules',
        price: '$32',
        accountSize: '5K',
        profitSplit: '100%',
        maxDD: '10%',
        payoutDays: 7,
        usaAccepted: false,
        discount: '5% OFF',
        coupon: 'b5420489',
        link: 'https://app.fundingpips.com/register?ref=b5420489',
        bestFor: 'Beginners who want fair rules and potential for 100% profit',
        pros: ['Up to 100% profit split', 'Weekly payouts', 'Modern platforms', 'No time limit'],
    },
    {
        rank: 5,
        name: 'The Concept Trading',
        badge: 'Instant Funding',
        price: '$65',
        accountSize: '5K',
        profitSplit: '90%',
        maxDD: '6%',
        payoutDays: 2,
        usaAccepted: true,
        discount: '35% OFF',
        coupon: 'RESOLVE35',
        link: 'https://theconcepttrading.com/ref/1837/',
        bestFor: 'Beginners who want funded accounts without evaluations',
        pros: ['Instant funding available', 'USA accepted', '2-day payouts', 'Static drawdown'],
    },
    {
        rank: 6,
        name: 'FTMO',
        badge: '⭐ Industry Leader',
        price: '$170',
        accountSize: '10K',
        profitSplit: '90%',
        maxDD: '10%',
        payoutDays: 14,
        usaAccepted: false,
        discount: '20% OFF',
        coupon: 'No Code',
        link: 'https://trader.ftmo.com/?affiliates=4354',
        bestFor: 'Beginners who prioritize safety and reputation over price',
        pros: ['Most trusted firm', 'Multiple platforms', 'Up to 90% split', 'No time limit'],
    },
    {
        rank: 7,
        name: 'FundedNext',
        badge: 'Earn While Learning',
        price: '$59',
        accountSize: '6K',
        profitSplit: '95%',
        maxDD: '10%',
        payoutDays: 1,
        usaAccepted: false,
        discount: '5% OFF',
        coupon: 'REFER7DVQ',
        link: 'https://fundednext.com/',
        bestFor: 'Beginners who want to earn money during evaluation',
        pros: ['Earn 15% during challenge', 'Same-day payouts', 'Up to 95% split', 'Weekly payouts'],
    },
    {
        rank: 8,
        name: 'Funded Futures Network',
        badge: 'USA Futures',
        price: '$149',
        accountSize: '25K',
        profitSplit: '80%',
        maxDD: '8%',
        payoutDays: 14,
        usaAccepted: true,
        discount: '50% OFF',
        coupon: 'T2ISFNWP',
        link: 'https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian',
        bestFor: 'USA traders wanting to start with futures',
        pros: ['50% discount', 'TradingView integration', 'USA accepted', 'Multiple platforms'],
    },
    {
        rank: 9,
        name: 'FunderPro',
        badge: 'Fastest Payouts',
        price: '$249',
        accountSize: '25K',
        profitSplit: '90%',
        maxDD: '10%',
        payoutDays: 1,
        usaAccepted: false,
        discount: '20% OFF',
        coupon: 'hgc',
        link: 'https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro',
        bestFor: 'Beginners who need fast access to profits',
        pros: ['Same-day payouts', 'Multiple platforms', 'Weekly payouts', 'No time limit'],
    },
];

export default function BestForBeginnersPage() {
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
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white">
                                Rankings
                            </span>
                            <span className="text-slate-400 text-sm">January 31, 2026 • 15 min read</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            10 Best Prop Firms for Beginners in 2026
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Starting prop trading can be overwhelming. We've analyzed 15+ prop firms to find the
                            <strong className="text-emerald-400"> 10 best options for beginners</strong> based on
                            pricing, rules, and ease of passing.
                        </p>
                    </header>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <DollarSign className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">$32</div>
                            <div className="text-xs text-slate-400">Lowest Entry</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <Star className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs text-slate-400">Max Profit Split</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <Users className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">6</div>
                            <div className="text-xs text-slate-400">Accept USA</div>
                        </div>
                        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
                            <Clock className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white">1 Day</div>
                            <div className="text-xs text-slate-400">Fastest Payout</div>
                        </div>
                    </div>

                    {/* Rankings */}
                    <section className="space-y-6">
                        {beginnerFirms.map((firm) => (
                            <div
                                key={firm.rank}
                                className={`bg-slate-900/30 border rounded-2xl p-6 transition-all hover:border-emerald-500/50 ${firm.rank <= 3 ? 'border-emerald-500/30' : 'border-slate-800'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Rank Badge */}
                                    <div className="flex-shrink-0">
                                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${firm.rank === 1 ? 'bg-gradient-to-br from-yellow-500 to-amber-600 text-white' :
                                            firm.rank === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-400 text-slate-900' :
                                                firm.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white' :
                                                    'bg-slate-800 text-slate-300'
                                            }`}>
                                            #{firm.rank}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="text-2xl font-bold text-white">{firm.name}</h3>
                                            <span className="px-2 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400">
                                                {firm.badge}
                                            </span>
                                            {firm.usaAccepted && (
                                                <span className="px-2 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400">
                                                    🇺🇸 USA
                                                </span>
                                            )}
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                                            <div>
                                                <div className="text-xs text-slate-500">Price</div>
                                                <div className="text-lg font-bold text-white">{firm.price}</div>
                                                <div className="text-xs text-slate-400">({firm.accountSize})</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500">Profit Split</div>
                                                <div className="text-lg font-bold text-emerald-400">{firm.profitSplit}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500">Max DD</div>
                                                <div className="text-lg font-bold text-white">{firm.maxDD}</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500">Payout</div>
                                                <div className="text-lg font-bold text-white">{firm.payoutDays} days</div>
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-500">Discount</div>
                                                <div className="text-sm font-bold text-amber-400">{firm.discount}</div>
                                                <div className="text-xs text-slate-400">Code: {firm.coupon}</div>
                                            </div>
                                        </div>

                                        {/* Pros */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {firm.pros.map((pro, idx) => (
                                                <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800/50 text-xs text-slate-300">
                                                    <CheckCircle className="h-3 w-3 text-emerald-400" />
                                                    {pro}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Best For */}
                                        <p className="text-sm text-slate-400 mb-4">
                                            <strong className="text-slate-300">Best For:</strong> {firm.bestFor}
                                        </p>

                                        {/* CTA */}
                                        <a
                                            href={firm.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                        >
                                            Get Started with {firm.name} →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Comparison Table */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-white mb-6">Quick Comparison Table</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-slate-900/30 rounded-xl overflow-hidden">
                                <thead>
                                    <tr className="bg-slate-800/50">
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">#</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Firm</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Price</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Split</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">USA</th>
                                        <th className="px-4 py-3 text-left text-xs font-bold text-slate-300">Payout</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {beginnerFirms.map((firm) => (
                                        <tr key={firm.rank} className="border-t border-slate-800 hover:bg-slate-800/30">
                                            <td className="px-4 py-3 text-white font-bold">{firm.rank}</td>
                                            <td className="px-4 py-3">
                                                <a href={firm.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-medium">
                                                    {firm.name}
                                                </a>
                                            </td>
                                            <td className="px-4 py-3 text-white">{firm.price}</td>
                                            <td className="px-4 py-3 text-emerald-400 font-bold">{firm.profitSplit}</td>
                                            <td className="px-4 py-3">{firm.usaAccepted ? '✅' : '❌'}</td>
                                            <td className="px-4 py-3 text-white">{firm.payoutDays}d</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Tips Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-white mb-6">5 Tips for Beginners</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { title: 'Start Small', desc: 'Begin with the smallest account size ($5K-$10K). It\'s cheaper to learn on a small account.' },
                                { title: 'Practice First', desc: 'Use demo accounts for at least 2-3 months before attempting challenges.' },
                                { title: 'Learn Risk Management', desc: 'Never risk more than 1-2% per trade. This is key to passing challenges.' },
                                { title: 'Choose No Time Limit', desc: 'As a beginner, avoid time pressure. Pick firms with no time limits.' },
                                { title: 'Don\'t Overtrade', desc: 'Quality over quantity. 1-2 solid trades per day is enough.' },
                            ].map((tip, idx) => (
                                <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </span>
                                        <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Top 3 Summary */}
                    <section className="mt-16 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Award className="h-6 w-6 text-emerald-400" />
                            Our Top 3 Recommendations
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl mb-2">🥇</div>
                                <h3 className="text-lg font-bold text-white mb-1">Best Overall</h3>
                                <div className="text-emerald-400 font-bold mb-2">TradingCult</div>
                                <a
                                    href="https://my.tradingcult.com//challenges?affiliateId=hgc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-500 transition"
                                >
                                    40% OFF →
                                </a>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">💰</div>
                                <h3 className="text-lg font-bold text-white mb-1">Best Budget</h3>
                                <div className="text-emerald-400 font-bold mb-2">YRM Prop</div>
                                <a
                                    href="https://yrmprop.com/ref/dihorulcristy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-500 transition"
                                >
                                    From $45 →
                                </a>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl mb-2">⭐</div>
                                <h3 className="text-lg font-bold text-white mb-1">Best Reputation</h3>
                                <div className="text-emerald-400 font-bold mb-2">FTMO</div>
                                <a
                                    href="https://trader.ftmo.com/?affiliates=4354"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-500 transition"
                                >
                                    20% OFF →
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-16 bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Compare All Prop Firms?</h3>
                        <p className="text-slate-300 mb-6">
                            View our complete comparison table with all 20+ prop firms, features, and exclusive discounts.
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
