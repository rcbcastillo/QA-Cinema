import React from "react";
import cinema_img from "../assets/cinema_image.jpg";
import nellsLogo from "../assets/placeImages/nells_logo.jpg";
import nellsPlace from "../assets/placeImages/nells_place.jpg";
import crystalMaze from "../assets/placeImages/crystal_maze.jpg";

const Location = () => {
  return (
    <>
      <div className="outer-panel-div">
        <div className="pt-3 my-2 col-start-1 col-span-3">
          <h4 className="custom-header">Visiting QACinema</h4>
          <article className="pl-10 mb-4">
            <p className="pb-3">
              The QA Cinema is conveniently located in the heart of Manchester,
              in a beautiful old 1920s art-deco style building on Portland
              Street, close to public transport links and lots of restaurants
              and attractions.
            </p>
            <h4>Our Address:</h4>
            <ul className="my-2 pl-2">
              <li>Global Logic</li>
              <li>Manchester One,</li>
              <li>53 Portland St,</li>
              <li>Greater Manchester,</li>
              <li>M1 3LD</li>
            </ul>
          </article>
        </div>
        <div className="col-start-4 col-end-8 ... my-4">
          <img
            src={cinema_img}
            width="300"
            height="400"
            alt="QA Cinema - 1920s art deco building from the front"
          ></img>
        </div>
      </div>
      {/* <div className="col-start-2 col-end-6 ..."> */}
      <div className="outer-panel-div">
        <div className="pt-3 col-start-1 col-span-2">
          <iframe
            className="border-4 px-5 pb-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.4580070363163!2d-2.241031360973307!3d53.47814586497144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c0075e17d5%3A0x85d429dd2470475e!2sManchester%20One!5e0!3m2!1sen!2suk!4v1684315130690!5m2!1sen!2suk"
            width="450"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="location-map"
          ></iframe>
        </div>
        <div className="col-start-4 col-end-7 ...">
          <div className="">
            <h4 className="text-2xl py-4">How to get here</h4>
            <article className="mb-4">
              <h4>By Metrolink:</h4>
              <ul className="mt-2 pl-2 list-disc">
                <li>Depart the tram at Piccadilly Gardens</li>
                <li>Depart and head towards Parker Street</li>
                <li>Turn left onto Parker Street</li>
                <li>Turn right onto Portland Street</li>
                <li>Arrive at Portland Street</li>
              </ul>
            </article>
            <article className="mb-4">
              <h4>By Bus:</h4>
              <ul className="mt-2 pl-2 list-disc">
                <li>Chinatown (Stop CU) is at the front of the building</li>
                <li>
                  Please visit{" "}
                  <a
                    href="https://tfgm.com/public-transport/bus"
                    className="underline"
                  >
                    here
                  </a>{" "}
                  for details of buses
                </li>
              </ul>
            </article>
            <article className="mb-4">
              <h4>By Train:</h4>
              <ul className="mt-2 pl-2 list-disc">
                <li>Oxford Road station</li>
                <li>Walk north-east towards Station Approach</li>
                <li>Continue onto station approach</li>
                <li>Turn right onto Whitworth St W/B6469</li>
                <li>Turn left onto Oxford St/A34</li>
                <li>Turn right onto Portland St/A5103</li>
                <li>The cinema will be on your right</li>
              </ul>
            </article>
            <article className="mb-4">
              <h4 className="pb-2">By Car:</h4>
              <p>
                Parking spaces are located at the back of the building and are
                free for cinema ticket holders.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="outer-panel-div">
        <h4 className="custom-header">Places to go...</h4>
        <div className="pt-3 my-2 col-start-1 col-span-3">
          <img
            src={nellsLogo}
            alt="Logo for Nell's pizza"
            width="300"
            height="50"
          ></img>

          <h4 className="custom-header">Nell's - New York Pizza</h4>
          <article className="pl-10 mb-4">
            <p className="pb-3">
              A convienient 5 minutes walk away from the QA Cinema is Nell's, a
              New York style bar and pizza place. Great for group outings and
              larger parties.
            </p>
            <p className="mb-4">
              <strong>
                Show 2 QA Cinema tickets for a free ice cream with every 2
                pizzas!!
              </strong>
            </p>
            <h4>Contact - 0161 806 0516</h4>
            <ul className="my-2 pl-2">
              <li>Nell’s New York Pizza & Bar,</li>
              <li>20 Minshull St,</li>
              <li>Kampus,</li>
              <li>Manchester</li>
              <li>M1 3EF</li>
              <a
                className="underline"
                href="https://www.nellspizza.co.uk/nells-kampus/"
              >
                Nell's website
              </a>
            </ul>
          </article>
        </div>
        <div className="col-start-4 col-end-8 ... m-4">
          <img
            src={nellsPlace}
            alt="Front of Nells New York Pizza and Bar"
            width="300"
            height="400"
          ></img>
        </div>
      </div>
      <div className="outer-panel-div">
        <div className="pt-3 my-2 col-start-1 col-span-3">
          <h4 className="custom-header">The Crystal Maze Experience</h4>
          <article className="pl-10 mb-4">
            <p className="pb-3">
              Just 16 minutes by foot or 7 minutes on the free number 1 bus, is
              the exciting Crystal Maze experience. An interactive team game set
              in 4 adventure zones, just like the popular 1990s TV show.
            </p>
            <p className="mb-4">
              <strong>
                Show 4 QA Cinema tickets to get one of your party in for free!
              </strong>
            </p>
            <ul className="my-2 pl-2">
              <li>The Crystal Maze Experience</li>
              <li>St Johns,</li>
              <li>Lower Byrom Street,</li>
              <li>Manchester</li>
              <li>M3 4FP</li>
              <a
                className="underline"
                href="https://the-crystal-maze.com/manchester/"
              >
                Crystal Maze website
              </a>
            </ul>
          </article>
        </div>
        <div className="col-start-4 col-end-8 ... m-4">
          <img
            src={crystalMaze}
            alt="Front of the Crystal Maze experience unit"
            width="300"
            height="400"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Location;
