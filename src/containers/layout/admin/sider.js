import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { ADMIN_PATHS } from 'constants/paths'

const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Menu mode="vertical" selectedKeys={[pathname]}>
        <Menu.Item key={ADMIN_PATHS.CLIENTS}>
          <Link to={ADMIN_PATHS.CLIENTS}>BLOGS</Link>
        </Menu.Item>
        <Menu.Item key={ADMIN_PATHS.CLIENTS}>
          <Link to={ADMIN_PATHS.CLIENTS}>PORTFOLIOS</Link>
        </Menu.Item>
        <Menu.Item key={ADMIN_PATHS.CLIENTS}>
          <Link to={ADMIN_PATHS.CLIENTS}>CLIENTS</Link>
        </Menu.Item>
        <Menu.Item key={ADMIN_PATHS.DEVELOPERS}>
          <Link to={ADMIN_PATHS.DEVELOPERS}>DEVELOPERS</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Sidebar