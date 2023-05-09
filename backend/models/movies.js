const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  Poster: { type: String, required: true }
});

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;