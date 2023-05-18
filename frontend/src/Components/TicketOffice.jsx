import React, { useState, useContext, useEffect, useRef } from "react";
import { MovieContext } from "./BookingController";
import axios from "axios";

const TicketOffice = () => {
  // Chosen film includes the screen, date and time for the film
  const { chosenMovie, setChosenMovie } = useContext(MovieContext);
  const screenDate = new Date(chosenMovie.ScreenDateTime);

  const [formData, setFormData] = useState({
    adults: 0,
    children: 0,
    concessions: 0,
  });

  const [checkoutURL, setCheckoutURL] = useState("");

  const sendStripeReq = () => {
    let requestBody = {};

    // populate requestBody with key-value pairs using values from formData (useState)
    if (formData.adults > 0) {
      requestBody.adult = formData.adults;
    }
    if (formData.children > 0) {
      requestBody.child = formData.children;
    }
    if (formData.concessions > 0) {
      requestBody.concession = formData.concessions;
    }

    requestBody.movie = chosenMovie;

    console.log(requestBody);

    const url = "http://localhost:9090/create-checkout-session";
    axios
      .post(url, {
        requestBody,
      })
      .then((response) => {
        setCheckoutURL(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("useEffect executing");

    if (checkoutURL !== "") {
      window.location.href = checkoutURL;
    }
  }, [checkoutURL]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // On submit, send booking info to backend
  // For Stripe API to process
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Wait for Stripe to return checkout page URL
    // Then useEffect redirects browser to checkout page
    await sendStripeReq();
  };

  // Show the screen, date and time and allow the user to select
  // number of tickets by type.
  return (
    <div className="w-full h-full">
      <div className="flex p-4 m-4">
        <div className="">
          <article>
            <h3 className="custom-header">{chosenMovie.Title}</h3>
            {/* Output the screen, time and date */}
            <h6>Screen: {chosenMovie.ScreenNum}</h6>
            <h6>Date: {screenDate.toDateString()}</h6>
            {chosenMovie.ScreenNum === "TBC" ? (
              <></>
            ) : (
              <h6>Time: {screenDate.toLocaleTimeString()}</h6>
            )}
          </article>
        </div>
      </div>

      <form
        className="shadow-md place-items-center rounded"
        onSubmit={handleSubmit}
      >
        <div className="flex-auto w-3/5 ml-10">
          <label className="">
            Adult tickets - £3.00
            <input
              className="m-2 text-black rounded text-right hover:bg-metallic-steel"
              type="number"
              id="adults"
              name="adults"
              placeholder="0"
              value={formData.adults}
              min="0"
              onChange={handleChange}
            ></input>
          </label>
          <label className="">
            Child tickets - £2.00
            <input
              className="m-2 text-black rounded text-right hover:bg-metallic-steel"
              type="number"
              id="children"
              name="children"
              placeholder="0"
              value={formData.children}
              min="0"
              onChange={handleChange}
            ></input>
          </label>
          <label className="">
            Concession tickets - £1.00
            <input
              className="m-2 text-black rounded text-right hover:bg-metallic-steel"
              type="number"
              id="concessions"
              name="concessions"
              placeholder="0"
              value={formData.concessions}
              min="0"
              onChange={handleChange}
            ></input>
          </label>
          {/* <button className="border-2 mb-11"> */}
          <button className="sm-custom-button mb-11" type="submit">
            Proceed to payment
          </button>
          <button
            className="sm-custom-button mb-11"
            // type="reset"
            onClick={() => setChosenMovie(null)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketOffice;
