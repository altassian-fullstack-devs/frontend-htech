
import React from 'react'
//import {HeroBlock, MainBlock, StepBlock, YourWay, PerkWithTeam, FeaturedWork} from 'components/taas'
import {HeroBlock, MainBlock, StepBlock, YourWay, PerkWithTeam, FeaturedWork} from 'components/taas'
import { Feature } from 'components/about'

const HowWeWork = () => {
  return (
    <div className="page-how-we-work">
      <HeroBlock/>
      <MainBlock/>
      <StepBlock/>
      <YourWay/>
      <PerkWithTeam/>
      <Feature/>
    </div>
  )
}

export default HowWeWork