import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { email, amount, transactionId, date } = await req.json();

        // Add validation
        if (!email || !amount || !transactionId || !date) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Donation Receipt from Gabby\'s Goats',
            html: `
                <h1>Donation Receipt</h1>
                <p>Thank you for your generous donation!</p>
                <div style="margin: 20px 0; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
                    <p><strong>Amount:</strong> $${amount.toFixed(2)}</p>
                    <p><strong>Transaction ID:</strong> ${transactionId}</p>
                    <p><strong>Date:</strong> ${date}</p>
                </div>
                <p>Your support helps us continue our mission.</p>
            `
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Failed to send receipt:', error);
        return NextResponse.json(
            { error: 'Failed to send receipt' },
            { status: 500 }
        );
    }
}