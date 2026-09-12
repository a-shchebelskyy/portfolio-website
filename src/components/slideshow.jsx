import React, { useState } from 'react';

const Slideshow = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!children || children.length === 0) return null;

  return (
    <div className="slideshow">
      <div className="slides-wrapper">
        {/* Slide Wrapper */}
        <div className="slides-row" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {children}
        </div>
      </div>
      <div className="slide-button-container">
        <button onClick={handlePrev} className="slide-button">
          <p>←</p>
        </button>
        <button onClick={handleNext} className="slide-button">
          <p>→</p>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;