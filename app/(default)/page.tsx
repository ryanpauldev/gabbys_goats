export const metadata = {
  title: "Gabby's Goats",
  description: "Giving Others Assistance To Serve",
};

import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Newsletter from "@/components/newsletter";
import Legacy from "@/components/legacy";
import Testimonials from "@/components/testimonials";
import BackgroundParticles from "@/components/background-particles"; // Import ParticlesBackground

export default function Home() {
  return (
    <>
      <BackgroundParticles /> {/* Add Particles effect */}
      <Hero />
      <Legacy />
      <Mission />
      <Testimonials />
      <Newsletter />
    </>
  );
}
