import React from 'react'
import jsonData from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery/Gallery'
import HostLogement from '../../components/HostLogement/HostLogement'
import Rating from '../../components/Rating/Rating'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../pages/Error/Error'
import './FicheLogement.css'

const FicheLogement = () => {
  const { id } = useParams()

  const selectedItem = jsonData.find((item) => item.id === id)

  if (selectedItem) {
    const {
      pictures,
      title,
      location,
      tags,
      host,
      rating,
      description,
      equipments,
    } = selectedItem

    return (
      <div className="fichelogement">
        <Gallery pictures={pictures} />
        <div className="fichelogement__info">
          <div className="fichelogement__info__top">
            <div className="fichelogement__info__gauche">
              <h1>{title}</h1>
              <h2>{location}</h2>
              <div className="fichelogement__info__tags">
                {tags.map((tag, index) => (
                  <p key={index} className="fichelogement__info__tag">
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="fichelogement__info__droite">
              <HostLogement host={host} />
              <Rating value={rating} />
            </div>
          </div>
          <div className="fichelogement__info__collapses">
            <Collapse title="Description" children={description} />
            <Collapse
              title="Equipements"
              children={equipments.map((equipment, index) => (
                <p key={index}>{equipment}</p>
              ))}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return <Error />
  }
}

export default FicheLogement
