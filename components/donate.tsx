"use client";

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Receipt from '@/components/receipt';
import { useRouter } from 'next/navigation';

declare global {
    interface Window {
        Clover: any;
    }
}

interface CloverElement {
    destroy: () => void;
    mount: (selector: string) => void;
    addEventListener: (event: string, callback: (event: any) => void) => void;
}

interface CloverElements {
    [key: string]: CloverElement;
}

// Add this interface for Clover events
interface CloverEvent {
    error?: {
        message: string;
    };
    complete: boolean;
    empty: boolean;
}

// Add these interfaces at the top of the file with your other interfaces
interface CloverTokenResult {
    token: string;
    errors?: {
        [key: string]: string;
    };
}

const Donate: React.FC = () => {
    const cloverInitialized = useRef(false);
    const cloverInstance = useRef<any>(null);
    const cloverElements = useRef<CloverElements>({});
    const [amount, setAmount] = useState<number>(10); // Default $10.00
    const [isSuccess, setIsSuccess] = useState(false);
    const [transactionDetails, setTransactionDetails] = useState<{
        amount: number;
        transactionId: string;
        date: string;
    } | null>(null);
    const router = useRouter();

    useEffect(() => {
        if (cloverInitialized.current) return;

        const script = document.createElement('script');
        script.src = 'https://checkout.clover.com/sdk.js';
        script.async = true;

        const cleanup = () => {
            // Clean up elements
            if (cloverElements.current) {
                Object.values(cloverElements.current).forEach((element: CloverElement) => {
                    if (element?.destroy) element.destroy();
                });
            }
            
            // Reset state
            cloverElements.current = {};
            cloverInstance.current = null;
            cloverInitialized.current = false;
            
            // Remove script
            const existingScript = document.querySelector('script[src*="checkout.clover.com"]');
            if (existingScript) existingScript.remove();

            // Remove Clover iframe and footer elements
            const cloverIframes = document.querySelectorAll('iframe[src*="clover.com"]');
            cloverIframes.forEach(iframe => iframe.remove());

            // Remove Clover footer elements
            const cloverFooter = document.querySelector('.clover-footer');
            if (cloverFooter) cloverFooter.remove();

            // Remove reCAPTCHA elements
            const recaptchaElements = document.querySelectorAll('.grecaptcha-badge');
            recaptchaElements.forEach(element => element.remove());

            // Remove any reCAPTCHA scripts
            const recaptchaScripts = document.querySelectorAll('script[src*="recaptcha"]');
            recaptchaScripts.forEach(script => script.remove());

            // Remove reCAPTCHA iframe
            const recaptchaIframes = document.querySelectorAll('iframe[src*="recaptcha"]');
            recaptchaIframes.forEach(iframe => iframe.remove());

            // Clean up any leftover reCAPTCHA related elements
            document.querySelectorAll('[class*="grecaptcha"]').forEach(el => el.remove());
        };

        // Clean up before initializing
        cleanup();

        script.onload = () => {
            if (window.Clover) {
                initializeClover();
                cloverInitialized.current = true;
            } else {
                console.error('Clover SDK failed to load');
            }
        };

        script.onerror = (error) => {
            console.error('Failed to load Clover SDK:', error);
            cleanup();
        };

        document.head.appendChild(script);
        return cleanup;
    }, []);

    useEffect(() => {
        // Cleanup function runs when component unmounts
        return () => {
            // Clean up elements
            if (cloverElements.current) {
                Object.values(cloverElements.current).forEach((element: CloverElement) => {
                    if (element?.destroy) element.destroy();
                });
            }
            
            // Reset state
            cloverElements.current = {};
            cloverInstance.current = null;
            cloverInitialized.current = false;

            // Remove script
            const existingScript = document.querySelector('script[src*="checkout.clover.com"]');
            if (existingScript) existingScript.remove();
        };
    }, []);

const initializeClover = () => {
    try {
        const apiKey = process.env.NEXT_PUBLIC_CLOVER_API_KEY;
        const merchantId = process.env.NEXT_PUBLIC_CLOVER_MERCHANT_ID;

        if (!apiKey || !merchantId) {
            throw new Error('Missing Clover configuration');
        }

        const clover = new window.Clover(apiKey, {
            merchantId: merchantId,
            environment: 'production',
            baseUrl: 'https://token.clover.com',
            targetOrigin: 'https://checkout.clover.com',
            cors: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });

        cloverInstance.current = clover;
        const elements = clover.elements();

        // Create elements
        cloverElements.current = {
            number: elements.create('CARD_NUMBER'),
            holder: elements.create('CARD_NAME'),
            date: elements.create('CARD_DATE'),
            cvv: elements.create('CARD_CVV'),
            postal: elements.create('CARD_POSTAL_CODE')
        };

        // Mount elements
        Object.entries(cloverElements.current).forEach(([key, element]) => {
            const containerId = `card-${key}`;
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '';
                element.mount(`#${containerId}`);
            }
        });

        cloverInitialized.current = true;
    } catch (error) {
        console.error('Error initializing Clover:', error);
        throw error;
    }
};

    const addEventListeners = (
        cardNumber: any,
        cardDate: any,
        cardCvv: any,
        cardPostalCode: any
    ) => {
        const cardResponse = document.getElementById('card-response');
        const displayCardNumberError = document.getElementById('card-number-errors');
        const displayCardDateError = document.getElementById('card-date-errors');
        const displayCardCvvError = document.getElementById('card-cvv-errors');
        const displayCardPostalCodeError = document.getElementById('card-postal-code-errors');

        cardNumber.addEventListener('change', function (event: CloverEvent) {
            console.log(`cardNumber changed ${JSON.stringify(event)}`);
        });

        cardNumber.addEventListener('blur', function (event: any) {
            console.log(`cardNumber blur ${JSON.stringify(event)}`);
        });

        cardDate.addEventListener('change', function (event: any) {
            console.log(`cardDate changed ${JSON.stringify(event)}`);
        });

        cardDate.addEventListener('blur', function (event: any) {
            console.log(`cardDate blur ${JSON.stringify(event)}`);
        });

        cardCvv.addEventListener('change', function (event: any) {
            console.log(`cardCvv changed ${JSON.stringify(event)}`);
        });

        cardCvv.addEventListener('blur', function (event: any) {
            console.log(`cardCvv blur ${JSON.stringify(event)}`);
        });

        cardPostalCode.addEventListener('change', function (event: any) {
            console.log(`cardPostalCode changed ${JSON.stringify(event)}`);
        });

        cardPostalCode.addEventListener('blur', function (event: any) {
            console.log(`cardPostalCode blur ${JSON.stringify(event)}`);
        });
    };

    // Update the handleSubmit function
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cardResponse = document.getElementById('card-response');

    try {
        if (!cloverInstance.current) {
            throw new Error('Payment system not initialized. Please refresh the page.');
        }

        // Show processing state
        if (cardResponse) {
            cardResponse.className = 'mt-4 text-center text-gray-100';
            cardResponse.textContent = 'Processing payment...';0
        }

        const result = await cloverInstance.current.createToken({
            type: 'card'
        });

        if (!result || !result.token) {
            throw new Error('Failed to process card. Please check your details and try again.');
        }

        const response = await axios.post('/api/process-payment', {
            token: result.token,
            amount: Math.round(amount * 100)
        });

        if (response.data.error) {
            throw new Error(response.data.error);
        }

        // Set success state
        setTransactionDetails({
            amount: amount,
            transactionId: response.data.id,
            date: new Date().toLocaleString()
        });
        setIsSuccess(true);

    } catch (error: any) {
        console.error('Payment error:', error);
        if (cardResponse) {
            cardResponse.className = 'mt-4 text-center text-red-400';
            cardResponse.textContent = error.response?.data?.error || error.message || 'Payment failed. Please try again.';
        }
    }
};

    // Render receipt on success
    if (isSuccess && transactionDetails) {
        return (
            <Receipt
                amount={transactionDetails.amount}
                transactionId={transactionDetails.transactionId}
                date={transactionDetails.date}
            />
        );
    }

    return (
        <section className="min-h-screen py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Remove z-index from backdrop container */}
                <div className="relative py-8 px-6 md:p-12 bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
                    {/* Remove the gradient div that might be blocking particles */}
                    <div className="relative">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                                Support Gabby's GOATS
                            </h1>
                            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                                Your generous donation helps us continue our mission to support and uplift the community.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8" id="payment-form">
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-100 mb-2">
                                    Select Amount
                                </label>
                                {/* Preset amount buttons */}
                                <div className="grid grid-cols-4 gap-3 mb-4">
                                    {[10, 25, 50, 100].map((preset) => (
                                        <button
                                            key={preset}
                                            type="button"
                                            onClick={() => setAmount(preset)}
                                            className={`py-2 px-4 rounded-sm transition duration-150 ease-in-out ${amount === preset
                                                    ? 'bg-purple-600 text-white'
                                                    : 'bg-white text-gray-100 hover:bg-gray-800'
                                                }`}
                                        >
                                            ${preset}
                                        </button>
                                    ))}
                                </div>
                                {/* Custom amount input */}
                                <div className="flex justify-center">
                                    <div className="relative h-[48px] w-[100px]"> {/* Reduced from w-[120px] to w-[100px] */}
                                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100 z-10">$</span>
                                        <input
                                            type="number"
                                            id="amount"
                                            min="1"
                                            step="0.01"
                                            value={amount || ''} 
                                            onChange={(e) => {
                                                const inputValue = e.target.value;
                                                const parsedValue = parseFloat(inputValue);
                                                setAmount(isNaN(parsedValue) ? 0 : Math.round(parsedValue * 100) / 100);
                                            }}
                                            className="form-input absolute inset-0 w-full pl-7 pr-2 bg-white text-gray-200" // Reduced padding
                                            required
                                            maxLength={8} // Limit input length to prevent overflow
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-100 mb-2">   
                                    </label>
                                    <div id="card-number" className="h-[48px] bg-white rounded-sm border border-purple-600 p-3"></div>
                                    <div className="input-errors text-red-400 text-sm mt-1" id="card-number-errors" role="alert"></div>
                                </div>

                                <div>
                                    <label htmlFor="card-holder" className="block text-sm font-medium text-gray-100 mb-2">
                                        
                                    </label>
                                    <div id="card-holder" className="h-[48px] bg-white rounded-sm border border-purple-600 p-3"></div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="card-date" className="block text-sm font-medium text-gray-100 mb-2">
                                            
                                        </label>
                                        <div id="card-date" className="h-[48px] bg-white rounded-sm border border-purple-600 p-3"></div>
                                        <div className="input-errors text-red-400 text-sm mt-1" id="card-date-errors" role="alert"></div>
                                    </div>
                                    <div>
                                        <label htmlFor="card-cvv" className="block text-sm font-medium text-gray-100 mb-2">
                                           
                                        </label>
                                        <div id="card-cvv" className="h-[48px] bg-white rounded-sm border border-purple-600 p-3"></div>
                                        <div className="input-errors text-red-400 text-sm mt-1" id="card-cvv-errors" role="alert"></div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="card-postal" className="block text-sm font-medium text-gray-100 mb-2">
                                        
                                    </label>
                                    <div id="card-postal" className="h-[48px] bg-white rounded-sm border border-purple-600 p-3"></div>
                                    <div className="input-errors text-red-400 text-sm mt-1" id="card-postal-errors" role="alert"></div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={amount <= .99}
                                className={`btn w-full text-white ${
                                    amount <= .99 
                                        ? 'bg-gray-600 cursor-not-allowed' 
                                        : 'bg-purple-600 hover:bg-purple-700'
                                }`}
                            >
                                {amount <= .99 ? 'Enter Amount' : `Donate $${amount}`}
                            </button>
                        </form>
                        <div id="card-response" role="alert" className="mt-4 text-center text-red-400"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;