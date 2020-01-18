# Meetup GDG #8 - Uma API Node em 30 minutos

# Configurando o mongoose:

Agora podemos configurar uma outra dependência para nos ajudar na conexão com o banco de dados:

```
yarn add mongoose
```

E então, no nosso arquivo `index.js`:

```js
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
```

Se tudo der certo, o servidor irá startar sem nenhum erro, e estaremos prontos para seguir para criar nossa primeira model.
