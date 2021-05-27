# API Products
## Descripción

Una API de productos con sistema de autenticación y autorización, el cual permite realizar el login por medio de email/password o una cuenta de Google (solo para usuarios con rol Customer).

La API te permite administrar
- Productos
- Usuarios

Existen dos roles para los usuarios:
- Customer
- Admin

Puedes acceder a la documentación [en este enlace](https://thawing-taiga-05133.herokuapp.com/docs/#/)

Para realizar el login con google [en este enlace](https://thawing-taiga-05133.herokuapp.com/auth/)

## Requisitos

- npm
- docker
## Installation

```bash
$ npm install
```

### Variables de entorno

Se deberan de crear un archivo .env en base al archivo .env.example, remplazando y colocando los valores de utilizar.

## Running the app

```bash
$ docker-compose up -d mongo

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
