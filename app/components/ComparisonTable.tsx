'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, Check, Copy, ChevronDown, Zap, Trophy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { clsx } from 'clsx';
import type { Locale } from '@/lib/i18n/config';

// Helper to generate slug from firm name
const generateSlug = (name: string): string => {
    return name
        .toLowerCase()
        .replace(/\s*\([^)]*\)\s*/g, '') // Remove parentheses and content
        .replace(/[^a-z0-9]+/g, '-')     // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, '');        // Trim leading/trailing hyphens
};

// UI Translations
const translations = {
    en: {
        title: "Compare",
        titleHighlight: "Evaluation Programs",
        subtitle: "Find the perfect simulated trading evaluation program for your needs",
        allMarkets: "All Markets",
        forex: "Forex",
        futures: "Futures",
        all: "All",
        allSizes: "All Sizes",
        platform: "Platform",
        anyPlatform: "Any Platform",
        type: "Type",
        anyType: "Any Type",
        sort: "Sort",
        recommended: "Recommended",
        bestValue: "Best Value",
        cheapest: "Cheapest",
        fastestPayout: "Fastest Payout",
        moreFilters: "More Filters",
        reset: "Reset",
        instantFunding: "Instant Funding",
        hftAllowed: "HFT Allowed",
        balanceBasedDD: "Balance-Based DD",
        newsTrading: "News Trading",
        cryptoPayout: "Crypto Payout",
        usaAccepted: "USA Accepted",
        noTimeLimit: "No Time Limit",
        weeklyPayouts: "Weekly Payouts",
        verified: "Verified",
        rules: "Rules",
        maxDD: "Max DD",
        profitSplit: "Profit Split",
        startFrom: "Start from",
        getFunded: "Get Funded",
        copyCoupon: "Copy coupon",
        copied: "Copied!",
        noFirmsFound: "No firms match your filters",
        tryAdjusting: "Try adjusting your filters to see more options",
        clearFilters: "Clear Filters",
        payout: "Payout",
        days: "days",
        // Capital sizes
        mini: "Mini",
        starter: "Starter",
        growth: "Growth",
        standard: "Standard",
        pro: "Pro",
        whale: "Whale",
        // Filter labels
        firm: "Firm",
        rating: "Rating",
        keyRules: "Key Rules",
        price: "Price",
        action: "Action",
        offer: "Offer",
        // New offer labels
        newOffer: "New Offer",
        limitedTime: "Limited Time",
        hotDeal: "Hot Deal",
        // Table headers
        community: "Community",
        coupon: "Coupon",
        activeOffers: "Active Offers",
        activeOffer: "Active Offer",
        showing: "Showing",
        firms: "firms",
        noCode: "No Code"
    },
    ro: {
        title: "Compară",
        titleHighlight: "Programele de Evaluare",
        subtitle: "Găsește programul de evaluare de trading simulat perfect pentru nevoile tale",
        allMarkets: "Toate Piețele",
        forex: "Forex",
        futures: "Futures",
        all: "Toate",
        allSizes: "Toate Dimensiunile",
        platform: "Platformă",
        anyPlatform: "Orice Platformă",
        type: "Tip",
        anyType: "Orice Tip",
        sort: "Sortare",
        recommended: "Recomandat",
        bestValue: "Cea Mai Bună Valoare",
        cheapest: "Cel Mai Ieftin",
        fastestPayout: "Cea Mai Rapidă Plată",
        moreFilters: "Mai Multe Filtre",
        reset: "Resetează",
        instantFunding: "Finanțare Instantă",
        hftAllowed: "HFT Permis",
        balanceBasedDD: "DD pe Sold",
        newsTrading: "Trading pe Știri",
        cryptoPayout: "Plată Crypto",
        usaAccepted: "SUA Acceptat",
        noTimeLimit: "Fără Limită de Timp",
        weeklyPayouts: "Plăți Săptămânale",
        verified: "Verificat",
        rules: "Reguli",
        maxDD: "DD Max",
        profitSplit: "Împărțire Profit",
        startFrom: "Începe de la",
        getFunded: "Începe Acum",
        copyCoupon: "Copiază cupon",
        copied: "Copiat!",
        noFirmsFound: "Nicio firmă nu corespunde filtrelor",
        tryAdjusting: "Încearcă să ajustezi filtrele pentru mai multe opțiuni",
        clearFilters: "Șterge Filtrele",
        payout: "Plată",
        days: "zile",
        // Capital sizes
        mini: "Mini",
        starter: "Începător",
        growth: "Creștere",
        standard: "Standard",
        pro: "Pro",
        whale: "Avansat",
        // Filter labels
        firm: "Firmă",
        rating: "Rating",
        keyRules: "Reguli Cheie",
        price: "Preț",
        action: "Acțiune",
        offer: "Ofertă",
        // New offer labels
        newOffer: "Ofertă Nouă",
        limitedTime: "Timp Limitat",
        hotDeal: "Ofertă Fierbinte",
        // Table headers
        community: "Comunitate",
        coupon: "Cupon",
        activeOffers: "Oferte Active",
        activeOffer: "Ofertă Activă",
        showing: "Afișare",
        firms: "firme",
        noCode: "Fără Cod"
    },
    es: {
        title: "Comparar",
        titleHighlight: "Programas de Evaluación",
        subtitle: "Encuentra el programa de evaluación de trading simulado perfecto para tus necesidades",
        allMarkets: "Todos los Mercados",
        forex: "Forex",
        futures: "Futuros",
        all: "Todo",
        allSizes: "Todos los Tamaños",
        platform: "Plataforma",
        anyPlatform: "Cualquier Plataforma",
        type: "Tipo",
        anyType: "Cualquier Tipo",
        sort: "Ordenar",
        recommended: "Recomendado",
        bestValue: "Mejor Valor",
        cheapest: "Más Barato",
        fastestPayout: "Pago Más Rápido",
        moreFilters: "Más Filtros",
        reset: "Resetear",
        instantFunding: "Financiación Instantánea",
        hftAllowed: "HFT Permitido",
        balanceBasedDD: "DD en Balance",
        newsTrading: "Trading en Noticias",
        cryptoPayout: "Pago Crypto",
        usaAccepted: "USA Aceptado",
        noTimeLimit: "Sin Límite de Tiempo",
        weeklyPayouts: "Pagos Semanales",
        verified: "Verificado",
        rules: "Reglas",
        maxDD: "DD Max",
        profitSplit: "División de Ganancias",
        startFrom: "Empieza desde",
        getFunded: "Empieza Ahora",
        copyCoupon: "Copiar cupón",
        copied: "¡Copiado!",
        noFirmsFound: "Ninguna firma coincide con tus filtros",
        tryAdjusting: "Intenta ajustar tus filtros para ver más opciones",
        clearFilters: "Limpiar Filtros",
        payout: "Pago",
        days: "días",
        // Capital sizes
        mini: "Mini",
        starter: "Principiante",
        growth: "Crecimiento",
        standard: "Estándar",
        pro: "Pro",
        whale: "Avanzado",
        // Filter labels
        firm: "Firma",
        rating: "Rating",
        keyRules: "Reglas Clave",
        price: "Precio",
        action: "Acción",
        offer: "Oferta",
        // New offer labels
        newOffer: "Nueva Oferta",
        limitedTime: "Tiempo Limitado",
        hotDeal: "Oferta Caliente",
        // Table headers
        community: "Comunidad",
        coupon: "Cupón",
        activeOffers: "Ofertas Activas",
        activeOffer: "Oferta Activa",
        showing: "Mostrando",
        firms: "firmas",
        noCode: "Sin Código"
    }
};

// Firm interface with all filter properties
interface Firm {
    id: number;
    name: string;
    rating: number;
    verified: boolean;
    rules: { maxDD: string; profit: string };
    price: string;
    oldPrice: string;
    coupon: string;
    action: string;
    link: string;
    logoUrl: string;
    offer?: string; // New field for active offers
    // Filter properties
    capital: number;
    platform: string[];
    challengeType: '2-Step' | '1-Step' | 'Instant';
    marketType: 'forex' | 'futures';
    instantFunding: boolean;
    hftAllowed: boolean;
    balanceBasedDD: boolean;
    newsTrading: boolean;
    cryptoPayout: boolean;
    usaAccepted: boolean;
    noTimeLimit: boolean;
    weeklyPayouts: boolean;
    payoutDays: number;
    hiddenOnAll?: boolean;
    capitalPricing: {
        [key: number]: {
            price: string;
            oldPrice: string;
        };
    };
}

const allFirms: Firm[] = [
    {
        id: 1,
        name: 'FTMO',
        rating: 4.9,
        verified: true,
        rules: { maxDD: '10%', profit: '80-90%' },
        price: '$535',
        oldPrice: '$595',
        coupon: 'No Code',
        offer: '20% OFF',
        action: 'Get Funded',
        link: 'https://trader.ftmo.com/?affiliates=4354',
        logoUrl: '/logos/ftmo.png',
        capital: 100000,
        platform: ['MT4/5', 'cTrader', 'DXtrade'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            10000: { price: '$170', oldPrice: '$170' },
            25000: { price: '$275', oldPrice: '$275' },
            50000: { price: '$380', oldPrice: '$380' },
            100000: { price: '$476', oldPrice: '$595' },
            200000: { price: '$1190', oldPrice: '$1190' },
        }
    },
    {
        id: 2,
        name: 'TradingCult',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '10%', profit: 'Up to 95%' },
        price: '$499',
        oldPrice: '$499',
        coupon: 'NEWYEAR',
        offer: '40% OFF + Free Account',
        action: 'Get Funded',
        link: 'https://my.tradingcult.com//challenges?affiliateId=hgc',
        logoUrl: '/logos/tradingcult.png',
        capital: 100000,
        platform: ['MT4'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: true,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            10000: { price: '$99', oldPrice: '$99' },
            25000: { price: '$199', oldPrice: '$199' },
            50000: { price: '$299', oldPrice: '$299' },
            100000: { price: '$499', oldPrice: '$499' },
            200000: { price: '$999', oldPrice: '$999' },
        }
    },
    {
        id: 4,
        name: 'FundedNext',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '10%', profit: '80-95%' },
        price: '$549',
        oldPrice: '$549',
        coupon: 'REFER7DVQ',
        offer: '5% OFF',
        action: 'Get Funded',
        link: 'https://fundednext.com/',
        logoUrl: '/logos/fundednext.png',
        capital: 100000,
        platform: ['MT4', 'MT5', 'cTrader', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 1,
        capitalPricing: {
            6000: { price: '$59', oldPrice: '$59' },
            15000: { price: '$119', oldPrice: '$119' },
            25000: { price: '$199', oldPrice: '$199' },
            50000: { price: '$299', oldPrice: '$299' },
            100000: { price: '$549', oldPrice: '$549' },
            200000: { price: '$1099', oldPrice: '$1099' },
        }
    },
    {
        id: 5,
        name: 'FundingPips',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '10%', profit: '80-100%' },
        price: '$399',
        oldPrice: '$399',
        coupon: 'b5420489',
        offer: '5% OFF',
        action: 'Get Funded',
        link: 'https://app.fundingpips.com/register?ref=b5420489',
        logoUrl: '/logos/fundingpips.png',
        capital: 100000,
        platform: ['Match-Trader', 'cTrader', 'TradeLocker'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 7,
        capitalPricing: {
            5000: { price: '$32', oldPrice: '$32' },
            10000: { price: '$60', oldPrice: '$60' },
            25000: { price: '$139', oldPrice: '$139' },
            50000: { price: '$239', oldPrice: '$239' },
            100000: { price: '$399', oldPrice: '$399' },
        }
    },
    {
        id: 6,
        name: 'FunderPro',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '10%', profit: '80-90%' },
        price: '$549',
        oldPrice: '$549',
        coupon: 'hgc',
        offer: '20% OFF',
        action: 'Get Funded',
        link: 'https://funderpro.cxclick.com/visit/?bta=35241&brand=funderpro',
        logoUrl: '/logos/funderpro.png',
        capital: 100000,
        platform: ['TradeLocker', 'MT4', 'MT5', 'cTrader'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 1,
        capitalPricing: {
            25000: { price: '$249', oldPrice: '$249' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$549', oldPrice: '$549' },
            200000: { price: '$1099', oldPrice: '$1099' },
        }
    },
    {
        id: 7,
        name: 'The Concept Trading',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '6% (Static)', profit: 'Up to 90%' },
        price: '$997',
        oldPrice: '$997',
        coupon: 'RESOLVE35',
        offer: '35% OFF (Ex-Instant)',
        action: 'Start Career',
        link: 'https://theconcepttrading.com/ref/1837/',
        logoUrl: '/logos/the-trading-concept.jpg',
        capital: 100000,
        platform: ['MT4', 'MT5'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: true,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 2,
        capitalPricing: {
            5000: { price: '$65', oldPrice: '$65' },
            10000: { price: '$110', oldPrice: '$110' },
            100000: { price: '$997', oldPrice: '$997' },
        }
    },

    {
        id: 9,
        name: 'Dominion Funding',
        rating: 4.6,
        verified: true,
        rules: { maxDD: '10%', profit: '80%' },
        price: '$549',
        oldPrice: '$549',
        coupon: 'PROPHUB',
        offer: '5% OFF',
        action: 'Get Funded',
        link: 'https://dominionfunding.trade//?affId=06bqracaI4',
        logoUrl: '/logos/dominion-funding.png',
        capital: 100000,
        platform: ['cTrader', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            7500: { price: '$89', oldPrice: '$89' },
            10000: { price: '$119', oldPrice: '$119' },
            25000: { price: '$249', oldPrice: '$249' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$549', oldPrice: '$549' },
        }
    },
    {
        id: 10,
        name: 'FunderPro Futures',
        rating: 4.7,
        verified: true,
        rules: { maxDD: '10%', profit: '80-90%' },
        price: '$549',
        oldPrice: '$549',
        coupon: 'HGC',
        offer: '10% OFF',
        action: 'Get Funded',
        link: 'https://checkout.funderprofutures.com/products?aff=hgc',
        logoUrl: '/logos/funderpro-futures.png',
        capital: 100000,
        platform: ['TradeLocker', 'NinjaTrader', 'Rithmic'],
        challengeType: '2-Step',
        marketType: 'futures',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 1,
        capitalPricing: {
            25000: { price: '$249', oldPrice: '$249' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$549', oldPrice: '$549' },
            200000: { price: '$1099', oldPrice: '$1099' },
        }
    },
    {
        id: 11,
        name: 'Funded Futures Network',
        rating: 4.6,
        verified: true,
        rules: { maxDD: '8%', profit: '80%' },
        price: '$598',
        oldPrice: '$598',
        coupon: 'T2ISFNWP',
        offer: '50% OFF',
        action: 'Get Funded',
        link: 'https://www.fundedfuturesnetwork.com/?via=herghiligiu-cristian',
        logoUrl: '/logos/funded-futures-network.png',
        capital: 100000,
        platform: ['NinjaTrader', 'Rithmic', 'TradingView'],
        challengeType: '2-Step',
        marketType: 'futures',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            25000: { price: '$298', oldPrice: '$298' },
            50000: { price: '$398', oldPrice: '$398' },
            100000: { price: '$598', oldPrice: '$598' },
            150000: { price: '$898', oldPrice: '$898' },
        }
    },
    {
        id: 13,
        name: 'YRM Prop',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '10%', profit: '90%' },
        price: '$149',
        oldPrice: '$149',
        coupon: 'HGC',
        offer: 'EXTRA 5% OFF',
        action: 'Get Funded',
        link: 'https://yrmprop.com/ref/dihorulcristy/',
        logoUrl: '/yrm-prop.png',
        capital: 100000,
        platform: ['NinjaTrader', 'Rithmic'],
        challengeType: '2-Step',
        marketType: 'futures',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 14,
        capitalPricing: {
            25000: { price: '$59', oldPrice: '$59' },
            50000: { price: '$149', oldPrice: '$149' },
            100000: { price: '$249', oldPrice: '$249' },
            150000: { price: '$349', oldPrice: '$349' },
        }
    },

    {
        id: 18,
        name: 'InstantFunding (Instant)',
        rating: 4.7,
        verified: true,
        rules: { maxDD: '10%', profit: '80%' },
        price: '$239',
        oldPrice: '$239',
        coupon: 'AFF011I4E8CIH8',
        offer: '10% OFF',
        action: 'Get Funded',
        link: 'https://instantfunding.com/?partner=419',
        logoUrl: '/logos/instantfunding.png',
        capital: 5000,
        platform: ['MT5', 'cTrader', 'Match-Trader'],
        challengeType: 'Instant',
        marketType: 'forex',
        instantFunding: true,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$239', oldPrice: '$239' },
            10000: { price: '$459', oldPrice: '$459' },
            40000: { price: '$1849', oldPrice: '$1849' },
            120000: { price: '$5499', oldPrice: '$5499' },
        },
        hiddenOnAll: true
    },
    {
        id: 19,
        name: 'InstantFunding (One-Phase)',
        rating: 4.7,
        verified: true,
        rules: { maxDD: '10%', profit: '80%' },
        price: '$49',
        oldPrice: '$49',
        coupon: 'AFF011I4E8CIH8',
        offer: '10% OFF',
        action: 'Get Funded',
        link: 'https://instantfunding.com/?partner=419',
        logoUrl: '/logos/instantfunding.png',
        capital: 5000,
        platform: ['MT5', 'cTrader', 'Match-Trader'],
        challengeType: '1-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$49', oldPrice: '$49' },
            10000: { price: '$94', oldPrice: '$94' },
            25000: { price: '$199', oldPrice: '$199' },
            50000: { price: '$329', oldPrice: '$329' },
            100000: { price: '$599', oldPrice: '$599' },
            200000: { price: '$1199', oldPrice: '$1199' },
        },
        hiddenOnAll: true
    },
    {
        id: 20,
        name: 'InstantFunding',
        rating: 4.7,
        verified: true,
        rules: { maxDD: '10%', profit: '80%' },
        price: '$39',
        oldPrice: '$39',
        coupon: 'AFF011I4E8CIH8',
        offer: '10% OFF',
        action: 'Get Funded',
        link: 'https://instantfunding.com/?partner=419',
        logoUrl: '/logos/instantfunding.png',
        capital: 5000,
        platform: ['MT5', 'cTrader', 'Match-Trader'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$39', oldPrice: '$39' },
            10000: { price: '$63', oldPrice: '$63' },
            25000: { price: '$149', oldPrice: '$149' },
            50000: { price: '$254', oldPrice: '$254' },
            100000: { price: '$439', oldPrice: '$439' },
            200000: { price: '$999', oldPrice: '$999' },
        },
    },

    {
        id: 22,
        name: 'DnaFunded',
        rating: 4.6,
        verified: true,
        rules: { maxDD: '10%', profit: '10% / 5%' },
        price: '$49',
        oldPrice: '$49',
        coupon: 'DNAFUNDED15',
        offer: '15% OFF (All)',
        action: 'Get Funded',
        link: 'https://partners.dnafunded.com/click?campaign_id=1&ref_id=259',
        logoUrl: '/logos/dnafunded.png',
        capital: 5000,
        platform: ['TradeLocker'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            5000: { price: '$49', oldPrice: '$49' },
            10000: { price: '$99', oldPrice: '$99' },
            25000: { price: '$189', oldPrice: '$189' },
            50000: { price: '$349', oldPrice: '$349' },
            100000: { price: '$619', oldPrice: '$619' },
            200000: { price: '$1049', oldPrice: '$1049' },
        }
    },
    {
        id: 23,
        name: 'SpiceProp',
        rating: 4.8,
        verified: true,
        rules: { maxDD: '11%', profit: '80-85%' },
        price: '€479',
        oldPrice: '€479',
        coupon: 'SANTANEXT',
        offer: '10% OFF + 5% Profit Split',
        action: 'Get Funded',
        link: 'https://my.spiceprop.com/agent_pp.html?agent_pp=28203897',
        logoUrl: '/logos/spiceprop.png',
        capital: 100000,
        platform: ['MT5'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: false,
        noTimeLimit: true,
        weeklyPayouts: true,
        payoutDays: 14,
        capitalPricing: {
            6000: { price: '€45', oldPrice: '€45' },
            10000: { price: '€99', oldPrice: '€99' },
            25000: { price: '€159', oldPrice: '€159' },
            50000: { price: '€295', oldPrice: '€295' },
            100000: { price: '€479', oldPrice: '€479' },
            150000: { price: '€689', oldPrice: '€689' },
            300000: { price: '€1499', oldPrice: '€1499' },
        }
    },
    {
        id: 24,
        name: 'QTFunded',
        rating: 4.7,
        verified: true,
        rules: { maxDD: '10%', profit: '80%' },
        price: '$499',
        oldPrice: '$499',
        coupon: 'QTINSTANT40',
        offer: '40% OFF + FREE Account',
        action: 'Get Funded',
        link: 'https://qtfunded.quanttekel.com/ref/5570/',
        logoUrl: '/logos/qtfunded.png',
        capital: 100000,
        platform: ['MT4', 'MT5'],
        challengeType: '2-Step',
        marketType: 'forex',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            10000: { price: '$99', oldPrice: '$99' },
            25000: { price: '$199', oldPrice: '$199' },
            50000: { price: '$299', oldPrice: '$299' },
            100000: { price: '$499', oldPrice: '$499' },
            200000: { price: '$999', oldPrice: '$999' },
        }
    },
    {
        id: 25,
        name: 'NexGen ProTrader',
        rating: 4.7,
        verified: true,
        rules: { maxDD: '3-7%', profit: '100%' },
        price: '$319/mo',
        oldPrice: '$319',
        coupon: '90PRO',
        offer: '90% OFF',
        action: 'Get Funded',
        link: 'https://nexgenprotraderfunding.com/?linkId=lp_263534&sourceId=herghiligiu-cristian&tenantId=protraderfunding&affS1=instagram',
        logoUrl: '/logos/nexgen-protrader.jpg',
        capital: 100000,
        platform: ['NinjaTrader', 'Rithmic'],
        challengeType: '1-Step',
        marketType: 'futures',
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: true,
        newsTrading: true,
        cryptoPayout: true,
        usaAccepted: true,
        noTimeLimit: true,
        weeklyPayouts: false,
        payoutDays: 14,
        capitalPricing: {
            25000: { price: '$149/mo', oldPrice: '$149' },
            50000: { price: '$249/mo', oldPrice: '$249' },
            75000: { price: '$299/mo', oldPrice: '$299' },
            100000: { price: '$319/mo', oldPrice: '$319' },
            150000: { price: '$399/mo', oldPrice: '$399' },
        }
    }
];

type SortOption = 'recommended' | 'bestValue' | 'cheapest' | 'fastestPayout';

interface ComparisonTableProps {
    lang?: Locale;
}

export default function ComparisonTable({ lang = 'en' }: ComparisonTableProps) {
    const t = translations[lang] || translations.en;
    const [copiedId, setCopiedId] = useState<number | null>(null);

    // Level 2: Configurator filters
    const [selectedCapital, setSelectedCapital] = useState<number | 'all'>(100000);
    const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
    const [selectedChallengeType, setSelectedChallengeType] = useState<string>('all');
    const [selectedMarketType, setSelectedMarketType] = useState<'all' | 'forex' | 'futures'>('all');

    // Level 1: Quick Pills
    const [quickFilters, setQuickFilters] = useState({
        instantFunding: false,
        hftAllowed: false,
        balanceBasedDD: false,
        newsTrading: false,
        cryptoPayout: false,
        usaAccepted: false,
        noTimeLimit: false,
        weeklyPayouts: false
    });

    // Sorting
    const [sortBy, setSortBy] = useState<SortOption>('recommended');

    // Show/hide advanced filters
    const [showMoreFilters, setShowMoreFilters] = useState(false);

    // Price sort direction (null = no sort, 'asc' = ascending, 'desc' = descending)
    const [priceSortDirection, setPriceSortDirection] = useState<'asc' | 'desc' | null>(null);

    // Voting System State
    const [votes, setVotes] = useState<Record<number, { likes: number; dislikes: number }>>({});
    const [userVotes, setUserVotes] = useState<Record<number, 'like' | 'dislike' | null>>({});

    // Fetch votes on mount
    React.useEffect(() => {
        const fetchVotes = async () => {
            try {
                const res = await fetch('/api/vote');
                const data = await res.json();
                setVotes(data);
            } catch (error) {
                console.error('Failed to fetch votes:', error);
            }
        };

        // Load user votes from localStorage
        const savedUserVotes = localStorage.getItem('propfirm_user_votes');
        if (savedUserVotes) {
            setUserVotes(JSON.parse(savedUserVotes));
        }

        fetchVotes();
    }, []);

    const handleVote = async (firmId: number, type: 'like' | 'dislike') => {
        // Prevent voting if already voted for this firm
        if (userVotes[firmId]) return;

        // Optimistic update
        setVotes(prev => ({
            ...prev,
            [firmId]: {
                likes: prev[firmId]?.likes + (type === 'like' ? 1 : 0) || (type === 'like' ? 1 : 0),
                dislikes: prev[firmId]?.dislikes + (type === 'dislike' ? 1 : 0) || (type === 'dislike' ? 1 : 0)
            }
        }));

        // Update user vote state
        const newUserVotes = { ...userVotes, [firmId]: type };
        setUserVotes(newUserVotes);
        localStorage.setItem('propfirm_user_votes', JSON.stringify(newUserVotes));

        // API call
        try {
            await fetch('/api/vote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firmId, type })
            });
        } catch (error) {
            console.error('Failed to submit vote:', error);
            // Revert optimistic update on error (optional, but good practice)
        }
    };

    const copyToClipboard = (text: string, id: number) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Helper function to get pricing based on selected capital
    const getPricing = (firm: Firm) => {
        if (selectedCapital === 'all' || !firm.capitalPricing[selectedCapital]) {
            return { price: firm.price, oldPrice: firm.oldPrice };
        }
        return firm.capitalPricing[selectedCapital];
    };

    const toggleQuickFilter = (filter: keyof typeof quickFilters) => {
        setQuickFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
    };

    // Filter and sort firms
    const filteredAndSortedFirms = useMemo(() => {
        let filtered = allFirms.filter(firm => {
            // Level 2 filters
            if (selectedCapital !== 'all' && !firm.capitalPricing[selectedCapital]) return false;
            if (selectedPlatform !== 'all' && !firm.platform.includes(selectedPlatform)) return false;

            // Challenge Type Logic
            if (selectedChallengeType === 'all') {
                // If "All" is selected, hide firms marked as hiddenOnAll
                if (firm.hiddenOnAll) return false;
            } else {
                // If specific type is selected, only show firms matching that type
                if (firm.challengeType !== selectedChallengeType) return false;
            }

            if (selectedMarketType !== 'all' && firm.marketType !== selectedMarketType) return false;

            // Level 1 filters (AND logic)
            if (quickFilters.instantFunding && !firm.instantFunding) return false;
            if (quickFilters.hftAllowed && !firm.hftAllowed) return false;
            if (quickFilters.balanceBasedDD && !firm.balanceBasedDD) return false;
            if (quickFilters.newsTrading && !firm.newsTrading) return false;
            if (quickFilters.cryptoPayout && !firm.cryptoPayout) return false;
            if (quickFilters.usaAccepted && !firm.usaAccepted) return false;
            if (quickFilters.noTimeLimit && !firm.noTimeLimit) return false;
            if (quickFilters.weeklyPayouts && !firm.weeklyPayouts) return false;

            return true;
        });

        // Sort
        switch (sortBy) {
            case 'cheapest':
                filtered.sort((a, b) => {
                    const priceA = parseInt(getPricingForSort(a).price.replace(/[^0-9]/g, '')) || 0;
                    const priceB = parseInt(getPricingForSort(b).price.replace(/[^0-9]/g, '')) || 0;
                    return priceA - priceB;
                });
                break;
            case 'fastestPayout':
                filtered.sort((a, b) => a.payoutDays - b.payoutDays);
                break;
            case 'bestValue':
            case 'recommended':
            default:
                // Keep original order for now
                break;
        }

        // Apply price column sort if active
        if (priceSortDirection) {
            filtered.sort((a, b) => {
                const priceA = parseInt(getPricingForSort(a).price.replace(/[^0-9]/g, '')) || 0;
                const priceB = parseInt(getPricingForSort(b).price.replace(/[^0-9]/g, '')) || 0;
                return priceSortDirection === 'asc' ? priceA - priceB : priceB - priceA;
            });
        }

        return filtered;

        // Helper function for sorting
        function getPricingForSort(firm: Firm) {
            if (selectedCapital === 'all' || !firm.capitalPricing[selectedCapital]) {
                return { price: firm.price, oldPrice: firm.oldPrice };
            }
            return firm.capitalPricing[selectedCapital];
        }
    }, [selectedCapital, selectedPlatform, selectedChallengeType, selectedMarketType, quickFilters, sortBy, priceSortDirection]);

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 font-display uppercase tracking-tight">
                        {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.titleHighlight}</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-2">
                        {t.subtitle}
                    </p>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-50"></div>
                </div>

                {/* Mobile Filter Bar - Row 1: Market Type */}
                <div className="md:hidden w-full mb-3">
                    <div className="flex justify-center gap-2 px-4">
                        <button
                            onClick={() => setSelectedMarketType('all')}
                            className={clsx(
                                "flex-1 text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                selectedMarketType === 'all'
                                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                    : "bg-slate-900/80 border-white/10 text-slate-200"
                            )}
                        >
                            📊 {t.all}
                        </button>
                        <button
                            onClick={() => setSelectedMarketType('forex')}
                            className={clsx(
                                "flex-1 text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                selectedMarketType === 'forex'
                                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                    : "bg-slate-900/80 border-white/10 text-slate-200"
                            )}
                        >
                            💱 {t.forex}
                        </button>
                        <button
                            onClick={() => setSelectedMarketType('futures')}
                            className={clsx(
                                "flex-1 text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                selectedMarketType === 'futures'
                                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                    : "bg-slate-900/80 border-white/10 text-slate-200"
                            )}
                        >
                            📈 {t.futures}
                        </button>
                    </div>
                </div>

                {/* Mobile Filter Bar - Row 2: Other Filters (Horizontal Scroll) */}
                <div className="md:hidden w-full mb-6">
                    <div className="flex overflow-x-auto gap-3 pb-4 px-4 -mx-4 hide-scrollbar snap-x items-center">
                        {/* Capital Filter */}
                        <div className="snap-start flex-shrink-0">
                            <div className="relative">
                                <select
                                    value={selectedCapital}
                                    onChange={(e) => setSelectedCapital(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                                    className={clsx(
                                        "appearance-none text-sm py-2.5 pl-4 pr-10 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none focus:ring-2 focus:ring-emerald-500/20",
                                        selectedCapital !== 'all'
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                            : "bg-slate-900/80 border-white/10 text-slate-200"
                                    )}
                                >
                                    <option value="all" className="bg-slate-900 text-slate-300">💰 {t.allSizes}</option>
                                    <option value="5000" className="bg-slate-900 text-slate-300">$5k</option>
                                    <option value="10000" className="bg-slate-900 text-slate-300">$10k</option>
                                    <option value="25000" className="bg-slate-900 text-slate-300">$25k</option>
                                    <option value="50000" className="bg-slate-900 text-slate-300">$50k</option>
                                    <option value="100000" className="bg-slate-900 text-slate-300">$100k</option>
                                    <option value="200000" className="bg-slate-900 text-slate-300">$200k+</option>
                                </select>
                                <ChevronDown className={clsx(
                                    "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors",
                                    selectedCapital !== 'all' ? "text-emerald-500" : "text-slate-500"
                                )} />
                            </div>
                        </div>

                        {/* Platform Filter */}
                        <div className="snap-start flex-shrink-0">
                            <div className="relative">
                                <select
                                    value={selectedPlatform}
                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                    className={clsx(
                                        "appearance-none text-sm py-2.5 pl-4 pr-10 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none focus:ring-2 focus:ring-emerald-500/20",
                                        selectedPlatform !== 'all'
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                            : "bg-slate-900/80 border-white/10 text-slate-200"
                                    )}
                                >
                                    <option value="all" className="bg-slate-900 text-slate-300">🖥️ {t.platform}</option>
                                    <option value="cTrader" className="bg-slate-900 text-slate-300">cTrader</option>
                                    <option value="DXtrade" className="bg-slate-900 text-slate-300">DXtrade</option>
                                    <option value="Match-Trader" className="bg-slate-900 text-slate-300">Match-Trader</option>
                                    <option value="MT4/5" className="bg-slate-900 text-slate-300">MT4/5</option>
                                    <option value="MT5" className="bg-slate-900 text-slate-300">MT5</option>
                                </select>
                                <ChevronDown className={clsx(
                                    "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors",
                                    selectedPlatform !== 'all' ? "text-emerald-500" : "text-slate-500"
                                )} />
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div className="snap-start flex-shrink-0">
                            <div className="relative">
                                <select
                                    value={selectedChallengeType}
                                    onChange={(e) => setSelectedChallengeType(e.target.value)}
                                    className={clsx(
                                        "appearance-none text-sm py-2.5 pl-4 pr-10 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none focus:ring-2 focus:ring-emerald-500/20",
                                        selectedChallengeType !== 'all'
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                            : "bg-slate-900/80 border-white/10 text-slate-200"
                                    )}
                                >
                                    <option value="all" className="bg-slate-900 text-slate-300">⚡ {t.type}</option>
                                    <option value="2-Step" className="bg-slate-900 text-slate-300">2-Step</option>
                                    <option value="1-Step" className="bg-slate-900 text-slate-300">1-Step</option>
                                    <option value="Instant" className="bg-slate-900 text-slate-300">Instant</option>
                                </select>
                                <ChevronDown className={clsx(
                                    "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors",
                                    selectedChallengeType !== 'all' ? "text-emerald-500" : "text-slate-500"
                                )} />
                            </div>
                        </div>

                        {/* Price Sort Button - Mobile */}
                        <div className="snap-start flex-shrink-0">
                            <button
                                onClick={() => {
                                    if (priceSortDirection === null) {
                                        setPriceSortDirection('asc');
                                    } else if (priceSortDirection === 'asc') {
                                        setPriceSortDirection('desc');
                                    } else {
                                        setPriceSortDirection(null);
                                    }
                                }}
                                className={clsx(
                                    "flex items-center gap-2 text-sm py-2.5 px-4 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 font-medium outline-none",
                                    priceSortDirection !== null
                                        ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                                        : "bg-slate-900/80 border-white/10 text-slate-200"
                                )}
                            >
                                💰 {t.price}
                                <span className="text-emerald-400 font-bold">
                                    {priceSortDirection === 'asc' && '↑'}
                                    {priceSortDirection === 'desc' && '↓'}
                                    {priceSortDirection === null && '↕'}
                                </span>
                            </button>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => {
                                setSelectedCapital('all');
                                setSelectedPlatform('all');
                                setSelectedChallengeType('all');
                                setSelectedMarketType('all');
                                setQuickFilters({
                                    instantFunding: false,
                                    hftAllowed: false,
                                    balanceBasedDD: false,
                                    newsTrading: false,
                                    cryptoPayout: false,
                                    usaAccepted: false,
                                    noTimeLimit: false,
                                    weeklyPayouts: false
                                });
                                setSortBy('recommended');
                            }}
                            className="snap-start flex-shrink-0 flex items-center gap-2 text-xs font-bold text-slate-400 border border-white/10 bg-slate-900/50 px-4 py-2.5 rounded-full active:scale-95 transition-all hover:text-white hover:bg-white/10 backdrop-blur-md shadow-lg shadow-black/20"
                        >
                            <span className="text-base">🔄</span> {t.reset}
                        </button>
                    </div>
                </div>

                {/* Desktop Filters Container (Hidden on Mobile) */}
                <div className="hidden md:block mb-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-4 lg:p-6">
                    {/* Market Type Selector */}
                    <div className="mb-6">
                        <div className="flex items-center justify-center gap-3">
                            <button
                                onClick={() => setSelectedMarketType('all')}
                                className={clsx(
                                    "px-6 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                                    selectedMarketType === 'all'
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                📊 {t.allMarkets}
                            </button>
                            <button
                                onClick={() => setSelectedMarketType('forex')}
                                className={clsx(
                                    "px-6 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                                    selectedMarketType === 'forex'
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                💱 {t.forex}
                            </button>
                            <button
                                onClick={() => setSelectedMarketType('futures')}
                                className={clsx(
                                    "px-6 py-3 rounded-xl border text-sm font-bold transition-all flex items-center gap-2",
                                    selectedMarketType === 'futures'
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/20"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                📈 {t.futures}
                            </button>
                        </div>
                    </div>
                    {/* Level 2: Configurator Dropdowns + Sort & Reset */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 pb-6 border-b border-white/10">

                        <div className="flex gap-4 w-full md:w-auto flex-nowrap">
                            {/* Capital Dropdown */}
                            <div className="relative group">
                                <select
                                    value={selectedCapital}
                                    onChange={(e) => setSelectedCapital(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
                                    className="appearance-none bg-black/40 border border-white/10 hover:border-white/30 text-slate-300 px-5 py-3 pr-10 rounded-xl transition-all duration-300 cursor-pointer min-w-[140px] lg:min-w-[160px] text-sm font-medium"
                                >
                                    <option value="all" className="bg-black text-slate-200">💰 {t.allSizes}</option>
                                    <option value="5000" className="bg-black text-slate-200">$5k ({t.mini})</option>
                                    <option value="10000" className="bg-black text-slate-200">$10k ({t.starter})</option>
                                    <option value="25000" className="bg-black text-slate-200">$25k ({t.growth})</option>
                                    <option value="50000" className="bg-black text-slate-200">$50k ({t.standard})</option>
                                    <option value="100000" className="bg-black text-slate-200">$100k ({t.pro})</option>
                                    <option value="200000" className="bg-black text-slate-200">$200k+ ({t.whale})</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-hover:text-white transition pointer-events-none" />
                            </div>

                            {/* Platform Dropdown */}
                            <div className="relative group">
                                <select
                                    value={selectedPlatform}
                                    onChange={(e) => setSelectedPlatform(e.target.value)}
                                    className="appearance-none bg-black/40 border border-white/10 hover:border-white/30 text-slate-300 px-5 py-3 pr-10 rounded-xl transition-all duration-300 cursor-pointer min-w-[140px] lg:min-w-[160px] text-sm font-medium"
                                >
                                    <option value="all" className="bg-black text-slate-200">🖥️ {t.anyPlatform}</option>
                                    <option value="cTrader" className="bg-black text-slate-200">cTrader</option>
                                    <option value="DXtrade" className="bg-black text-slate-200">DXtrade</option>
                                    <option value="Match-Trader" className="bg-black text-slate-200">Match-Trader</option>
                                    <option value="MT4/5" className="bg-black text-slate-200">MetaTrader 4/5</option>
                                    <option value="MT5" className="bg-black text-slate-200">MetaTrader 5</option>
                                    <option value="TradeLocker" className="bg-black text-slate-200">TradeLocker</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-hover:text-white transition pointer-events-none" />
                            </div>

                            {/* Challenge Type Dropdown */}
                            <div className="relative group">
                                <select
                                    value={selectedChallengeType}
                                    onChange={(e) => setSelectedChallengeType(e.target.value)}
                                    className="appearance-none bg-black/40 border border-white/10 hover:border-white/30 text-slate-300 px-5 py-3 pr-10 rounded-xl transition-all duration-300 cursor-pointer min-w-[140px] lg:min-w-[160px] text-sm font-medium"
                                >
                                    <option value="all" className="bg-black text-slate-200">🎯 {t.anyType}</option>
                                    <option value="2-Step" className="bg-black text-slate-200">2-Step</option>
                                    <option value="1-Step" className="bg-black text-slate-200">1-Step</option>
                                    <option value="Instant" className="bg-black text-slate-200">Instant</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 group-hover:text-white transition pointer-events-none" />
                            </div>
                        </div>

                        {/* Sort, More Filters & Reset */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.sort}:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                                    className="appearance-none bg-transparent text-sm font-bold text-white hover:text-yellow-400 transition cursor-pointer border-none outline-none"
                                >
                                    <option value="recommended" className="bg-black text-slate-200">{t.recommended}</option>
                                    <option value="bestValue" className="bg-black text-slate-200">{t.bestValue}</option>
                                    <option value="cheapest" className="bg-black text-slate-200">{t.cheapest}</option>
                                    <option value="fastestPayout" className="bg-black text-slate-200">{t.fastestPayout}</option>
                                </select>
                                <ChevronDown className="h-4 w-4 text-slate-500" />
                            </div>

                            {/* More Filters Button */}
                            <button
                                onClick={() => setShowMoreFilters(!showMoreFilters)}
                                className={clsx(
                                    "px-4 py-2 rounded-xl border text-sm font-medium transition-all flex items-center gap-2",
                                    showMoreFilters
                                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                                        : "border-white/10 bg-black/40 text-slate-300 hover:border-white/30 hover:text-white"
                                )}
                            >
                                ⚙️ {t.moreFilters}
                                <ChevronDown className={clsx("h-4 w-4 transition-transform", showMoreFilters && "rotate-180")} />
                            </button>

                            {/* Reset Button */}
                            <button
                                onClick={() => {
                                    setSelectedCapital('all');
                                    setSelectedPlatform('all');
                                    setSelectedChallengeType('all');
                                    setQuickFilters({
                                        instantFunding: false,
                                        hftAllowed: false,
                                        balanceBasedDD: false,
                                        newsTrading: false,
                                        cryptoPayout: false,
                                        usaAccepted: false,
                                        noTimeLimit: false,
                                        weeklyPayouts: false
                                    });
                                    setSortBy('recommended');
                                    setShowMoreFilters(false);
                                }}
                                className="px-4 py-2 rounded-xl border border-white/10 bg-black/40 text-sm text-slate-300 hover:border-white/30 hover:text-white transition-all flex items-center gap-2"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                {t.reset}
                            </button>
                        </div>
                    </div>

                    {/* Level 1: Quick Pills - Hidden by default */}
                    {showMoreFilters && (
                        <div className="border-t border-white/10 pt-6">
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => toggleQuickFilter('instantFunding')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.instantFunding
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>⚡</span> {t.instantFunding}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('hftAllowed')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.hftAllowed
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>🤖</span> {t.hftAllowed}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('balanceBasedDD')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.balanceBasedDD
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>📉</span> {t.balanceBasedDD}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('newsTrading')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.newsTrading
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>📰</span> {t.newsTrading}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('cryptoPayout')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.cryptoPayout
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>💰</span> {t.cryptoPayout}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('usaAccepted')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.usaAccepted
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>🇺🇸</span> {t.usaAccepted}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('noTimeLimit')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.noTimeLimit
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>🕒</span> {t.noTimeLimit}
                                </button>

                                <button
                                    onClick={() => toggleQuickFilter('weeklyPayouts')}
                                    className={clsx(
                                        "px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-300",
                                        quickFilters.weeklyPayouts
                                            ? "bg-yellow-400/10 border border-yellow-400 text-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                            : "bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-400/50 hover:-translate-y-0.5"
                                    )}
                                >
                                    <span>💸</span> {t.weeklyPayouts}
                                </button>
                            </div>

                            {/* Results count */}
                            <div className="mt-4 text-xs text-slate-600 font-mono">
                                {t.showing} {filteredAndSortedFirms.length} {t.firms}
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile View Container - Cards */}
                <div className="md:hidden space-y-4">
                    {filteredAndSortedFirms.length === 0 ? (
                        <div className="text-center py-12 text-slate-500 bg-white/5 rounded-xl border border-white/10">
                            {t.noFirmsFound}. {t.tryAdjusting}
                        </div>
                    ) : (
                        filteredAndSortedFirms.map((firm) => (
                            <div key={firm.id} className="bg-white/5 border border-white/10 rounded-xl p-5 relative overflow-hidden">
                                {/* Header: Logo, Name, Rating, Price */}
                                <div className="flex items-start gap-4 mb-4">
                                    <Link href={`/${lang}/prop-firm/${generateSlug(firm.name)}`} className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-white/10 overflow-hidden flex-shrink-0 hover:border-emerald-500/50 transition-all">
                                        <img
                                            src={firm.logoUrl}
                                            alt={firm.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </Link>
                                    <div className="flex-1 min-w-0">
                                        <Link href={`/${lang}/prop-firm/${generateSlug(firm.name)}`} className="font-bold text-white text-lg hover:text-emerald-400 transition-colors">{firm.name}</Link>
                                        <div className="flex items-center gap-2 text-xs mt-1">
                                            <div className="flex items-center gap-1 text-amber-400">
                                                <Star className="h-3 w-3 fill-current" />
                                                <span>{firm.rating}/5</span>
                                            </div>
                                            {firm.verified && (
                                                <>
                                                    <span className="text-slate-500">•</span>
                                                    <span className="text-blue-400">{t.verified}</span>
                                                </>
                                            )}
                                        </div>
                                        {/* Voting UI - Mobile */}
                                        <div className="flex items-center gap-3 mt-2">
                                            <button
                                                onClick={() => handleVote(firm.id, 'like')}
                                                disabled={!!userVotes[firm.id]}
                                                className={clsx(
                                                    "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md transition-colors",
                                                    userVotes[firm.id] === 'like' ? "text-emerald-400 bg-emerald-400/10" : "text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/5",
                                                    userVotes[firm.id] && userVotes[firm.id] !== 'like' && "opacity-50 cursor-not-allowed"
                                                )}
                                            >
                                                <ThumbsUp className="w-3 h-3" />
                                                <span>{votes[firm.id]?.likes || 0}</span>
                                            </button>
                                            <button
                                                onClick={() => handleVote(firm.id, 'dislike')}
                                                disabled={!!userVotes[firm.id]}
                                                className={clsx(
                                                    "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md transition-colors",
                                                    userVotes[firm.id] === 'dislike' ? "text-red-400 bg-red-400/10" : "text-slate-500 hover:text-red-400 hover:bg-red-400/5",
                                                    userVotes[firm.id] && userVotes[firm.id] !== 'dislike' && "opacity-50 cursor-not-allowed"
                                                )}
                                            >
                                                <ThumbsDown className="w-3 h-3" />
                                                <span>{votes[firm.id]?.dislikes || 0}</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <div className="text-xs text-slate-500 line-through">{getPricing(firm).oldPrice}</div>
                                        <div className="text-xl font-bold text-emerald-400">{getPricing(firm).price}</div>
                                    </div>
                                </div>

                                {/* Rules Grid */}
                                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                                    <div className="bg-black/20 p-2 rounded border border-white/5">
                                        <span className="text-slate-500 text-xs block">Max Drawdown</span>
                                        <span className="text-red-400 font-bold">{firm.rules.maxDD}</span>
                                    </div>
                                    <div className="bg-black/20 p-2 rounded border border-white/5">
                                        <span className="text-slate-500 text-xs block">Profit Split</span>
                                        <span className="text-emerald-400 font-bold">{firm.rules.profit}</span>
                                    </div>
                                    <div className="bg-black/20 p-2 rounded border border-white/5 col-span-2 flex justify-between items-center">
                                        <span className="text-slate-500 text-xs">{t.coupon}:</span>
                                        <button
                                            onClick={() => copyToClipboard(firm.coupon, firm.id)}
                                            className="text-white font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-dashed border-emerald-500/40 text-sm font-bold flex items-center gap-1"
                                        >
                                            {firm.coupon}
                                            {copiedId === firm.id ? (
                                                <Check className="h-3 w-3 text-emerald-400" />
                                            ) : (
                                                <Copy className="h-3 w-3 opacity-70" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Active Offers */}
                                {firm.offer && (
                                    <div className="mb-4 relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 to-black border border-emerald-500/30 p-3 shadow-lg shadow-emerald-900/20 text-center">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500"></div>
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400 animate-pulse" />
                                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{t.activeOffer}</span>
                                        </div>
                                        <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                                            {firm.offer}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <a
                                    href={`/api/analytics/track?dest=${encodeURIComponent(firm.link)}&firm=${encodeURIComponent(firm.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-emerald-500/20 transition active:scale-95 flex items-center justify-center"
                                >
                                    {t.getFunded}
                                </a>
                            </div>
                        ))
                    )}
                </div>

                {/* Desktop Table Container */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-b from-slate-900/60 to-black/40 backdrop-blur-sm">
                    <table className="w-full text-sm text-slate-400">
                        <thead className="bg-black/60 text-xs uppercase text-slate-500 border-b border-slate-800/50">
                            <tr>
                                <th className="px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-left">{t.firm}</th>
                                <th className="hidden xl:table-cell px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center">{t.rating}</th>
                                <th className="hidden xl:table-cell px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center">{t.community}</th>
                                <th className="hidden xl:table-cell px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center">{t.keyRules}</th>
                                <th
                                    className="px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center cursor-pointer hover:bg-white/5 transition-colors select-none"
                                    onClick={() => {
                                        if (priceSortDirection === null) {
                                            setPriceSortDirection('asc');
                                        } else if (priceSortDirection === 'asc') {
                                            setPriceSortDirection('desc');
                                        } else {
                                            setPriceSortDirection(null);
                                        }
                                    }}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="flex items-center gap-1">
                                            <span>{t.price}</span>
                                            <span className="text-emerald-400">
                                                {priceSortDirection === 'asc' && '↑'}
                                                {priceSortDirection === 'desc' && '↓'}
                                                {priceSortDirection === null && '↕'}
                                            </span>
                                        </div>
                                        <span className="text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-bold normal-case">
                                            {selectedCapital === 'all' ? 'Base' : `$${(selectedCapital as number / 1000).toFixed(0)}K`}
                                        </span>
                                    </div>
                                </th>
                                <th className="px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center">{t.coupon}</th>
                                <th className="px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center">{t.activeOffers}</th>
                                <th className="px-3 py-3 lg:px-6 lg:py-4 font-medium tracking-wider text-center">{t.action}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/30">
                            {filteredAndSortedFirms.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        {t.noFirmsFound}. {t.tryAdjusting}
                                    </td>
                                </tr>
                            ) : (
                                filteredAndSortedFirms.map((firm) => (
                                    <tr key={firm.id} className="group hover:bg-slate-800/20 transition-colors border-b border-slate-800/30">
                                        <td className="px-3 py-3 lg:px-6 lg:py-5 text-left">
                                            <div className="flex items-center gap-3">
                                                <Link href={`/${lang}/prop-firm/${generateSlug(firm.name)}`} className="h-10 w-10 rounded-lg bg-black flex items-center justify-center text-xs font-bold text-slate-300 group-hover:ring-1 group-hover:ring-emerald-500/50 transition-all overflow-hidden">
                                                    <img
                                                        src={firm.logoUrl}
                                                        alt={firm.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </Link>
                                                <Link href={`/${lang}/prop-firm/${generateSlug(firm.name)}`} className="font-bold text-white text-base hover:text-emerald-400 transition-colors">{firm.name}</Link>
                                            </div>
                                        </td>

                                        <td className="hidden xl:table-cell px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            <div className="flex flex-col gap-1 items-center justify-center">
                                                <div className="flex items-center gap-1 text-amber-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className={clsx("h-3.5 w-3.5 fill-current", i >= Math.floor(firm.rating) && "text-slate-600 fill-slate-600")} />
                                                    ))}
                                                </div>
                                                {firm.verified && (
                                                    <div className="flex items-center gap-1 text-[10px] text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded w-fit">
                                                        <ShieldCheck className="h-3 w-3" /> {t.verified}
                                                    </div>
                                                )}
                                            </div>
                                        </td>

                                        <td className="hidden xl:table-cell px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            <div className="flex flex-col gap-2 items-center">
                                                {/* Voting Buttons */}
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleVote(firm.id, 'like')}
                                                        disabled={!!userVotes[firm.id]}
                                                        className={clsx(
                                                            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md transition-colors",
                                                            userVotes[firm.id] === 'like' ? "text-emerald-400 bg-emerald-400/10" : "text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/5",
                                                            userVotes[firm.id] && userVotes[firm.id] !== 'like' && "opacity-50 cursor-not-allowed"
                                                        )}
                                                    >
                                                        <ThumbsUp className="w-3.5 h-3.5" />
                                                        <span>{votes[firm.id]?.likes || 0}</span>
                                                    </button>
                                                    <button
                                                        onClick={() => handleVote(firm.id, 'dislike')}
                                                        disabled={!!userVotes[firm.id]}
                                                        className={clsx(
                                                            "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md transition-colors",
                                                            userVotes[firm.id] === 'dislike' ? "text-red-400 bg-red-400/10" : "text-slate-500 hover:text-red-400 hover:bg-red-400/5",
                                                            userVotes[firm.id] && userVotes[firm.id] !== 'dislike' && "opacity-50 cursor-not-allowed"
                                                        )}
                                                    >
                                                        <ThumbsDown className="w-3.5 h-3.5" />
                                                        <span>{votes[firm.id]?.dislikes || 0}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="hidden xl:table-cell px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            <div className="flex flex-col gap-1.5 text-xs items-center">
                                                <div className="flex items-center gap-2 text-slate-300">
                                                    <span className="text-emerald-500">Max DD:</span> {firm.rules.maxDD}
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-300">
                                                    <span className="text-emerald-500">Profit:</span> {firm.rules.profit}
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs text-slate-500 line-through">{getPricing(firm).oldPrice}</span>
                                                <span className="text-lg font-bold text-emerald-400">{getPricing(firm).price}</span>
                                            </div>
                                        </td>

                                        <td className="px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            {firm.coupon ? (
                                                <button
                                                    onClick={() => copyToClipboard(firm.coupon, firm.id)}
                                                    className="group/btn relative inline-flex items-center gap-2 rounded-lg border-2 border-dashed border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-sm font-mono font-bold text-white hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all shadow-sm hover:shadow-emerald-500/20"
                                                >
                                                    {firm.coupon}
                                                    {copiedId === firm.id ? (
                                                        <Check className="h-4 w-4 text-emerald-400" />
                                                    ) : (
                                                        <Copy className="h-4 w-4 opacity-70 group-hover/btn:opacity-100" />
                                                    )}
                                                </button>
                                            ) : (
                                                <span className="text-slate-600 text-xs italic">{t.noCode}</span>
                                            )}
                                        </td>

                                        <td className="px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            {firm.offer ? (
                                                <div className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-black border border-emerald-500/30 p-3 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/20 transition-all hover:-translate-y-1">
                                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500"></div>
                                                    <div className="flex items-center justify-center gap-1 mb-0.5 lg:mb-1">
                                                        <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400 animate-pulse" />
                                                        <span className="text-[9px] lg:text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{t.newOffer}</span>
                                                    </div>
                                                    <div className="text-sm lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-0.5 lg:mb-1">
                                                        {firm.offer}
                                                    </div>
                                                    <div className="inline-flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] lg:text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                                                        <Trophy className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                                                        <span>{t.limitedTime}</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="block w-full h-full min-h-[60px]"></span>
                                            )}
                                        </td>

                                        <td className="px-3 py-3 lg:px-6 lg:py-5 text-center">
                                            <a
                                                href={`/api/analytics/track?dest=${encodeURIComponent(firm.link)}&firm=${encodeURIComponent(firm.name)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all hover:shadow-emerald-900/40 hover:scale-105 active:scale-95 whitespace-nowrap"
                                            >
                                                {t.getFunded}
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div >
            </div >
        </section >
    );
}
