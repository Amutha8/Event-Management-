import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navigation">
      <nav className="navi1">
        <NavLink className="link"  to='/'>Home</NavLink>
        <NavLink  className="link" to='admin'>Admin</NavLink>
        <NavLink  className="link" to='/user'>User</NavLink>
        <NavLink  className="link" to='/login'>Login</NavLink>
        <NavLink  className="link" to='/signup'>Signup</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
