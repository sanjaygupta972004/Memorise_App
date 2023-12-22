import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  
  return (
      <>
      <header>
         <div className=' container'>
            <div className='logo-brand'>
               <img src="#" alt="logo"
               width="4000"
               height= "500" />
            </div>
            <nav>
               <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/service">Service</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/register">Register</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
               </ul>
            </nav>
         </div>
      </header>
      </>

  )
}

export default Navbar