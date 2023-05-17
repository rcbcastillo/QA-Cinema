import React, { useState, useEffect } from "react";
import * as api from "../api";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";

const CommentPanel = ({ movie }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleCommentSubmit = () => {
    visible = true;
  };

  useEffect(() => {
    api
      .getCommentsByMovieId(movie._id)
      .then((response) => setComments(response));
  }, []);

  const addComment = (text) => {
    console.log(text);
  };

  if (comments) {
    return (
      //  Create and return a panel for one movie
      <>
        <div className="inner-panel-img-div">
          <img src={movie.Poster} alt={`movie poster for ${movie.Title}`}></img>
        </div>
        {/* Note: '...' class doesn't seem to work in index.css 
                so it's not been extracted as custom class*/}
        <div className="col-start-2 col-end-6 ...">
          <div className="py-8 ml-6">
            <p className="text-center custom-header">{movie.Title}</p>

            <div className="comments-onclick">
              <button onClick={() => setShowComments((current) => !current)}>
                {showComments ? "Hide comments" : "See comments"}
              </button>
              {showComments ? <CommentsList comments={comments} /> : null}
            </div>

            <div className="write-comments">
              <CommentForm handleSubmit={addComment} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default CommentPanel;
