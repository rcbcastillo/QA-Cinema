import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const sessionId = queryParameters.get("session_id");
  const [bookingRes, setBookingRes] = useState(null);
  const [bookingDate, setBookingDate] = useState(new Date());

  const uri = `http://localhost:9090/bookings/paymentID/${sessionId}`;

  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        setBookingRes(response.data[0]);
        setBookingDate(new Date(response.data[0].screeningDateTime.toString()));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [uri]);

  if (bookingRes) {
    return (
      <>
        <div className="flex justify-center">
          <ul>
            <li className="py-2">
              <h6 className="">Thank you for your custom, see you soon!</h6>
            </li>
            <li>
              <h6 className="pt-2">Here are the details of your booking</h6>
            </li>
          </ul>
        </div>
        <div className="flex justify-center pb-4 mb-5">
          <div>
            <h3 className="custom-header">{bookingRes.movieTitle}</h3>
            <table>
              <tbody>
                <tr className="p-2">
                  <th className="custom-th">Booking Ref</th>
                  <td className="custom-td">{sessionId}</td>
                </tr>
                <tr className="p-2">
                  <th className="custom-th">Screening Date</th>
                  <td className="custom-td">{bookingDate.toDateString()}</td>
                </tr>
                {/* Construct time from hours and mins as the timeString methods are
              either too verbose, or add +1 hour for British Summer time */}
                <tr className="p-2">
                  <th className="custom-th">Screening Time</th>
                  <td className="custom-td">
                    {bookingDate.getUTCHours()}:
                    {bookingDate.getMinutes().toString().padStart(2, "0")}
                  </td>
                </tr>
                <tr className="p-2">
                  <th className="custom-th">Seats Booked</th>
                  <td className="custom-td">{bookingRes.seatsBooked}</td>
                </tr>
                <tr className="p-2">
                  <th className="custom-th">Adult tickets</th>
                  <td className="custom-td">{bookingRes.adult}</td>
                </tr>
                <tr className="p-2">
                  <th className="custom-th">Child tickets</th>
                  <td className="custom-td">{bookingRes.child}</td>
                </tr>
                <tr className="p-2">
                  <th className="custom-th">Concession tickets</th>
                  <td className="custom-td">{bookingRes.concession}</td>
                </tr>
                <tr className="p-2">
                  <th className="custom-th">Total Cost</th>
                  <td className="custom-td">{bookingRes.totalCost}</td>
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
