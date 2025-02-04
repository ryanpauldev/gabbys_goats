import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe("your-secret-key-here", { apiVersion: "2025-01-27.acacia" });

export async function POST(req: Request) {
    const { amount } = await req.json(); // Get donation amount from user

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: "https://yourwebsite.com/success",
        cancel_url: "https://yourwebsite.com/cancel",
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: { name: "Donation" },
                    unit_amount: amount * 100, // Convert dollars to cents
                },
                quantity: 1,
            },
        ],
    });

    return NextResponse.json({ sessionId: session.id });
}
