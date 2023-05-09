const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const uri = require('./atlas_uri');


//app.use(cors());

mongoose.connect(uri).then(() => {
  console.log("connected");
}).catch(err => {
  console.error(err);
});


app.use("/movies", router)


// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

// Server listening
app.listen(9090, () => {
  console.log("server started on port 9090");
});

module.exports = app;