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
                className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-md border border-white/10 transition-colors text-sm font-mono shadow-sm"
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
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-2xl font-bold transition-all shadow-xl active:scale-95 border-2 ${copied
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                    : 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800 hover:border-emerald-500 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#050505]'
                }`}
            title="Click to copy coupon code"
        >
            <span className="tracking-wider">{coupon}</span>
            {copied ? <Check className="h-6 w-6 text-emerald-400" /> : <Copy className="h-6 w-6 text-slate-400 group-hover:text-emerald-400" />}
        </button>
    );
}
