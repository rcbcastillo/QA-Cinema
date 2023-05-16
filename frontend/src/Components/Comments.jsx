import { useState, useEffect } from "react";
import * as api from "../api";
import CommentPanel from "./CommentPanel";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getComments().then((comments) => setComments(comments));
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  if (comments) {
    return (
      <>
        <div className="px-4 mt-2">
          <h1 className="custom-header">Currently Showing</h1>
          <div className="outer-panel-div">
            {/* Movie panels for currently showing movies go here */}
            {/* Set the button to go to the correct place book now/pre-book */}
            {movies
              .filter((movie) => movie.isShowing === "True")
              .map((movie, index) => (
                <CommentPanel
                  key={index}
                  movie={{ ...movie }}
                  buttonText={"Book Now!"}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
};

export default Comments;
