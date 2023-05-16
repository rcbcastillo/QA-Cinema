import React, { useContext, useState, useEffect } from "react";
import * as api from "../api";
import { FilmContext } from "./BookingController";
import PrintTableRows from "./PrintTableRows";

const CommentPanel = ({ movie }) => {
  const [comments, setComments] = useState([]);
  //const { chosenFilmId, setChosenFilmId } = useContext(FilmContext);

  useEffect(() => {
    api.getComments().then((comments) => setComments(comments));
  }, []);

  return (
    //  Create and return a panel for one movie
    <>
      {/* Transform the image div to scale up poster on hover */}
      <div className="inner-panel-img-div">
        <img src={movie.Poster} alt={`movie poster for ${movie.Title}`}></img>
      </div>
      {/* Note: '...' class doesn't seem to work in index.css 
                so it's not been extracted as custom class*/}
      <div className="col-start-2 col-end-6 ...">
        <div className="py-8 ml-6">
          <table>
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <PrintTableRows rowData={{ ...comment }} />
              ))}
            </tbody>
          </table>

          <button
            className="custom-button"
            onClick={() => setChosenFilmId(movie._id)}
          >
            Post comment
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentPanel;
