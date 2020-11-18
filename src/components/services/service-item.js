import React from 'react'

const ServiceItem = ({title, ico, description}) => {
  // const { item: {title, ico, description} } = propss
  return (
    <div className="col-md-6">
      <div className="icon-box">
        <i className={ico}></i>
        <h4><a href="#">{title}</a></h4>
        <p>{description}</p>
      </div>
    </div> 
  )
}

export default ServiceItem;
