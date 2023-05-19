import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import * as api from "../api";
import MoviePanel from "./MoviePanel";

const CarouselComp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  if (movies) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {movies
          .filter((movie) => movie.isShowing === "True")
          .map((movie, index) => (
            <div
              key={index}
              className="relative cursor-pointer transform hover:scale-105"
              onClick={() => (window.location.href = `/movie-id/${movie._id}`)}
            >
              <img
                src={movie.Poster}
                alt={`img ${movie.Poster}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
      </div>
    );
  }
};

export default CarouselComp;
