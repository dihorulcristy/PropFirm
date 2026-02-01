import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const API_SECRET = process.env.SCRAPER_API_SECRET || 'your-secret-key';
const OFFERS_FILE = path.join(process.cwd(), 'data', 'offers.json');

export interface OfferData {
    discount: string;
    coupon: string;
    promoText: string;
}

export interface OffersFile {
    lastUpdated: string;
    offers: Record<string, OfferData>;
}

/**
 * GET /api/offers
 * Get current offers from the JSON file
 */
export async function GET() {
    try {
        const fileContent = await fs.readFile(OFFERS_FILE, 'utf-8');
        const data: OffersFile = JSON.parse(fileContent);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error reading offers:', error);
        return NextResponse.json(
            { error: 'Failed to read offers' },
            { status: 500 }
        );
    }
}

/**
 * POST /api/offers
 * Update offers from scraped data
 */
export async function POST(request: NextRequest) {
    // Verify API secret
    const secret = request.headers.get('x-api-secret') ||
        request.nextUrl.searchParams.get('secret');

    if (secret !== API_SECRET) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { updates } = body as { updates: Record<string, Partial<OfferData>> };

        if (!updates || typeof updates !== 'object') {
            return NextResponse.json(
                { error: 'Invalid updates format' },
                { status: 400 }
            );
        }

        // Read current offers
        let currentData: OffersFile;
        try {
            const fileContent = await fs.readFile(OFFERS_FILE, 'utf-8');
            currentData = JSON.parse(fileContent);
        } catch {
            currentData = { lastUpdated: '', offers: {} };
        }

        // Merge updates
        for (const [firmSlug, offerUpdate] of Object.entries(updates)) {
            if (currentData.offers[firmSlug]) {
                currentData.offers[firmSlug] = {
                    ...currentData.offers[firmSlug],
                    ...offerUpdate
                };
            } else {
                currentData.offers[firmSlug] = {
                    discount: offerUpdate.discount || '',
                    coupon: offerUpdate.coupon || '',
                    promoText: offerUpdate.promoText || ''
                };
            }
        }

        // Update timestamp
        currentData.lastUpdated = new Date().toISOString();

        // Write back to file
        await fs.writeFile(OFFERS_FILE, JSON.stringify(currentData, null, 4), 'utf-8');

        return NextResponse.json({
            success: true,
            message: `Updated ${Object.keys(updates).length} offers`,
            lastUpdated: currentData.lastUpdated
        });
    } catch (error) {
        console.error('Error updating offers:', error);
        return NextResponse.json(
            { error: 'Failed to update offers' },
            { status: 500 }
        );
    }
}

/**
 * PUT /api/offers
 * Replace all offers
 */
export async function PUT(request: NextRequest) {
    const secret = request.headers.get('x-api-secret') ||
        request.nextUrl.searchParams.get('secret');

    if (secret !== API_SECRET) {
        return NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        );
    }

    try {
        const body = await request.json();
        const { offers } = body as { offers: Record<string, OfferData> };

        const newData: OffersFile = {
            lastUpdated: new Date().toISOString(),
            offers: offers || {}
        };

        await fs.writeFile(OFFERS_FILE, JSON.stringify(newData, null, 4), 'utf-8');

        return NextResponse.json({
            success: true,
            message: 'Offers replaced successfully',
            lastUpdated: newData.lastUpdated
        });
    } catch (error) {
        console.error('Error replacing offers:', error);
        return NextResponse.json(
            { error: 'Failed to replace offers' },
            { status: 500 }
        );
    }
}
