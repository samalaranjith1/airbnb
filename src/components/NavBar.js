import React from 'react'
import logo from '../images/flag.png'
export default function NavBar() {
  return (
    <nav className='navbar'>
      <img src={logo} className='nav-logo'/>
      <h1 className='navbar-h1'>India</h1>
    </nav>
  )
}
