import React, { useState } from 'react'
import Header from './header'
import Footer from './footer'
import { renderRoutes } from 'react-router-config'

const Common = ({ route }) => {
  return (
    <div>
      <Header />
        { renderRoutes(route.routes) }
      <Footer />
    </div>
  )
}

export default Common