const express = require("express");
const bookingModel = require("../models/bookingModel");
const bookingRouter = express.Router();

// TODO: read one, update one, delete one, delete many

bookingRouter.get("/readBookings", async (req, res, next) => {
  try {
    const bookingsFound = await bookingModel.find();
    res.status(200).json(bookingsFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

bookingRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookingFound = await bookingModel.findById(id);
    res.status(200).json(bookingFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

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

bookingRouter.patch("/update", async ({ body }, res, next) => {});

// /update

// /delete/id

module.exports = bookingRouter;
