import React from 'react'
import { Row, Col } from 'antd'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const FeaturedWorks = () => {
  const sliderSettings = {
    arrows: false, 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <Row>
      <Col md={16} xs={24} style={{paddingLeft: '256px'}}>
        <h2>Featured Works</h2>
        <Row>
          <Col md={8} xs={12}>
            <img src="/assets/images/featured-works-mobile-carousel/client.png" width="100px"/>
            <p className="client-name">Jerry Kestenbaum</p>
            <span className="client-describe">FOUNDER AND CEO BUILDINGLINK.COM</span>
          </Col>
          <Col md={16} xs={12}>
            <p>iTechArt came to us highly recommended from a very technical fellow developer who had used them. The iTechArt team has been very professional in our dealings with them, in staffing up our team with great thought and attention to quality and&nbsp;fit.</p>
          </Col>
        </Row>
      </Col>
      <Col md={8} xs={24}>
        <div className="mobile-device" style={{position: 'absolute'}}>
          <div className="screen shadow-box">
          </div>
        </div>
        <Slider {...sliderSettings} style={{paddingTop:'13px', paddingLeft: '17px'}}>
          <div style={{marginRight: '40px'}}>
            <div className="screen">
              <img src="/assets/images/featured-works-mobile-carousel/1.webp" style={{width:'100%', height:'100%'}}/>
            </div>
          </div>
          <div style={{marginRight: '40px'}}>
            <div className="screen">
              <img src="/assets/images/featured-works-mobile-carousel/2.webp" style={{width:'100%', height:'100%'}}/>
            </div>
          </div>
          <div style={{padding: '30px'}}>
            <div className="screen">
              <img src="/assets/images/featured-works-mobile-carousel/3.webp" style={{width:'100%', height:'100%'}}/>
            </div>
          </div>
        </Slider>
        
      </Col>
    </Row>
  )
}

export default FeaturedWorks