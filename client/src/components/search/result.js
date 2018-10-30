import React from 'react';
import "./Result.css";


const Result = () => {
  return (
    <div className="search-result">

      <div className="result-name">Hospital Name</div>
      <div className="result-location">Location</div>
      <div className="result-distance">2km away</div>
      <div className="result-rating">4.2</div>
      
    </div>
  )
}

export default Result;