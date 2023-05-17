import React from 'react'
import './Card.css'

const Card = ({ title }) => (
  <div className="card">
    <img
      className="card--img"
      src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
    />
    <h2 className="card--title">{title}</h2>
  </div>
)
export default Card
