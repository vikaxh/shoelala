import React, { useState } from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    console.log("next");
    setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    });
  };

  return (
    <div className="carousel">
      <div className="carousel-1">
        {images && (
          <img
            className="CarouselImage"
            key={images[currentSlide]._id}
            src={images[currentSlide].url}
            alt="not found"
          />
        )}
      </div>


      <button className="left-btn" onClick={handlePreviousSlide}>
        <HiArrowCircleLeft  />
      </button>

      <button className="right-btn" onClick={handleNextSlide}>
        <HiArrowCircleRight />
      </button>
    </div>
  );
};

export default Carousel;
