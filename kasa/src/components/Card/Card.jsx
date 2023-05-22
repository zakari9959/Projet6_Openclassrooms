import React from 'react'
import './Card.css'

const Card = ({ data }) => {
  return (
    <div className="card">
      <img className="cardImg" src={data.cover} alt="Salon appartement" />
      <h2 className="cardTitle">{data.title}</h2>
    </div>
  )
}

export default Card
