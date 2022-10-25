import style from "../styles/Slideshow.module.css";
import React, { useState } from "react";
import arrowLeft from "../assets/VectorLeftSlide.svg";
import arrowRight from "../assets/VectorRightSlide.svg";

const Slideshow = ({ slides }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={style.slideshow}>
      <div onClick={goToPrevious}>
        <img src={arrowLeft} alt="flèche gauche" className={style.arrowleft} />
      </div>
      <div>
        
            <img className={style.slideshow}  src={slides[currentIndex]} alt="image illustrative"/>
         
      </div>
      <div onClick={goToNext}>
        <img
          src={arrowRight}
          alt="flèche droite"
          className={style.arrowright}
        />
      </div>
    </div>
  );
};

export default Slideshow;
