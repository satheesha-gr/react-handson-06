import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink className="links" to="/">
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="links" to="/students-data">
                    Students
                    </NavLink>
                </li>
                <li>
                    <NavLink className="links" to="/contact-us">
                    Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar