import react from 'react'

import {AboutHero, BulletProof, AboutMap, Software, TechItems, History, TopTalent, Makes, Feature} from 'components/about'
import { Contact } from 'components/common'

const AboutPage = ({}) => (
  <div className='page-about-us'>
    <div className="article page">
      <AboutHero/>
      <BulletProof/>
      <AboutMap/>
      <Software/>
      <TechItems/>
      <History/>
      <TopTalent/>
      <Makes/>
      <Feature/>
      <Contact/>
    </div>
  </div>
)
export default AboutPage
