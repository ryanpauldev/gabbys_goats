export const metadata = {
  title: "Gabby's Goats",
  description: "Giving Others Assistance To Serve",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import BackgroundImages from "@/components/background-images";
import BackgroundParticles from "@/components/background-particles"; // Import ParticlesBackground

export default function Home() {
  return (
    <>
      <BackgroundParticles /> {/* Add Particles effect */}
      <Hero />
      <Zigzag />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  );
}
