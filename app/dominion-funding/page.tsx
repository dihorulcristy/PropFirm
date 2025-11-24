'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Star, Shield, Zap, Trophy, AlertTriangle, Copy } from 'lucide-react';

export default function DominionFundingPage() {
    const [copied, setCopied] = useState(false);
    const [urlCopied, setUrlCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText('PROPHUB');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const copyUrl = () => {
        navigator.clipboard.writeText('https://dominionfunding.trade//?affId=06bqracaI4');
        setUrlCopied(true);
        setTimeout(() => setUrlCopied(false), 2000);
    };

    const accounts = [
        { size: '$7,500', price: '$89', features: ['2-Step Evaluation', '10% Max Drawdown', '5% Daily Drawdown'] },
        { size: '$10,000', price: '$119', features: ['2-Step Evaluation', '10% Max Drawdown', '5% Daily Drawdown'] },
        { size: '$25,000', price: '$249', features: ['2-Step Evaluation', '10% Max Drawdown', '5% Daily Drawdown'] },
        { size: '$50,000', price: '$349', features: ['2-Step Evaluation', '10% Max Drawdown', '5% Daily Drawdown'] },
        { size: '$100,000', price: '$549', features: ['2-Step Evaluation', '10% Max Drawdown', '5% Daily Drawdown'] },
    ];

    const reviews = [
        {
            author: 'Alex M.',
            rating: 5,
            text: 'Finally a firm that offers real broker conditions. cTrader execution is flawless. Thanks Raja!',
            date: '2 days ago',
        },
        {
            author: 'Sarah J.',
            rating: 5,
            text: 'Best prop firm for serious traders. No hidden rules, just pure trading. The 30% discount is a huge plus.',
            date: '1 week ago',
        },
        {
            author: 'Michael K.',
            rating: 4,
            text: 'Great spreads and fast payouts. I love the transparency Dominion brings to the industry.',
            date: '2 weeks ago',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30">
            <Header />

            <main className="pt-24 pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden shadow-lg shadow-emerald-500/20">
                            <img src="https://unavatar.io/twitter/DominionFunding" alt="Dominion Funding Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                        Dominion Funding
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
                        The Broker Backed Prop Firm. Trade with real market conditions on cTrader.
                    </p>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 max-w-2xl mx-auto mb-8">
                        <p className="text-slate-300 mb-4">
                            To use this discount, visit their official website and enter the code at checkout:
                        </p>
                        <div className="flex items-center justify-center gap-3 bg-black/30 p-3 rounded-lg border border-slate-800">
                            <code className="text-emerald-400 font-mono text-sm md:text-lg break-all">https://dominionfunding.trade//?affId=06bqracaI4</code>
                            <button
                                onClick={copyUrl}
                                className="p-2 hover:bg-slate-800 rounded-md transition-colors group relative flex-shrink-0"
                                title="Copy URL"
                            >
                                {urlCopied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />}
                            </button>
                        </div>
                        {urlCopied && <p className="text-emerald-500 text-xs mt-2 font-bold animate-pulse">URL Copied!</p>}
                    </div>
                </section>

                {/* Discount Code Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-900/20 to-slate-900 border border-emerald-500/30 rounded-2xl p-8 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500"></div>
                        <div className="absolute -inset-1 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Exclusive Offer</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                            <div className="text-center">
                                <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Discount Code</p>
                                <button
                                    onClick={copyToClipboard}
                                    className="relative group/btn flex items-center gap-3 text-4xl font-black text-emerald-400 tracking-widest font-mono bg-slate-950/50 px-6 py-3 rounded-xl border border-emerald-500/30 dashed border-2 hover:bg-slate-950/80 hover:border-emerald-400 transition-all cursor-pointer"
                                >
                                    PROPHUB
                                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover/btn:opacity-100 transition-opacity">
                                        {copied ? <Check className="w-6 h-6 text-emerald-500" /> : <Copy className="w-6 h-6 text-slate-400" />}
                                    </div>
                                </button>
                                {copied && <p className="text-emerald-500 text-xs mt-2 font-bold animate-pulse">Copied!</p>}
                            </div>
                            <div className="text-center">
                                <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Discount</p>
                                <div className="text-4xl font-black text-white">
                                    30% OFF
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-slate-400 text-sm relative z-10">Valid for all account sizes.</p>
                    </div>
                </section>

                {/* Pricing Table */}
                <section className="container mx-auto px-4 mb-20">
                    <h2 className="text-3xl font-bold text-center mb-10">Evaluation Accounts</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full max-w-5xl mx-auto border-collapse">
                            <thead>
                                <tr className="border-b border-slate-800">
                                    <th className="p-4 text-left text-slate-400 font-medium">Account Size</th>
                                    <th className="p-4 text-left text-slate-400 font-medium">Price</th>
                                    <th className="p-4 text-left text-slate-400 font-medium">Features</th>
                                    <th className="p-4 text-center text-slate-400 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map((account, index) => (
                                    <tr key={index} className="border-b border-slate-800 hover:bg-slate-900/50 transition-colors">
                                        <td className="p-6 text-xl font-bold text-white">{account.size}</td>
                                        <td className="p-6 text-xl font-bold text-emerald-400">{account.price}</td>
                                        <td className="p-6">
                                            <ul className="space-y-1">
                                                {account.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                                        <Check className="w-4 h-4 text-emerald-500" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td className="p-6 text-center">
                                            <button className="bg-slate-800 text-slate-400 cursor-not-allowed px-6 py-2 rounded-lg font-semibold text-sm border border-slate-700">
                                                Unavailable
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Trustpilot Reviews */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <Star className="w-8 h-8 text-emerald-500 fill-emerald-500" />
                        <h2 className="text-3xl font-bold">Trustpilot Reviews</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {reviews.map((review, index) => (
                            <div key={index} className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-emerald-500 fill-emerald-500' : 'text-slate-700'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-slate-300 mb-6 italic">"{review.text}"</p>
                                <div className="flex justify-between items-end">
                                    <span className="font-bold text-white">{review.author}</span>
                                    <span className="text-xs text-slate-500">{review.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
