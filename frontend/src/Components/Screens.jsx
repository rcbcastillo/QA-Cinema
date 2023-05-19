import React from "react";
import { Link } from "react-router-dom";
import deluxeSeatPlan from "../assets/screenImages/deluxe-seat-plan.jpg";
import stdSeatPlan from "../assets/screenImages/standard-seat-plan.jpg";
import seatingImg from "../assets/screenImages/screen-seating.jpg";
import deluxeSeatingImg from "../assets/screenImages/new-luxury-seating.jpg";

const Screens = () => {
  return (
    <>
      <div className="outer-panel-div">
        <div className="pt-3 my-2 col-start-1 col-span-3">
          <h4 className="custom-header">Our Screens</h4>
          <article className="pl-10 mb-4">
            <img
              width="450"
              height="500"
              src={seatingImg}
              alt="Cinema seating red velvet theatre chairs in an old cinema"
            ></img>
            <h6 className="text-sm">Comfortable Seating</h6>
            <p className="py-3">
              Classic 1920s theatre seating in screens 1, 2, and 3.
            </p>
          </article>
        </div>
      </div>
      <div className="my-2 col-start-1 col-span-3">
        <h4 className="custom-header">Screen Seating plan</h4>
        <article className="pl-10 mb-4">
          <img
            width="700"
            height="700"
            src={stdSeatPlan}
            alt="Cinema Screen seating plan showing rows 
            AA to P in three sections"
          ></img>
          <h6 className="text-sm">Screen 1, 2, 3</h6>
          <p className="py-3">
            All of our general screens have the same seating layout
          </p>
        </article>
      </div>
      <h4 className="custom-header">
        Coming very soon - VIP 'Director's Box' screen
      </h4>

      <div className="outer-panel-div">
        <div className="pt-3 my-2 col-start-1 col-span-3">
          <article className="pl-10 mb-4">
            <img
              src={deluxeSeatingImg}
              alt="modern wide reclining luxury armchair seats"
            ></img>
            <h6 className="text-sm">Director's Box VIP screen</h6>
            <p className="py-3">
              From July 2023 you and your friends/family will be able to relax
              and enjoy your favourite movie in our exclusive new 'Director's
              Box' screen, complete with access to your own private bar. <Link to="contact-form" className=""> Contact
              us </Link> if you would like to discuss advance booking.
            </p>
          </article>
        </div>
      </div>
      <div className="outer-panel-div">
        <div className="pt-3 my-2 col-start-1 col-span-3">
          <h4 className="custom-header">Deluxe 'Directors Box' Seating</h4>
          <article className="pl-10 mb-4">
            <img
              src={deluxeSeatPlan}
              alt="seating plan of 5 rows of 6 armchairs, screen at the front and bar at the back"
            ></img>
            <h6 className="text-sm">VIP Seating</h6>
            <p className="py-3">Luxury and exclusive seating for 30 people, available for booking from July 2023</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default Screens;
