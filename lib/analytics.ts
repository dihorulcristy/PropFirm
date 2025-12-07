import { sql } from '@vercel/postgres';

type Click = {
    id: number;
    firm: string;
    destination: string;
    click_timestamp: string; // Postgres returns bigints as strings
    ip_address?: string;
};

// No initialization needed for DB connection in serverless (handled by @vercel/postgres)

export async function trackClick(firm: string, destination: string) {
    try {
        const timestamp = Date.now();
        await sql`
            INSERT INTO analytics_clicks (firm, destination, click_timestamp)
            VALUES (${firm}, ${destination}, ${timestamp})
        `;
    } catch (error) {
        console.error('Failed to track click:', error);
    }
}

export async function getStats(period: 'today' | 'yesterday' | '7d' | '30d' | 'all' = 'all') {
    try {
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        let startTime = 0;
        let endTime = Infinity;

        if (period === 'today') {
            startTime = todayStart;
        } else if (period === 'yesterday') {
            startTime = todayStart - 86400000;
            endTime = todayStart;
        } else if (period === '7d') {
            startTime = now.getTime() - (7 * 86400000);
        } else if (period === '30d') {
            startTime = now.getTime() - (30 * 86400000);
        }

        // Fetch clicks based on time range
        // Note: We fetch all for 'all', or filter by timestamp column
        // Postgres BIGINT comparisons

        let result;
        if (period === 'all') {
            result = await sql`SELECT * FROM analytics_clicks ORDER BY click_timestamp DESC`;
        } else {
            // For simplicity in this migration, we can query safely with a WHERE clause
            // Use simple string interpolation for BigInt comparison or parameterized query if possible
            // Parameterized is better:
            if (endTime !== Infinity) {
                result = await sql`
                    SELECT * FROM analytics_clicks 
                    WHERE click_timestamp >= ${startTime} AND click_timestamp < ${endTime}
                    ORDER BY click_timestamp DESC
                 `;
            } else {
                result = await sql`
                    SELECT * FROM analytics_clicks 
                    WHERE click_timestamp >= ${startTime}
                    ORDER BY click_timestamp DESC
                 `;
            }
        }

        const clicks = result.rows.map(row => ({
            id: row.id,
            firm: row.firm,
            destination: row.destination,
            timestamp: Number(row.click_timestamp), // Convert BigInt string to number for frontend
        }));

        // Group by Firm
        const summary: Record<string, number> = {};
        clicks.forEach(click => {
            summary[click.firm] = (summary[click.firm] || 0) + 1;
        });

        return {
            total: clicks.length,
            clicks: clicks,
            summary
        };

    } catch (error) {
        console.error('Failed to get stats:', error);
        return { clicks: [], summary: {} };
    }
}
