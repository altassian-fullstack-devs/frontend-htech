import React, { useState } from 'react'
import Gallery from '../../../components/portfolio/gallery'
import BreadCrumb from '../../layout/common/breadcrumb'

const Portfolio = () => {
  return (
    <>
      <BreadCrumb path="Portfolio"/>
      <main id="main">
        <section id="portfolio" className="portfolio">
          <div className="container">
            <Gallery/>
          </div>
        </section>
      </main>
    </>
  )
}

export default Portfolio