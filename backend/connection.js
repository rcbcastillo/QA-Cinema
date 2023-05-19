const mongoose = require("mongoose");
const { uri } = require("./atlas_uri");

mongoose
  .connect(uri)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });
