import * as api from "../api";
import CommentPanel from "./CommentPanel";
import { useEffect, useState } from "react";

const DiscussionBoard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);
  /* 
  Page appears in the primary navigation
  Users can comment on movie related topics
  Users can rate films that they have seen
  Users posts should be moderated to ensure that inappropriate content is not displayed
  */
  if (movies) {
    return (
      <>
        <div className="px-4 mt-2">
          <h1 className="custom-header">Discussion Board</h1>
          <div className="outer-panel-div">
            {/* Movie panels for currently showing movies go here */}
            {/* Set the button to go to the correct place book now/pre-book */}
            {movies
              .filter((movie) => movie.isShowing === "True")
              .map((movie, index) => (
                <CommentPanel
                  key={index}
                  movie={{ ...movie }}
                  buttonText={"Post comment"}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
};

export default DiscussionBoard;
