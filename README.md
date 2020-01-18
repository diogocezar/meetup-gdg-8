# Meetup GDG #8 - Uma API Node em 30 minutos

# Adicionando o express:

```
yarn add express
```

então, agora em nosso `index.js`:

```js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Olá Mundo!");
});
app.listen(3000);
```

mais simples, certo?
