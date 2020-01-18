const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});
app.listen(3000);
