import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Configuration
// You will need to add TWITTER_BEARER_TOKEN to your Vercel Environment Variables
const TWITTER_API_URL = 'https://api.twitter.com/2';

// List of Prop Firms to track (Handle -> Name mapping)
// NOTE: User IDs need to be verified using Twitter API or tools like tweeterid.com
// The IDs below are placeholders that should be updated with real IDs
const TRACKED_ACCOUNTS = [
    // Forex Firms
    { id: '1090629986386821120', handle: 'FTMO_com', name: 'FTMO' },
    { id: '1587395726277808128', handle: 'FundedNext', name: 'FundedNext' },
    { id: '1389547929424842754', handle: 'FunderPro_', name: 'FunderPro' },
    { id: 'PLACEHOLDER_FUNDINGPIPS', handle: 'fundingpips', name: 'FundingPips' },
    { id: 'PLACEHOLDER_TRADINGCULT', handle: 'trading_cult', name: 'TradingCult' },
    { id: 'PLACEHOLDER_DOMINION', handle: 'DominionFunding', name: 'Dominion Funding' },
    { id: 'PLACEHOLDER_CONCEPT', handle: 'TheConceptTrade', name: 'The Concept Trading' },
    { id: 'PLACEHOLDER_INSTANTFUNDING', handle: 'InstantFunding', name: 'InstantFunding' },
    { id: 'PLACEHOLDER_DNAFUNDED', handle: 'dnafunded', name: 'DnaFunded' },
    { id: 'PLACEHOLDER_SPICEPROP', handle: 'SpiceProp_', name: 'SpiceProp' },

    // Futures Firms
    { id: 'PLACEHOLDER_FUNDERPRO_FUTURES', handle: 'FunderProFutures', name: 'FunderPro Futures' },
    { id: 'PLACEHOLDER_YRM', handle: 'yrmprop', name: 'YRM Prop' },
    { id: 'PLACEHOLDER_FFN', handle: 'FundedFuturesNet', name: 'Funded Futures Network' },
];

// Keywords to detect offers
const OFFER_KEYWORDS = /%\s*OFF|discount|coupon|code|sale|deal|promo|reducere|oferta|special|limited|exclusive|flash/i;

// Patterns to extract discount percentages
const DISCOUNT_PATTERNS = [
    /(\d+)%\s*OFF/i,
    /(\d+)%\s*discount/i,
    /(\d+)%\s*reducere/i,
    /save\s*(\d+)%/i,
];

// Patterns to extract coupon codes
const CODE_PATTERNS = [
    /(?:code|use|coupon|cod)[:\s]+([A-Z0-9]{3,20})/i,
    /(?:code|use|coupon|cod)[:\s]*["']([A-Z0-9]{3,20})["']/i,
    /[🔥🎁💰⚡]\s*([A-Z0-9]{4,15})\s*[🔥🎁💰⚡]/,
    /\b([A-Z]{2,}[0-9]{2,})\b/,  // Common patterns like NEWYEAR50, JAN25
];

function extractDiscount(text: string): string | null {
    for (const pattern of DISCOUNT_PATTERNS) {
        const match = text.match(pattern);
        if (match) {
            return `${match[1]}% OFF`;
        }
    }
    return null;
}

function extractCouponCode(text: string): string | null {
    for (const pattern of CODE_PATTERNS) {
        const match = text.match(pattern);
        if (match) {
            return match[1].toUpperCase();
        }
    }
    return null;
}

export async function GET(request: Request) {
    // Basic authorization check (optional but recommended for cron jobs)
    const authHeader = request.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        console.log('Unauthorized cron request');
        // Still return 200 to not reveal auth setup
    }

    const bearerToken = process.env.TWITTER_BEARER_TOKEN;

    if (!bearerToken) {
        console.log('Twitter Bearer Token not configured');
        return NextResponse.json({
            error: 'Twitter Bearer Token not configured',
            message: 'Please add TWITTER_BEARER_TOKEN to your environment variables'
        }, { status: 200 });
    }

    const results = {
        processed: 0,
        newOffers: 0,
        skipped: 0,
        errors: [] as string[]
    };

    try {
        for (const account of TRACKED_ACCOUNTS) {
            // Skip accounts with placeholder IDs
            if (account.id.startsWith('PLACEHOLDER')) {
                results.skipped++;
                continue;
            }

            try {
                // Fetch tweets
                const tweetsResponse = await fetch(
                    `${TWITTER_API_URL}/users/${account.id}/tweets?max_results=10&exclude=retweets,replies&tweet.fields=created_at,public_metrics`,
                    {
                        headers: {
                            Authorization: `Bearer ${bearerToken}`,
                        },
                    }
                );

                // Log the status for debugging
                if (!tweetsResponse.ok) {
                    const errorBody = await tweetsResponse.text();
                    throw new Error(`Twitter API error: ${tweetsResponse.status} ${tweetsResponse.statusText} - ${errorBody}`);
                }

                const data = await tweetsResponse.json();

                if (data.data && Array.isArray(data.data)) {
                    for (const tweet of data.data) {
                        const text = tweet.text;

                        // Check if tweet contains offer keywords
                        const isOffer = OFFER_KEYWORDS.test(text);

                        if (isOffer) {
                            // Extract potential data
                            const discount = extractDiscount(text);
                            const code = extractCouponCode(text);

                            // Check if tweet already exists in DB
                            const existing = await sql`
                                SELECT id FROM prop_firm_offers WHERE tweet_id = ${tweet.id}
                            `;

                            if (existing.rowCount === 0) {
                                // Save new offer
                                await sql`
                                    INSERT INTO prop_firm_offers (
                                        firm_name, twitter_handle, tweet_text, tweet_id, 
                                        discount_amount, coupon_code, tweet_date, engagement_count
                                    ) VALUES (
                                        ${account.name}, ${account.handle}, ${text}, ${tweet.id},
                                        ${discount}, ${code}, ${tweet.created_at},
                                        ${tweet.public_metrics?.like_count || 0}
                                    )
                                `;
                                results.newOffers++;
                                console.log(`New offer found: ${account.name} - ${discount || 'no discount'} - ${code || 'no code'}`);
                            }
                        }
                    }
                }
                results.processed++;

            } catch (err: any) {
                console.error(`Error processing ${account.name}:`, err);
                results.errors.push(`${account.name}: ${err.message}`);
            }
        }

        return NextResponse.json({
            message: 'Scraping execution finished',
            stats: results,
            timestamp: new Date().toISOString()
        });

    } catch (error: any) {
        console.error('Fatal scraping error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            details: error.message
        }, { status: 200 });
    }
}
