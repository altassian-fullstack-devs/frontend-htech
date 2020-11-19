import React from 'react'

const GalleryItem = ({ filter, imageURL, title, description }) => {
  return (
    <div className={"col-lg-4 col-md-6 portfolio-item " + filter}>
      <div className="portfolio-wrap">
        <img src={imageURL} className="img-fluid" alt=""/>
        <div className="portfolio-info">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="portfolio-links">
            <a href={imageURL} data-gall="portfolioGallery" className="venobox" title={title}><i className="bx bx-plus"></i></a>
            <a href="/portfolio-detail" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryItem