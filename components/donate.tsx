"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

export default function Donate() {
    const [amount, setAmount] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleDonate = async () => {
        setLoading(true);
        const res = await fetch("/api/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount }),
        });

        const { sessionId } = await res.json();
        const stripe = await stripePromise;

        // Open Stripe in a popup
        const { error } = await stripe?.redirectToCheckout({ sessionId }) ?? {};
        if (error) console.error(error);

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Donate to Support Us</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="border px-3 py-2 mb-4 rounded-md"
                min="1"
            />
            <button
                onClick={handleDonate}
                disabled={loading}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-150 ease-in-out"
            >
                {loading ? "Processing..." : `Donate $${amount}`}
            </button>
        </div>
    );
}
