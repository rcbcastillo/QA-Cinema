const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  movieId: { type: String, required: true },
  userId: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, required: true },
});

const commentModel = new Schema("comments", commentSchema);
module.exports = commentModel;
