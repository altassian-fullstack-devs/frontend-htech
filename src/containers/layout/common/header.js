import React from 'react'
import { Menu } from 'antd'

const Navbar = () => {
  return (
    <>
      <div className="logo">HOPE</div>
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