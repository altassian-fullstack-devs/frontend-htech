import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row } from 'antd'

import { AUTH_PATHS } from 'constants/paths'
import { FixedWidthLayout } from 'containers/layout'

const Hero = () => {
  return (
    <div className="hero-container">
      <Row className="hero-cover" align='middle'>
        <FixedWidthLayout>
          <h1>Dedicated development teams that deliver</h1>
          <p>HOPE is a custom software development company that provides dedicated teams of hotshot engineers. We help VC-backed startups and fast-growing tech companies build successful, scalable products that users love.</p>
          <Button type="danger" shape="round" className="ant-btn-lg">
            <Link to={AUTH_PATHS.SIGN_UP}>GET STARTED</Link>
          </Button>
        </FixedWidthLayout>
      </Row>
    </div>
  )
}

export default Hero