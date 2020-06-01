# REST API Example
Built with [Express.js](expressjs.com) by [Berk KOCA](github.com/berkoca)

## Features

- Express Routing
- MongoDB CRUD Operations with [Mongoose](mongoosejs.com)
- Mongoose Model Schemas
- Clean Directory Structure
- JSON Web Token Authentication with [jsonwebtoken](npmjs.com/package/jsonwebtoken)
- Request Body Validation with [joi](hapi.dev/module/joi/)
- Logging HTTP Requests to Console with [morgan](npmjs.com/package/morgan)
- Password encryption with [bcrypt](npmjs.com/package/bcrypt)
- Config File for Configuring **Token Secret**, **Token Expiration Time**, **MongoDB URL**, **Express Server Port** 

## Routes

### Authentication

| Method     | URL                  | Required Fields         | Optional Fields               | Only Admin |
|------------|----------------------|-------------------------|-------------------------------|------------|
| `POST`     | `/api/auth/login`    | `email, password`       |                               |            |
| `GET`      | `/api/auth/logout`   |                         |                               |            |
| `POST`     | `/api/auth/register` | `name, email, password` |                               |            |

### Users

| Method     | URL                  | Required Fields         | Optional Fields               | Only Admin |
|------------|----------------------|-------------------------|-------------------------------|------------|
| `POST`     | `/api/users`         | `name, email, password` |`role`                         | `yes`      |
| `GET`      | `/api/users`         |                         |                               | `yes`      |
| `GET`      | `/api/users/{id}`    |                         |                               |            |
| `DELETE`   | `/api/users/{id}`    |                         |                               | `yes`      |
| `PUT`      | `/api/users/{id}`    |                         | `name, email, password, role` | `yes`      |

### Movies

| Method     | URL                  | Required Fields         | Optional Fields               | Only Admin |
|------------|----------------------|-------------------------|-------------------------------|------------|
| `POST`     | `/api/movies`        | `movieName`             |                               | `yes`      |
| `GET`      | `/api/movies`        |                         |                               |            |
| `GET`      | `/api/movies/{id}`   |                         |                               |            |
| `DELETE`   | `/api/movies/{id}`   |                         |                               | `yes`      |
| `PUT`      | `/api/movies/{id}`   |                         | `movieName`                   | `yes`      |