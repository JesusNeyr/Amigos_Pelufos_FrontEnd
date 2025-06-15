import React, { useState, useEffect } from 'react';
import '../style/Carousel.css';

const images = [
  'https://placekitten.com/800/300',
  'https://placedog.net/800/300?id=1',
  'https://placebear.com/800/300',
  'https://loremflickr.com/800/300/bird',
  'https://loremflickr.com/800/300/fish',
  'https://loremflickr.com/800/300/pet',
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  // Avanza automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    // Limpieza al desmontar
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button left" onClick={prevSlide}>
        &#10094;
      </button>

      <img
        src={images[current]}
        alt={`slide ${current + 1}`}
        className="carousel-image"
      />

      <button className="carousel-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
