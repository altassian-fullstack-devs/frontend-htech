import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import Navbar from './header'
import Sidebar from './sider'

const { Header, Content, Sider } = Layout

const Admin = ({ route }) => (
  <Layout>
    <Header className="nav-header">
      <Navbar />
    </Header>
    <div className="nav-header-empty"/>

    <Layout>
      <Sider>
        <Sidebar />
      </Sider>
      <Content>
        {renderRoutes(route.routes)}
      </Content>
    </Layout>
  </Layout>
)

Admin.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Admin