
import React from 'react'
import { Link } from 'react-router-dom'

const BrowseDevelopers = () => {
  return (
    <div className="page-browse-developers">
      <div>Browse developers</div>
      <Link to='/profile'>Andrey</Link>
    </div>
  )
}

export default BrowseDevelopers