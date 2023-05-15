import React, { useState, useEffect } from "react";
import * as api from "../api";
import MoviePanel from "./MoviePanel";

const jsonDataArray = [
  {
    id: "12223",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    title: "Avengers Assemble",
    rating: "12A",
    year: 2012,
    length: 143,
    actors: "Robert Downey Jnr, Chris Evans",
    plot: `Can the world's most powerful team of Super Heroes put aside their differences and learn to 
                live together under one roof long enough to save the world from ultimate destruction? The answer 
                will be revealed when the Red Skull and M.O.D.O.K. wage war on The Avengers.`,
  },
  {
    id: "22234",
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    title: "Deadpool",
    rating: "15",
    year: "2016",
    length: 108,
    actors: "Ryan Reynolds, Morena Baccarin, T.J. Miller",
    plot: `This is the origin story of former Special Forces operative turned mercenary Wade Wilson, 
                who after being subjected to a rogue experiment that leaves him with accelerated healing powers, 
                adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, 
                Deadpool hunts down the man who nearly destroyed his life.`,
  },
];

const Gallery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  // TODO: Remove Link - just set button text and useContext in BookingController
  // to move to the TicketOffice component
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
              // movie={JSON.parse(JSON.stringify(movie))}
              movie={{...movie}}
              buttonText={"Book Now!"}
            />
          ))}
        </div>
        <h2 className="custom-header">Coming soon!</h2>
        <div className="outer-panel-div">
          {/* More movie panels for upcoming movies here */}
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
