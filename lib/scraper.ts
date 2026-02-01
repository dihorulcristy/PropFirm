/**
 * Scraper Library for Prop Firm Promotions
 * Automatically detects discounts and promotions from prop firm websites
 */

import * as cheerio from 'cheerio';

export interface ScrapedPromotion {
    firmSlug: string;
    firmName: string;
    discount: string | null;
    promoText: string | null;
    sourceUrl: string;
    scrapedAt: Date;
    success: boolean;
    error?: string;
}

// All firms to scrape with their URLs
const FIRMS_TO_SCRAPE = [
    { slug: 'ftmo', name: 'FTMO', url: 'https://ftmo.com' },
    { slug: 'tradingcult', name: 'TradingCult', url: 'https://tradingcult.com' },
    { slug: 'funderpro', name: 'FunderPro', url: 'https://funderpro.com' },
    { slug: 'theconcepttrading', name: 'The Concept Trading', url: 'https://theconcepttrading.com' },
    { slug: 'yrmprop', name: 'YRM Prop', url: 'https://yrmprop.com' },
    { slug: 'dnafunded', name: 'DnaFunded', url: 'https://dnafunded.com/promotions/' },
    { slug: 'spiceprop', name: 'SpiceProp', url: 'https://spiceprop.com' },
    { slug: 'qtfunded', name: 'QTFunded', url: 'https://qtfunded.com' },
    { slug: 'e8funding', name: 'E8 Funding', url: 'https://e8funding.com' },
];

// Common discount patterns to look for
const DISCOUNT_PATTERNS = [
    /(\d{1,2})%\s*OFF/i,
    /(\d{1,2})%\s*DISCOUNT/i,
    /(\d{1,2})%\s*REDUCERE/i,
    /SAVE\s*(\d{1,2})%/i,
    /(\d{1,2})%\s*SALE/i,
    /UP\s*TO\s*(\d{1,2})%/i,
    /GET\s*(\d{1,2})%/i,
    /(\d{1,2})%\s*DESCUENTO/i,
    /(\d{1,2})%\s*de\s*desconto/i,
];

// Keywords that indicate promotions
const PROMO_KEYWORDS = [
    'sale', 'discount', 'off', 'promo', 'deal', 'offer', 'save',
    'limited time', 'flash sale', 'special', 'new year', 'holiday',
    'black friday', 'cyber monday', 'christmas', 'bogo', 'free',
    'coupon', 'code', 'bonus', 'extra', 'reducere', 'oferta'
];

/**
 * Fetch HTML content from a URL with timeout
 */
async function fetchPage(url: string, timeout = 10000): Promise<string | null> {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Cache-Control': 'no-cache',
            },
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error(`Failed to fetch ${url}: ${response.status}`);
            return null;
        }

        return await response.text();
    } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
            console.error(`Timeout fetching ${url}`);
        } else {
            console.error(`Error fetching ${url}:`, error);
        }
        return null;
    }
}

/**
 * Extract discount percentage from text
 */
function extractDiscount(text: string): string | null {
    for (const pattern of DISCOUNT_PATTERNS) {
        const match = text.match(pattern);
        if (match) {
            return `${match[1]}% OFF`;
        }
    }
    return null;
}

/**
 * Find promotional text in HTML
 */
function findPromoText($: cheerio.CheerioAPI): { discount: string | null; promoText: string | null } {
    let discount: string | null = null;
    let promoText: string | null = null;

    // Look in common promo locations
    const selectors = [
        'header', '.banner', '.promo', '.sale', '.discount', '.offer',
        '[class*="banner"]', '[class*="promo"]', '[class*="sale"]',
        '[class*="discount"]', '[class*="offer"]', '[class*="hero"]',
        '.announcement', '.top-bar', '.alert', '.notification',
        '[id*="banner"]', '[id*="promo"]', '[id*="sale"]',
        '.popup', '.modal', '[class*="popup"]', '[class*="modal"]',
        '.coupon', '[class*="coupon"]', '.deal', '[class*="deal"]'
    ];

    for (const selector of selectors) {
        $(selector).each((_, element) => {
            const text = $(element).text().toLowerCase();

            // Check if contains promo keywords
            const hasPromoKeyword = PROMO_KEYWORDS.some(keyword => text.includes(keyword));

            if (hasPromoKeyword) {
                const fullText = $(element).text().trim();
                const foundDiscount = extractDiscount(fullText);

                if (foundDiscount && !discount) {
                    discount = foundDiscount;
                    // Get a clean promo text (first 100 chars)
                    promoText = fullText.replace(/\s+/g, ' ').substring(0, 100).trim();
                }
            }
        });

        if (discount) break;
    }

    // If not found in specific elements, search entire body
    if (!discount) {
        const bodyText = $('body').text();
        discount = extractDiscount(bodyText);
    }

    return { discount, promoText };
}

/**
 * Find promo text in Nitter/Twitter page (different structure)
 */
function findPromoTextTwitter($: cheerio.CheerioAPI): { discount: string | null; promoText: string | null } {
    let discount: string | null = null;
    let promoText: string | null = null;

    // Nitter uses .tweet-content for tweet text
    $('.tweet-content, .timeline-item-content, .tweet-body').each((_, element) => {
        const text = $(element).text().toLowerCase();

        // Check if contains promo keywords
        const hasPromoKeyword = PROMO_KEYWORDS.some(keyword => text.includes(keyword));

        if (hasPromoKeyword) {
            const fullText = $(element).text().trim();
            const foundDiscount = extractDiscount(fullText);

            if (foundDiscount && !discount) {
                discount = foundDiscount;
                promoText = fullText.replace(/\s+/g, ' ').substring(0, 150).trim();
            }
        }
    });

    // Also check pinned tweets
    if (!discount) {
        $('.pinned .tweet-content, .pinned-tweet').each((_, element) => {
            const fullText = $(element).text().trim();
            const foundDiscount = extractDiscount(fullText);
            if (foundDiscount) {
                discount = foundDiscount;
                promoText = fullText.replace(/\s+/g, ' ').substring(0, 150).trim();
            }
        });
    }

    return { discount, promoText };
}

/**
 * Scrape a single firm
 */
async function scrapeFirm(firm: { slug: string; name: string; url: string; isTwitter?: boolean }): Promise<ScrapedPromotion> {
    console.log(`Scraping ${firm.name}${firm.isTwitter ? ' (Twitter/Nitter)' : ''}...`);

    const html = await fetchPage(firm.url);

    if (!html) {
        return {
            firmSlug: firm.slug,
            firmName: firm.name,
            discount: null,
            promoText: null,
            sourceUrl: firm.url,
            scrapedAt: new Date(),
            success: false,
            error: 'Failed to fetch page (timeout or blocked)'
        };
    }

    try {
        const $ = cheerio.load(html);

        // Use different parsing for Twitter/Nitter pages
        const { discount, promoText } = firm.isTwitter
            ? findPromoTextTwitter($)
            : findPromoText($);

        return {
            firmSlug: firm.slug,
            firmName: firm.name,
            discount,
            promoText,
            sourceUrl: firm.url,
            scrapedAt: new Date(),
            success: true
        };
    } catch (error) {
        return {
            firmSlug: firm.slug,
            firmName: firm.name,
            discount: null,
            promoText: null,
            sourceUrl: firm.url,
            scrapedAt: new Date(),
            success: false,
            error: error instanceof Error ? error.message : 'Parse error'
        };
    }
}

/**
 * Scrape all firms
 */
export async function scrapeAllFirms(): Promise<ScrapedPromotion[]> {
    console.log(`Starting scrape of ${FIRMS_TO_SCRAPE.length} prop firms...`);

    // Scrape in batches of 5 to avoid overwhelming
    const batchSize = 5;
    const promotions: ScrapedPromotion[] = [];

    for (let i = 0; i < FIRMS_TO_SCRAPE.length; i += batchSize) {
        const batch = FIRMS_TO_SCRAPE.slice(i, i + batchSize);
        const results = await Promise.allSettled(batch.map(firm => scrapeFirm(firm)));

        for (let j = 0; j < results.length; j++) {
            const result = results[j];
            if (result.status === 'fulfilled') {
                promotions.push(result.value);
            } else {
                const firm = batch[j];
                promotions.push({
                    firmSlug: firm.slug,
                    firmName: firm.name,
                    discount: null,
                    promoText: null,
                    sourceUrl: firm.url,
                    scrapedAt: new Date(),
                    success: false,
                    error: result.reason?.message || 'Unknown error'
                });
            }
        }

        // Small delay between batches
        if (i + batchSize < FIRMS_TO_SCRAPE.length) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    const successCount = promotions.filter(p => p.success).length;
    const promoCount = promotions.filter(p => p.discount).length;

    console.log(`Scraping complete. Success: ${successCount}/${FIRMS_TO_SCRAPE.length}, Promotions found: ${promoCount}`);

    return promotions;
}

/**
 * Generate a summary report of scraped promotions
 */
export function generateReport(promotions: ScrapedPromotion[]): string {
    const timestamp = new Date().toISOString();
    let report = `# Prop Firm Promotions Report\n`;
    report += `Generated: ${timestamp}\n\n`;

    const withDiscounts = promotions.filter(p => p.discount);
    const failed = promotions.filter(p => !p.success);
    const successful = promotions.filter(p => p.success);

    report += `## Summary\n`;
    report += `- Total firms scraped: ${promotions.length}\n`;
    report += `- Successful scrapes: ${successful.length}\n`;
    report += `- Promotions found: ${withDiscounts.length}\n`;
    report += `- Failed scrapes: ${failed.length}\n\n`;

    if (withDiscounts.length > 0) {
        report += `## Active Promotions\n\n`;
        for (const promo of withDiscounts) {
            report += `### ${promo.firmName}\n`;
            report += `- **Discount**: ${promo.discount}\n`;
            if (promo.promoText) {
                report += `- **Details**: ${promo.promoText}\n`;
            }
            report += `- **Source**: ${promo.sourceUrl}\n\n`;
        }
    }

    if (failed.length > 0) {
        report += `## Failed Scrapes\n\n`;
        for (const promo of failed) {
            report += `- ${promo.firmName}: ${promo.error}\n`;
        }
    }

    return report;
}

/**
 * Get the list of firms being scraped
 */
export function getFirmsList(): typeof FIRMS_TO_SCRAPE {
    return FIRMS_TO_SCRAPE;
}
