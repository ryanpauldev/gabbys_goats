import Image from 'next/image'

import FeatImage01 from '@/public/images/gabby_graduation.jpg'
import FeatImage02 from '@/public/images/gabby_holding_goat.jpeg'
import FeatImage03 from '@/public/images/gabby_balancing_goat.jpg'
import FeatHeaderImage from '@/public/images/gabby_with_pumpkins.jpg'
import GabbyPNG from '@/public/images/gabby_png.png'

export default function Zigzag() {
  return (
    <section id = "meet_gabby">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            
            {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>*/}
            <p className="text-xl text-gray-400 mb-2 " data-aos="fade-up" data-aos-delay="200">A Courageous Heart and Resilient Spirit</p>
            <h1 className="h2 mb-4 " data-aos="fade-up">The Legacy of Gabrielle Kraft Buckman</h1>
            
            <p className="text-lg text-gray-400 mb-4 " data-aos="fade-up">
              Gabrielle Kraft Buckman, a radiant soul born and raised in the heart of New Jersey, left a permanent mark on the world that transcends the brevity of her years. Endearingly referred to as Gabby, Gab, or Goober, her journey is a tapestry woven with threads of love, resilience, and a tenacious commitment to bringing light to the lives she touched.
            </p>
            <p className="text-lg text-gray-400 mb-4 " data-aos="fade-up">
              From a young age, Gabby’s infectious smile had the power to warm any heart; the first being her mother, Cheryl, father, David, and sister, Jackie. As she grew older, this smile became known as a beloved friend, classmate, student, teammate, and eventually, clinician. In her studies, she excelled as an A student, participated as a vital team on her high school’s soccer team, and effortlessly befriended everyone she encountered. Goats, humor, her cherished family, and a network of friends spanning the spectrum of humanity were the pillars of her vibrant life.
            </p>
            <div className="w-full flex justify-center" data-aos="fade-up">
              <Image
                src={FeatHeaderImage}
                alt="ZioNotes features"
                width={1797}
                height={1513}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                   {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/*<h3 className="h3 mb-3">Video Summaries</h3> */}
                  <p className="text-lg text-gray-400 mb-4 ">Gabby was a beacon of connectivity; she made friends wherever she went. With ease, she illuminated a path for others through humility that allowed them to see their brilliance. In every action, she pervaded this message to those in her life, seen even throughout her infamous innovative ideas dedicated to improving the world. Her dreams have always showcased the commitment to spreading joy and fostering inclusivity.</p>
                  <p className="ttext-lg text-gray-400 mb-4 ">Inspired to make a career from this dream, she attended Quinnipiac University, studying to be an Occupational Therapist. Gabby seamlessly translated her passion for connection into a professional realm. Her brilliance and warmth drew friends to her like a magnet, adorning her college years with laughter and camaraderie.</p>
                  {/* <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Quickly understand the essence of the video</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Save time by focusing on the most relevant parts</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Ideal for busy professionals and students</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* Image for Desktop */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl hidden md:block" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Image for mobile */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-8 mb-0 md:mb-8 md:mt-0 rtl block md:hidden" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image for Desktop */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl hidden md:block" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <h3 className="h3 mb-3">Time Stamped Notes</h3> */}
                  <p className="text-lg text-gray-400 mb-4 ">Gabby’s life took an unexpected turn when she was diagnosed with brain cancer her junior year. Yet, it was precisely when confronted with adversity that her courageous heart, giving spirit, and optimism radiated most brilliantly. Undeterred by the challenges that lay ahead, she approached her battle with resilience that spoke volumes about her invincible spirit. Rather than viewing her illness as a barrier, Gabby saw it as an opportunity to connect even more deeply with her occupational therapy patients in her studies, understanding firsthand the challenges they faced. Her battle became a shared journey of resilience and hope, transcending conventional boundaries between therapist and patient.</p>
                  {/* <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Jump to important sections without delay</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Keep track of significant moments in the video</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Enhance your understanding with context-specific notes</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* Image for mobile */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-8 mb-0 md:mb-8 md:mt-0 rtl block md:hidden" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
            </div>


            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/*<div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Actionable Table of Contents</h3> */}
                  <p className="text-lg text-gray-400 mb-4 ">Even as the shadows lengthened, Gabby’s optimism remained steadfast. After a six-year struggle marked by both victories and setbacks in her battle against the diagnosis, Gabby made the brave decision to bring an end to her relationship with her cancer treatment. With grace, she opted to live life on her terms by surrounding herself with the things she loved most in her last months; holding her loved ones, laughing until her stomach hurt, traveling with her family, performing thoughtful actions, and inspiring others to radiate positivity.</p>
                  <p className="text-lg text-gray-400 mb-4 ">Choosing to forego further treatment, her thoughts were not of herself but of gratitude for those who stood by her. She had the remarkable ability to make anyone feel special, bestowing upon them the light they needed to see the abundance within themselves. She truly gave others the ability to shine. Through her foundation, it is a dream to endure Gabrielle’s legacy of giving others assistance to shine as she so effortlessly did.</p>
                  {/* <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Effortlessly navigate through long videos</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Focus on sections that are most relevant to you</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Improve retention and engagement by revisiting key parts of the video</span>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* Image for Desktop */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl hidden md:block" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Image for mobile */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-8 mb-0 md:mb-8 md:mt-0 rtl block md:hidden" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
