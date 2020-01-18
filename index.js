const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./src/routes");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use("/api", routes);
app.listen(3000);
