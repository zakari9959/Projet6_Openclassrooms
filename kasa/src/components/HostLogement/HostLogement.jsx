import React from 'react'
import './HostLogement.css'

const HostLogement = ({ host }) => {
  const [firstName, lastName] = host.name.split(' ')
  return (
    <div className="fichelogement__host">
      <div className="fichelogement__host__name">
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <img alt={host.name} src={host.picture} />
    </div>
  )
}

export default HostLogement
