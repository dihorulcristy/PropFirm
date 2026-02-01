import { NextRequest, NextResponse } from 'next/server';
import { scrapeAllFirms, generateReport, ScrapedPromotion } from '@/lib/scraper';

// Secret key for API protection (set in environment variables)
const API_SECRET = process.env.SCRAPER_API_SECRET || 'your-secret-key';

export const dynamic = 'force-dynamic';
export const maxDuration = 60; // Allow up to 60 seconds for scraping

/**
 * GET /api/scraper/run
 * Manually trigger scraping of all prop firm websites
 * Protected by API secret
 */
export async function GET(request: NextRequest) {
    // Check for secret key in query params or headers
    const secret = request.nextUrl.searchParams.get('secret') ||
        request.headers.get('x-api-secret');

    if (secret !== API_SECRET) {
        return NextResponse.json(
            { error: 'Unauthorized. Provide valid secret.' },
            { status: 401 }
        );
    }

    try {
        console.log('Starting scraper run...');
        const startTime = Date.now();

        // Run all scrapers
        const promotions = await scrapeAllFirms();

        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;

        // Generate text report
        const report = generateReport(promotions);

        // Prepare response
        const response = {
            success: true,
            timestamp: new Date().toISOString(),
            duration: `${duration.toFixed(2)}s`,
            summary: {
                totalFirms: promotions.length,
                promotionsFound: promotions.filter(p => p.discount).length,
                failedScrapes: promotions.filter(p => !p.success).length,
            },
            promotions: promotions.map(p => ({
                firm: p.firmName,
                discount: p.discount,
                promoText: p.promoText,
                success: p.success,
                error: p.error,
            })),
            report,
        };

        console.log(`Scraper completed in ${duration.toFixed(2)}s`);

        return NextResponse.json(response);
    } catch (error) {
        console.error('Scraper error:', error);
        return NextResponse.json(
            {
                error: 'Scraper failed',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}

/**
 * POST /api/scraper/run
 * Same as GET, used for Vercel Cron
 */
export async function POST(request: NextRequest) {
    // For Vercel Cron, check the CRON_SECRET
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    // Allow if it's a Vercel Cron request or has valid API secret
    const isValidCron = cronSecret && authHeader === `Bearer ${cronSecret}`;
    const secret = request.headers.get('x-api-secret');
    const isValidSecret = secret === API_SECRET;

    if (!isValidCron && !isValidSecret) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const promotions = await scrapeAllFirms();
        const report = generateReport(promotions);

        // Here you could:
        // 1. Save to database
        // 2. Send email notification
        // 3. Update offers in real-time

        const promotionsWithDiscounts = promotions.filter(p => p.discount);

        // Log the results
        console.log('=== SCRAPER CRON RESULTS ===');
        console.log(`Found ${promotionsWithDiscounts.length} active promotions:`);
        promotionsWithDiscounts.forEach(p => {
            console.log(`- ${p.firmName}: ${p.discount}`);
        });

        return NextResponse.json({
            success: true,
            timestamp: new Date().toISOString(),
            promotionsFound: promotionsWithDiscounts.length,
            promotions: promotionsWithDiscounts.map(p => ({
                firm: p.firmName,
                discount: p.discount,
            })),
        });
    } catch (error) {
        console.error('Cron scraper error:', error);
        return NextResponse.json(
            { error: 'Scraper failed' },
            { status: 500 }
        );
    }
}
