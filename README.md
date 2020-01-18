# Meetup GDG #8 - Uma API Node em 30 minutos

# Conectando a um banco MongoDB:

Aqui temos várias opções, recomendo a leitura do material de apoio para maiores detelhes.

Para essa demonstração: Docker + Mongo Local!

Para isso, vamos criar um `docker-compose.yml` com o seguinte conteúdo:

```yml
version: "3"

services:
  mongo:
    image: mongo:latest
    ports:
      - 27017:27017
    volumes:
      - ./database:/data/db
```

e agora, podemos testar se nosso banco irá funcionar:

```
docker-compose up -D
```

Em seguida, vamos usar o compass para verificar se conseguimos conectar ao banco ;)

Notem que os dados ficarão armazenados localmente na pasta 'database', por isso também vamos colocar essa pasta no `.gitignore`
