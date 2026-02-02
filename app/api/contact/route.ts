import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'PropFirmHub Support <support@propfirms-hub.com>',
      to: [process.env.ADMIN_EMAIL || 'herghiligiu.cristian@yahoo.ro'],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p>You have received a new message from your website contact form.</p>
          
          <div style="background-color: #f4f4f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <div style="border-top: 1px solid #e4e4e7; margin: 10px 0; padding-top: 10px;">
              <strong>Message:</strong><br/>
              <p style="white-space: pre-wrap; margin-top: 5px;">${message}</p>
            </div>
          </div>
          
          <p style="color: #71717a; font-size: 12px;">
            This email was sent via the contact form on PropFirmHub.
          </p>
        </div>
      `,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
