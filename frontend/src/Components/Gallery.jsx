import React, { useState, useEffect } from "react";
import * as api from "../api";
import MoviePanel from "./MoviePanel";

const Gallery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);
  

  if (movies) {
    return (
    
      <div className="px-4 mt-2">
        <h1 className="custom-header">Currently Showing</h1>
        <div className="outer-panel-div">
          {/* Movie panels for currently showing movies go here */}
          {/* Set the button to go to the correct place book now/pre-book */}
          {movies.filter((movie) => movie.isShowing === "True").map((movie, index) => (
            <MoviePanel
              key={index}
              movie={{...movie}}
              buttonText={"Book Now!"}
            />
          ))}
        </div>
        <h2 className="custom-header">Coming soon!</h2>
        <div className="outer-panel-div">
          {/* More movie panels for upcoming movies here */}
           {/* Set the button to go to the correct place book now/pre-book */}
          {movies.filter((movie) => movie.isShowing === "False").map((movie, index) => (
            <MoviePanel
              key={index}
              movie={{...movie}}
              buttonText={"Pre-book"}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Gallery;
