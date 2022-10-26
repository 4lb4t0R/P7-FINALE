import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function Notation({score}) {
  console.log(score)
  
  const [rating, setRating] = useState(score);
  
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
     
      <Rating
        fillColor="#FF6060"
        initialValue={score}
        onClick={handleRating}
        
      />
    </div>
  );
}
