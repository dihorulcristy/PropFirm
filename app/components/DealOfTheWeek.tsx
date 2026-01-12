'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';

// Translations
const translations = {
    en: {
        forex: "FOREX",
        futures: "FUTURES",
        freeReset: "FREE RESET",
        exclusive: "SpiceProp Exclusive",
        freeResetOn1stStep: "FREE RESET ON 1ST STEP",
        extraBonus: "+ 10% OFF & EXTRA 5% PROFIT SPLIT",
        useCode: "Use code",
        getStarted: "Get Started",
        hugeSavings: "HUGE SAVINGS",
        limitedTime: "Limited Time Offer",
        allFutures: "ALL FUTURES",
        insaneDiscount: "INSANE DISCOUNT ON ALL CHALLENGES",
        get90Off: "Get 90% OFF",
        ftmoRepo: "NEW FTMO PROMO",
        kickstart: "KICKSTART 2026",
        discount20: "20% OFF ALL CHALLENGES"
    },
    ro: {
        forex: "FOREX",
        futures: "FUTURES",
        freeReset: "RESETARE GRATUITĂ",
        exclusive: "Exclusiv SpiceProp",
        freeResetOn1stStep: "RESETARE GRATUITĂ LA PASUL 1",
        extraBonus: "+ 10% REDUCERE & 5% PROFIT EXTRA",
        useCode: "Folosește codul",
        getStarted: "Începe Acum",
        hugeSavings: "REDUCERI MARI",
        limitedTime: "Ofertă Limitată",
        allFutures: "LA TOATE FUTURES",
        insaneDiscount: "REDUCERE INCREDIBILĂ LA TOATE PROVOCĂRILE",
        get90Off: "Obține 90% REDUCERE",
        ftmoRepo: "NOUA PROMOȚIE FTMO",
        kickstart: "START 2026",
        discount20: "20% REDUCERE LA TOT"
    },
    es: {
        forex: "FOREX",
        futures: "FUTUROS",
        freeReset: "REINICIO GRATIS",
        exclusive: "Exclusivo SpiceProp",
        freeResetOn1stStep: "REINICIO GRATIS EN EL PASO 1",
        extraBonus: "+ 10% DTO & 5% DIVISION DE GANANCIAS EXTRA",
        useCode: "Usa el código",
        getStarted: "Empieza Ahora",
        hugeSavings: "AHORROS MASIVOS",
        limitedTime: "Oferta Limitada",
        allFutures: "EN TODOS LOS FUTUROS",
        insaneDiscount: "DESCUENTO INCREÍBLE EN TODOS LOS DESAFÍOS",
        get90Off: "Obtén 90% DTO",
        ftmoRepo: "NUEVA PROMO FTMO",
        kickstart: "INICIO 2026",
        discount20: "20% DTO EN TODO"
    }
};

interface DealOfTheWeekProps {
    lang?: Locale;
}

export default function DealOfTheWeek({ lang = 'en' }: DealOfTheWeekProps) {
    const t = translations[lang] || translations.en;

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


                    {/* FOREX DEAL - FTMO */}
                    <motion.div
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/90 via-slate-900/90 to-green-950/90 backdrop-blur-sm shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/5 to-transparent animate-shimmer"></div>

                        {/* Market Type Badge */}
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold tracking-wider text-emerald-200 uppercase bg-emerald-900/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-emerald-400/30 shadow-lg">
                                <span className="text-xs sm:text-sm">{t.forex}</span>
                            </div>
                        </div>

                        <div className="relative p-3 sm:p-4 md:p-5">
                            {/* Badge */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                <motion.div
                                    className="inline-flex items-center gap-1 self-start text-[9px] sm:text-[10px] font-bold tracking-wider text-emerald-300 uppercase border border-emerald-400/40 bg-emerald-950/40 backdrop-blur-sm px-2 py-0.5 sm:py-1 rounded-md shadow-md"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                >
                                    <span className="text-xs sm:text-sm">🎉</span>
                                    <span>{t.ftmoRepo}</span>
                                </motion.div>

                                <div className="inline-flex items-center gap-1 self-start text-[10px] sm:text-xs font-bold text-white bg-emerald-900/80 px-2 py-1 rounded-md border border-emerald-500/30">
                                    <span>🔥</span> {t.kickstart}
                                </div>
                            </div>

                            {/* Offer Details */}
                            <div className="mb-3 sm:mb-4">
                                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                                    <Image
                                        src="/logos/ftmo.png"
                                        alt="FTMO Logo"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-white/10 p-1"
                                    />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic leading-none drop-shadow-lg">
                                        FTMO
                                    </h3>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white text-lg sm:text-xl font-black leading-tight">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">20% INSTANT DISCOUNT</span>
                                    </p>
                                    <p className="text-slate-300 text-[10px] sm:text-xs font-medium">
                                        LIMITED TIME NEW YEAR DEAL
                                    </p>
                                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mt-2">
                                        Discount applied automatically via link
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href={`/api/analytics/track?dest=${encodeURIComponent('https://trader.ftmo.com/?affiliates=4354')}&firm=${encodeURIComponent('FTMO')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-500 hover:from-emerald-500 hover:via-green-400 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-emerald-500/50 text-center transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-1.5">
                                    {t.getStarted}
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* FUTURES DEAL - YRM Prop */}
                    <motion.div
                        className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-950/90 via-slate-900/90 to-red-950/90 backdrop-blur-sm shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -4 }}
                    >
                        {/* Animated gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/5 to-transparent animate-shimmer animation-delay-1000"></div>

                        {/* Market Type Badge */}
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                            <div className="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold tracking-wider text-orange-200 uppercase bg-orange-900/60 backdrop-blur-md px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-orange-400/30 shadow-lg">
                                <span className="text-xs sm:text-sm">{t.futures}</span>
                            </div>
                        </div>

                        <div className="relative p-3 sm:p-4 md:p-5">
                            {/* Badge */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                <motion.div
                                    className="inline-flex items-center gap-1 self-start text-[9px] sm:text-[10px] font-bold tracking-wider text-orange-200 uppercase border border-orange-400/40 bg-orange-950/40 backdrop-blur-sm px-2 py-0.5 sm:py-1 rounded-md shadow-md"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.5 }}
                                >
                                    <span className="text-xs sm:text-sm">🎄</span>
                                    <span>CHALLENGE ACCOUNTS</span>
                                </motion.div>
                            </div>

                            {/* Offer Details */}
                            <div className="mb-3 sm:mb-4">
                                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                                    <Image
                                        src="/yrm-prop.png"
                                        alt="YRM Prop"
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-contain bg-white/10 p-1"
                                    />
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white italic leading-none drop-shadow-lg">
                                        YRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">PROP</span>
                                    </h3>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white text-lg sm:text-xl font-black leading-tight">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">$50K Challenge</span> now just $69
                                    </p>
                                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mt-2">
                                        {t.useCode} <span className="inline-flex items-center font-mono text-white bg-gradient-to-r from-orange-600 to-red-600 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold shadow-md">HGC</span> for EXTRA 10% OFF
                                    </p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href={`/api/analytics/track?dest=${encodeURIComponent('https://yrmprop.com/ref/dihorulcristy/')}&firm=${encodeURIComponent('YRM Prop')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 hover:from-orange-500 hover:via-red-400 hover:to-orange-400 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-orange-500/50 text-center transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-1.5">
                                    {t.getStarted}
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
