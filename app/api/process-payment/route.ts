import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { token, amount } = await req.json();
        
        console.log('Processing payment:', {
            amount: amount,
            token: token.substring(0, 10) + '...'
        });

        if (!token || !amount) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const paymentResponse = await fetch('https://scl.clover.com/v1/charges', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.CLOVER_PRIVATE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: Math.round(amount),
                source: token,
                currency: 'USD',
                description: 'Donation to Gabby\'s Goats'
            })
        });

        const paymentResult = await paymentResponse.json();
        console.log('Payment API response:', paymentResult);

        if (!paymentResponse.ok) {
            let errorMessage = 'Payment processing failed';
            
            if (paymentResult.error) {
                switch (paymentResult.error.code) {
                    case 'card_declined':
                        errorMessage = 'Card was declined. Please try a different card.';
                        break;
                    case 'expired_card':
                        errorMessage = 'Card has expired. Please use a different card.';
                        break;
                    case 'invalid_number':
                        errorMessage = 'Invalid card number. Please check and try again.';
                        break;
                    default:
                        errorMessage = paymentResult.error.message || 'Payment failed. Please try again.';
                }
            }

            return NextResponse.json(
                { error: errorMessage },
                { status: paymentResponse.status }
            );
        }

        // Send notification email only if payment was successful
        if (paymentResult.status === 'succeeded') {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: process.env.NOTIFICATION_EMAIL,
                    subject: '🎉 New Donation Received - Gabby\'s Goats',
                    html: `
                        <h1>New Donation Received!</h1>
                        <p>Amount: $${(amount / 100).toFixed(2)}</p>
                        <p>Transaction ID: ${paymentResult.id}</p>
                        <p>Date: ${new Date().toLocaleString()}</p>
                        <p>Card: ${paymentResult.source?.brand} ending in ${paymentResult.source?.last4}</p>
                    `,
                });
            } catch (emailError) {
                console.error('Email notification failed:', emailError);
                // Continue execution - email failure shouldn't affect payment success
            }
        }

        return NextResponse.json({
            success: true,
            id: paymentResult.id,
            amount: paymentResult.amount,
            status: paymentResult.status
        });

    } catch (error: any) {
        console.error('Payment processing error:', error);
        return NextResponse.json(
            { 
                error: 'An unexpected error occurred. Please try again.',
                details: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
    });
}