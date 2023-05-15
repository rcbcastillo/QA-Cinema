import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FilmContext } from "./BookingController";

const MoviePanel = ({ movie, buttonText }) => {

  const { chosenFilmId, setChosenFilmId } = useContext(FilmContext);

  return (
    //  Create and return a panel for one movie
    <>
      {/* Transform the image div to scale up poster on hover */}
      {/* console.log({movie}); */}
      <div className="inner-panel-img-div">
        <img src={movie.Poster} alt={`movie poster for ${movie.Title}`}></img>
      </div>
      {/* Note: '...' class doesn't seem to work in index.css 
                so it's not been extracted as custom class*/}
      <div className="col-start-2 col-end-6 ...">
        <div className="py-8 ml-6">
          <article>
            <h1 className="text-4xl pb-2">{movie.Title}</h1>
            {/* Rating <li> links to classification page */}
            <ul className="text-sm pb-2">
              <li className="inline pr-1">{movie.Year}</li>
              <li className="inline pr-1">
                <Link to="/classifications">{movie.Rated}</Link>
              </li>
              <li className="inline pr-1">{movie.Runtime}</li>
            </ul>
            <h2 className="pb-3">{movie.Actors}</h2>
            <p className="text-sm pb-5">{movie.Plot}</p>
          </article>

          <button
            className="custom-button"
            onClick={() => setChosenFilmId(movie._id)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default MoviePanel;
