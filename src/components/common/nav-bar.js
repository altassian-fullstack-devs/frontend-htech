import React from 'react'
import { connect } from 'react-redux'
import { Button, Popover, Avatar, Menu, Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import {  ROOT_PATH } from 'constants/paths'
import { FixedWidthLayout } from 'containers/layout'
import { getIsReady } from 'store/selectors/app'
import { GLOBAL } from 'constants/app'

const NavBar = ({ 
  children, 
  popOverContent,
  isAppReady
}) => {
  const { pathname } = useLocation()

  return (
    <>
      <Layout.Header className="nav-header">
        <FixedWidthLayout className="nav-bar">
          <div className="logo">
            <Link to={ROOT_PATH}>{GLOBAL.COMPANY_NAME_SHORT}</Link>
          </div>
          
          <Menu mode="horizontal" className="nav-menu" selectedKeys={[pathname]}>
            {children}
          </Menu>        

          <div className="nav-right-container">
            {popOverContent && isAppReady &&
              <Popover placement="bottomRight" content={popOverContent} trigger="click">
                <Button className="nav-avatar-button" shape="circle">
                  <Avatar src="http://gogs.hope.com/avatars/6?s=287" />
                </Button>
              </Popover>
            }
          </div>
        </FixedWidthLayout>
      </Layout.Header>
      <div className="nav-header-empty"/>
    </>
  )
}

export default connect(
  createStructuredSelector({
    isAppReady: getIsReady
  })
)(NavBar)