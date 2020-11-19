import React, { useState } from 'react'
import { About, Clients, Hero } from '../../../components/home'
import Gallery from '../../../components/portfolio/gallery'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Clients />
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