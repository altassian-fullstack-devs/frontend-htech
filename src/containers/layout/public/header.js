import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { FixedWidthLayout } from 'containers/layout'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <FixedWidthLayout>
      <div className="logo">
        <Link to={ROOT_PATH}>HOPE</Link>
      </div>
      
      <Menu mode="horizontal" className="nav-menu" selectedKeys={[pathname]}>
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
      </Menu>
    </FixedWidthLayout>
  )
}

export default Navbar