'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
        <section className="py-6">
            <div className="container mx-auto px-4">
                <motion.div
                    className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl md:rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950 via-slate-900 to-black shadow-[0_0_40px_rgba(59,130,246,0.2)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.01 }}
                >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>

                    {/* Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-5 md:py-6 gap-3 md:gap-6">

                        {/* Left: Badge + Timer */}
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <motion.span
                                className="text-[10px] md:text-xs font-bold tracking-widest text-cyan-400 uppercase border border-cyan-500/50 px-2 py-0.5 md:py-1 rounded bg-cyan-950/50"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                🔥 Deal of the Week
                            </motion.span>
                            <motion.div
                                className="font-mono text-2xl md:text-3xl font-bold text-white tracking-widest drop-shadow-md"
                                key={timeLeft.seconds}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                00 : {timeLeft.hours.toString().padStart(2, '0')} : {timeLeft.minutes.toString().padStart(2, '0')} : {timeLeft.seconds.toString().padStart(2, '0')}
                            </motion.div>
                            <span className="text-[10px] text-slate-400">Expires Nov 30th</span>
                        </div>

                        {/* Center: Offer Details */}
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-white italic leading-tight">
                                BLUE <span className="text-blue-500">GUARDIAN</span>
                            </h3>
                            <p className="text-slate-300 text-xs md:text-sm lg:text-base mt-1">
                                Use code <span className="font-mono text-white bg-blue-600 px-1 rounded">1scz</span> for <strong className="text-white">50% OFF</strong> + <strong className="text-cyan-400">B1G1 Free</strong> (after 1st payout).
                            </p>
                        </div>

                        {/* Right: CTA Button */}
                        <motion.a
                            href="https://blueguardian.com/?afmc=1scz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto whitespace-nowrap bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm md:text-lg px-6 md:px-8 py-3 rounded-lg md:rounded-xl shadow-lg text-center"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Offer →
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
