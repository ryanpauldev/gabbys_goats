import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 content */}
            <h1 className="h1 mb-4" data-aos="fade-up">Oops! Page Not Found</h1>
            <p className="text-xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="200">
              We can't seem to find the page you're looking for.
            </p>
            
            {/* Image */}
            <div className="relative mb-8" data-aos="fade-up" data-aos-delay="400">
              <Image
                src="/images/optimized/404_goat.webp"
                width={400}
                height={300}
                alt="Lost Goat"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>

            {/* CTA button */}
            <div data-aos="fade-up" data-aos-delay="600">
              <Link 
                href="/" 
                className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}