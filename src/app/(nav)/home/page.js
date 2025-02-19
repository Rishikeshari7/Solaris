import Discover from '@/components/Home/Discover'
import Features from '@/components/Home/Features'
import HeroSection from '@/components/Home/HeroSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <Discover/>
    </div>
  )
}

export default page
