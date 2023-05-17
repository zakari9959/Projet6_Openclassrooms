import React from 'react'
import './Banner.css'

const Banner = ({ image, showText }) => {
  return (
    <div className="banner">
      <div className="banner--overlay" />
      <img className="banner--img" src={image} alt="paysage de montagne" />
      {showText && (
        <h2 className="banner--title">Chez vous, partout et ailleurs</h2>
      )}
    </div>
  )
}

export default Banner
