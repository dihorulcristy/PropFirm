'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';

// Translations for the popup
const translations = {
    en: {
        limitedTimeOffer: "LIMITED TIME OFFER",
        getYourFree: "Get Your FREE",
        fundedAccount: "$25,000 Funded Account",
        joinTraders: "Join",
        tradersCount: "10,000+ traders",
        tradersText: "who are already trading with our capital. No strings attached!",
        instantAccess: "Instant Access",
        keepProfits: "Keep 80% Profits",
        scaleTo: "Scale to $200K",
        yourFullName: "Your Full Name",
        yourEmail: "Your Email Address",
        processing: "Processing...",
        claimButton: "🎯 Claim My FREE $25K Account Now",
        secureInfo: "🔒 Your information is 100% secure and will never be shared",
        welcomeAboard: "Welcome Aboard! 🎉",
        checkEmail: "Check your email for instant access to your $25,000 funded account!",
        spotsLeft: "Only 7 spots left",
        todayOffer: "today at this offer price",
        error: "Something went wrong. Please try again."
    },
    ro: {
        limitedTimeOffer: "OFERTĂ LIMITATĂ",
        getYourFree: "Primește GRATUIT",
        fundedAccount: "Cont Finanțat de $25,000",
        joinTraders: "Alătură-te celor",
        tradersCount: "10,000+ traderi",
        tradersText: "care deja tranzacționează cu capitalul nostru. Fără obligații!",
        instantAccess: "Acces Instant",
        keepProfits: "Păstrezi 80% Profit",
        scaleTo: "Scalează la $200K",
        yourFullName: "Numele Tău Complet",
        yourEmail: "Adresa Ta de Email",
        processing: "Se procesează...",
        claimButton: "🎯 Revendică Contul Meu GRATUIT de $25K",
        secureInfo: "🔒 Informațiile tale sunt 100% sigure și nu vor fi partajate",
        welcomeAboard: "Bine ai venit! 🎉",
        checkEmail: "Verifică emailul pentru acces instant la contul tău finanțat de $25,000!",
        spotsLeft: "Doar 7 locuri rămase",
        todayOffer: "astăzi la acest preț",
        error: "Ceva nu a funcționat. Te rugăm să încerci din nou."
    },
    es: {
        limitedTimeOffer: "OFERTA LIMITADA",
        getYourFree: "Obtén tu GRATIS",
        fundedAccount: "Cuenta Financiada de $25,000",
        joinTraders: "Únete a",
        tradersCount: "10,000+ traders",
        tradersText: "que ya están operando con nuestro capital. ¡Sin ataduras!",
        instantAccess: "Acceso Instantáneo",
        keepProfits: "Quédate 80% Beneficios",
        scaleTo: "Escala a $200K",
        yourFullName: "Tu Nombre Completo",
        yourEmail: "Tu Dirección de Email",
        processing: "Procesando...",
        claimButton: "🎯 Reclamar Mi Cuenta GRATIS de $25K",
        secureInfo: "🔒 Tu información es 100% segura y nunca será compartida",
        welcomeAboard: "¡Bienvenido a bordo! 🎉",
        checkEmail: "¡Revisa tu correo para acceso instantáneo a tu cuenta financiada de $25,000!",
        spotsLeft: "Solo quedan 7 lugares",
        todayOffer: "hoy a este precio de oferta",
        error: "Algo salió mal. Por favor inténtalo de nuevo."
    }
};

interface EmailCapturePopupProps {
    onClose?: () => void;
    delay?: number;
    forceShow?: boolean;
    lang?: Locale;
}

export default function EmailCapturePopup({ onClose, delay = 3000, forceShow = false, lang = 'en' }: EmailCapturePopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const t = translations[lang] || translations.en;

    useEffect(() => {
        const hasCompletedForm = localStorage.getItem('emailPopupCompleted');

        if (!hasCompletedForm || forceShow) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [delay, forceShow]);

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
            alert(t.error);
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto ${isClosing ? 'opacity-0' : 'opacity-100'
                }`}
            onClick={handleClose}
        >
            <div
                className={`relative w-full max-w-md my-4 sm:my-8 transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
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

                        <div className="relative p-4 sm:p-5 max-h-[80vh] overflow-y-auto">
                            {!isSuccess ? (
                                <>
                                    <div className="flex justify-center mb-2 sm:mb-3">
                                        <div className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-[10px] font-bold text-gray-900 shadow-lg animate-pulse">
                                            🎁 {t.limitedTimeOffer}
                                        </div>
                                    </div>

                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-2 leading-tight">
                                        {t.getYourFree}
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-xl sm:text-2xl md:text-3xl mt-1">
                                            {t.fundedAccount}
                                        </span>
                                    </h2>

                                    <p className="text-center text-gray-300 text-xs sm:text-sm mb-3 max-w-md mx-auto">
                                        {t.joinTraders} <span className="font-bold text-white">{t.tradersCount}</span> {t.tradersText}
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 mb-3 sm:mb-4">
                                        <div className="text-center p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                            <div className="text-lg sm:text-xl mb-1">⚡</div>
                                            <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 leading-tight">{t.instantAccess}</div>
                                        </div>
                                        <div className="text-center p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                            <div className="text-lg sm:text-xl mb-1">💎</div>
                                            <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 leading-tight">{t.keepProfits}</div>
                                        </div>
                                        <div className="text-center p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                            <div className="text-lg sm:text-xl mb-1">🚀</div>
                                            <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-300 leading-tight">{t.scaleTo}</div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                        <input
                                            type="text"
                                            placeholder={t.yourFullName}
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-xs sm:text-sm"
                                        />
                                        <input
                                            type="email"
                                            placeholder={t.yourEmail}
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-xs sm:text-sm"
                                        />
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-2.5 sm:py-3 px-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-gray-900 font-bold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    {t.processing}
                                                </span>
                                            ) : (
                                                t.claimButton
                                            )}
                                        </button>
                                    </form>

                                    <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6">
                                        {t.secureInfo}
                                    </p>
                                </>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounce">
                                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">{t.welcomeAboard}</h3>
                                    <p className="text-gray-300 text-base sm:text-lg">
                                        {t.checkEmail}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-300">
                        ⏰ <span className="font-bold">{t.spotsLeft}</span> {t.todayOffer}
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
