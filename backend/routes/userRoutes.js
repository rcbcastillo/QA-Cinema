const express = require("express");
const userModel = require("../models/userModel");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send("User Page, in progress..");
});

userRouter.get("/readUsers", async (req, res, next) => {
  try {
    const usersFound = await userModel.find();
    res.json(usersFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

// for testing purposes to be remove in the future
userRouter.post("/create", async ({ body }, res, next) => {
  try {
    const createdUser = await userModel.create(body);
    res.status(201).json(createdUser);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

module.exports = userRouter;
