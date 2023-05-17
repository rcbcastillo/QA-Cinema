import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const sessionId = "6464e0178169730f0f511776";
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
  }, [bookingRes]);

  return (
    <>
      <h1 className="custom-header">You have booked!</h1>
      <h3>Film: {bookingRes.movieTitle}</h3>
      <div className="flex align-middle pb-4 mb-5">
        <p>Session ID: {sessionId}</p>
      </div>
    </>
  );
};

export default PaymentSuccess;
