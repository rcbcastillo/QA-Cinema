const chai = require("chai");
const { describe, before, it, after } = require("mocha");
const { uriTest } = require("../atlas_uri");
const movie = require("./data/movieDataTest.json");
const movieModel = require("../models/movieModel");

// Chai HTTP plugin
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const mongoose = require("mongoose");

let server = require("../app");

describe("Tests for HTTP requests: MOVIES", function () {
  this.timeout(5_000);
  let testMovie;
  beforeEach(async () => {
    try {
      await mongoose.connect(uriTest);
      await movieModel.deleteMany({});
      testMovie = await movieModel.create(movie);
      testMovie = JSON.parse(JSON.stringify(testMovie));
    } catch (err) {
      console.error(err);
    }
  });

  it("/movies/create should create a movie", (done) => {
    chai
      .request(server)
      .post("/movies/create")
      .send(movie)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).has.property("_id");
        chai.expect(res.body.Title).to.equal(movie.Title);
        done();
      });
  });

  it("/movies/readMovies should get all movies", (done) => {
    chai
      .request(server)
      .get("/movies/readMovies")
      .end((err, res) => {
        const readedMovie = res.body[0];
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        chai.expect(readedMovie).has.property("_id");
        chai.expect(readedMovie).has.property("Title");
        chai.expect(readedMovie).has.property("Year");
        chai.expect(readedMovie).has.property("Rated");
        chai.expect(readedMovie).has.property("Released");
        chai.expect(readedMovie).has.property("Runtime");
        chai.expect(readedMovie).has.property("Genre");
        chai.expect(readedMovie).has.property("Director");
        chai.expect(readedMovie).has.property("Writer");
        chai.expect(readedMovie).has.property("Actors");
        chai.expect(readedMovie).has.property("Plot");
        chai.expect(readedMovie).has.property("Rated");
        chai.expect(readedMovie).has.property("Language");
        chai.expect(readedMovie).has.property("Country");
        chai.expect(readedMovie).has.property("Awards");
        chai.expect(readedMovie).has.property("Poster");
        chai.expect(readedMovie).has.property("Ratings");
        chai.expect(readedMovie).has.property("Metascore");
        chai.expect(readedMovie).has.property("imdbRating");
        chai.expect(readedMovie).has.property("imdbVotes");
        chai.expect(readedMovie).has.property("imdbID");
        chai.expect(readedMovie).has.property("Type");
        chai.expect(readedMovie).has.property("DVD");
        chai.expect(readedMovie).has.property("BoxOffice");
        chai.expect(readedMovie).has.property("Production");
        chai.expect(readedMovie).has.property("Website");
        chai.expect(readedMovie).has.property("Response");
        chai.expect(readedMovie).has.property("isShowing");
        chai
          .expect(readedMovie.Title)
          .equal("TEST!The Hobbit: An Unexpected Journey");
        done();
      });
  });

  after(async () => {
    await mongoose.disconnect();
    server.close();
  });
});
