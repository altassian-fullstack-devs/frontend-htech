import React from 'react'
import { Row, Col } from 'antd'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FixedWidthLayout } from 'containers/layout'

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
    <FixedWidthLayout>
      <Row>
        <Col lg={16} md={10} sm={24} className="featured-left-part">
          <h2 className="section-title">Featured Works</h2>
          <Row>
            <Col lg={8} md={12} sm={24}>
              <img src={require("assets/images/featured-works-mobile-carousel/client.png").default} width="100px"/>
              <p className="client-name">Jerry Kestenbaum</p>
              <span className="client-describe">FOUNDER AND CEO BUILDINGLINK.COM</span>
            </Col>
            <Col lg={16} md={12} sm={24}>
              <p>iTechArt came to us highly recommended from a very technical fellow developer who had used them. The iTechArt team has been very professional in our dealings with them, in staffing up our team with great thought and attention to quality and&nbsp;fit.</p>
            </Col>
          </Row>
        </Col>
        <Col lg={8} md={14} sm={24} className="">
          <div className="mobile-device" style={{position: 'absolute'}}>
            <div className="screen shadow-box">
            </div>
          </div>
          <div className="slider-wrap">
            <Slider {...sliderSettings} style={{paddingTop:'13px'}}>
              {
                [1,2,3].map((id, key) => (
                  <div className="slider-screen-wrap" key={'featured-slider-screen-'+key}>
                    <div className="screen">
                      <img src={require("assets/images/featured-works-mobile-carousel/"+ id +".webp").default} style={{width:'100%', height:'100%'}}/>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </Col>
      </Row>
    </FixedWidthLayout>
  )
}

export default FeaturedWorks