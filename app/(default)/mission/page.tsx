import Mission from '@/components/mission';
import Newsletter from '@/components/newsletter';
import BackgroundParticles from '@/components/background-particles';

export const metadata = {
  title: "Our Mission | Gabby's GOATS",
  description: "Learn about the mission, vision, and purpose of Gabby's GOATS - Giving Others Assistance To Serve.",
};

export default function MissionPage() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles />
      </div>
      
      {/* Content layer */}
      <div className="relative z-1">
        <Mission isStandalonePage={true} />
        <Newsletter />
      </div>
    </div>
  );
}