import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
//import ReactDOM from 'react-dom'
const Error = () => {
  return (
    <div className="error__page">
      <h1 className="error__404">404</h1>
      <h2 className="error__oups">
        Oups! La page que vous demandez n'existe pas
      </h2>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default Error
