import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import Navbar from './header'
import Sidebar from './sider'

const { Header, Content, Sider, Footer } = Layout

const Admin = ({ route }) => (
  <Layout>
    <Header className="nav-header">
      <Navbar />
    </Header>
    <div className="nav-header-empty"/>

    <Layout>
      <Sider className="nav-sider">
        <Sidebar />
      </Sider>
      
      <Layout>
        <Content className="page-content">
          {renderRoutes(route.routes)}
        </Content>

        <Footer style={{ textAlign: 'center' }}>HOPE ©2020 Created by HOPE LtD</Footer>
      </Layout>
    </Layout>
  </Layout>
)

Admin.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Admin