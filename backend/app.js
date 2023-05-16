const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require("./routes/movieRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const { stripeKey } = require("./resources/stripe_api_key");
const stripe = require("stripe")(stripeKey);
const {
  adultTicket,
  childTicket,
  concessionTicket,
} = require("./resources/stripe_product_ids");

app.use(express.json());

app.use(cors());

app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/bookings", bookingRouter);
app.use(express.static("public"));

// Stripe API request - checkout page
// TODO: create router for Stripe API requests?
app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: adultTicket,
        quantity: 3,
      },
      {
        price: childTicket,
        quantity: 2,
      },
      {
        price: concessionTicket,
        quantity: 1,
      },
    ],
    mode: "payment",
    // TODO: make success page on frontend to redirect to
    success_url: `http://localhost:9090/success.html?success=true`,
    cancel_url: `http://localhost:3000/`,
  });
  res.send(session.url);
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

const server = app.listen(9090, () =>
  console.log("running and listening on port 9090")
);
module.exports = server;
