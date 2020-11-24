import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { ROOT_PATH } from 'constants/paths'

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <Link to={ROOT_PATH}>HOPE</Link>
      </div>
      <Menu mode="horizontal" className="my-menu" defaultSelectedKeys={['1']}>
        <Menu.Item>HOW WE WORK</Menu.Item>
        <Menu.Item>PORTFOLIO</Menu.Item>
        <Menu.Item>BLOG</Menu.Item>
        <Menu.Item>ABOUT US</Menu.Item>
      </Menu>
    </>
  )
}

export default Navbar