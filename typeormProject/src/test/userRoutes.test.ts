import supertest = require('supertest');
import  connection   from '../../src/connection';
import app from '../app';
var id:any = "";

beforeAll(async () => {
    await connection.create();
});

afterAll(async () => {
    await connection.close();
})

it("Get all users",async ()=> {
    const response = await supertest(app).get('/users');
    expect(response.status).toBe(200);    
});

test("Post a user", async (done) => {
    const response = await supertest(app)
    .post('/users')
    .send({        
        "firstName": "Victoria Carolina",
        "lastName": "Jaimes Naranjo",
        "dni": "1098000765",
        "age": 1,
        "email": "caro@gmail.com",
        "password": "password2020"
    })
    expect(response.status).toBe(201);    
    id = response.body.id;
    done();    
});

test("Get a user by id", async (done) => {
    const result = await supertest(app).get(`/users/${id}`);
    expect(result.status).toBe(200);    
    done();
});

test("Update a user by id", async (done) => {
    const result = await supertest(app).put(`/users/${id}`)
    .send({        
        "firstName": "Victoria Carolina",
        "lastName": "Jaimes Naranjo",
        "dni": "1098000765",
        "age": 1,
        "email": "caro@gmail.com",
        "password": "password2020"
    })
    expect(result.status).toBe(200);        
    done();
});

test("Delete a user by id", async (done) => {
    const result = await supertest(app).delete(`/users/${id}`);
    expect(result.status).toBe(200);    
    done();
});