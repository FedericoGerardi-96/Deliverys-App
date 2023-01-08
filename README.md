# Next.js Telo Shop

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

- El -d, significa **detached**

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/deliverydb
```

- Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```
