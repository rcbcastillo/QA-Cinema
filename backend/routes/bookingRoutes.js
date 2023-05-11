const express = require("express");
const bookingModel = require("../models/bookingModel");
const bookingRouter = express.Router();

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

bookingRouter.patch("/update/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBooking = await bookingModel.findByIdAndUpdate(id, req.query, {
      // return the booking *after* it has been updated
      returnDocument: "after",
    });
    res.status(201).json(updatedBooking);
  } catch (err) {
    return next({
      status: 404,
      msg: "warning: booking not updated + " + err.msg,
    });
  }
});

bookingRouter.delete("/delete/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await bookingModel.findByIdAndDelete(id);
    res.status(200).json(id);
  } catch (err) {
    return next({
      status: 404,
      msg: "warning: booking not deleted + " + err.msg,
    });
  }
});

module.exports = bookingRouter;
