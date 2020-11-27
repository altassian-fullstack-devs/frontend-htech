
import React from 'react'
import { Hero, Custom, CoreValue, MeetTheTeam, Partner, FeaturedWorks } from 'components/home'
import { Contact } from 'components/common'

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Custom />
      <CoreValue />
      <MeetTheTeam />
      <Partner />
      <FeaturedWorks />
      <Contact />
    </div>
  )
}

export default Home