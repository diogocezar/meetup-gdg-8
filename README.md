# Meetup GDG #8 - Uma API Node em 30 minutos

# Criando a primeira model:

Vamos criar em `./src/models/ProductModel.js`

```js
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", ProductSchema);
```

e agora em nosso arquivo `index.js`:

```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true
});

const Product = require("./models/Product");

app.get("/", (req, res) => {
  Product.create({
    title: "ReactJS",
    description: "Just a sample",
    url: "http://www.google.com"
  });
  return res.send("Olá Mundo!");
});
app.listen(3000);
```
