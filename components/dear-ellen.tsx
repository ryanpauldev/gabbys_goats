import YouTubeFacade from './youtube-facade';
import Image from 'next/image';

import EllenImage1 from '@/public/images/optimized/ellen_1.webp'
import EllenImage2 from '@/public/images/optimized/ellen_2.webp'
import EllenImage3 from '@/public/images/optimized/ellen_3.webp'

export default function DearEllen() {
  return (
    <section id="dear_ellen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900">
        <div className="py-6 md:py-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 pb-2" data-aos="fade-up">Dear Ellen, meet Gabby!</h2>
            
            {/* Embedded YouTube Video */}
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <YouTubeFacade
                videoId="BWj6sYPxZbY"
                title="YouTube video player"
              />
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-10">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-lg text-gray-200 mb-4">
                    "Everyone would stop by Gabby's chair as she became a regular in our infusion center. They chatted, caught her up to speed on their lives and vice versa, and of course, watched a little of the Ellen Show with her. If she wasn't in her chair at the beginning of the show, she wouldn't watch it. She was recording it at home, anyway, and could see it from beginning to end. She even wore an Ellen onesie to treatment on more than one occasion! I had never really watched the show since it was on during my shift. Cue what I call "the Gabby Effect", and I was watching episodes on YouTube at night to see what I had been missing!"
                  </p>
                </div>
              </div>
              {/* Image for Desktop */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl hidden md:block" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={EllenImage1}
                  width={540}
                  height={405}
                  alt="Ellen and Gabby 1"
                />
              </div>
              {/* Image for mobile */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-8 mb-0 md:mb-8 md:mt-0 rtl block md:hidden" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={EllenImage1}
                  width={540}
                  height={405}
                  alt="Ellen and Gabby 1"
                />
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image for Desktop */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl hidden md:block" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={EllenImage2}
                  width={540}
                  height={405}
                  alt="Ellen and Gabby 2"
                />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <p className="text-lg text-gray-200 mb-4">
                    "Gabby held a dream close to her heart: to be at an Ellen Show. A fellow infusion nurse, Liana, and I hatched a plan to try and make that dream a reality. Gabby's 22nd birthday was in February 2018. What about a video featuring the Taylor Swift song '22", dancing nurses, and a skit with Gabby in her Ellen onesie receiving treatment? We'd send it to Ellen and see if we could secure a seat for her at a future show? Easy, right? Um, no. Asking staff to sing, dance, step out of their comfort zones, and be recorded while doing it? After hours? Cue "the Gabby Effect" again and everyone wanted in! It was a group effort onmultiple levels at Atlantic Health as even some in upper management who Gabby also had inspired offered to help with the videographer and came to watch. The video was sent on to hopefully get to Ellen by various sources from the Hospital, staff, friends, and a buddy of Gabby's dad. It got watched, followed by vetting of Gabby's story and a group video conference interview, before tickets were approved and provided by Ellen!"
                  </p>
                </div>
              </div>
              {/* Image for mobile */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-8 mb-0 md:mb-8 md:mt-0 rtl block md:hidden" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={EllenImage2}
                  width={540}
                  height={405}
                  alt="Ellen and Gabby 2"
                />
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="text-lg text-gray-200 mb-4">
                    "After a surprise presentation of the tickets to Gabby at which the many who wanted to be a part of this affair got to celebrate this amazing human, Gabby, it was off to California! Friday, May 11, 2018, saw Gabby alongside her Mom, at the Ellen Show sitting in Ellen's Mom's seats and receiving a surprise visit by Ellen during the first commercial break! A dream of Gabby meeting her hero and fellow "be kind" ambassador, Ellen DeGeneres, had come true, sending Gabby onto Cloud Nine for the rest of her life! Gabby had a natural ability to put people at ease in a stressful environment. The term "the Gabby Effect", best captures her impact and the positive atmosphere she created around her. Her commitment to the philosophy of "Be Kind" was more than a belief- it was a way of life, and Gabby now lives in my heart with a great big smile, wearing an Ellen onesie, reminding me to "Be Kind"."
                  </p>
                </div>
              </div>
              {/* Image for Desktop */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl hidden md:block" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={EllenImage3}
                  width={540}
                  height={405}
                  alt="Ellen and Gabby 3"
                />
              </div>
              {/* Image for mobile */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-8 mb-0 md:mb-8 md:mt-0 rtl block md:hidden" data-aos="fade-up">
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  src={EllenImage3}
                  width={540}
                  height={405}
                  alt="Ellen and Gabby 3"
                />
              </div>
            </div>
          </div>

            {/* Citation */}
            <div className="max-w-3xl mx-auto text-center">
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700" data-aos="fade-up">
                <cite className="text-gray-200 not-italic">Kimberly Ocello, RN</cite> - 
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                <br></br>Infusion Nurse, Atlantic Health System
                <br></br>Overlook Hospital
                <br></br>Summit, NJ.
                </a>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}