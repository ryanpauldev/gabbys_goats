export const metadata = {
  title: "Gabby's Goats",
  description: 'Giving Others Assistance To Serve',
}

import { useState } from "react";
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import BackgroundImages from '@/components/background-images'


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
