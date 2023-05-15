const mongoose = require("mongoose");
const app = require("./app.js");
const { uri } = require("./atlas_uri");

mongoose
  .connect(uri)
  .then(() => {
    console.log("db connected");
    app.listen(9090, () => {
      console.log("server started on port 9090");
    });
  })
  .catch((err) => {
    console.error(err);
  });
