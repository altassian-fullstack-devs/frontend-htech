import React, { useState } from 'react'
import {Col, Row, Slider} from 'antd'
import { FixedWidthLayout } from 'containers/layout';
let years = [2002,2006,2008,2009,2010,2012,2015,2016,2017,2018,2019]
let showData = [
  [
    'The founding team starts toying with own startup projects',
    'Team up with DAQ Electronics — our very first client, staying with us till today'
  ],
  [
    'iTechArt grand opening in the United States',
    'Reach a total of 15 active clients',
    'First clients in Europe',
  ],
  [
    'Start working with a performance marketing company Performics, later acquired by Google',
    'Upload our first Android app on Play Market',
  ],
  [
    'Our first 5-star rated iOS application launches in the App Store',
    'First clients in Australia',
    'Kick-off of the software development hub in Minsk, Belarus'
  ],
  [
    'Gain Capital becomes the first client going public',
    'iTechArt-developed apps hit a whopping 10 million daily users in total',
    'Clients on all continents'
  ],
  [
    'The first-ever exit of the client made in NYC — Pixable was acquired by SingTel',
    'Clients in every thriving U.S. startup hub — Silicon Valley, Boston, New York, and Austin',
    'iTechArt’s roster grows with the 100th active client',
    'Opening of Students Lab — our own dev school'
  ],
  [
    'Unicorns become real — our first nine-figure startup client',
    '10 IPOed clients',
    'iTechArt dives into IoT domain',
    'Start supporting CTO Connection — a go-to event for top engineering leaders'
  ],
  [
    '10 dev and 5 QA departments operate within the company, covering all in-demand technologies',
    'First startup clients working on AI-backed applications',
    'Hold the first internal conference iTechForum, hosting more than 1,000 guests'
  ],
  [
    'Dev Millenium — we hire our 1,000th engineer',
    '200 active clients',
    'First blockchain project',
    'Taking over the Clutch.co and GoodFirms charts as a top engineering company'
  ],
  [
    '15 IPOed clients',
    'Rally Rd. raised $7M Series A with an MVP built by iTechArt',
    'Inc. 5000 debut'
  ],
  [
    'For the second year in a row, iTechArt is recognized as one of the fastest-growing companies according to Inc. 5000',
    'iTechArt becomes a bronze winner of Stevie® Awards',
    'Named on Deloitte’s Technology Fast 500™ list of сompanies',
    'Collaborate with Salesforce as a Silver Consulting Partner!'
  ]
]
let imgData = [
  ['about_us_new_york.original'],
  ['about_us_Iselin_NJ.original'],
  ['about_us_dev_pool_copy.original'],
  ['about_us_Minsk.original'],
  ['about_us_dev_pool_copy.original'],
  ['about_us_student_lab_copy.original', 'about_us_dev_pool_copy.original'],
  ['about_us_unicorn_copy.original'],
  ['about_us_GA_Marietta.original'],
  ['about_us_dev_pool_copy.original'],
  ['about_us_dev_pool_copy.original', 'about_us_unicorn_copy.original'],
  ['about_us_london.original', 'about_us_dev_pool_copy.original'],
]

let descData = [
  ['New York, NY'],
  ['Iselin', 'NJ'],
  ['50 devs'],
  ['Minsk, Belarus'],
  ['150 devs'],
  ['20 grads a year', '300 devs'],
  ['First unicorn client'],
  ['Marietta, GA'],
  ['1000 devs'],
  ['1400 devs', '10 unicorn clients'],
  ['London, UK', '1700 devs']
]

const handleChange = (id) => {

  console.log("Log", id);
}

let width = 1075
const YearOut = ({id, cid}) => (
      <div className={`swiper-slider ${id == cid ? 'show' : ''}`}>
        <div className='flex-3'>
          <ul>
          {showData[id].map(
            (item, index) => (<li key={index} >{item}</li>)
            )}  
          </ul>
        </div>

        <div className='flex-2 d-flex' style={{justifyContent: 'center', borderLeft:'2px solid black'}}>
          {imgData[id].map((item, index) => 
            (
              <div key={index} style={{padding:'0px 10px'}}>
                <div style={{width:'100%', padding:'0px auto'}}>
                  <img src={require(`assets/images/about/${imgData[id][index]}.png`).default} style={{width:'100px', height:'100px'}}></img>
                </div>
                <p>{descData[id][index]}</p>
              </div>
          ))}
        </div>
      </div>
  // <Row className={`swiper-slide ${id == cid + 1 ? 'swiper-slide-next': ''} ${id == cid ? 'swiper-slide-active' : ''}`} data-year={years[id]} 
  //         style={{width:width, opacity: id <= cid ? 1 : 0, transform:`translate3d(-${width * id}px, 0px, 0px)`, transition: 'all .3s ease 0s'}}>
  //     <Col lg = {16}>
  //     <ul>
  //       {showData[id].map(
  //         (item, index) => (<li key={index} >{item}</li>)
  //       )}
  //     </ul>
  //   </Col>
  //   <Col lg = {8} style={{display:'flex'}}>
  //     {imgData[id].map((item, index) => 
  //     (
  //       <div key={index}>
  //         <img src={`assets/images/about/${imgData[id][index]}.png`}></img>
  //         <p>{descData[id][index]}</p>
  //       </div>
  //     ))}
  //   </Col>
  // </Row>
)

const History = ({}) => {
  const [id, setId] = useState(0)
  const ref = React.createRef();

  return (<>
    <FixedWidthLayout className="container">
      <h2 className="history">
        iTechArt docu-series... to be stellarly continued
      </h2>
    </FixedWidthLayout>

    <FixedWidthLayout className='our_history container'>
      {/* <div className='swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal'> */}
        <Slider step={null}
          marks={years}
          max = {10}
          min = {0}
          ref = {ref}
          onChange = {(id) => {
            setId(id)
            let me = ref.current.sliderRef.style
            console.log("Slider", me);
            me.transform = `translateX(${100 * (2 - id)}px)`
          }}
          tipFormatter = {value => years[value]}
          dots = {true}
          // range = {true}
          included =  {true}
          />

        <div className='swiper-wrapper' style={{transition: 'all 0ms ease 0s'}}>
          {years.map((item, index) => (<YearOut key={index} id={index} cid={id}/>))}        
            {/* <YearOut id={id}/> */}
        </div>
      {/* </div> */}
    </FixedWidthLayout>
  </>
)
}
export default History