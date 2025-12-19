'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DealOfTheWeek() {
    // Simple countdown logic
    const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 22, seconds: 5 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-4 sm:py-6">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-7xl mx-auto">


                    {/* FOREX DEAL - SpiceProp */}
                    <motion.div
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-950/90 via-slate-900/90 to-orange-950/90 backdrop-blur-sm shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/5 to-transparent animate-shimmer"></div>

                        {/* Market Type Badge */}
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold tracking-wider text-red-200 uppercase bg-red-900/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-red-400/30 shadow-lg">
                                <span className="text-xs sm:text-sm">FOREX</span>
                            </div>
                        </div>

                        <div className="relative p-3 sm:p-4 md:p-5">
                            {/* Badge */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                <motion.div
                                    className="inline-flex items-center gap-1 self-start text-[9px] sm:text-[10px] font-bold tracking-wider text-red-300 uppercase border border-red-400/40 bg-red-950/40 backdrop-blur-sm px-2 py-0.5 sm:py-1 rounded-md shadow-md"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                >
                                    <span className="text-xs sm:text-sm">🔄</span>
                                    <span>FREE RESET</span>
                                </motion.div>

                                <div className="inline-flex items-center gap-1 self-start text-[10px] sm:text-xs font-bold text-white bg-red-900/80 px-2 py-1 rounded-md border border-red-500/30">
                                    <span>🌶️</span> SpiceProp Exclusive
                                </div>
                            </div>

                            {/* Offer Details */}
                            <div className="mb-3 sm:mb-4">
                                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                                    <Image
                                        src="/logos/spiceprop.png"
                                        alt="SpiceProp Logo"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-white/10 p-1"
                                    />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic leading-none drop-shadow-lg">
                                        SPICE<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">PROP</span>
                                    </h3>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white text-lg sm:text-xl font-black leading-tight">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">FREE RESET</span> ON 1ST STEP
                                    </p>
                                    <p className="text-slate-300 text-[10px] sm:text-xs font-medium">
                                        + 10% OFF & EXTRA 5% PROFIT SPLIT
                                    </p>
                                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mt-2">
                                        Use code <span className="inline-flex items-center font-mono text-white bg-gradient-to-r from-red-600 to-red-700 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold shadow-md">SANTARESET</span>
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href={`/api/analytics/track?dest=${encodeURIComponent('https://my.spiceprop.com/agent_pp.html?agent_pp=28203897')}&firm=${encodeURIComponent('SpiceProp')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-500 hover:from-red-500 hover:via-orange-400 hover:to-red-400 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-red-500/50 text-center transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-1.5">
                                    Get Started
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* SPECIAL DEAL - The Concept Trading */}
                    {/* FUTURES DEAL - FundedHero Futures */}
                    <motion.div
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-950/90 via-slate-900/90 to-orange-950/90 backdrop-blur-sm shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-shimmer animation-delay-1000"></div>

                        {/* Market Type Badge */}
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold tracking-wider text-yellow-200 uppercase bg-yellow-900/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-yellow-400/30 shadow-lg">
                                <span className="text-xs sm:text-sm">FUTURES</span>
                            </div>
                        </div>

                        <div className="relative p-3 sm:p-4 md:p-5">
                            {/* Badge */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                <motion.div
                                    className="inline-flex items-center gap-1 self-start text-[9px] sm:text-[10px] font-bold tracking-wider text-yellow-300 uppercase border border-yellow-400/40 bg-yellow-950/40 backdrop-blur-sm px-2 py-0.5 sm:py-1 rounded-md shadow-md"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                >
                                    <span className="text-xs sm:text-sm">🔥</span>
                                    <span>HUGE SAVINGS</span>
                                </motion.div>

                                <div className="inline-flex items-center gap-1 self-start text-[10px] sm:text-xs font-bold text-white bg-slate-800/80 px-2 py-1 rounded-md border border-white/10">
                                    <span>⏳</span> Limited Time Offer
                                </div>
                            </div>

                            {/* Offer Details */}
                            <div className="mb-3 sm:mb-4">
                                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                                    <Image
                                        src="/logos/fundedhero.jpg"
                                        alt="FundedHero Futures"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-white/10 p-1"
                                    />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic leading-none drop-shadow-lg">
                                        FUNDED<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">HERO</span>
                                    </h3>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white text-lg sm:text-xl font-black leading-tight">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">90% OFF</span> ALL FUTURES
                                    </p>
                                    <p className="text-slate-300 text-[10px] sm:text-xs font-medium">
                                        INSANE DISCOUNT ON ALL CHALLENGES
                                    </p>
                                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mt-2">
                                        Use code <span className="inline-flex items-center font-mono text-white bg-gradient-to-r from-yellow-600 to-orange-500 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold shadow-md">HERO</span>
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href={`/api/analytics/track?dest=${encodeURIComponent('https://app.fundedherofutures.com/checkout/?referral_id=da378c83227e')}&firm=${encodeURIComponent('FundedHero Futures')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-500 hover:from-yellow-500 hover:via-orange-400 hover:to-yellow-400 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-yellow-500/50 text-center transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-1.5">
                                    Get 90% OFF
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </motion.a>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 4s infinite;
                }
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </section>
    );
}
