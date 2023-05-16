import React, { useContext } from "react";
import { MovieContext } from "./BookingController";

const TicketOffice = () => {
  // Chosen film includes the screen, date and time for the film
  const { chosenMovie, setChosenMovie } = useContext(MovieContext);
  const screenDate = new Date(chosenMovie.ScreenDateTime);

  // Show the screen, date and time and allow the user to select
  // number of tickets by type.
  return (
    <div className="w-full h-full">
      <div className="flex p-4 m-8">
        <h3>{chosenMovie.Title}</h3>
        <div className="">
          {/* Output the screen, time and date */}
          <h6>Screen: {chosenMovie.ScreenNum}</h6>
          <h6>Date: {screenDate.toDateString()}</h6>
          <h6>Time: {screenDate.toTimeString()}</h6>
        </div>
      </div>

      {/* TODO: Add prices */}
      <div className="flex p-4 m-8">
        <label className="">
          Adult tickets - £3
          <input className="ml-2" type="number" min="1"></input>
        </label>
        <label className="">
          Child tickets - £
          <input className="ml-2" type="number" min="1"></input>
        </label>
        <label className="">
          Concession tickets - £
          <input className="ml-2" type="number" min="1"></input>
        </label>
      </div>

      <button className="border-2 mb-11" onClick={() => setChosenMovie(null)}>
        Cancel
      </button>
    </div>
  );
};

export default TicketOffice;
