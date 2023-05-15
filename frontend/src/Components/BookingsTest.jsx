import { useState, useEffect } from "react";
import * as api from "../api";

const BookingsTest = () => {
  const [bookings, setBookings] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getBookings().then((response) => {
      setBookings(response);
    });
    api.getMovies().then((response) => {
      setMovies(response);
    });
  }, []);

  if ((bookings, movies)) {
    return (
      <>
        <h1>Bookings test</h1>
        {bookings.map((booking, index) => (
          <ul key={index}>
            <p>ID: {booking._id}</p>
            <p>movieID: {booking.movieID}</p>
            <p>movieTitle: {booking.movieTitle}</p>
            <p>screeningDateTime: {booking.screeningDateTime}</p>
            <p>paymentID: {booking.paymentID}</p>
          </ul>
        ))}
        <h1>Movies title</h1>
        {movies.map((movie, index) => (
          <ul key={index}>
            <p>Title: {movie.Title}</p>
          </ul>
        ))}
      </>
    );
  }
};

export default BookingsTest;
