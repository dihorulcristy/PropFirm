
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'analytics.json');

type Click = {
    id: string;
    firm: string;
    destination: string;
    timestamp: number;
    ip?: string; // Anonymize or omit in prod if not needed
};

type AnalyticsData = {
    clicks: Click[];
};

// Initialize file if not exists
if (!fs.existsSync(DATA_FILE)) {
    try {
        const dir = path.dirname(DATA_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(DATA_FILE, JSON.stringify({ clicks: [] }, null, 2));
    } catch (e) {
        console.error("Error initializing analytics file", e);
    }
}

export async function trackClick(firm: string, destination: string) {
    try {
        const data: AnalyticsData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

        // Simple ID generation
        const id = Math.random().toString(36).substring(2, 15);

        const newClick: Click = {
            id,
            firm,
            destination,
            timestamp: Date.now(),
        };

        data.clicks.push(newClick);
        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Failed to track click:', error);
    }
}

export async function getStats(period: 'today' | 'yesterday' | '7d' | '30d' | 'all' = 'all') {
    try {
        if (!fs.existsSync(DATA_FILE)) return { clicks: [], summary: {} };

        const data: AnalyticsData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

        let filteredClicks = data.clicks;

        if (period === 'today') {
            filteredClicks = data.clicks.filter(c => c.timestamp >= todayStart);
        } else if (period === 'yesterday') {
            const yesterdayStart = todayStart - 86400000;
            filteredClicks = data.clicks.filter(c => c.timestamp >= yesterdayStart && c.timestamp < todayStart);
        } else if (period === '7d') {
            const start = now.getTime() - (7 * 86400000);
            filteredClicks = data.clicks.filter(c => c.timestamp >= start);
        } else if (period === '30d') {
            const start = now.getTime() - (30 * 86400000);
            filteredClicks = data.clicks.filter(c => c.timestamp >= start);
        }

        // Group by Firm
        const summary: Record<string, number> = {};
        filteredClicks.forEach(click => {
            summary[click.firm] = (summary[click.firm] || 0) + 1;
        });

        return {
            total: filteredClicks.length,
            clicks: filteredClicks.sort((a, b) => b.timestamp - a.timestamp), // Newest first
            summary
        };

    } catch (error) {
        console.error('Failed to get stats:', error);
        return { clicks: [], summary: {} };
    }
}
