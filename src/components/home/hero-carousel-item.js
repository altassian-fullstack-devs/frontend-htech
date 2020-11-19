import React from 'react'

const HeroCarouselItem = ({ active, imageURL, title, content, url }) => {
  return (
    <div className={"carousel-item" + (active?" active":"")} style={{backgroundImage: "url(" + imageURL + ")"}}>
      <div className="carousel-container">
        <div className="container">
          <h2 className="animate__animated animate__fadeInDown">{title}</h2>
          <p className="animate__animated animate__fadeInUp">{content}</p>
          <a href={url} className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default HeroCarouselItem