export const metadata = {
  title: 'ZioNotes',
  description: 'ZioNotes is AWESOME :D',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from '@/components/blocks'
import Banner from '@/components/banner'
import ModalVideo from '@/components/modal-video'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      <Testimonials />
      <Newsletter />
      <Banner />
    </>
  )
}
