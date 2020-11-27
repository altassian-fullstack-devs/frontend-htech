import react from 'react'

import {AboutHero, BulletProof, AboutMap, Software, TechItems, History, TopTalent, Makes, Feature} from 'components/about'

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
    </div>
  </div>
)
export default AboutPage
