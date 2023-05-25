import React from 'react'
import Collapse from '../Collapse/Collapse'
import Rating from '../Rating/Rating'

const InfoLogement = ({
  title,
  description,
  location,
  tags,
  equipments,
  host,
  rating,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{location}</h2>
      {tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
      <div className="host">
        <img alt={host.name} src={host.picture} />
        <p>{host.name}</p>
      </div>
      <Rating value={rating} />
      <Collapse title="Description" children={description} />
      <Collapse title="Equipements" children={equipments} />
    </div>
  )
}

export default InfoLogement
