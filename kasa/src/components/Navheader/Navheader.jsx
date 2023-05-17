import React from 'react'
import { Link } from 'react-router-dom'
import './Navheader.css'
const Navheader = () => {
  return (
    <nav className="navheader">
      <Link to="/" className="navheader--link">
        Accueil
      </Link>
      <Link to="/about" className="navheader--link">
        À Propos
      </Link>
    </nav>
  )
}
export default Navheader
