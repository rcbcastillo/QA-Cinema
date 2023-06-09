import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "./BookingController";
import axios from "axios";

const TicketOffice = () => {
  // Chosen film includes the screen, date and time for the film
  const { chosenMovie, setChosenMovie } = useContext(MovieContext);
  const screenDate = new Date(chosenMovie.ScreenDateTime);

  //hardcoded data for now
  //localStorage.setItem("firstname", {firstname})
  // localStorage.setItem("firstname", "amalik");
  // localStorage.setItem("lstname", "malik");

  // const firstname = localStorage.getItem("firstname");
  // const lastname = localStorage.getItem("lastname");

  const [formData, setFormData] = useState({
    adults: 0,
    children: 0,
    concessions: 0,
    firstName: "",
    lastName: "",
  });

  const [checkoutURL, setCheckoutURL] = useState("");
  const [totalCost, setTotalCost] = useState(0.0);

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
    requestBody.firstName = formData.firstName;
    requestBody.lastName = formData.lastName;

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
    setTotalCost(
      formData.adults * 3 + formData.children * 2 + formData.concessions * 1
    );
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
    <div className="flex-auto ml-20">
      <h3 className="custom-header">{chosenMovie.Title}</h3>
      <div className="pl-6 pb-3">
        <section>
          {/* Output the screen, time and date */}
          <Link to="/screens">
            <h6 className="font-semibold underline py-2">
              Screen: {chosenMovie.ScreenNum}
            </h6>
          </Link>
          <h6>Date: {screenDate.toDateString()}</h6>
          {chosenMovie.ScreenNum === "TBC" ? (
            <></>
          ) : (
            <h6>
              Time: {screenDate.getUTCHours()}:
              {screenDate.getMinutes().toString().padStart(2, "0")}
            </h6>
          )}
        </section>
      </div>

      <form className="shadow-md rounded" onSubmit={handleSubmit}>
        <div className="flex-auto w-3/5 ml-10 place-items-end">
          <label>
            First name:
            <input
              className="m-2 text-black rounded text-left pl-2 hover:bg-metallic-steel"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Surname:
            <input
              className="m-2 text-black rounded text-left pl-2 hover:bg-metallic-steel"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="lastName"
              value={formData.lastName}
              onChange={handleChange}
            ></input>
          </label>
          <label className="">
            <span className="inline-block">Adult tickets - £3.00</span>
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
          <div className="border-2 my-2 p-2 text-left w-3/5 text-pearl-aqua">
            <label>
              Total: £<label className="px-2">{totalCost.toFixed(2)}</label>
            </label>
          </div>
          <div className="flex m-2">
            {/* <button className="border-2 mb-11"> */}
            <button className="sm-custom-button m-2" type="submit">
              Proceed to payment
            </button>
            <button
              className="sm-custom-button m-2"
              // type="reset"
              onClick={() => setChosenMovie(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketOffice;
