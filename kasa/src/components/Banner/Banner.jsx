import React from 'react'
import './Banner.css'

const Banner = ({ image, showText }) => {
  return (
    <div className="banner">
      <div className="bannerOverlay" />
      <img className="bannerImg" src={image} alt="paysage de montagne" />
      {showText && (
        <h2 className="bannerTitle">Chez vous, partout et ailleurs</h2>
      )}
    </div>
  )
}

export default Banner
