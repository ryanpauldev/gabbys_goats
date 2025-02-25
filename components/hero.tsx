import Image from 'next/image'
import FeatHeaderImage from '@/public/images/buckman_family.png'

export default function Hero() {
  return (
    <section id="home">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative bg-gray-900">
        <div className="relative pt-32 pb-0 md:pb-0">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <p className="text-xl text-gray-400 mb-2" data-aos="fade-up" data-aos-delay="50">
              Giving Others Assistance To Serve
            </p>
            <h1 className="h1 mb-4" data-aos="fade-up">Gabby's GOATS</h1>
            
            {/* Hero image - Remove loading="lazy" for above-the-fold image */}
            <div className="w-full flex justify-center mb-8" data-aos="fade-up">
              <Image
                src={FeatHeaderImage}
                alt="Buckman Family Photo"
                width={900}  // Reduced from 1797
                height={757} // Reduced from 1513, maintaining aspect ratio
                className="rounded-lg shadow-lg max-w-full h-auto"
                priority
                quality={85}  // Adjust quality for better compression
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
            
            <p className="text-lg text-gray-400 mb-8 " data-aos="fade-up" data-aos-delay="50">Our foundation seeks to commemorate Gabrielle Kraft Buckman’s unwavering spirit of generosity and love. Gabby, known affectionately as Goober, Goob, Gabs, devoted her life to uplifting others and leaving an indelible mark of selflessness.</p>
            <p className="text-lg text-gray-400 mb-8 " data-aos="fade-up" data-aos-delay="50">Gabrielle’s profound impact on countless lives, both intimately known and briefly encountered, is a testament to the depth of her compassion. The foundation stands as a tribute to Gabby’s boundless love, aiming to continue the legacy of kindness she embodied and the passion she had to give to those who gave.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="50">
                <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="/donate"
                >
                  Donate Here
                </a>
              </div>

              
              <div data-aos="fade-up" data-aos-delay="50">
                <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:ml-4"
                  href="https://forms.gle/hYj46wLLRdxx34aa9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Volunteer
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
