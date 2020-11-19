import ServiceItem from 'components/services/service-item'
import React, { useState } from 'react'
import { About, Clients, Hero } from '../../../components/home'
import Gallery from '../../../components/portfolio/gallery'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Clients />

      <section id='services' className='services'>
        <div className='container'>
          <div className="section-title">
            <h2>Service</h2>
            <p>The Services We Offer</p>
          </div>
          <div className='row'>
            <ServiceItem title = "IT expert"  ico = 'icofont-computer' description = "This is title1" />
            <ServiceItem title = "High IQ"  ico = 'icofont-chart-bar-graph' description = "This is title2" />
            <ServiceItem title = "Best Service"  ico = 'icofont-image' description = "This is title3" />
            <ServiceItem title = "Always Welcome"  ico = 'icofont-settings' description = "This is title3" />
            <ServiceItem title = "Warm greeting"  ico = 'icofont-earth' description = "This is title3" />
            <ServiceItem title = "Elegant and simple"  ico = 'icofont-tasks-alt' description = "This is title3" />
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Recent Works</p>
          </div>
          <Gallery />
        </div>
      </section>
    </>
  )
}

export default Home