import Image from 'next/image'

import FeatImage01 from '@/public/images/gabby_petting_goat.jpeg'
import FeatImage02 from '@/public/images/gabby_on_boat.jpg'
import FeatImage03 from '@/public/images/gabby_holding_chick.jpg'
import FeatHeaderImage from '@/public/images/buckman_family.png'

export default function Features() {
  return (
    <section id = "about_us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>*/}
            <p className="text-xl text-gray-400 mb-2" data-aos="fade-up" data-aos-delay="200">About Gabby's Goats</p>
            <h1 className="h2 mb-4">Our Mission, Vision, and Purpose</h1>
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
                  <h3 className="h3 mb-3">Our Mission</h3> 
                  <p className="text-xl text-gray-400 mb-4">Our mission is to give others assistance to serve by supporting those who selflessly dedicate themselves to helping others. Through Giving to Givers, we empower individuals who embody Gabby’s spirit of generosity. We achieve this by providing financial assistance to individuals and organizations committed to serving others, fostering meaningful connections between like-minded individuals and groups, and celebrating stories of extraordinary kindness to inspire others. Kindness, care, and generosity are gifts meant to be shared, and just as Gabby did naturally, we will continue her legacy of caring and healing.</p>
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
                  <h3 className="h3 mb-3">Our Vision</h3> 
                  <p className="text-xl text-gray-400 mb-4">Imagine a world in which every person treated all others as they themselves wished to be treated. Our community and indeed the world can be made better through the influence of individual people. Gabby’s innate ability to encourage, propel, and inspire, can be recognized and continue to be provided to the world through others.</p>
                  <p className="text-xl text-gray-400 mb-4">Just as Gabby did these qualities can take shape in many ways:</p>
                   <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Helping a flourishing O/T student to continue forward and assist with some funding if needed</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Assisting a child in need of healing to access O/T treatment and become self-sufficient</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Spreading acts of kindness to those like Gabby who are extraordinarily giving to those around them</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Arranging opportunities that foster the thoughtfulness and care that Gabby had for others;</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Connecting with like organizations or entities that embody the spirit of Gabby to help spread the word to do good</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Organizing events that reinforce the giving spirit of Gabby while raising funds to be used to further our mission</span>
                    </li>
                  </ul> 
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
                  <h3 className="h3 mb-3">Our Purpose</h3> 
                  <p className="text-xl text-gray-400 mb-4">The foundation seeks to commemorate Gabrielle Kraft Buckman’s unwavering spirit of generosity and love. Gabby, known affectionately as Goober, Goob, Gabs, devoted her life to uplifting others, leaving an indelible mark of selflessness. Her profound impact on countless lives, both intimately known and briefly encountered, is a testament to the depth of her compassion. The foundation stands as a tribute to Gabby’s boundless love, aiming to continue the legacy of kindness she embodied and the passion she had to give to those who gave. In honoring her memory, it echoes the profound lesson that simple acts of kindness can create lasting impact. And, ensures that the world never forgets the extraordinary soul that was Gabrielle Kraft Buckman.</p>
                  <p className="text-xl text-gray-400 mb-4">Help us pass on the torch of kindness in your own unique way to create a world that continues to be shaped by the enduring ripple effect of Gabby’s lessons in love and generosity.</p>
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
