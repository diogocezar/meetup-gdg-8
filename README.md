# Meetup GDG #8 - Uma API Node em 30 minutos

# Finalizado toda a API

Agora podemos finalizar todas as operações da API.

## Criando um Produto

Em `routes.js`:

```js
const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);

module.exports = routes;
```

em `ProductController.js`:

```js
const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  }
}

module.exports = new ProductController();
```

## Exibindo os Detalhes de um Único Produto

Em `routes.js`:

```js
const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);

module.exports = routes;
```

em `ProductController.js`:

```js
const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  }
}

module.exports = new ProductController();
```

## Atualizando um Produto

Em `routes.js`:

```js
const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);

module.exports = routes;
```

em `ProductController.js`:

```js
const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  }
}

module.exports = new ProductController();
```

## Excluindo um Produto

Em `routes.js`:

```js
const express = require("express");
const routes = express.Router();
const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

module.exports = routes;
```

em `ProductController.js`:

```js
const mongoose = require("mongoose");
const Product = require("../models/Product");

class ProductController {
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send({ deleted: true });
  }
}

module.exports = new ProductController();
```

# Adicionando o CORS

Para fechar a API, temos que permitir que outros endereços tenham o acesso a nossa api.

Até o momento, estamos permitindo apenas que o localhost faça o acesso a esta api, mas se ela for para produção, por exemplo, então precisaremos permitir que outras aplicações acessem de outros servidores.

Para isso, precisamos intalar uma dependência chamada cors:

```
yarn add cors
```

# Adicionando o express.json

Temos ainda que fazer uma última configuração adicional em nossa API, permitir que nossa api entenda JSON's como o corpo da requisição.

Para isso, basta adicionar o seguinte comando:

```js
app.use(express.json());
```

Nosso arquivo principal, fica:

```js
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
```

---

e FIM :)

Obrigado!

Qualquer dúvida ;)

diogo@diogocezar.com
