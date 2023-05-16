import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

import * as api from "../api";
import MoviePanel from "./MoviePanel";


const images = [
  { 
    id:"1",
    src:"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    alt:"1",
    link:"/about"
  }, 
  {
    id:"2",
    src:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", 
    alt:"2",
    link:"/home"
  },
  {
    id:"3",
    src:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    alt:"3",
    link:"/contact-form"
  },
  { 
    id:"4",
    src:"https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    alt:"1",
    link:"/about"
  }, 
  {
    id:"5",
    src:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", 
    alt:"2",
    link:"/home"
  },
  {
    id:"6",
    src:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    alt:"3",
    link:"/contact-form"
  }
]

const CarouselComp = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  if (movies) {
  return (
  <Carousel infinite transition={{ duration: 1 }} className="w-1/2 h-1/2 rounded-xl mx-auto shadow-md rounded">
      {movies.filter((movie) => movie.isShowing === "True").map((movie, index) => (
        <>
        
        <img
          key={index}
          src={movie.Poster}
          alt={`img ${movie.Poster}`}
          className="h-full w-full object-cover cursor-pointer"
          onClick={()=> window.location.href = `/movie-id/${movie._id}`}
        >
        </img>
        </>
      ))}
    </Carousel>
    
  );
};
};

export default CarouselComp;