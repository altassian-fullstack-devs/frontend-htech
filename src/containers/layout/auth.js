import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import Navbar from './common/header'

const { Header, Content } = Layout

const Auth = ({ route }) => (
  <Layout>
    <Header className="nav-header">
      <Navbar />
    </Header>
    <div className="nav-header-empty"/>
    <Content>
      {renderRoutes(route.routes)}
    </Content>
  </Layout>
)

Auth.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Auth