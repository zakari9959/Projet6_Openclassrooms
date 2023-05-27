import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ title, cover, id }) => {
  return (
    <Link to={`/fichelogement/${id}`} className="card">
      <img className="card__img" src={cover} alt={title} />{' '}
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card
