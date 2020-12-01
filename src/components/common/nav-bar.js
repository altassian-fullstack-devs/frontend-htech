import React from 'react'
import { Button, Popover, Avatar, Menu, Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { FixedWidthLayout } from 'containers/layout'

const content = (
  <div>
    <p><Link to={PUBLIC_PATHS.PROFILE}>Profile</Link></p>
    <p><Link to={ROOT_PATH}>Sign out</Link></p>
  </div>
);

const NavBar = ({ children, popOverContent }) => {
  const { pathname } = useLocation()

  return (
    <>
      <Layout.Header className="nav-header">
        <FixedWidthLayout className="nav-bar">
          <div className="logo">
            <Link to={ROOT_PATH}>HOPE</Link>
          </div>
          
          <Menu mode="horizontal" className="nav-menu" selectedKeys={[pathname]}>
            {children}
          </Menu>        

          {popOverContent &&
            <Popover placement="bottomRight" content={popOverContent} trigger="click">
              <Button className="nav-avatar-button" shape="circle">
                <Avatar src="http://gogs.hope.com/avatars/6?s=287" />
              </Button>
            </Popover>
          }
        </FixedWidthLayout>
      </Layout.Header>
      <div className="nav-header-empty"/>
    </>
  )
}

export default NavBar