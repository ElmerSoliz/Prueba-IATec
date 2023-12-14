const request = require('supertest');
const assert = require('assert');
const express = require('express');
import models from '../src/models';
const app = express();


describe('Users controller', () => {

  beforeEach(async () => {
    await models.User.sync({force: true});
  });

  it('should get all users', async () => {
    await models.User.bulkCreate([
      { username: 'user1', email: 'user1@test.com' },
      { username: 'user2', email: 'user2@test.com' }
    ]);

    const res = await request(app).get('/users');

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(2);
  });

  it('should create a new user', async () => {   
    const res = await request(app)
      .post('/users')
      .send({
        username: 'testuser', 
        email: 'test@test.com',
        password: '123456'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual('registered user');
  });

  it('should get user by id', async () => {
    const user = await models.User.create({ 
      username: 'testuser',
      email: 'test@test.com'
    });

    const res = await request(app).get(`/users/${user.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.username).toEqual('testuser');
  });

  it('should update user', async () => {
    const user = await models.User.create({ 
      username: 'testuser', 
      email: 'test@test.com'
    });

    const res = await request(app)
      .put(`/users/${user.id}`)
      .send({
        username: 'updateduser'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('modified user');
  });

  it('should delete user', async () => {
    const user = await models.User.create({
      username: 'testuser',
      email: 'test@test.com' 
    });

    const res = await request(app)
      .delete(`/users/${user.id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Eliminated user');
  });
  afterAll(async () => {
    await models.sequelize.close();
  });
  
});
