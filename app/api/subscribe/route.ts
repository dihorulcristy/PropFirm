import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, email } = await request.json();

        if (!email || !name) {
            return NextResponse.json(
                { error: 'Email and name are required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.BREVO_API_KEY;

        if (!apiKey) {
            console.error('BREVO_API_KEY is not defined');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': apiKey,
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                attributes: {
                    FIRSTNAME: name,
                },
                updateEnabled: true,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            // Check if the error is because the contact already exists
            if (data.code === 'duplicate_parameter') {
                return NextResponse.json(
                    { message: 'Email already subscribed' },
                    { status: 200 } // Treat as success for the user
                );
            }

            console.error('Brevo API Error:', data);
            return NextResponse.json(
                { error: 'Failed to subscribe' },
                { status: response.status }
            );
        }

        return NextResponse.json(
            { message: 'Successfully subscribed' },
            { status: 201 }
        );

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
