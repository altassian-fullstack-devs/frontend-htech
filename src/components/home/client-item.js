import React from 'react'

const ClientItem = ({ imageURL }) => {
  return (
    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
      <img src={imageURL} className="img-fluid" alt=""/>
    </div>
  )
}

export default ClientItem