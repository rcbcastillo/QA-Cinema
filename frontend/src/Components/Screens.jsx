import React from "react";
import deluxeSeatPlan from "../assets/screenImages/deluxe-seat-plan.jpg";
import stdSeatPlan from "../assets/screenImages/standard-seat-plan.jpg";

const Screens = () => {
  return (
    <div className="outer-panel-div">
      <div className="pt-3 my-2 col-start-1 col-span-3">
        <h4 className="custom-header">Our screens</h4>
        <article className="pl-10 mb-4">
          <img
            src={stdSeatPlan}
            alt="Cineman Screen seating plan showing rows 
            AA to P in three sections"
          ></img>
          <h6>Screen 1, 2, 3</h6>
          <p className="pb-3">
            All of our general screens have the same seating layout
          </p>
        </article>
      </div>
    </div>
  );
};

export default Screens;
