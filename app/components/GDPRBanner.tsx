'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GDPRBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 p-4 md:p-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-white font-bold text-lg mb-2">🍪 Cookie Consent</h3>
                        <p className="text-slate-300 text-sm">
                            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                            By clicking "Accept", you consent to our use of cookies. Read our{' '}
                            <Link href="/privacy-policy" className="text-emerald-400 hover:text-emerald-300 underline">
                                Privacy Policy
                            </Link>{' '}
                            and{' '}
                            <Link href="/cookie-policy" className="text-emerald-400 hover:text-emerald-300 underline">
                                Cookie Policy
                            </Link>{' '}
                            for more information.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={declineCookies}
                            className="px-6 py-2.5 rounded-lg border border-slate-700 bg-black/80 text-slate-300 hover:border-slate-600 hover:bg-black transition-all text-sm font-medium"
                        >
                            Decline
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-lg hover:shadow-emerald-900/30 transition-all text-sm font-bold"
                        >
                            Accept Cookies
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
