import React, { useState, useContext } from "react";
import { FilmContext } from "./BookingController";

const TicketOffice = () => {
  // TODO - use the chosenFilmId to fetch screening data from DB
  const { chosenFilmId, setChosenFilmId } = useContext(FilmContext);
  // TODO: Pass this in from BookingController as context
  const [chosenScreenId, setChosenScreenId] = useState(null);
  // For testing
  //console.log("Chosen film ID = " + chosenFilmId);

  // TODO: Get data from DB
  const jsonDataArray = [
    {
      id: "3434",
      "screen-num": 1,
      date: "12-06-2023",
      time: "19:30",
    },
    {
      id: "4456",
      "screen-num": 2,
      date: "13-06-2023",
      time: "13:00",
    },
  ];


  // TODO: Get the screenings from the DB based on filmId
  return (
    <div className="w-full h-full">
      {/* TODO: Abstract this out to a component 
        map the array and instantiate one per array entry*/}
      <div className="flex p-4 m-8">
        <h3>Movie ID - {chosenFilmId}</h3>
        <div className="">
          <ul>
            {jsonDataArray.map((jsonObj, index) => (
              <li key={index}>
                {/* <label className="p-3, m-5"> */}
                <label className="custom-label m-2">
                  {jsonObj.date} at {jsonObj.time}
                  <input
                    key={jsonObj.id} //TODO set this to be screeningId
                    type="radio"
                    onClick={() => setChosenScreenId(jsonObj.id)}
                    className=""
                  ></input>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

    {/* TODO: enable this once screening chosen? and add prices */}
    <div className="flex p-4 m-8">
        <label className="">Adult tickets 
            <input className="ml-2"
            type="number"
            min="1"
            ></input>
        </label>
        <label className="">Child tickets 
            <input className="ml-2"
            type="number"
            min="1"
            ></input>
        </label>
        <label className="">Concession tickets 
            <input className="ml-2"
            type="number"
            min="1"
            ></input>
        </label>
    </div>

      {/* TODO setChosenScreenId to null too?? */}
      <button className="border-2 mb-11" onClick={() => setChosenFilmId(null)}>
        Cancel
      </button>
    </div>
  );
};

export default TicketOffice;
