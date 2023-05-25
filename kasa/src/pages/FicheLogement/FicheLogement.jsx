import React from 'react'
import jsonData from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery/Gallery'
import InfoLogement from '../../components/InfoLogement/InfoLogement'

const FicheLogement = () => {
  const { id } = useParams()

  const selectedItem = jsonData.find((item) => item.id === id)

  return (
    <div>
      {selectedItem ? (
        <div>
          <Gallery selectedItem={selectedItem.pictures} />
          <InfoLogement
            title={selectedItem.title}
            description={selectedItem.description}
            location={selectedItem.location}
            tags={selectedItem.tags}
            host={selectedItem.host}
            equipments={selectedItem.equipments}
            rating={selectedItem.rating}
          />
        </div>
      ) : (
        <p>Aucun élément trouvé pour l'ID spécifié.</p>
      )}
    </div>
  )
}

export default FicheLogement
