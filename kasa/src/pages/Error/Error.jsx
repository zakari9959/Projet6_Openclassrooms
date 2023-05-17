import React from 'react'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import './Error.css'
//import ReactDOM from 'react-dom'
const Error = () => {
  return (
    <div className="error--page">
      <h1 className="error--404">404</h1>
      <h2 className="error--oups">
        Oups! La page que vous demandez n'existe pas
      </h2>
      <Link to="/" className="error--link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default Error
