# TypeORM-tutorial

A simple project (REST API), using:

- Typescript
- typeorm
- MongoDB
- class-validator
- routing-controllers
- jest
- supertest
- dotenv

### Starting project:

- Install project:

```
$ npm install
```
- Start project:
```
$ npm run start
```
```
> typeorm@0.0.1 start 
> ts-node src/index.ts

Server ready on port:  3000
MongoDB connection with successful TypeORM
```

### Running set of unit tests
```
$ npm run test
```
```
> typeorm@0.0.1 test
> jest --coverage  
```
# Simple API

# Endpoint users

### GET request

URL example:
http://localhost:3000/users
Response example:

```
{
    "status": 200,
    "data": [
        {
            "id": "602e8872dcb95a05f84e8678",
            "firstName": "Victoria Carolina",
            "lastName": "Jaimes Naranjo",
            "dni": "1098000765",
            "age": 1,
            "email": "caro@gmail.com",
            "password": "password2020",
            "createdAt": "2021-02-18T15:32:02.285Z",
            "updatedAt": "2021-02-18T15:32:02.285Z"
        }
    ],
    "message": "Successfully users retrieved."
}
```

### POST request

URL example:
http://localhost:3000/users

Body request example:

```
{
    "firstName": "Victoria Carolina",
    "lastName": "Jaimes Naranjo",
    "dni": "1098000765",
    "age": 1,
    "password": "password2020",
    "email": "caro@gmail.com"
}
```
Response example:

```
{
    "firstName": "Victoria Carolina",
    "lastName": "Jaimes Naranjo",
    "dni": "1098000765",
    "age": 1,
    "email": "caro@gmail.com",
    "password": "password2020",
    "createdAt": "2021-02-18T15:32:02.285Z",
    "updatedAt": "2021-02-18T15:32:02.285Z",
    "id": "602e8872dcb95a05f84e8678"
}
```

### PUT request

URL example:
http://localhost:3000/users/602e8872dcb95a05f84e8678

Body request example:

```
{
    "lastName": "Last name updated"
}
```
Response example:

```
{
    "id": "602e8872dcb95a05f84e8678",
    "firstName": "Victoria Carolina",
    "lastName": "Last name updated",
    "dni": "1098000765",
    "age": 1,
    "email": "caro@gmail.com",
    "password": "password2020",
    "createdAt": "2021-02-18T15:32:02.285Z",
    "updatedAt": "2021-02-18T15:32:02.285Z"
}
```

### GET request

URL example:
http://localhost:3000/users/602e8872dcb95a05f84e8678


Response example:

```
[
    {
        "id": "602e8872dcb95a05f84e8678",
        "firstName": "Victoria Carolina",
        "lastName": "Last name updated",
        "dni": "1098000765",
        "age": 1,
        "email": "caro@gmail.com",
        "password": "password2020",
        "createdAt": "2021-02-18T15:32:02.285Z",
        "updatedAt": "2021-02-18T15:41:52.464Z",
        "tweets": []
    }
]
```

### DELETE request

URL example:
http://localhost:3000/users/602e8872dcb95a05f84e8678


Response example:

```
{
    "message": "User deleted."
}
```

# Endpoint tweets

### GET request

URL example:
http://localhost:3000/tweets
Response example:

```
[
    {
        "id": "602e8eb0816f8a2e9c4fa1a3",
        "title": "First Tweet",
        "content": "Creating message.",
        "user": "602e8e07816f8a2e9c4fa1a2"
    },
    {
        "id": "602e8f20816f8a2e9c4fa1a4",
        "title": "Second Tweet",
        "content": "Creating second message.",
        "user": "602e8e07816f8a2e9c4fa1a2"
    }
]
```

### POST request

URL example:
http://localhost:3000/tweets

Body request example:

```
{
    "title": "First Tweet",
    "content": "Creating message.",
    "user": "602e8e07816f8a2e9c4fa1a2" 
}
```
Response example:

```
{
    "title": "First Tweet",
    "content": "Creating message.",
    "user": "602e8e07816f8a2e9c4fa1a2",
    "id": "602e8eb0816f8a2e9c4fa1a3"
}
```

### PUT request

URL example:
http://localhost:3000/tweets/602e8eb0816f8a2e9c4fa1a3

Body request example:

```
{
    "title": "First tweet updated"
}
```
Response example:

```
{
    "id": "602e8eb0816f8a2e9c4fa1a3",
    "title": "First tweet updated",
    "content": "Creating message.",
    "user": "602e8e07816f8a2e9c4fa1a2"
}
```

### GET request

URL example:
http://localhost:3000/tweets/602e8f20816f8a2e9c4fa1a4


Response example:

```
{
    "id": "602e8f20816f8a2e9c4fa1a4",
    "title": "Second Tweet",
    "content": "Creating second message.",
    "user": "602e8e07816f8a2e9c4fa1a2"
}
```

### DELETE request

URL example:
http://localhost:3000/tweets/602e8eb0816f8a2e9c4fa1a3


Response example:

```
{
    "message": "Tweet deleted."
}
```