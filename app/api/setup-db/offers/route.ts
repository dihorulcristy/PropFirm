import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS prop_firm_offers (
                id SERIAL PRIMARY KEY,
                firm_name VARCHAR(255) NOT NULL,
                twitter_handle VARCHAR(255),
                tweet_text TEXT NOT NULL,
                tweet_id VARCHAR(255) UNIQUE NOT NULL,
                discount_amount VARCHAR(50),
                coupon_code VARCHAR(50),
                offer_url TEXT,
                tweet_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                is_active BOOLEAN DEFAULT TRUE
            );
        `;

        // Create an index on specific columns for faster querying if table grows
        await sql`CREATE INDEX IF NOT EXISTS idx_firm_name ON prop_firm_offers(firm_name);`;
        await sql`CREATE INDEX IF NOT EXISTS idx_is_active ON prop_firm_offers(is_active);`;

        return NextResponse.json({ message: 'Offers table initialized successfully' });
    } catch (error) {
        console.error('Database setup error:', error);
        return NextResponse.json({ error: 'Failed to create table', details: error }, { status: 500 });
    }
}
