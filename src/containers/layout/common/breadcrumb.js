import React from 'react'

const BreadCrumb = ({ path }) => {
    return (
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
  
          <div className="d-flex justify-content-between align-items-center">
            <h2>{path}</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>{path}</li>
            </ol>
          </div>
  
        </div>
      </section>
    )
}
export default BreadCrumb