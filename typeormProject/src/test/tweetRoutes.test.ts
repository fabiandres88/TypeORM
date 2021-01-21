import supertest = require('supertest');
import  connection   from '../../src/connection';
import app from '../app';
var user:string = "";
var tweet:string = "";

beforeAll(async () => {
    await connection.create();
});

afterAll(async () => {
    await connection.close();
})

it("Get all tweets",async ()=> {
    const response = await supertest(app).get('/tweets');
    expect(response.status).toBe(200);    
});

//firts a user must be created to get its id
test("Post a user", async (done) => {
    const response = await supertest(app)
    .post('/users')
    .send({
        "firstName": "User Test",
        "lastName": "Ramirez Jaimes",
        "age": 1,
        "email": "thiago@gmail.com",
        "tweets": []
    })
    expect(response.status).toBe(201);    
    user = response.body.id;
    done();    
});

test("Post a tweet", async (done) => {
    const response = await supertest(app)
    .post('/tweets')
    .send({
        "title": "My testing tweet",
        "content": "Please delete me after the test.",
        "user": `${user}` 
    })
    expect(response.status).toBe(201);    
    tweet = response.body.id;
    done();    
});

test("Get a tweet by id", async (done) => {
    const result = await supertest(app).get(`/tweets/${tweet}`);
    expect(result.status).toBe(200);    
    done();
});

test("Update a tweet by id", async (done) => {
    const result = await supertest(app).put(`/tweets/${tweet}`)
    .send({
        "title": "It was updated",
        "content": "Updated but please delete me after the test."        
    })
    expect(result.status).toBe(200);    
    done();
});

test("Delete a tweet by id", async (done) => {
    const result = await supertest(app).delete(`/tweets/${tweet}`);
    expect(result.status).toBe(200);    
    done();
});

test("Delete a user by id", async (done) => {
    const result = await supertest(app).delete(`/users/${user}`);
    expect(result.status).toBe(200);    
    done();
});