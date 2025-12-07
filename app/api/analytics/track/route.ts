
import { trackClick } from '@/lib/analytics';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const dest = searchParams.get('dest');
    const firm = searchParams.get('firm');

    if (!dest || !firm) {
        return NextResponse.json({ error: 'Missing destination or firm' }, { status: 400 });
    }

    // Track the click asynchronously (fire and forget for speed, or await if critical)
    await trackClick(firm, dest);

    // Redirect to destination
    return NextResponse.redirect(dest);
}
