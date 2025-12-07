
import { getStats } from '@/lib/analytics';
import { verifySession } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Protect this route
    const session = await verifySession();
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const period = searchParams.get('period') as 'today' | 'yesterday' | '7d' | '30d' | 'all' || 'all';

    const stats = await getStats(period);
    return NextResponse.json(stats);
}
