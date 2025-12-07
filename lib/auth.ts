
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.SECRET_KEY ? new TextEncoder().encode(process.env.SECRET_KEY) : null;
const ALG = 'HS256';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export function checkConfig() {
    return !!SECRET_KEY && !!ADMIN_EMAIL && !!ADMIN_PASSWORD;
}

export async function login(email: string, password: string): Promise<boolean> {
    if (!SECRET_KEY || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
        console.error('Missing environment variables for authentication');
        return false;
    }

    if (email.trim() === ADMIN_EMAIL.trim() && password.trim() === ADMIN_PASSWORD.trim()) {
        const token = await new SignJWT({ email })
            .setProtectedHeader({ alg: ALG })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(SECRET_KEY);

        const cookieStore = await cookies();
        cookieStore.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        });

        return true;
    }
    return false;
}

export async function verifySession() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;

    if (!token) return null;

    try {
        if (!SECRET_KEY) {
            return null;
        }
        const { payload } = await jwtVerify(token, SECRET_KEY, {
            algorithms: [ALG],
        });
        return payload;
    } catch (error) {
        return null;
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_token');
}
