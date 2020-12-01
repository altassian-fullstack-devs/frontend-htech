import React from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu } from 'antd'

import { NavBar, Footer } from 'components/common'
import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

const popOverContent = (
  <div>
    <p><Link to={PUBLIC_PATHS.PROFILE}>Profile</Link></p>
    <p><Link to={ROOT_PATH}>Sign out</Link></p>
  </div>
);

const Public = ({ route }) => {
  return (
    <Layout>
      <NavBar popOverContent={popOverContent}>
        <Menu.Item key={PUBLIC_PATHS.HOW_WE_WORK}>
          <Link to={PUBLIC_PATHS.HOW_WE_WORK}>HOW WE WORK</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.DEVELOPERS}>
          <Link to={PUBLIC_PATHS.DEVELOPERS}>DEVELOPERS</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.PORTFOLIO}>
          <Link to={PUBLIC_PATHS.PORTFOLIO}>PORTFOLIO</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.BLOG}>
          <Link to={PUBLIC_PATHS.BLOG}>BLOG</Link>
        </Menu.Item>
        <Menu.Item key={PUBLIC_PATHS.ABOUT_US}>
          <Link to={PUBLIC_PATHS.ABOUT_US}>ABOUT US</Link>
        </Menu.Item>
      </NavBar>

      <Layout.Content className="page-content">
        { renderRoutes(route.routes) }
      </Layout.Content>
      
      <Footer />
    </Layout>
  )
}

export default Public