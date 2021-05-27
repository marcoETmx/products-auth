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

### Crear proyecto en Google Cloud Platform

Se deberá de crear una proyecto en GCP para poder generar las credencias necesarias

Cuando se tenga el proyecto nos vamos a ir a la parte de [API y Servicios](https://console.cloud.google.com/apis/dashboard)

En la opcion de Pantalla de consentimiento de OAuth creamos una nueva y agregamos el usuario de prueba

Despues nos movemos a Credencias donde agregamos una nueva:
- Tipo aplicación web
- Orígenes autorizados: http://localhost:3000
- URI de redireccionamiento autorizados: http://localhost:3000/auth/redirect

Al finalizar nos va a generar el Client ID y Secret lo guardamos para colocarlo como varibale de entorno

### Variables de entorno

Se deberan de crear un archivo .env en base al archivo .env.example, remplazando y colocando los valores de utilizar.

Se deberan de agregar las siguientes variables:
 - JWT_SECRET: Esta seria la llave para el JWT
 - GOOGLE_CLIENT_ID: Generada desde GCP
 - GOOGLE_SECRET: Generada desde GCP

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
