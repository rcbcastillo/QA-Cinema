const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  movieId: { type: String, required: false },
  userId: { type: String, required: false },
  message: { type: String, required: false },
  rating: { type: Number, required: false },
});

const commentModel = mongoose.model("comments", commentSchema);
module.exports = commentModel;
