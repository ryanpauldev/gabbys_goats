import React from 'react';
import Donate from '@/components/donate';
import BackgroundParticles from '@/components/background-particles';

const DonatePage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-gray-900">
            {/* Background layer - move to lowest z-index */}
            <div className="absolute inset-0 z-0">
                <BackgroundParticles />
            </div>
            
            {/* Content layer - adjust z-index */}
            <div className="relative z-1">
                <Donate />
            </div>
        </div>
    );
};

export default DonatePage;