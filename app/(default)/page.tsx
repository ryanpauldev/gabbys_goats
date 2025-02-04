export const metadata = {
  title: "Gabby's Goats",
  description: 'Giving Others Assistance To Serve',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Blocks from '@/components/blocks'
import ModalVideo from '@/components/modal-video'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      <Testimonials />
      <Newsletter />
    </>
  )
}
