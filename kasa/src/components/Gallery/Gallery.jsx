import React, { useState } from 'react'
import flecheDroite from '../../assets/fleche--droite.svg'
import './Gallery.css'

const Gallery = ({ pictures }) => {
  const [images] = useState(pictures)
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const currentImage = images[currentIndex]

  console.log(currentIndex)

  return (
    <div className="carousel">
      <img src={currentImage} alt="gallery" className="carousel__img" />
      {images.length > 1 && (
        <>
          <img
            src={flecheDroite}
            alt="prev"
            className="carousel__button left"
            onClick={goToPrevSlide}
          />
          <p className="carousel__count">
            {currentIndex + 1}/{images.length}
          </p>
          <img
            src={flecheDroite}
            alt="prev"
            className="carousel__button right"
            onClick={goToNextSlide}
          />
        </>
      )}
    </div>
  )
}

export default Gallery
