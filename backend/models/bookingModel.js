const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  // booking id is auto-generated by MongoDB
  movieID: { type: String, required: true },
  movieTitle: { type: String, required: true },
  screeningDateTime: { type: Date, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  seatsBooked: { type: Number, required: true },
  // TODO: make numbers of adult/child/concession match seatsBooked
  adult: { type: Number, required: true },
  child: { type: Number, required: true },
  concession: { type: Number, required: true },
  paymentID: { type: String, required: true },
});

const bookingModel = mongoose.model("bookings", bookingSchema);
module.exports = bookingModel;
