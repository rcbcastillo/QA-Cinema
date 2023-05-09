const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use("/", router);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

// Server listening
const server = app.listen(9090, () => {
  console.log("server started on port", server.address().port);
});

module.exports = server;
