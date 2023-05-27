import React from 'react'
import './Banner.css'

const Banner = ({ image, showText }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="paysage de montagne" />
      <div className="banner__overlay" />
      {showText && (
        <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
      )}
    </div>
  )
}

export default Banner
