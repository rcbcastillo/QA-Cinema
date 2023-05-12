const express = require("express");
const movieModel = require("../models/movieModel");
const movieRouter = express.Router();

// TODO: remaining CRUD requests

movieRouter.get("/readMovies", async (req, res, next) => {
  try {
    const moviesFound = await movieModel.find();
    res.json(moviesFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

//TODO: decide if this /create request is needed
movieRouter.post("/create", async ({ body }, res, next) => {
  try {
    const createdMovie = await movieModel.create(body);
    res.status(201).json(createdMovie);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

module.exports = movieRouter;
