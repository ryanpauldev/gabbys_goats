import Testimonials from '@/components/testimonials';
import DearEllen from '@/components/dear-ellen';
import Newsletter from '@/components/newsletter';
import BackgroundParticles from '@/components/background-particles';

export const metadata = {
  title: "Tributes | Gabby's GOATS",
  description: "Read tributes and stories honoring Gabby's legacy and the impact she had on countless lives.",
};

export default function TributesPage() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles />
      </div>
      
      {/* Content layer */}
      <div className="relative z-1">
        <Testimonials isStandalonePage={true} />
        <DearEllen isStandalonePage={true} />
        <Newsletter />
      </div>
    </div>
  );
}