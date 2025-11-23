'use client';

import { useState, useEffect } from 'react';

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
                <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl md:rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-950 via-red-900 to-black shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-5 md:py-6 gap-3 md:gap-6">

                        {/* Left: Badge + Timer */}
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest text-red-400 uppercase border border-red-500/50 px-2 py-0.5 md:py-1 rounded bg-red-950/50">🔥 Deal of the Week</span>
                            <div className="font-mono text-2xl md:text-3xl font-bold text-white tracking-widest drop-shadow-md">
                                00 : {timeLeft.hours.toString().padStart(2, '0')} : {timeLeft.minutes.toString().padStart(2, '0')} : {timeLeft.seconds.toString().padStart(2, '0')}
                            </div>
                        </div>

                        {/* Center: Offer Details */}
                        <div className="text-center md:text-left flex-1">
                            <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-white italic leading-tight">
                                ALPHA CAPITAL <span className="text-red-500">GROUP</span>
                            </h3>
                            <p className="text-slate-300 text-xs md:text-sm lg:text-base mt-1">
                                Use code <span className="font-mono text-white bg-red-600 px-1 rounded">PRO20</span> for <strong className="text-white">20% OFF</strong> + 125% Refund.
                            </p>
                        </div>

                        {/* Right: CTA Button */}
                        <button className="w-full md:w-auto whitespace-nowrap bg-white text-red-900 font-bold text-sm md:text-lg px-6 md:px-8 py-3 rounded-lg md:rounded-xl shadow-lg hover:bg-red-50 hover:scale-105 transition-all duration-200">
                            Get Offer →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
