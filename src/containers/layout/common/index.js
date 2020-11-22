import { renderRoutes } from 'react-router-config'
import React from 'react'
import { Layout } from 'antd'
import Navbar from './header'

const { Header, Content, Footer } = Layout

const Common = ({ route }) => {
  return (
    <Layout className="layout">
      <Header className="my-header">
        <Navbar />
      </Header>
      <Content>
        { renderRoutes(route.routes) }
      </Content>
      <Footer style={{ textAlign: 'center' }}>HOPE ©2020 Created by HOPE LtD</Footer>
    </Layout>
  )
}

export default Common