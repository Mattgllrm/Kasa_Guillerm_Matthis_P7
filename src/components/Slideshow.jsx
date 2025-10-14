import { useState } from "react";
import "../Styles/Slideshow.css"; 
import arrowLeft from "../components/Images/arrow left.svg";
import arrowRight from "../components/Images/arrow right.svg";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  // Si une 1 image, pas d'arrow
  if (total === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="logement" className="slide" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      {/* Flèche gauche */}
      <button className="arrow left" onClick={prevSlide}>
        <img src={arrowLeft} alt="Précédent" />
      </button>

      {/* Image */}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slide"
      />

      {/* Flèche droite */}
      <button className="arrow right" onClick={nextSlide}>
        <img src={arrowRight} alt="Suivant" />
      </button>

      {/* Numérotation */}
      <p className="counter">
        {currentIndex + 1} / {total}
      </p>
    </div>
  );
}

export default Slideshow;
