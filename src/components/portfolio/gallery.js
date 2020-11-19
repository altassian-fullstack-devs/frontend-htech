import React, { useState } from 'react'
import GalleryItem from './gallery-item'

const items = [
  {
    filter:      "filter-app", 
    imageURL:    "../img/portfolio/portfolio-1.jpg", 
    title:       "App 1", 
    description: "App"
  }, {
    filter:      "filter-web", 
    imageURL:    "../img/portfolio/portfolio-2.jpg", 
    title:       "Web 3", 
    description: "Web"
  }, {
    filter:      "filter-app", 
    imageURL:    "../img/portfolio/portfolio-3.jpg", 
    title:       "App 2", 
    description: "App"
  }, {
    filter:      "filter-card", 
    imageURL:    "../img/portfolio/portfolio-4.jpg", 
    title:       "Card 2", 
    description: "Card"
  }, {
    filter:      "filter-web", 
    imageURL:    "../img/portfolio/portfolio-5.jpg", 
    title:       "Web 2", 
    description: "Web"
  }, {
    filter:      "filter-app", 
    imageURL:    "../img/portfolio/portfolio-6.jpg", 
    title:       "App 3", 
    description: "App"
  }, {
    filter:      "filter-web", 
    imageURL:    "../img/portfolio/portfolio-7.jpg", 
    title:       "Web 1", 
    description: "Web"
  }, {
    filter:      "filter-card", 
    imageURL:    "../img/portfolio/portfolio-8.jpg", 
    title:       "Card 1", 
    description: "Card"
  }, {
    filter:      "filter-card", 
    imageURL:    "../img/portfolio/portfolio-9.jpg", 
    title:       "Card 3", 
    description: "Card"
  }
]

const Gallery = () => {
  return (
      <>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {items.map((item, idx) => (
            <GalleryItem {...item} key={'gallery_item' + idx}/>
          ))}
        </div>
      </>
  )
}

export default Gallery