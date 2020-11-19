import react from 'react'
import {About, Team, Skill, Testimonial} from '../../../../components/about'
import BreadCrumb from '../../../layout/common/breadcrumb'


const AboutUs = () => (
    <main id="main">
      <BreadCrumb path="About"/>
      <About/>
      <Team/>
      <Skill/>
    </main>
  )

export default AboutUs