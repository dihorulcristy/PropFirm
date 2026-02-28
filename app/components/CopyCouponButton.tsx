'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyCouponButtonProps {
    coupon: string;
    variant?: 'badge' | 'large';
}

export default function CopyCouponButton({ coupon, variant = 'large' }: CopyCouponButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(coupon);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (variant === 'badge') {
        return (
            <button
                onClick={handleCopy}
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 bg-black/30 hover:bg-black/40 active:bg-black/50 text-white rounded-md border border-white/20 transition-colors text-sm font-mono shadow-sm"
                title="Copy Coupon"
            >
                {coupon}
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
        );
    }

    return (
        <button
            onClick={handleCopy}
            className={`group relative overflow-hidden inline-flex items-center gap-4 px-10 py-5 rounded-2xl font-mono text-3xl font-black transition-all active:scale-95 border-2 ${copied
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]'
                    : 'bg-gradient-to-r from-emerald-950/80 to-slate-900/80 border-emerald-500/50 text-white hover:border-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#050505] shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                }`}
            title="Click to copy coupon code"
        >
            {/* Animated shimmer effect on hover */}
            {!copied && (
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            )}

            <div className="flex flex-col items-start gap-1 z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-emerald-400/80">
                    {copied ? 'Copied to clipboard' : 'Click to copy code'}
                </span>
                <span className="tracking-widest drop-shadow-lg">{coupon}</span>
            </div>

            <div className={`flex items-center justify-center p-3 rounded-xl transition-colors z-10 ${copied ? 'bg-emerald-500/20' : 'bg-emerald-500/10 group-hover:bg-emerald-500/30'}`}>
                {copied ? <Check className="h-7 w-7 text-emerald-400" /> : <Copy className="h-7 w-7 text-emerald-400 group-hover:scale-110 transition-transform" />}
            </div>
        </button>
    );
}
