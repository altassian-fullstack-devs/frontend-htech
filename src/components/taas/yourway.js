import React, { useEffect, useState } from 'react'
import VChooser from './vchooser'
import VCollapse from './vcollapse'

const steps=[
  {
    imageURL: require('assets/images/how-we-work/your-way/1.png').default,
    topic: 'Run the team your way',
  },
  {
    imageURL: require('assets/images/how-we-work/your-way/2.png').default,
    topic: 'Augment an in-house team',
  },
  {
    imageURL: require('assets/images/how-we-work/your-way/1.png').default,
    topic: 'Lead a large-scale project',
  },
]
const YourWay = () => {
  const [renderStat, setRenderStat] = useState(0)
  const changeRenderStat = () => {
    if(window.innerWidth < 1000){
      setRenderStat(1)
    }
    else setRenderStat(0)
  }
  useEffect(() => {
    changeRenderStat()
    window.addEventListener("resize", changeRenderStat)
    return () => {
      // window.removeEventListener('resize')
    }
  }, [])

  return(
    <div className='your-way'>
      <div className='container'>
        <h3>We make it your way</h3>
        <span>Our dedicated developers come as a 100% extension of your on-site team. They are fully-synced and always available for a chat, whether it’s a daily standup, a code review or an important decision to be made. And if needed, they’ll be happy to drop&nbsp;by.</span>
        {renderStat ? (<VCollapse steps={steps}/>) : (<VChooser steps={steps}/>)}
      </div>
    </div>
  )
}
export default YourWay