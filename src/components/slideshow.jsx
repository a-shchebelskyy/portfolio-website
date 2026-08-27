import React, { useState, useEffect } from 'react';

const Slideshow = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide
  // useEffect(() => {
  //   if (!autoplayInterval) return;

  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, autoplayInterval);

  //   return () => clearInterval(interval);
  // }, [currentIndex, autoplayInterval]);

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

  // Jump to a specific slide from the dots
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
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
      {/* Navigation Arrows */}
      {/* <button onClick={handlePrev} className="slide-button">❮</button>
      <button onClick={handleNext} className="slide-button">>❯</button> */}

      {/* Pagination Dots */}
      {/* <div style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

{/* <div style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              ...styles.dot,
              backgroundColor: currentIndex === index ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
            }}
          />
        ))}
      </div> */}

// Inline CSS Styles for encapsulation
const styles = {
  container: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    height: '450px',
    margin: '0 auto',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  sliderWindow: {
    display: 'flex',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
  },
  slide: {
    minWidth: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  caption: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '5px',
    fontFamily: 'sans-serif',
    fontSize: '14px',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '12px 16px',
    cursor: 'pointer',
    borderRadius: '50%',
    fontSize: '18px',
    zIndex: 10,
    transition: 'background-color 0.2s',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 10,
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Slideshow;