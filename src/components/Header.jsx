import React from 'react'

import logo from "../assets/logo.png"

import "../Styles/header.css"

const Header = () => {
  return (
    <header className='header'>
    
     <img className='logo' src={logo} alt="Omnifood logo" />


    <nav className='main-nav'>
         <ul className='main-nav-list'>
         <li><a class="main-nav-link" href="#how">How it works</a></li>
         <li><a class="main-nav-link" href="#meals">Meals</a></li>
         <li>
           <a class="main-nav-link" href="#testimonials">Testimonials</a>
         </li>
         <li><a class="main-nav-link" href="#pricing">Pricing</a></li>
         <li><a class="main-nav-link nav-cta" href="#cta">Try for free</a></li>


         </ul>
    </nav>




   </header>
  )
}

export default Header
