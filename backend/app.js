const express = require("express");
const app = express();
const cors = require("cors");
const movieRouter = require("./routes/movieRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const bookingModel = require("./models/bookingModel");
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
app.post("/create-checkout-session", async ({ body }, res) => {
  let ticketsInfo = body.requestBody;

  let ticketsQty = 0;
  let adultQty = 0;
  let childQty = 0;
  let concessionQty = 0;
  let stripeLineItems = [];

  for (let key in ticketsInfo) {
    let obj = {};
    if (key === "adult") {
      obj.price = adultTicket;
      obj.quantity = parseInt(ticketsInfo[key]);
      ticketsQty += obj.quantity;
      adultQty += obj.quantity;
    } else if (key === "child") {
      obj.price = childTicket;
      obj.quantity = parseInt(ticketsInfo[key]);
      ticketsQty += obj.quantity;
      childQty += obj.quantity;
    } else if (key === "concession") {
      obj.price = concessionTicket;
      obj.quantity = parseInt(ticketsInfo[key]);
      ticketsQty += obj.quantity;
      concessionQty += obj.quantity;
    }
    stripeLineItems.push(obj);
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeLineItems,
    mode: "payment",
    success_url:
      "http://localhost:3000/payment-success?session_id={CHECKOUT_SESSION_ID}",
    // TODO: dedicated cancellation page
    cancel_url: "http://localhost:3000/films",
  });

  // TODO: make this the last line when Stripe API tests have been fixed
  res.send(session.url);

  let booking = {
    movieID: ticketsInfo.movie._id,
    movieTitle: ticketsInfo.movie.Title,
    screeningNum: ticketsInfo.movie.ScreenNum,
    screeningDateTime: ticketsInfo.movie.ScreenDateTime,
    firstName: "Customer First Name",
    lastName: "Customer Last Name",
    seatsBooked: ticketsQty,
    adult: adultQty,
    child: childQty,
    concession: concessionQty,
    // TODO: Ensure total cost works with decimals
    totalCost: `£${session.amount_total / 100}`,
    paymentID: session.id,
  };
  bookingModel.create(booking);

  return;
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

const server = app.listen(9090, () =>
  console.log("running and listening on port 9090")
);
module.exports = server;
