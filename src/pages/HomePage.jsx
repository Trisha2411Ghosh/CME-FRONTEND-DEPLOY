import React, { useEffect } from 'react'
import HeroSection from '../components/user-view/HeroSection'
import FeaturedSection from '../components/user-view/FeaturedSection'
import ScrollSection from '../components/user-view/ScrollSection'
import MeetOurTeam from '../components/user-view/MeetOurTeam'
import Footer from '../components/user-view/Footer'
import ReviewSection from '../components/user-view/ReviewSection'

function HomePage() {
  
  return (
    <main className="min-h-screen dark:bg-black/[0.96] antialiased">
      <HeroSection/>
      <FeaturedSection/>
      <ScrollSection/>
      <ReviewSection/>
      <MeetOurTeam/>
      <Footer/>
    </main>
  )
}

export default HomePage