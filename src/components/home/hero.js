import { Button } from 'antd'
import React from 'react'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-cover child-center">
        <div className="container">
          <h1>Dedicated development teams that deliver</h1>
          <p>HOPE is a custom software development company that provides dedicated teams of hotshot engineers. We help VC-backed startups and fast-growing tech companies build successful, scalable products that users love.</p>
          <Button type="danger" shape="round" className="ant-btn-lg">GET STARTED</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero