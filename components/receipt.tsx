import { useState } from 'react';
import axios from 'axios';

interface ReceiptProps {
    amount: number;
    transactionId: string;
    date: string;
}

const Receipt: React.FC<ReceiptProps> = ({ amount, transactionId, date }) => {
    const [email, setEmail] = useState('');
    const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailStatus('sending');
        setErrorMessage('');

        try {
            await axios.post('/api/send-receipt', {
                email,
                amount,
                transactionId,
                date
            });
            setEmailStatus('success');
            setEmail(''); // Clear the input
        } catch (error) {
            setEmailStatus('error');
            setErrorMessage('Failed to send email. Please try again.');
        }
    };

    return (
        <div className="min-h-screen py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="relative py-8 px-6 md:p-12 bg-gray-900/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
                    <div className="text-center space-y-6">
                        <div className="mb-8">
                            <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        
                        <h1 className="text-4xl font-bold text-gray-100">Thank You!</h1>
                        <p className="text-xl text-gray-400">Your donation has been processed successfully.</p>
                        
                        <div className="max-w-sm mx-auto rounded-lg p-6 mt-8">
                            <h2 className="text-lg font-semibold text-gray-300 mb-4">Donation Receipt</h2>
                            <div className="space-y-3 text-left">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Amount:</span>
                                    <span className="text-gray-200">${amount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Date:</span>
                                    <span className="text-gray-200">{date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Transaction ID:</span>
                                    <span className="text-gray-200">{transactionId}</span>
                                </div>
                            </div>

                            {/* Email form section */}
                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <h3 className={`text-md font-semibold mb-4 ${
                                    emailStatus === 'success' 
                                        ? 'text-green-500' 
                                        : emailStatus === 'error'
                                        ? 'text-red-500'
                                        : 'text-gray-300'
                                }`}>
                                    {emailStatus === 'success' 
                                        ? 'Receipt has been sent to your email!'
                                        : emailStatus === 'error'
                                        ? errorMessage
                                        : 'Would you like a copy of your receipt?'}
                                </h3>
                                
                                <form onSubmit={handleSendEmail} className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="flex-1 form-input bg-white border-gray-700 text-gray-200 rounded-sm 
                                                     focus:border-purple-500 focus:ring-purple-500"
                                            disabled={emailStatus === 'sending' || emailStatus === 'success'}
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={emailStatus === 'sending' || emailStatus === 'success'}
                                            className={`btn px-4 py-2 rounded-sm ${
                                                emailStatus === 'success'
                                                    ? 'bg-green-600 hover:bg-green-700'
                                                    : emailStatus === 'sending'
                                                    ? 'bg-gray-600'
                                                    : 'bg-purple-600 hover:bg-purple-700'
                                            } text-white transition duration-150`}
                                        >
                                            {emailStatus === 'sending' 
                                                ? 'Sending...' 
                                                : emailStatus === 'success' 
                                                ? 'Sent!' 
                                                : 'Send Receipt'}
                                        </button>
                                    </div>
                                    
                                    {/* Remove the duplicate success and error messages */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;