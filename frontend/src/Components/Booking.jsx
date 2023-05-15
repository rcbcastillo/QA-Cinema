import { useState, useEffect } from "react";
import axios from "axios";

// import "./App.css";

const Booking = () => {
  // TEST FUNCTION ONLY - to be replaced
  const [movies, setMovies] = useState([]);

  const testGetMovies = (e) => {
    if (e) {
      e.preventDefault();
    }

    const url = "http://localhost:9090/movies/readMovies";
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setMovies(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     testGetMovies();
  //   }, 1000);
  // }, []);

  return (
    <>
      <form onSubmit={testGetMovies}>
        <input type="text" />
        <button color="success" type="submit" style={{ width: "100%" }}>
          GO
        </button>
      </form>

      <p>{movies.map((movie) => movie.Title)}</p>
    </>
  );
};

export default Booking;
