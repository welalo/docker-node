require("dotenv").config()
const mongoose = require('mongoose')
const server = require('../src/index');
const request = require('supertest');

describe('CHECK ENV VARIABLES', () => {

    afterAll(done => {
        mongoose.connection.close();
        server.close();
        done();
    });
     
    test('MONGOURL is defined?', ()=> {
      expect(process.env.MONGOURL).not.toBeUndefined();
    })

    test('should store a list of users', async () => {
      await request(server).get('/api/user').expect(200)
    })

  })