import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu } from 'antd'
import { NavBar } from 'components/common'

import { PUBLIC_PATHS } from 'constants/paths'

const Auth = ({ route }) => (
  <Layout>
    <NavBar>
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
    <Layout.Content>
      {renderRoutes(route.routes)}
    </Layout.Content>
  </Layout>
)

Auth.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Auth