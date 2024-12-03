const request = require('supertest');
const app = require('../app');
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const connectDB = require('../database');
const mongoose = require('mongoose');

let mongoServer;

beforeAll(async()=>{
    mongoServer = new MongoMemoryServer()
    await mongoServer.start();
    const uri = mongoServer.getUri();
    await connectDB(uri);
})

afterAll(async()=>{
    await mongoose.disconnect();
    await mongoServer.stop();
})

describe("Integration test: POST /user", ()=> {
    it('should create a new user and save to db', async()=>{
        const res = await request(app).post('/user').send({
            name: 'iqbal', age: 30
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name','iqbal');
        expect(res.body).toHaveProperty('age', 30);
    });

    it('should return 400 if name or age is missing',async()=>{
        const res = await request(app).post('/user').send({
            name: 'TechPioneer'
        });
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error', 'Name and age are required');
    })
})