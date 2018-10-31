import React from 'react';
import Result from './Search/result';
import Map from './Search/Map';
import "./Results.css";

const Results = () => {
  return (
    <div className="search-results">
      <div className="search-results-tab">
        <p>Search results</p>
        <Result />
        <Result />
        <Result />
      </div>
      <div className="search-map-tab">
      <Map />
      </div>
    </div>
  )
}

export default Results;
