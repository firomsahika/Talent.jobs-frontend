import AboutUs from '@/pages/AboutUs'
import HomePage from '@/pages/HomePage'
import JobProcess from '@/pages/JobProcess'
import JobsForYou from '@/pages/JobsForYou'
import PopularJobs from '@/pages/PopularJobs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <JobProcess />
      <JobsForYou />
      <PopularJobs />
    </div>
  )
}

export default Home