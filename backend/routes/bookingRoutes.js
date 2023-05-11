const express = require("express");
const bookingModel = require("../models/bookingModel");
const bookingRouter = express.Router();

// TODO: read one, update one, delete one, delete many

bookingRouter.get("/", (req, res, next) => {
  res.send("Bookings Page, in progress..");
});

bookingRouter.get("/readBookings", async (req, res, next) => {
  try {
    const bookingsFound = await bookingModel.find();
    res.json(bookingsFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

// for testing purposes to be remove in the future
bookingRouter.post("/create", async ({ body }, res, next) => {
  try {
    const createdBooking = await bookingModel.create(body);
    res.status(201).json(createdBooking);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

module.exports = bookingRouter;
