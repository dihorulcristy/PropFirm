'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface EmailCapturePopupProps {
    onClose?: () => void;
    delay?: number;
}

export default function EmailCapturePopup({ onClose, delay = 3000 }: EmailCapturePopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const hasCompletedForm = localStorage.getItem('emailPopupCompleted');

        if (!hasCompletedForm) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [delay]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe');
            }

            // Save to localStorage that form was completed
            localStorage.setItem('emailPopupCompleted', 'true');

            setIsSubmitting(false);
            setIsSuccess(true);

            setTimeout(() => {
                handleClose();
            }, 2000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsSubmitting(false);
            alert('Something went wrong. Please try again.');
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
                }`}
            onClick={handleClose}
        >
            <div
                className={`relative w-full max-w-lg transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-[2px] shadow-2xl">
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                        </div>

                        <div className="relative p-5 sm:p-8 md:p-12">
                            {!isSuccess ? (
                                <>
                                    <div className="flex justify-center mb-4 sm:mb-6">
                                        <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs sm:text-sm font-bold text-gray-900 shadow-lg animate-pulse">
                                            🎁 LIMITED TIME OFFER
                                        </div>
                                    </div>

                                    <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-2 sm:mb-3 leading-tight">
                                        Get Your FREE
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-2xl sm:text-4xl md:text-5xl mt-1 sm:mt-2">
                                            $25,000 Funded Account
                                        </span>
                                    </h2>

                                    <p className="text-center text-gray-300 text-sm sm:text-lg mb-4 sm:mb-8 max-w-md mx-auto">
                                        Join <span className="font-bold text-white">10,000+ traders</span> who are already trading with our capital. No strings attached!
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8">
                                        <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                            <div className="text-xl sm:text-2xl mb-1">⚡</div>
                                            <div className="text-[10px] sm:text-sm text-gray-300 leading-tight">Instant Access</div>
                                        </div>
                                        <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                            <div className="text-xl sm:text-2xl mb-1">💎</div>
                                            <div className="text-[10px] sm:text-sm text-gray-300 leading-tight">Keep 80% Profits</div>
                                        </div>
                                        <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                            <div className="text-xl sm:text-2xl mb-1">🚀</div>
                                            <div className="text-[10px] sm:text-sm text-gray-300 leading-tight">Scale to $200K</div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Your Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm sm:text-base"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 sm:py-4 px-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-gray-900 font-bold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </span>
                                            ) : (
                                                '🎯 Claim My FREE $25K Account Now'
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6">
                                        🔒 Your information is 100% secure and will never be shared
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Welcome Aboard! 🎉</h3>
                                    <p className="text-gray-300 text-base sm:text-lg">
                                        Check your email for instant access to your $25,000 funded account!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-300">
                        ⏰ <span className="font-bold">Only 7 spots left</span> today at this offer price
                    </p>
                </div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
        </div>
    );
}
