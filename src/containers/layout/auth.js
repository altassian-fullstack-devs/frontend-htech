import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import Navbar from './common/header'

const { Header, Content } = Layout

const Auth = ({ route }) => (
  <Layout className="layout">
    <Header className="my-header">
      <Navbar />
    </Header>
    <Content>
      {renderRoutes(route.routes)}
    </Content>
  </Layout>
)

Auth.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Auth