import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import greystar from "../assets/star_rate-24-grey.svg";
import redstar from "../assets/star_rate-24-red.svg";

export default function Notation({score}) {
  const [rating, setRating] = useState(score);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <img src={greystar} style={{width:"25px", height:"25px"}}/>
      <Rating
        initialValue={rating}
        onClick={handleRating}
        fillIcon={<redstar size={50}/>}
        emptyIcon={<greystar size={50}/>}
      />
    </div>
  );
}
