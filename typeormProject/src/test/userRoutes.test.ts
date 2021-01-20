import app from '../app';
import request = require ('supertest');

test("GET",   (done) => {
     request(app)
    .get('/users')
    .expect(200)
    done();
})

test("POST", (done) => {
    request(app)
    .post('/users')
    .send({
        "firstName": "User Test",
        "lastName": "Ramirez Jaimes",
        "age": 1,
        "email": "thiago@gmail.com",
        "tweets": []
    })
    .expect((res) => {
        console.log(res);        
        res.body.firstName = "User Test"
    })
    .expect(200)
    done();
})