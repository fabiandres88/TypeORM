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

## Endpoint users

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