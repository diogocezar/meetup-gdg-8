# Meetup GDG #8 - Uma API Node em 30 minutos

# Criando a controller que lista os produtos

Vamos entar criar um arquivo que irá conter toda a regra de negócios:

```js
const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
}

module.exports = new ProductController();
```

e agora podemos ajustar o arquivo das rotas:

```js
const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);

module.exports = routes;
```

e já temos nossa api, que lista nossos produtos :)
