
import { login, checkConfig } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        if (!checkConfig()) {
            return NextResponse.json({ success: false, message: 'Server configuration error: Missing environment variables' }, { status: 500 });
        }

        const { email, password } = await request.json();
        const success = await login(email, password);

        if (success) {
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}
