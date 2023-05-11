const express = require("express");
const userModel = require("../models/userModel");
const userRouter = express.Router();

userRouter.get("/readUsers", async (req, res, next) => {
  try {
    const usersFound = await userModel.find();
    res.status(200).json(usersFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

userRouter.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const readedUserById = await userModel.findById(userId);
    res.status(200).json(readedUserById);
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
