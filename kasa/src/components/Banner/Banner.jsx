import React from 'react'
import './Banner.css'

const Banner = ({ image, showText }) => {
  return (
    <div className="banner">
      <div className="banner__overlay" />
      <img className="banner__img" src={image} alt="paysage de montagne" />
      {showText && (
        <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
      )}
    </div>
  )
}

export default Banner
