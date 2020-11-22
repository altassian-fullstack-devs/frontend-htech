import React, { useEffect, useState } from 'react'
import TeamCollapse from './meet-the-team-collapse'
import RedLineChoose from './red-line-choose'

const data = [
  {
    imageURL: 'img/meet-the-team/1.png',
    title: 'Discovery',
    content: 'Once we learn more about your needs, we start building a team able to complete your mission on time and in line with users’ and investors’ expectations.'
  }, {
    imageURL: 'img/meet-the-team/2.png',
    title: 'Setup',
    content: 'We get back to you with the first thoroughly pre-screened CVs. You interview future team members to find those that are a perfect fit for your company.'
  }, {
    imageURL: 'img/meet-the-team/3.png',
    title: 'Kickoff',
    content: 'Your brand-new software development powerhouses work back-to-back with you to put your solution in motion.'
  }, {
    imageURL: 'img/meet-the-team/4.png',
    title: 'Ramp up',
    content: 'Fresh off the release, we scale your team to match your product’s increasing success.'
  }, 
]

const MeetTheTeam = () => {
  const [renderStat, setRenderStat] = useState(0)
  const changeRenderStat = () => {
    if(window.innerWidth < 815)
        setRenderStat(1)
    else setRenderStat(0)
  }
  useEffect(() => {
    changeRenderStat()
    window.addEventListener("resize", changeRenderStat)
    return () => {
      // window.removeEventListener('resize')
    }
  }, [])

  return (
    <div className="back-black text-white" style={{minHeight: '521px'}}>
      <i className="anticon anticon-down"></i>
      <h3 className="center-text">Meet your team<div className="caret"/></h3>
      <div className="container">
        { renderStat ? (<TeamCollapse items={data}/>) : (<RedLineChoose panes={data}/>) }
      </div>
    </div>
  )
}

export default MeetTheTeam