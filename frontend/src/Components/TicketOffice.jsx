import React, { useState, useContext } from "react";
import { MovieContext } from "./BookingController";

const TicketOffice = () => {
  // Chosen film includes the screen, date and time for the film
  const { chosenMovie, setChosenMovie } = useContext(MovieContext);
  const screenDate = new Date(chosenMovie.ScreenDateTime);

  const [formData, setFormData] = useState({
    adults: 0,
    children: 0,
    concessions: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { adults, children, concessions } = formData;
    console.log(`Adult tickets: ${adults} Child tickets: ${children} Concession Tickets: ${concessions}`);
  };

  // Show the screen, date and time and allow the user to select
  // number of tickets by type.
  return (
    <div className="w-full h-full">
      <div className="flex p-4 m-8">
        <h3 className="custom-header">{chosenMovie.Title}</h3>
        <div className="">
          <article>
            {/* Output the screen, time and date */}
            <h6>Screen: {chosenMovie.ScreenNum}</h6>
            <h6>Date: {screenDate.toDateString()}</h6>
            <h6>Time: {screenDate.toTimeString()}</h6>
          </article>
        </div>
      </div>

      <form
        className="shadow-md place-items-center rounded"
        onSubmit={handleSubmit}
      >
        <div className="flex p-2">
          <label className="">
            Adult tickets - £3.00
            <input
              className="ml-2 text-black rounded"
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
              className="ml-2 text-black rounded"
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
              className="ml-2t text-black rounded"
              type="number"
              id="concessions"
              name="concessions"
              placeholder="0"
              value={formData.concessions}
              min="0"
              onChange={handleChange}
            ></input>
          </label>
        </div>
        {/* <button className="border-2 mb-11"> */}
        <button className="sm-custom-button mb-11" type="submit">
          Proceed to payment
        </button>
        <button
          className="sm-custom-button mb-11"
          // type="reset"
          onClick={() => setChosenMovie(null)}>
            Cancel
        </button>
      </form>
    </div>
  );
};

export default TicketOffice;
