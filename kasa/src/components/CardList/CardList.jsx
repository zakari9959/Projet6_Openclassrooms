import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
import jsonData from '../../data/logements.json'

const CardList = () => {
  return (
    <div className="gallery">
      {jsonData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  )
}

export default CardList
