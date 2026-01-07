import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PropFirmHub Blog - Latest Prop Trading Insights & Guides',
    description: 'Explore expert articles, guides, and insights about prop trading firms. Learn strategies, compare firms, and stay updated with the latest trends in proprietary trading.',
    keywords: 'prop trading blog, prop firm guides, funded trading articles, prop trading insights, trading education',
};

// Blog posts data
const blogPosts = [
    {
        slug: 'how-to-pass-prop-firm-challenge',
        title: 'How to Pass a Prop Firm Challenge: 10 Proven Steps',
        description: 'Learn exactly how to pass prop firm challenges with our comprehensive guide. Discover risk management strategies, profit targets, drawdown rules, and psychology tips.',
        date: 'December 30, 2025',
        readTime: '15 min read',
        category: 'Guide',
        featured: true,
    },
    {
        slug: 'pass-rates-2026',
        title: 'Prop Firm Challenge Pass Rates 2026: Real Statistics & Data',
        description: 'Discover the real prop firm challenge pass rates in 2026. We analyzed 15+ firms to reveal actual success rates, from FTMO\'s 10% to firms with 25%+ pass rates.',
        date: 'January 7, 2026',
        readTime: '12 min read',
        category: 'Statistics',
        featured: false,
    },
    {
        slug: 'how-hard-is-it-to-get-funded-trading',
        title: 'How Hard Is It To Get Funded Trading?',
        description: 'Discover the real difficulty of getting funded in prop trading. Learn success rates, key challenges, and proven strategies to increase your chances of passing prop firm evaluations.',
        date: 'November 27, 2025',
        readTime: '12 min read',
        category: 'Guide',
        featured: false,
    },
    {
        slug: 'what-is-prop-firm-account',
        title: 'What Is a Prop Firm Account?',
        description: 'Learn everything about prop firm accounts: how they work, benefits, risks, and how to get one. Complete guide to proprietary trading accounts for forex and futures traders.',
        date: 'December 2, 2025',
        readTime: '10 min read',
        category: 'Guide',
        featured: false,
    },
    {
        slug: 'top-payouts',
        title: 'Top 30 Fastest Prop Firm Payouts in 2025',
        description: 'Getting paid quickly is crucial. Some firms pay in 24 hours, others take 60+ days. We\'ve analyzed thousands of payouts to rank the 30 fastest-paying prop firms.',
        date: 'November 25, 2025',
        readTime: '20 min read',
        category: 'Rankings',
        featured: false,
    },
    {
        slug: 'taxes-2025',
        title: 'Prop Firm Taxes 2025: Complete Guide for Traders',
        description: 'Taxes on prop firm profits can be confusing. Are you an employee? Independent contractor? This complete guide answers all your questions about prop firm taxation.',
        date: 'November 25, 2025',
        readTime: '18 min read',
        category: 'Finance',
        featured: false,
    },
];

export default function BlogPage() {
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            PropFirmHub Blog
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Expert insights, in-depth guides, and the latest trends in prop trading.
                            Everything you need to succeed as a funded trader.
                        </p>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="container mx-auto px-4 pb-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-2xl p-8 md:p-12 hover:border-emerald-500/50 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white w-fit">
                                        Featured
                                    </span>
                                    <div className="flex items-center gap-4 text-sm text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {featuredPost.date}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {featuredPost.readTime}
                                        </span>
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    {featuredPost.description}
                                </p>
                                <Link
                                    href={`/en/blog/${featuredPost.slug}`}
                                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                                >
                                    Read Article
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* Regular Posts Grid */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                            Latest Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {regularPosts.map((post) => (
                                <article
                                    key={post.slug}
                                    className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 hover:bg-slate-900/50 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-slate-700">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Calendar className="h-3 w-3" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4 line-clamp-3">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-sm text-slate-500">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </span>
                                        <Link
                                            href={`/en/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-sm"
                                        >
                                            Read More
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Find Your Perfect Prop Firm?
                        </h3>
                        <p className="text-slate-300 mb-6">
                            Compare top prop firms side-by-side and find the best fit for your trading style.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-900/40 transition-all hover:scale-105"
                        >
                            Compare Prop Firms →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
