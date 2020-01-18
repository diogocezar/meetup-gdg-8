const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Product = require("./src/models/Product");

app.get("/", (req, res) => {
  Product.create({
    title: "ReactJS",
    description: "Just a sample",
    url: "http://www.google.com"
  });
  return res.send("Olá Mundo!");
});
app.listen(3000);
