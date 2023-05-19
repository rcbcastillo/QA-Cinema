const express = require("express");
const commentRouter = express.Router();
const commentModel = require("../models/commentModel");

commentRouter.post("/create", async (req, res, next) => {
  try {
    const createdComment = await commentModel.create(req.body);
    console.log(createdComment);
    res.status(201).json(createdComment);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

commentRouter.get("/readComments", async (req, res, next) => {
  try {
    const commentsFound = await commentModel.find();
    res.status(200).json(commentsFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

commentRouter.get("/readCommentsByMovieId/:movieId", async (req, res, next) => {
  try {
    const commentsFound = await commentModel.find({
      movieId: req.params.movieId,
    });
    res.status(200).json(commentsFound);
  } catch (err) {
    return next({
      status: 500,
      msg: err.message,
    });
  }
});

commentRouter.get("/:commentId", async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const readCommentById = await commentModel.findById(commentId);
    res.status(200).json(readCommentById);
  } catch (err) {
    return next({
      status: 500,
      message: err.message,
    });
  }
});

commentRouter.patch("/update/:commentId", async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const updateComment = await commentModel.findByIdAndUpdate(
      commentId,
      req.query,
      { returnDocument: "after" }
    );
    res.status(201).json(updateComment);
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
});

commentRouter.delete("/delete/:commentId", async (req, res, next) => {
  try {
    const { commentId } = req.params;
    await commentModel.findByIdAndDelete(commentId);
    res.status(200).json(commentId);
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
});

module.exports = commentRouter;
