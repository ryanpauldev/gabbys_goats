interface ReceiptProps {
    amount: number;
    transactionId: string;
    date: string;
}

const Receipt: React.FC<ReceiptProps> = ({ amount, transactionId, date }) => {
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
                        
                        <div className="max-w-sm mx-auto bg-gray-800/50 rounded-lg p-6 mt-8">
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
                        </div>

                        <div className="mt-8">
                            <p className="text-sm text-gray-400">
                                A receipt has been sent to your email address.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;