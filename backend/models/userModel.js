const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: check if required should be true
const userSchema = new Schema({
  firstname: { type: String, required: false},
  lastname: { type : String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
