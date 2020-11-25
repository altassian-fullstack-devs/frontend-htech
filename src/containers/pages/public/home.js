
import React from 'react'
import {Hero, Custom, CoreValue, MeetTheTeam, Partner, FeaturedWorks} from 'components/home'

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Custom />
      <CoreValue />
      <MeetTheTeam />
      <Partner />
      <FeaturedWorks />
    </div>
  )
}

export default Home