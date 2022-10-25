import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Notation({score}) {
  const [rating, setRating] = useState(score);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
     
      <Rating
      fillColor="#FF6060"
        initialValue={rating}
        onClick={handleRating}
        
      />
    </div>
  );
}
