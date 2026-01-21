import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Configuration
// You will need to add TWITTER_BEARER_TOKEN to your Vercel Environment Variables
const TWITTER_API_URL = 'https://api.twitter.com/2';

// List of Prop Firms to track (Handle -> Name mapping)
// NOTE: You need to find the numeric User ID for each handle. 
// You can use a tool like 'twiducate.com' or the Twitter API to find these IDs.
// For now, I'm using placeholders. YOU MUST UPDATE THESE IDs.
const TRACKED_ACCOUNTS = [
    { id: '1389547929424842754', handle: 'FunderPro_', name: 'FunderPro' }, // Example ID (needs verification)
    { id: '1090629986386821120', handle: 'FTMO_com', name: 'FTMO' }, // Example ID
    { id: '1587395726277808128', handle: 'FundedNext', name: 'FundedNext' }, // Example ID
];

export async function GET(request: Request) {
    // Basic authorization check (optional but recommended for cron jobs)
    // You can check for a secret header that Vercel Cron sends.
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) { ... }

    const bearerToken = process.env.TWITTER_BEARER_TOKEN;

    if (!bearerToken) {
        return NextResponse.json({ error: 'Twitter Bearer Token not configured' }, { status: 500 });
    }

    const results = {
        processed: 0,
        newOffers: 0,
        errors: [] as string[]
    };

    try {
        for (const account of TRACKED_ACCOUNTS) {
            try {
                // Fetch tweets
                const tweetsResponse = await fetch(
                    `${TWITTER_API_URL}/users/${account.id}/tweets?max_results=5&exclude=retweets,replies&tweet.fields=created_at`,
                    {
                        headers: {
                            Authorization: `Bearer ${bearerToken}`,
                        },
                    }
                );

                if (!tweetsResponse.ok) {
                    throw new Error(`Twitter API error: ${tweetsResponse.statusText}`);
                }

                const data = await tweetsResponse.json();

                if (data.data && Array.isArray(data.data)) {
                    for (const tweet of data.data) {
                        const text = tweet.text;

                        // Simple Keyword Analysis
                        // Look for keywords indicating an offer
                        const isOffer = /%\s*OFF|discount|coupon|code|sale|deal|promo/i.test(text);

                        if (isOffer) {
                            // Extract potential data
                            const discountMatch = text.match(/(\d+)%\s*OFF/i);
                            const discount = discountMatch ? discountMatch[0] : null;

                            const codeMatch = text.match(/(?:code|use|coupon):\s*([A-Z0-9]+)/i);
                            const code = codeMatch ? codeMatch[1] : null;

                            // Check if scraping already exists
                            const existing = await sql`
                                SELECT id FROM prop_firm_offers WHERE tweet_id = ${tweet.id}
                            `;

                            if (existing.rowCount === 0) {
                                // Save new offer
                                await sql`
                                    INSERT INTO prop_firm_offers (
                                        firm_name, twitter_handle, tweet_text, tweet_id, 
                                        discount_amount, coupon_code, tweet_date
                                    ) VALUES (
                                        ${account.name}, ${account.handle}, ${text}, ${tweet.id},
                                        ${discount}, ${code}, ${tweet.created_at}
                                    )
                                `;
                                results.newOffers++;
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
            message: 'Scraping completed',
            stats: results
        });

    } catch (error: any) {
        return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
    }
}
