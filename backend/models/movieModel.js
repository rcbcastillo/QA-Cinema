const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: check if required should be true
const movieSchema = new Schema({
  Title: { type: String, required: true },
  Year: { type: Number, required: true },
  Rated: { type: String, required: true },
  Released: { type: Date, required: true },
  Runtime: { type: String, required: true },
  Genre: { type: String, required: true },
  Director: { type: String, required: true },
  Writer: { type: String, required: true },
  Actors: { type: String, required: true },
  Plot: { type: String, required: true },
  Language: { type: String, required: true },
  Country: { type: String, required: true },
  Awards: { type: String, required: true },
  Poster: { type: String, required: true },
  Ratings: { type: Array, required: true },
  Metascore: { type: Number, required: true },
  imdbRating: { type: Decimal128, required: true },
  imdbVotes: { type: Number, required: true },
  imdbID: { type: String, required: true },
  Type: { type: String, required: true },
  DVD: { type: Date, required: true },
  BoxOffice: { type: Number, required: true },
  Production: { type: String, required: true },
  Website: { type: String, required: true },
  Response: { type: Boolean, required: true },
});

const movieModel = mongoose.model("movies", movieSchema);
module.exports = movieModel;
