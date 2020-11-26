import React from 'react'
import { Menu, Avatar } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <>
      <div className="logo">
        <Link to={ROOT_PATH}>HOPE</Link>
      </div>
      
      <Avatar className="avatar" src="http://gogs.hope.com/avatars/6?s=287" />
    </>
  )
}

export default Navbar