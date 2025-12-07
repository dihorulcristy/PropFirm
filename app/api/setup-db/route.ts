import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS analytics_clicks (
        id SERIAL PRIMARY KEY,
        firm VARCHAR(255) NOT NULL,
        destination TEXT NOT NULL,
        click_timestamp BIGINT NOT NULL,
        ip_address VARCHAR(45)
      );
    `;
        return NextResponse.json({ message: 'Database initialized successfully' });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
