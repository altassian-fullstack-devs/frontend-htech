import react from 'react'

import {AboutHero, BulletProof, AboutMap, Software, TechItems, History, TopTalent, Makes, Feature} from 'components/about'

const AboutPage = ({}) => (
  <main className='page-about-us'>
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
  </main>
)
export default AboutPage
