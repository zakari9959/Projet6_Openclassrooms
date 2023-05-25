import React, { useState } from 'react'

const Carousel = ({ selectedItem }) => {
  const [images] = useState(selectedItem)
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

  console.log(currentImage)

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Précédent</button>
      <img src={currentImage} alt="carousel" />
      <button onClick={goToNextSlide}>Suivant</button>
    </div>
  )
}

export default Carousel
