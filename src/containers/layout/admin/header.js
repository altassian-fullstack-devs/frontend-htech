import React from 'react'
import { Button, Popover, Avatar } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

const content = (
  <div>
    <p><Link to={PUBLIC_PATHS.PROFILE}>Profile</Link></p>
    <p><Link to={ROOT_PATH}>Sign out</Link></p>
  </div>
);

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <>
      <div className="logo">
        <Link to={ROOT_PATH}>HOPE</Link>
      </div>
      
      <Popover className="header-avatar-popover" placement="bottomRight" content={content} trigger="click">
        <Button className="header-avatar-button" shape="circle"><Avatar src="http://gogs.hope.com/avatars/6?s=287" /></Button>
      </Popover>
    </>
  )
}

export default Navbar