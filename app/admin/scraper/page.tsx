'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, Loader2, CheckCircle, XCircle, Upload, AlertTriangle, Sparkles, RefreshCw } from 'lucide-react';

interface ScrapedPromotion {
    firm: string;
    discount: string | null;
    promoText: string | null;
    success: boolean;
    error?: string;
}

interface ScraperResult {
    success: boolean;
    timestamp: string;
    duration: string;
    summary: {
        totalFirms: number;
        promotionsFound: number;
        failedScrapes: number;
    };
    promotions: ScrapedPromotion[];
    report: string;
}

interface CurrentOffer {
    discount: string;
    coupon: string;
    promoText: string;
}

interface OffersData {
    lastUpdated: string;
    offers: Record<string, CurrentOffer>;
}

type PromoStatus = 'new' | 'changed' | 'same' | 'none';

export default function ScraperAdminPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isPushing, setIsPushing] = useState(false);
    const [result, setResult] = useState<ScraperResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [pushSuccess, setPushSuccess] = useState<string | null>(null);
    const [apiSecret, setApiSecret] = useState('');
    const [selectedPromotions, setSelectedPromotions] = useState<Set<string>>(new Set());
    const [currentOffers, setCurrentOffers] = useState<OffersData | null>(null);

    // Load current offers on mount
    useEffect(() => {
        loadCurrentOffers();
    }, []);

    const loadCurrentOffers = async () => {
        try {
            const response = await fetch('/api/offers');
            if (response.ok) {
                const data = await response.json();
                setCurrentOffers(data);
            }
        } catch (err) {
            console.error('Failed to load current offers:', err);
        }
    };

    const getPromoStatus = (promo: ScrapedPromotion): PromoStatus => {
        if (!promo.discount) return 'none';

        const slug = promo.firm.toLowerCase().replace(/\s+/g, '');
        const currentOffer = currentOffers?.offers[slug];

        if (!currentOffer || !currentOffer.discount) {
            return 'new'; // Not on site at all
        }

        // Normalize discounts for comparison
        const scrapedDiscount = promo.discount.toLowerCase().replace(/\s+/g, '');
        const currentDiscount = currentOffer.discount.toLowerCase().replace(/\s+/g, '');

        if (scrapedDiscount !== currentDiscount) {
            return 'changed'; // Different discount
        }

        return 'same'; // Already on site with same value
    };

    const getStatusBadge = (status: PromoStatus) => {
        switch (status) {
            case 'new':
                return (
                    <span className="flex items-center gap-1 bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-bold">
                        <Sparkles className="w-3 h-3" />
                        NEW
                    </span>
                );
            case 'changed':
                return (
                    <span className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full text-xs font-bold">
                        <RefreshCw className="w-3 h-3" />
                        CHANGED
                    </span>
                );
            case 'same':
                return (
                    <span className="flex items-center gap-1 bg-slate-500/20 text-slate-400 px-2 py-1 rounded-full text-xs font-bold">
                        <CheckCircle className="w-3 h-3" />
                        ON SITE
                    </span>
                );
            default:
                return null;
        }
    };

    const runScraper = async () => {
        if (!apiSecret) {
            setError('Please enter the API secret');
            return;
        }

        setIsLoading(true);
        setError(null);
        setResult(null);
        setPushSuccess(null);

        try {
            const response = await fetch(`/api/scraper/run?secret=${encodeURIComponent(apiSecret)}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to run scraper');
            }

            setResult(data);

            // Auto-select only NEW and CHANGED promotions
            const toSelect: string[] = [];
            data.promotions.forEach((p: ScrapedPromotion) => {
                if (p.discount) {
                    const slug = p.firm.toLowerCase().replace(/\s+/g, '');
                    const currentOffer = currentOffers?.offers[slug];

                    if (!currentOffer?.discount) {
                        toSelect.push(slug); // NEW
                    } else {
                        const scrapedDiscount = p.discount.toLowerCase().replace(/\s+/g, '');
                        const currentDiscount = currentOffer.discount.toLowerCase().replace(/\s+/g, '');
                        if (scrapedDiscount !== currentDiscount) {
                            toSelect.push(slug); // CHANGED
                        }
                    }
                }
            });
            setSelectedPromotions(new Set(toSelect));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const togglePromotion = (firmName: string) => {
        const slug = firmName.toLowerCase().replace(/\s+/g, '');
        const newSelected = new Set(selectedPromotions);
        if (newSelected.has(slug)) {
            newSelected.delete(slug);
        } else {
            newSelected.add(slug);
        }
        setSelectedPromotions(newSelected);
    };

    const pushToWebsite = async () => {
        if (!apiSecret) {
            setError('Please enter the API secret');
            return;
        }

        if (selectedPromotions.size === 0) {
            setError('Please select at least one promotion to push');
            return;
        }

        setIsPushing(true);
        setError(null);
        setPushSuccess(null);

        try {
            const updates: Record<string, { discount: string; promoText: string }> = {};

            result?.promotions.forEach((promo) => {
                const slug = promo.firm.toLowerCase().replace(/\s+/g, '');
                if (selectedPromotions.has(slug) && promo.discount) {
                    updates[slug] = {
                        discount: promo.discount,
                        promoText: promo.promoText || ''
                    };
                }
            });

            const response = await fetch('/api/offers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-secret': apiSecret
                },
                body: JSON.stringify({ updates })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to push offers');
            }

            setPushSuccess(`Successfully updated ${Object.keys(updates).length} offers!`);

            // Reload current offers to update status badges
            await loadCurrentOffers();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to push to website');
        } finally {
            setIsPushing(false);
        }
    };

    const promotionsWithDiscounts = result?.promotions.filter(p => p.discount) || [];
    const newCount = promotionsWithDiscounts.filter(p => getPromoStatus(p) === 'new').length;
    const changedCount = promotionsWithDiscounts.filter(p => getPromoStatus(p) === 'changed').length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link
                        href="/admin/dashboard"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold">🔍 Promotion Scraper</h1>
                        <p className="text-slate-400">Automatically detect promotions from prop firm websites</p>
                    </div>
                </div>

                {/* Current Offers Info */}
                {currentOffers && (
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
                        <p className="text-blue-400 text-sm">
                            <strong>Current offers loaded:</strong> {Object.keys(currentOffers.offers).length} firms •
                            Last updated: {new Date(currentOffers.lastUpdated).toLocaleString()}
                        </p>
                    </div>
                )}

                {/* API Secret Input */}
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mb-6">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                        API Secret
                    </label>
                    <div className="flex gap-4">
                        <input
                            type="password"
                            value={apiSecret}
                            onChange={(e) => setApiSecret(e.target.value)}
                            placeholder="Enter your SCRAPER_API_SECRET"
                            className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50"
                        />
                        <button
                            onClick={runScraper}
                            disabled={isLoading}
                            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-6 py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Scraping...
                                </>
                            ) : (
                                <>
                                    <Play className="w-5 h-5" />
                                    Run Scraper
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Error Display */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 text-red-400">
                            <XCircle className="w-5 h-5" />
                            <span className="font-semibold">Error:</span>
                            <span>{error}</span>
                        </div>
                    </div>
                )}

                {/* Success Display */}
                {pushSuccess && (
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 text-emerald-400">
                            <CheckCircle className="w-5 h-5" />
                            <span className="font-semibold">{pushSuccess}</span>
                        </div>
                    </div>
                )}

                {/* Results */}
                {result && (
                    <div className="space-y-6">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <p className="text-slate-400 text-sm">Total Firms</p>
                                <p className="text-3xl font-bold">{result.summary.totalFirms}</p>
                            </div>
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                                <p className="text-emerald-400 text-sm">Promotions Found</p>
                                <p className="text-3xl font-bold text-emerald-400">{result.summary.promotionsFound}</p>
                            </div>
                            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                                <p className="text-purple-400 text-sm">🆕 New</p>
                                <p className="text-3xl font-bold text-purple-400">{newCount}</p>
                            </div>
                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                                <p className="text-amber-400 text-sm">🔄 Changed</p>
                                <p className="text-3xl font-bold text-amber-400">{changedCount}</p>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                                <p className="text-red-400 text-sm">Failed</p>
                                <p className="text-3xl font-bold text-red-400">{result.summary.failedScrapes}</p>
                            </div>
                        </div>

                        {/* Push to Website Section */}
                        {promotionsWithDiscounts.length > 0 && (
                            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h2 className="text-xl font-bold flex items-center gap-2">
                                            <Upload className="w-5 h-5 text-amber-400" />
                                            Push to Website
                                        </h2>
                                        <p className="text-slate-400 text-sm">
                                            Select promotions to update •
                                            <span className="text-purple-400 ml-2">🆕 {newCount} new</span>
                                            <span className="text-amber-400 ml-2">🔄 {changedCount} changed</span>
                                        </p>
                                    </div>
                                    <button
                                        onClick={pushToWebsite}
                                        disabled={isPushing || selectedPromotions.size === 0}
                                        className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isPushing ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Pushing...
                                            </>
                                        ) : (
                                            <>
                                                <Upload className="w-5 h-5" />
                                                Push {selectedPromotions.size} Selected
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Selectable Promotions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {promotionsWithDiscounts.map((promo) => {
                                        const slug = promo.firm.toLowerCase().replace(/\s+/g, '');
                                        const isSelected = selectedPromotions.has(slug);
                                        const status = getPromoStatus(promo);
                                        const currentOffer = currentOffers?.offers[slug];

                                        return (
                                            <div
                                                key={promo.firm}
                                                onClick={() => togglePromotion(promo.firm)}
                                                className={`p-4 rounded-lg border cursor-pointer transition-all ${isSelected
                                                        ? 'bg-emerald-500/20 border-emerald-500/50'
                                                        : 'bg-black/20 border-white/10 hover:border-white/30'
                                                    }`}
                                            >
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <p className="font-semibold">{promo.firm}</p>
                                                            {getStatusBadge(status)}
                                                        </div>
                                                        <p className="text-emerald-400 font-bold">{promo.discount}</p>
                                                        {status === 'changed' && currentOffer && (
                                                            <p className="text-slate-500 text-xs mt-1">
                                                                Current: <span className="line-through">{currentOffer.discount}</span>
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected
                                                            ? 'bg-emerald-500 border-emerald-500'
                                                            : 'border-slate-500'
                                                        }`}>
                                                        {isSelected && <CheckCircle className="w-4 h-4" />}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* All Promotions Table */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                            <div className="p-4 border-b border-white/10">
                                <h2 className="text-xl font-bold">All Scraped Results</h2>
                                <p className="text-slate-400 text-sm">Scraped at: {new Date(result.timestamp).toLocaleString()}</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-black/20">
                                        <tr>
                                            <th className="text-left px-6 py-3 text-slate-400 font-medium">Firm</th>
                                            <th className="text-left px-6 py-3 text-slate-400 font-medium">Scraped</th>
                                            <th className="text-left px-6 py-3 text-slate-400 font-medium">On Site</th>
                                            <th className="text-left px-6 py-3 text-slate-400 font-medium">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {result.promotions.map((promo, i) => {
                                            const slug = promo.firm.toLowerCase().replace(/\s+/g, '');
                                            const currentOffer = currentOffers?.offers[slug];
                                            const status = getPromoStatus(promo);

                                            return (
                                                <tr key={i} className="hover:bg-white/5">
                                                    <td className="px-6 py-4 font-semibold">{promo.firm}</td>
                                                    <td className="px-6 py-4">
                                                        {promo.discount ? (
                                                            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold">
                                                                {promo.discount}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-500">-</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {currentOffer?.discount ? (
                                                            <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">
                                                                {currentOffer.discount}
                                                            </span>
                                                        ) : (
                                                            <span className="text-slate-500">Not on site</span>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {promo.success ? (
                                                            getStatusBadge(status) || (
                                                                <span className="text-slate-500">No promo</span>
                                                            )
                                                        ) : (
                                                            <span className="flex items-center gap-1 text-red-400 text-sm">
                                                                <XCircle className="w-4 h-4" />
                                                                {promo.error || 'Failed'}
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Instructions */}
                {!result && !isLoading && (
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <h2 className="text-xl font-bold mb-4">📖 How It Works</h2>
                        <ol className="list-decimal list-inside space-y-2 text-slate-300">
                            <li>Enter your API secret: <code className="bg-black/30 px-2 py-0.5 rounded">National1</code></li>
                            <li>Click "Run Scraper" to scan all 18 prop firm websites</li>
                            <li>Review the results - look for <span className="text-purple-400">🆕 NEW</span> and <span className="text-amber-400">🔄 CHANGED</span> badges</li>
                            <li>Select which promotions to push to your website</li>
                            <li>Click "Push to Website" to update</li>
                        </ol>

                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                                <p className="text-purple-400 font-bold flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" /> NEW
                                </p>
                                <p className="text-sm text-slate-300 mt-1">Promotion not yet on your site</p>
                            </div>
                            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                                <p className="text-amber-400 font-bold flex items-center gap-2">
                                    <RefreshCw className="w-4 h-4" /> CHANGED
                                </p>
                                <p className="text-sm text-slate-300 mt-1">Discount is different than on site</p>
                            </div>
                            <div className="p-4 bg-slate-500/10 border border-slate-500/30 rounded-xl">
                                <p className="text-slate-400 font-bold flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4" /> ON SITE
                                </p>
                                <p className="text-sm text-slate-300 mt-1">Already on your site (same value)</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
