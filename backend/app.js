const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const movieRouter = require("./routes/movieRoutes");
const { uri } = require("./atlas_uri");
const movieModel = require("./models/movieModel");

app.use(express.json());

//app.use(cors());

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/movies", movieRouter);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

// Server listening
app.listen(9090, () => {
  console.log("server started on port 9090");
});

module.exports = app;
