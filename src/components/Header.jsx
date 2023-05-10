import React from 'react'

import logo from "../assets/logo.png"
import profile from "../assets/profile.png"

import {HiMenu} from "react-icons/hi"

import {SlEnvolopeLetter} from "react-icons/sl"
import {AiFillBell} from "react-icons/ai"

import "../Styles/header.css"

const Header = () => {
  return (
    <header className='header'>
    
     <img className='logo' src={logo} alt="Omnifood logo" />
     
       <div className="hero">
          <h2>Logitech K480 device Blootooth Tablet Keybord <span>Black</span> </h2>
          <p>item All Items  </p>
       </div>


    <nav className='main-nav'>
         <ul className='main-nav-list'>

         <li>
          <AiFillBell/>
         </li>
         
         <li>
          <SlEnvolopeLetter/>
         </li>

         <li className='user'>
             <img src={profile} alt="" />
         </li>

         <li className='nav'>
           <HiMenu/>
         </li>

         </ul>
    </nav>




   </header>
  )
}

export default Header
