import { renderRoutes } from 'react-router-config'
import React from 'react'
import { Layout } from 'antd'
import Navbar from './header'

const { Header, Content, Footer } = Layout

const Public = ({ route }) => {
  return (
    <Layout>
      <Header className="nav-header">
        <Navbar />
      </Header>
      <div className="nav-header-empty"/>
      <Content className="page-content">
        { renderRoutes(route.routes) }
      </Content>
      <Footer style={{ textAlign: 'center' }}>HOPE ©2020 Created by HOPE LtD</Footer>
    </Layout>
  )
}

export default Public