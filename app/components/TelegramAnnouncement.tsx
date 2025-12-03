'use client';

import { useState } from 'react';
import { Gift } from 'lucide-react';
import EmailCapturePopup from './EmailCapturePopup';

export default function TelegramAnnouncement() {
    const [showEmailPopup, setShowEmailPopup] = useState(false);

    return (
        <>
            <div className="w-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 border-b border-white/10 py-3 px-4 relative overflow-hidden">
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        {/* Badge & Message */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-1 bg-orange-500 rounded-full text-xs font-bold text-white animate-pulse">
                                <Gift className="w-3 h-3" />
                                <span>GIVEAWAY</span>
                            </div>
                            <p className="text-gray-100 font-semibold text-sm sm:text-base">
                                🎁 Join our Telegram for the <span className="text-yellow-400">Funded Account Draw</span>
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-3">
                            {/* Sign Up Button */}
                            <button
                                onClick={() => setShowEmailPopup(true)}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                </svg>
                                <span>Sign Up</span>
                            </button>

                            {/* Telegram Button */}
                            <a
                                href="https://t.me/PrpFirmHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0088cc] hover:bg-[#0077b3] text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200"
                            >
                                {/* Official Telegram Icon */}
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                                </svg>
                                <span className="hidden sm:inline">Join </span><span>Telegram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes shimmer {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    .animate-shimmer {
                        animation: shimmer 3s infinite;
                    }
                `}</style>
            </div>

            {/* Email Capture Popup */}
            {showEmailPopup && (
                <EmailCapturePopup
                    onClose={() => setShowEmailPopup(false)}
                    delay={0}
                    forceShow={true}
                />
            )}
        </>
    );
}
