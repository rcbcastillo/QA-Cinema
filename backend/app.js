const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require("./routes/movieRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const commentModel = require("./models/commentModel");

app.use(express.json());

//app.use(cors());

app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/bookings", bookingRouter);
app.use("/comments", commentRouter);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

module.exports = app;
