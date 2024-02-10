import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to="/" style={{color:"white"}}>Bot Collection</NavLink></li>
        <li><NavLink to="/myarmy" style={{color:"white"}}>My Army</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar