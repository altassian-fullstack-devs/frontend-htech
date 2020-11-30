import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getCertificates, getEducations, getHistories, getProfile } from 'store/selectors/developer'
import Skills from './skills'
import Histories from './histories'
import Educations from './educations'
import EmploymentHistories from './employment_histories'

const Resume = ({
  profile,
  histories,
  educations,
  certificates
}) => {
  return (
    <section id="resume">
      <Histories histories={histories}/>
      <Educations educations={educations}/>
      <EmploymentHistories/>
      <Skills profile={profile}/>
    </section>
  )
}

export default connect(
  createStructuredSelector({
    profile: getProfile,
    histories: getHistories,
    educations: getEducations,
    certificates: getCertificates
  })
)(Resume)