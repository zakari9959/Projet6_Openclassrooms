import React, { useEffect, useState } from 'react'
import './Gallery.css'
import Card from '../Card/Card'

const Gallery = () => {
  const [jsonData, setJsonData] = useState([])

  useEffect(() => {
    fetch('../../data/logements.json')
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data)
      })
      .catch((error) => {
        console.log('Erreur lors de la récupération des données JSON.')
      })
  }, [])

  return (
    <div className="gallery">
      {jsonData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Gallery
