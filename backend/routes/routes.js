const express = require("express");
const Movie = require("../models/movies");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Hello, world.");
});

router.get("/readMovies", async (req, res) => {
  try {
    let movies = await Movie.find();
    res.status(200).json({
      status: 200,
      data: movies,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

router.get("/create", async (req, res) => {
  try {
    let movies = await Movie.create({
      Title: "The Hobbit: An Unexpected Journey",
      Year: 2012,
      Rated: "PG-13",
      Released: "14 Dec 2012",
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
      Response: True,
    });
    res.status(200).json({
      status: 200,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
