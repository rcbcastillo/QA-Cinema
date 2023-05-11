const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const movieRouter = require("./routes/movieRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");
const movieModel = require("./models/movieModel");
const userModel = require("./models/userModel");
const commentModel = require("./models/commentModel");

app.use(express.json());

//app.use(cors());

app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

module.exports = app;
