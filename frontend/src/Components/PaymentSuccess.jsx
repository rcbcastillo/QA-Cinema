import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const sessionId = "6464e6236912fcb920062b8a";
  // const sessionId = queryParameters.get("session_id");
  const [bookingRes, setBookingRes] = useState(null);

  const uri = `http://localhost:9090/bookings/${sessionId}`;
  console.log(uri);

  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        setBookingRes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [uri]);

  if (bookingRes) {
    return (
      <>
        <div>
          <h1 className="custom-header">You are going to the cinema!</h1>
          <strong>Session ID: {sessionId}</strong>
          <div className="flex justify-center pb-4 mb-5">
          <h3>Film: {bookingRes.movieTitle}</h3>
          <table>
            <thead>
              <tr>
                {/* <td>Sreening Date/Time</td> */}
                <td>Seats Booked</td>
                <td>Adults</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{Date(bookingRes.screeningDateTime.toString()).toDateString()}</td> */}
                <td>{bookingRes.seatsBooked}</td>
                <td>{bookingRes.adult}</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </>
    );
  }
};

export default PaymentSuccess;
