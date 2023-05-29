import React from 'react'
import './HostLogement.css'

const HostLogement = ({ host }) => {
  return (
    <div className="fichelogement__host">
      <div className="fichelogement__host__name">{host.name}</div>
      <img alt={host.name} src={host.picture} />
    </div>
  )
}

export default HostLogement
