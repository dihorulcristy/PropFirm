'use client';

import React, { useState, useMemo } from 'react';
import { Search, Copy, Check, Zap, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import type { Locale } from '@/lib/i18n/config';

// Translations for the coupons page
const translations = {
    en: {
        title: "Best Prop Trading",
        titleHighlight: "Discount Codes",
        activeToday: "Active Today",
        subtitle: "We negotiate directly with firms to offer you exclusive discounts",
        searchPlaceholder: "Search for your firm here...",
        flashSales: "Flash Sales",
        flashSalesSubtitle: "Limited-time offers that expire soon",
        viewOffer: "View Offer →",
        proTip: "Pro Tip:",
        proTipText: "Codes are verified daily. Use them as soon as possible for the best price!",
        verified: "Verified",
        copyCoupon: "Copy & Go",
        copied: "Copied!",
        noCoupon: "Use Link",
        off: "OFF",
        flashSale24h: "24H FLASH SALE!",
        limitedTime: "Limited Time!",
        weekendSpecial: "Weekend Special",
        couponCode: "Coupon Code",
        showCode: "Show Code & Copy",
        kickstart: "Kickstart 2026!",
        newYearSale: "New Year Sale",
        claimOffer: "Claim 20% OFF →",
        discountOnLink: "(Discount on Link)",
        freeReset: "FREE RESET!",
        newOffer: "New Offer!"
    },
    ro: {
        title: "Cele Mai Bune",
        titleHighlight: "Coduri de Reducere",
        activeToday: "Active Astăzi",
        subtitle: "Negociem direct cu firmele pentru reduceri exclusive",
        searchPlaceholder: "Caută firma ta aici...",
        flashSales: "Oferte Flash",
        flashSalesSubtitle: "Oferte pe timp limitat care expiră curând",
        viewOffer: "Vezi Oferta →",
        proTip: "Sfat Pro:",
        proTipText: "Codurile sunt verificate zilnic. Folosește-le cât mai curând pentru cel mai bun preț!",
        verified: "Verificat",
        copyCoupon: "Copiază",
        copied: "Copiat!",
        noCoupon: "Folosește Link",
        off: "REDUCERE",
        flashSale24h: "OFERTĂ FLASH 24H!",
        limitedTime: "Timp Limitat!",
        weekendSpecial: "Ofertă de Weekend",
        couponCode: "Cod Cupon",
        showCode: "Arată Codul",
        kickstart: "Start 2026!",
        newYearSale: "Promoție Anul Nou",
        claimOffer: "Ia 20% REDUCERE →",
        discountOnLink: "(Reducere pe Link)",
        freeReset: "RESETARE GRATUITĂ!",
        newOffer: "Ofertă Nouă!"
    },
    es: {
        title: "Mejores",
        titleHighlight: "Códigos de Descuento",
        activeToday: "Activos Hoy",
        subtitle: "Negociamos directamente con las firmas para descuentos exclusivos",
        searchPlaceholder: "Busca tu firma aquí...",
        flashSales: "Ventas Flash",
        flashSalesSubtitle: "Ofertas por tiempo limitado que expiran pronto",
        viewOffer: "Ver Oferta →",
        proTip: "Consejo Pro:",
        proTipText: "Los códigos se verifican diariamente. ¡Úsalos lo antes posible para el mejor precio!",
        verified: "Verificado",
        copyCoupon: "Copiar",
        copied: "¡Copiado!",
        noCoupon: "Usar Enlace",
        off: "DTO",
        flashSale24h: "¡VENTA FLASH 24H!",
        limitedTime: "¡Tiempo Limitado!",
        weekendSpecial: "Especial Fin de Semana",
        couponCode: "Código Cupón",
        showCode: "Mostrar Código",
        kickstart: "¡Inicio 2026!",
        newYearSale: "Oferta Año Nuevo",
        claimOffer: "Obtén 20% DTO →",
        discountOnLink: "(Descuento en Enlace)",
        freeReset: "¡REINICIO GRATIS!",
        newOffer: "¡Nueva Oferta!"
    }
};

// Firm interface for deals page
interface DealFirm {
    id: number;
    name: string;
    logoUrl: string;
    discount: string;
    coupon: string;
    offer: string;
    link: string;
    verified: boolean;
    priority: number;
    hasActiveCoupon: boolean;
}

// All firms with deals - ordered by priority
const allDeals: DealFirm[] = [
    {
        id: 1,
        name: 'FTMO',
        logoUrl: '/logos/ftmo.png',
        discount: '20% OFF',
        coupon: 'No Code Used',
        offer: '20% OFF (New Year Sale)',
        link: 'https://trader.ftmo.com/?affiliates=4354',
        verified: true,
        priority: 1,
        hasActiveCoupon: true
    },
    {
        id: 25,
        name: 'InstantFunding',
        logoUrl: '/logos/instantfunding.png',
        discount: '35% OFF + 90% Split',
        coupon: 'TRADER2026',
        offer: '35% OFF + Free 90% Profit Split',
        link: 'https://instantfunding.com/?partner=419',
        verified: true,
        priority: 2,
        hasActiveCoupon: true
    },
    {
        id: 23,
        name: 'SpiceProp',
        logoUrl: '/logos/spiceprop.png',
        discount: '10% OFF + 5% Profit',
        coupon: 'SANTANEXT',
        offer: '10% OFF + 5% Extra Profit Split + Free Reset',
        link: 'https://my.spiceprop.com/agent_pp.html?agent_pp=28203897',
        verified: true,
        priority: 2,
        hasActiveCoupon: true
    },
    {
        id: 6,
        name: 'FunderPro',
        logoUrl: '/logos/funderpro.png',
        discount: '20% OFF',
        coupon: 'hgc',
        offer: '20% OFF',
        link: 'https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian',
        verified: true,
        priority: 3,
        hasActiveCoupon: true
    },
    {
        id: 5,
        name: 'FundingPips',
        logoUrl: '/logos/fundingpips.png',
        discount: '5% OFF',
        coupon: 'b5420489',
        offer: '5% OFF',
        link: 'https://app.fundingpips.com/register?ref=b5420489',
        verified: true,
        priority: 4,
        hasActiveCoupon: true
    },
    {
        id: 2,
        name: 'TradingCult',
        logoUrl: '/logos/tradingcult.png',
        discount: '40% OFF + Free Account',
        coupon: 'NEWYEAR',
        offer: '40% OFF + Free Account on Payout',
        link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
        verified: true,
        priority: 5,
        hasActiveCoupon: true
    },
    {
        id: 4,
        name: 'FundedNext',
        logoUrl: '/logos/fundednext.png',
        discount: '5% OFF',
        coupon: 'REFER7DVQ',
        offer: '5% OFF',
        link: 'https://fundednext.com/',
        verified: true,
        priority: 7,
        hasActiveCoupon: true
    },
    {
        id: 24,
        name: 'QTFunded',
        logoUrl: '/logos/qtfunded.png',
        discount: '40% OFF + FREE Account',
        coupon: 'QTINSTANT40',
        offer: '40% OFF + FREE QT Instant',
        link: 'https://qtfunded.quanttekel.com/ref/5570/',
        verified: true,
        priority: 4,
        hasActiveCoupon: true
    }
];

interface CouponsPageProps {
    lang?: Locale;
}

export default function LocalizedCouponsPage({ lang = 'en' }: CouponsPageProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedId, setCopiedId] = useState<number | null>(null);

    const t = translations[lang] || translations.en;

    const filteredDeals = useMemo(() => {
        if (!searchQuery) return allDeals;
        return allDeals.filter(deal =>
            deal.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const handleCopyAndRedirect = (deal: DealFirm) => {
        if (deal.hasActiveCoupon && deal.coupon !== 'No Code Used') {
            navigator.clipboard.writeText(deal.coupon);
            setCopiedId(deal.id);
            setTimeout(() => setCopiedId(null), 3000);
        }
        window.open(deal.link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#050505] text-slate-50">
            <Header lang={lang} />
            <main className="flex-1">
                <div className="min-h-screen bg-black">
                    {/* Hero Section */}
                    <section className="relative py-20 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
                        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

                        <div className="container mx-auto px-4 relative z-10">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center font-display uppercase tracking-tight">
                                {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">{t.titleHighlight}</span>
                            </h1>
                            <p className="text-xl text-slate-400 text-center mb-2">
                                <span className="text-emerald-400 font-semibold">{t.activeToday}</span> · {t.subtitle}
                            </p>
                            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-12" />

                            {/* Search Bar */}
                            <div className="max-w-2xl mx-auto mb-8">
                                <div className="relative">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                                    <input
                                        type="text"
                                        placeholder={t.searchPlaceholder}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl pl-14 pr-6 py-5 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 text-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Content: Deals Grid + Flash Sales */}
                    <section className="pb-20">
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {/* Flash Sales Sidebar - First on mobile */}
                                <div className="lg:col-span-1 order-first lg:order-last">
                                    <div className="sticky top-6">
                                        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-lg border border-red-500/30 rounded-2xl p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Zap className="h-6 w-6 text-orange-400 animate-pulse" />
                                                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{t.flashSales}</h3>
                                            </div>

                                            <div className="space-y-4">
                                                {/* Flash Sale - Funded Futures Network */}
                                                <div className="bg-gradient-to-br from-yellow-900/60 to-yellow-950/60 border border-yellow-500/30 rounded-xl p-4">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5 animate-pulse" />
                                                        <div>
                                                            <p className="text-sm font-bold text-yellow-400 mb-1">🎁 BOGO + NO ACTIVATION FEE!</p>
                                                            <p className="text-white font-semibold">Funded Futures Network</p>
                                                            <p className="text-sm text-slate-300">50% OFF + BOGO with code <span className="text-yellow-400 font-mono">NEWYEAR50</span></p>
                                                        </div>
                                                    </div>
                                                    <Link
                                                        href="https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian"
                                                        target="_blank"
                                                        className="text-xs text-yellow-400 hover:text-yellow-300 font-medium underline"
                                                    >
                                                        Get 50% OFF + BOGO →
                                                    </Link>
                                                </div>

                                                {/* Flash Sale 1 - FTMO New Year Sale */}
                                                <div className="bg-gradient-to-br from-emerald-900/60 to-emerald-950/60 border border-emerald-500/30 rounded-xl p-4">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="text-sm font-bold text-emerald-400 mb-1">🔥 {t.kickstart}</p>
                                                            <p className="text-white font-semibold">FTMO - {t.newYearSale}</p>
                                                            <p className="text-sm text-slate-300">20% {t.off} <span className="text-emerald-400 font-mono">{t.discountOnLink}</span></p>
                                                        </div>
                                                    </div>
                                                    <a href="https://trader.ftmo.com/?affiliates=4354" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline">{t.claimOffer}</a>
                                                </div>

                                                {/* SpiceProp */}
                                                <div className="bg-gradient-to-br from-red-900/60 to-red-950/60 border border-red-500/30 rounded-xl p-4">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <Zap className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5 animate-pulse" />
                                                        <div>
                                                            <p className="text-sm font-bold text-red-400 mb-1">🌶️ {t.freeReset}</p>
                                                            <p className="text-white font-semibold">SpiceProp</p>
                                                            <p className="text-sm text-slate-300">Free Reset + 10% {t.off} <span className="text-red-400 font-mono">SANTARESET</span></p>
                                                        </div>
                                                    </div>
                                                    <a href="https://my.spiceprop.com/agent_pp.html?agent_pp=28203897" target="_blank" rel="noopener noreferrer" className="text-xs text-red-400 hover:text-red-300 font-medium underline">{t.viewOffer}</a>
                                                </div>

                                                {/* FundedNext */}
                                                <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <Clock className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <p className="text-sm font-bold text-red-400 mb-1">🔥 {t.newOffer}</p>
                                                            <p className="text-white font-semibold">FundedNext</p>
                                                            <p className="text-sm text-slate-300">5% {t.off} <span className="text-emerald-400 font-mono">REFER7DVQ</span></p>
                                                        </div>
                                                    </div>
                                                    <a href="https://fundednext.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline">{t.viewOffer}</a>
                                                </div>

                                                {/* FunderPro */}
                                                <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                                                    <div className="flex items-start gap-3 mb-3">
                                                        <Zap className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5 animate-pulse" />
                                                        <div>
                                                            <p className="text-sm font-bold text-yellow-400 mb-1">{t.weekendSpecial}</p>
                                                            <p className="text-white font-semibold">FunderPro</p>
                                                            <p className="text-sm text-slate-300">20% {t.off} <span className="text-emerald-400 font-mono">hgc</span></p>
                                                        </div>
                                                    </div>
                                                    <a href="https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 font-medium underline">{t.viewOffer}</a>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-6 border-t border-white/10">
                                                <p className="text-xs text-slate-400 leading-relaxed">💡 <span className="text-white font-semibold">{t.proTip}</span> {t.proTipText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Deals Grid */}
                                <div className="lg:col-span-2 order-last lg:order-first">
                                    <div className="grid gap-6">
                                        {filteredDeals.map((deal) => (
                                            <div key={deal.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-xl bg-black overflow-hidden">
                                                        <img src={deal.logoUrl} alt={deal.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-white text-lg">{deal.name}</h3>
                                                        {deal.verified && (
                                                            <div className="flex items-center gap-1 text-xs text-blue-400">
                                                                <ShieldCheck className="h-3 w-3" /> {t.verified}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="mb-4">
                                                    <div className="text-2xl font-bold text-emerald-400">{deal.discount}</div>
                                                    <div className="text-sm text-slate-400">{deal.offer}</div>
                                                </div>

                                                <div className="flex items-center gap-2 mb-4">
                                                    <code className="flex-1 bg-black/50 border border-dashed border-emerald-500/40 px-3 py-2 rounded-lg text-emerald-400 font-mono">
                                                        {deal.coupon}
                                                    </code>
                                                </div>

                                                <button
                                                    onClick={() => handleCopyAndRedirect(deal)}
                                                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition"
                                                >
                                                    {copiedId === deal.id ? (
                                                        <>
                                                            <Check className="h-5 w-5" />
                                                            {t.copied}
                                                        </>
                                                    ) : deal.coupon !== 'No Code Used' ? (
                                                        <>
                                                            <Copy className="h-5 w-5" />
                                                            {t.copyCoupon}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Zap className="h-5 w-5" />
                                                            {t.noCoupon}
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer lang={lang} />
        </div>
    );
}
