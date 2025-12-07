
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const secret = process.env.SECRET_KEY;
const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!secret || !email || !password) {
    throw new Error('Missing environment variables for authentication');
}

const SECRET_KEY = new TextEncoder().encode(secret);
const ALG = 'HS256';

const ADMIN_EMAIL = email;
const ADMIN_PASSWORD = password;

export async function login(email: string, password: string): Promise<boolean> {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
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
