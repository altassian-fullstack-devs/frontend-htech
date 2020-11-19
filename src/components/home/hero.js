import React, { useState } from 'react'
import HeroCarouselItem from './hero-carousel-item'

const slides = [
  {
    imageURL: "../img/slide/slide-1.jpg",
    title:    "Welcome to Sailor",
    content:  "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
  }, {
    imageURL: "../img/slide/slide-2.jpg",
    title:    "Lorem Ipsum Dolor",
    content:  "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
  }, {
    imageURL: "../img/slide/slide-3.jpg",
    title:    "Sequi ea ut et est quaerat",
    content:  "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
  }, 
]

const Hero = () => {
  return (
    <section id="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, idx) => (
            <HeroCarouselItem active={(idx==0)} key={"slide" + idx} {...slide}/>
          ))}
        </div>
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  )
}

export default Hero