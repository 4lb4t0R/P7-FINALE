import React  from "react"
import starOn from "../assets/star_rate-24-red.svg";
import starOff from "../assets/star_rate-24-grey.svg";
import style from "../styles/Notation.module.css"

export default function Notation({score}) {
  

    return (
      <div className="stars">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <img className={style.starz}src={ratingValue <= score ? starOn : starOff} alt="star" />
            </label>
          );
        })}
      </div>
    );
}