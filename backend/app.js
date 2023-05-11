const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const movieRouter = require("./routes/movieRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const { uri } = require("./atlas_uri");

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
app.use("/bookings", bookingRouter);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

// Server listening
app.listen(9090, () => {
  console.log("server started on port 9090");
});

module.exports = app;
