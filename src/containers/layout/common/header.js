import React, { useState } from 'react'

import { NavLink } from 'components/common'

const Header = () => {
  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center">

      <h1 className="logo"><a href="/">Sailor</a></h1>
      <a href="/" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
          <NavLink to="/">Home</NavLink>

          <li className="drop-down"><a href="/#">About</a>
            <ul>
              <NavLink to="/about" exact>About Us</NavLink>
              <NavLink to="/teampage" exact>Team</NavLink>
              <NavLink to="/testimonials" exact>Testimonials</NavLink>
            </ul>
          </li>

          <NavLink to="/services" exact>Services</NavLink>
          <NavLink to="/portfolio" exact>Portfolio</NavLink>
          <NavLink to="/pricing" exact>Pricing</NavLink>
          <NavLink to="/blog" exact>Blog</NavLink>
          <NavLink to="/contact" exact>Contact</NavLink>
        </ul>
      </nav>

      <a href="/" className="get-started-btn ml-auto">Get Started</a>

      </div>
    </header>
  )
}

export default Header