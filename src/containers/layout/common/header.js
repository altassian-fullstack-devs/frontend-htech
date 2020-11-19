import React, { useState } from 'react'

const Header = () => {
  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center">

      <h1 className="logo"><a href="/">Sailor</a></h1>
      <a href="/" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav className="nav-menu d-none d-lg-block">
        <ul>
        <li className="active"><a href="/">Home</a></li>

        <li className="drop-down"><a href="/#">About</a>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
          </ul>
        </li>

        <li><a href="/services">Services</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>

        </ul>
      </nav>

      <a href="/" className="get-started-btn ml-auto">Get Started</a>

      </div>
    </header>
  )
}

export default Header