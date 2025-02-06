import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section id= "tributes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-gray-900">
        <div className="py-12 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 mb-4 ">Tributes</h2>
            <p className="text-xl text-gray-400 ">Gabby's Impact</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow ">To me, Gabby is a perpetual reminder of the power of resilience and unconditional love for others, particularly when times are unkind.

                “It often takes a lifetime to embrace our unique purpose and inspire others. Although her time on earth was short, Gabby remains a perpetual beacon of hope that reminds me every day to come out of the shadows and face life’s challenges while experiencing every moment to its fullest. Even in her afterglow, her message remains clear…the human spirit is limitless and hope eternal. Rise and shine for your time is now. Face life’s challenges with dignity and strength. Be kind to others and love deeply with all your heart for as long as you can!”</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic ">Roseanna Tufano, OTD, LMFT, OTR/L</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out ">
                 <br></br>
                  Quinnipiac University <br></br>
                  Clinical Professor, Occupational Therapy <br></br>
                  PB-OTD Co Chairperson of Admissions Committee</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 " data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/*<Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">“Gabby inspired all of us. She fought with great tenacity and grace. While going through treatment of her tumor, she finished her OT program and began to pursue her dream of helping others as an occupational therapist. She never complained and lived to make the most out of every day. She made the world a better place and no doubt would be very excited to have her experience become an opportunity to help others. We miss her too.”</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">David Reardon, MD</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  <br></br>
                  Clinical Director<br></br>
                  Center for Neuro-Oncology Dana Farber<br></br>
                  Boston, MA</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 " data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/*<Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">“It’s been one year since we bid farewell to our beloved Gabby, a soul so pure, so resilient, and so full of life. Though she is no longer with us, her impact continues to resonate in our hearts. Gabby was not just a fighter; she was the epitome of strength and grace. Even on her darkest days, she radiated a light that inspired us all. Her journey was marked not only by battles fought but by the unwavering love and laughter she shared with those around her. From the sparkle in her eyes to the warmth of her embrace, we carry her essence within us. – this is what I remember most about her – the sparkle in her eye and her sincere hugs – she was the sweetest!!”</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Jill Connolly RT</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  <br></br>Chief Therapist<br></br>
                  Brigham and Woman’s Sturdy Heath Radiation Oncology Department<br></br>
                  Mansfield, MA</a>
              </div>
            </div>

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 " data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/* <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">“Gabby’s memory continues to inspire all of us who had the privilege of knowing her. Gabby had an infectiously positive personality, always smiling and optimistic no matter the situation. Her love for her goats and her endearing quirkiness drew people toward her like a magnet, creating an atmosphere of warmth and joy wherever she went.

                Gabby was treated with radiation twice in our department, first in 2019 and again in 2022. Throughout both treatment courses, her kindness and attentiveness towards the department staff and fellow patients were remarkable. She always made it a point to ask about everyone’s day, making each person feel seen and valued. Gabby brightened every room she stepped into, with her thoughtfulness, brilliance, and grace. We are all better human beings for knowing Gabby.”</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Shyam Tanguturi, MD</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  <br></br>
                  Associate Clinical Director<br></br>
                  Boston Radiation Oncology Brigham and Women’s Hospital<br></br>
                  Boston MA</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 " data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/*<Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">“Despite her own health challenges, Gabby worked diligently to complete her Master’s in Occupational Therapy, driven by her passion for giving back to others in need. Her commitment to “paying it forward” was evident in her eagerness to participate in clinical trials, aiming to help future patients around the world. As the Principal Investigators for one such trial, we were deeply honored to be part of her care and witness her selflessness firsthand.

                Gabby’s legacy of compassion, resilience, and positivity will continue to shine through the charitable foundation established in her honor. She touched countless lives and will always be remembered for her incredible spirit and unwavering dedication to making the world a better place.”</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Daphne Haas-Kogan, MD</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  <br></br>
                  MBA Chair<br></br>
                  Boston Radiation Oncology Brigham and Women’s Hospital<br></br>
                  Boston MA</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 " data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  {/*<Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" /> */}
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">
                “Gabby was a light who filled every room she entered. Her kindness exuded from every pore. She was a friend to so many, and friendly to all she encountered. Her sense of joy and adventure inspired us all. Her dedication to her education and her profession of occupational therapy was inspiring. She was a beautiful soul who leaves a trail of wonderful memories and moments to remember her by. She filled her life with living.” ❤</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Jenn Stefanik, NP, BSN</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  <br></br>Neuro Oncology Dana Farber<br></br>
                  Boston MA</a>
              </div>
            </div>

          </div>
          {/* Embedded YouTube Video */}
          <div className="max-w-3xl mx-auto mt-12 mb-4" data-aos="fade-up">
            <div
              className="relative w-full rounded-lg shadow-lg overflow-hidden"
              style={{ paddingBottom: '56.25%', height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BWj6sYPxZbY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">Dear Ellen, meet Gabby!</h2>
            
            <p className="text-lg text-gray-400" data-aos="fade-up">“Everyone would stop by Gabby’s chair as she became a regular in our infusion center. They chatted, caught her up to speed on their lives and vice versa, and of course, watched a little of the Ellen Show with her. If she wasn’t in her chair at the beginning of the show, she wouldn’t watch it. She was recording it at home, anyway, and could see it from beginning to end. She even wore an Ellen onesie to treatment on more than one occasion! I had never really watched the show since it was on during my shift. Cue what I call “the Gabby Effect”, and I was watching episodes on YouTube at night to see what I had been missing!</p>
            <br></br><p className="text-lg text-gray-400" data-aos="fade-up">Gabby held a dream close to her heart: to be at an Ellen Show. A fellow infusion nurse, Liana, and I hatched a plan to try and make that dream a reality. Gabby’s 22nd birthday was in February 2018. What about a video featuring the Taylor Swift song ’22”, dancing nurses, and a skit with Gabby in her Ellen onesie receiving treatment? We’d send it to Ellen and see if we could secure a seat for her at a future show? Easy, right? Um, no. Asking staff to sing, dance, step out of their comfort zones, and be recorded while doing it? After hours? Cue “the Gabby Effect” again and everyone wanted in! It was a group effort onmultiple levels at Atlantic Health as even some in upper management who Gabby also had inspired offered to help with the videographer and came to watch. The video was sent on to hopefully get to Ellen by various sources from the Hospital, staff, friends, and a buddy of Gabby’s dad. It got watched, followed by vetting of Gabby’s story and a group video conference interview, before tickets were approved and provided by Ellen!</p>
            <br></br><p className="text-lg text-gray-400" data-aos="fade-up">After a surprise presentation of the tickets to Gabby at which the many who wanted to be a part of this affair got to celebrate this amazing human, Gabby, it was off to California!</p>
            <br></br><p className="text-lg text-gray-400" data-aos="fade-up">Friday, May 11, 2018, saw Gabby alongside her Mom, at the Ellen Show sitting in Ellen’s Mom’s seats and receiving a surprise visit by Ellen during the first commercial break! A dream of Gabby meeting her hero and fellow “be kind” ambassador, Ellen DeGeneres, had come true, sending Gabby onto Cloud Nine for the rest of her life!</p>
            <br></br><p className="text-lg text-gray-400" data-aos="fade-up">Gabby had a natural ability to put people at ease in a stressful environment. The term “the Gabby Effect”, best captures her impact and the positive atmosphere she created around her. Her commitment to the philosophy of “Be Kind” was more than a belief- it was a way of life, and Gabby now lives in my heart with a great big smile, wearing an Ellen onesie, reminding me to “Be Kind”.”</p>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700" data-aos="fade-up">
              <cite className="text-gray-200 not-italic">Kimberly Ocello, RN</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                <br></br>Infusion Nurse, Atlantic Health System
                <br></br>Overlook Hospital
                <br></br>Summit, NJ.</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
