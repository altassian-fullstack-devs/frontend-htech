import { Col, Row } from 'antd'
import react, {useEffect, useMemo, useState} from 'react'

import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'
import {Pie, Legend, PieChart} from 'recharts'
import { FixedWidthLayout } from 'containers/layout';
import Demo from './PieChart'
// import PieCh from './PieChart1'

const Percent = ({percent, level, index, isLoaded}) => (
  <Col md={8} className={`percent ${isLoaded && 'show'}`}>
    <h4>{percent}</h4>
    <span>{level}</span>
  </Col>
)

const data01 = [
  { name: 'Backend', value: 27, v: 89 },
  { name: 'Frontend', value: 24, v: 100 },
  { name: 'DevOps', value: 8, v: 200 },
  { name: 'QA', value: 16, v: 20 },
  { name: 'Cloud', value: 11, v: 40 },
  { name: 'Mobile', value: 14, v: 60 },
];


const TechItems = ({}) => {

  const [isLoaded, setIsLoaded ] = useState(false);  
  useMemo(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000)}, [isLoaded])


  const data = [10, 20, 30];
  return (
    <FixedWidthLayout>
      <Row className='techitems container'>
        <Col sm = {24} md={24} lg={10}>
          <h2>Dedicated engineers, hand-picked</h2>
          <p>
            iTechArt promotes the post-rock star development culture — here, you won’t find divas and prima donnas. We hire go-ahead engineers who embrace the game-changing mindset of our clients and whose star-studded performance relates mostly to deliverables.
          </p>
          <Row className='plist'>
            <Percent percent='65%' level='Seniors' index={1} isLoaded={isLoaded}/>
            <Percent percent='25%' level='Middles' index={2} isLoaded={isLoaded}/>
            <Percent percent='10%' level='Juniors' index={3} isLoaded={isLoaded}/>
          </Row>
        </Col>

        
        <Col sm = {24} md={24} lg={14}>
          {/* <PieCh/> */}
          <Demo/>
        </Col>
      </Row>
    </FixedWidthLayout>
  )
  }
export default TechItems