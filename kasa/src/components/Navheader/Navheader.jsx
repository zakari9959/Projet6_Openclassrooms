import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navheader.css'
const Navheader = () => {
  return (
    <nav className="navheader">
      <NavLink to="/" className="navheader__link">
        Accueil
      </NavLink>
      <NavLink to="/about" className="navheader__link">
        À Propos
      </NavLink>
    </nav>
  )
}
export default Navheader
