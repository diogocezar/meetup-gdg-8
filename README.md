# Meetup GDG #8 - Uma API Node em 30 minutos

# Reestruturnado os arquivos

## Criando um arquivo para as rotas

Vamos mover todas as rodas da aplicação para um arquivo específico para isso.

Criamos então `./src/routes.js` com o conteúdo:

```js
const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello World");
});

module.exports = routes;
```

E agora, podemos importar essas rotas no arquivo principal:

```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./src/routes");
mongoose.connect("mongodb://localhost:27017/node-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use("/api", routes);
app.listen(3000);
```

Neste momento, nossa aplicação parou de funcionar :(

Nada mais é gravado no banco, mas vamos arrumar isso!
