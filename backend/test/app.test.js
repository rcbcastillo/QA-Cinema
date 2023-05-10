const chai = require("chai");
const { describe, beforeEach, it } = require("mocha");

// Chai HTTP plugin
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const mongoose = require("mongoose");
const server = require("../app");
// const movieModel = require("../models/movieModel");

describe("Tests for the app's HTTP requests", () => {
  it("/create should create a movie", (done) => {
    const movie = {
      Title: "TEST!The Hobbit: An Unexpected Journey",
      Year: 2012,
      Rated: "PG-13",
      Released: "2023-05-10",
      Runtime: "169 min",
      Genre: "Adventure, Fantasy",
      Director: "Peter Jackson",
      Writer: "Fran Walsh, Philippa Boyens, Peter Jackson",
      Actors: "Martin Freeman, Ian McKellen, Richard Armitage",
      Plot: "A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.",
      Language: "English",
      Country: "New Zealand, United States",
      Awards: "Nominated for 3 Oscars. 11 wins & 75 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "7.8/10" },
        { Source: "Rotten Tomatoes", Value: "64%" },
        { Source: "Metacritic", Value: "58/100" },
      ],
      Metascore: 58,
      imdbRating: 7.8,
      imdbVotes: 842144,
      imdbID: "tt0903624",
      Type: "movie",
      DVD: "2013-03-19",
      BoxOffice: 303030651,
      Production: "N/A",
      Website: "N/A",
      Response: true,
    };

    // TODO: remove this test when no longer needed
    chai
      .request(server)
      .post("/movies/create")
      .send(movie)
      .end((err, res) => {
        chai.expect(err).to.be.null;
        console.log(res.text);
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).has.property("_id");
        chai.expect(res.body.Title).to.equal(movie.Title);
        done();
      });
  });

  after(async () => {
    await mongoose.disconnect();
  });
});
