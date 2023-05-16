const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require("./routes/movieRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const { stripeKey } = require("./resources/stripe_api_key");
const stripe = require("stripe")(stripeKey);

app.use(express.json());

app.use(cors());

app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/bookings", bookingRouter);

// Stripe API
// TODO: create router for Stripe API requests?

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

const server = app.listen(9090, () =>
  console.log("running and listening on port 9090")
);
module.exports = server;
