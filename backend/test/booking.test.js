const chai = require("chai");
const { describe, before, it, after, beforeEach } = require("mocha");
const { uriTest } = require("../atlas_uri");
const booking = require("./data/bookingDataTest.json");
const bookingModel = require("../models/bookingModel");

// Chai HTTP plugin
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const mongoose = require("mongoose");

let server = require("../app");

describe("Tests for HTTP requests: BOOKINGS", function () {
  this.timeout(5_000);
  let testBooking;
  beforeEach(async () => {
    try {
      await mongoose.connect(uriTest);
      await bookingModel.deleteMany({});
      testBooking = await bookingModel.create(booking);
      testBooking = JSON.parse(JSON.stringify(testBooking));
    } catch (err) {
      console.error(err);
    }
  });

  it("/bookings/create should create a booking", (done) => {
    chai
      .request(server)
      .post("/bookings/create")
      .send(booking)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).has.property("_id");
        chai.expect(res.body.movieTitle).to.equal(booking.movieTitle);
        done();
      });
  });

  it("/bookings/readBookings should get all bookings", (done) => {
    chai
      .request(server)
      .get("/bookings/readBookings")
      .end((err, res) => {
        const booking = res.body[0];
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(booking).has.property("_id");
        chai.expect(booking).has.property("movieID");
        chai.expect(booking).has.property("movieTitle");
        chai.expect(booking).has.property("screeningDateTime");
        chai.expect(booking).has.property("firstName");
        chai.expect(booking).has.property("lastName");
        chai.expect(booking).has.property("seatsBooked");
        chai.expect(booking).has.property("adult");
        chai.expect(booking).has.property("concession");
        chai.expect(booking).has.property("paymentID");
        chai.expect(booking.movieTitle).equal("test booked movie title");
        done();
      });
  });

  it("/bookings/id should get one booking", (done) => {
    bookingModel.findOne({}).then((testBooking) => {
      chai
        .request(server)
        .get("/bookings/" + testBooking._id)
        .end((err, res) => {
          const returnedBooking = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(returnedBooking._id).to.equal(testBooking._id.toString());
          done();
        });
    });
  });

  it("/bookings/update/id should update one booking", (done) => {
    bookingModel.findOne({}).then((testBooking) => {
      chai
        .request(server)
        .patch("/bookings/update/" + testBooking._id + "?movieTitle=CHANGED")
        .end((err, res) => {
          const returnedBooking = res.body;
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(201);
          chai.expect(returnedBooking._id).to.equal(testBooking._id.toString());
          chai.expect(returnedBooking.movieTitle).to.equal("CHANGED");
          done();
        });
    });
  });

  it("/bookings/delete/id should delete one booking", (done) => {
    bookingModel.findOne({}).then((testBooking) => {
      chai
        .request(server)
        .delete("/bookings/delete/" + testBooking._id)
        .end((err, res) => {
          chai.expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.equal(testBooking._id.toString());
          done();
        });
    });
  });

  after(async () => {
    await mongoose.disconnect();
    server.close();
  });
});
