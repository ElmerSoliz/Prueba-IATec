// // import request from 'supertest';
// import RouteAdmin from '../src/routes/admin.routes';
// import models from '../src/models';

import test from "node:test";
import assert from "node:assert/strict";





  test('get all', () => {

  });

  test('get all by id', () => {

  });



  // test('should respond with a 200 status code for getting all users', async () => {
  //   const response = await request(RouteAdmin).get('/user').send();
  //   console.log(response.body); // Agrega esto para imprimir el cuerpo de la respuesta
  //   expect(response.body).toBeInstanceOf(Array);
  // },10000);
  
  // test('should respond with a 200 status code and return users', async () => {
  //   // Supongamos que ya has creado algunos usuarios en tu base de datos de prueba

  //   const response = await request(RouteAdmin).get('/user');
    
  //   expect(response.statusCode).toBe(200);
  //   expect(response.body).toBeInstanceOf(Array); // Verifica que la respuesta sea un array

  //   // Puedes ajustar estas expectativas según la estructura de tus datos
  //   expect(response.body[0]).toHaveProperty('id');
  //   expect(response.body[0]).toHaveProperty('username');
  //   expect(response.body[0]).toHaveProperty('email');
  //   expect(response.body[0]).toHaveProperty('holidays');
  //   expect(response.body[0]).toHaveProperty('createdAt');
  // });

  // test('should respond with a 500 status code on error', async () => {
  //     // Simula un error en la consulta de la base de datos
  //     jest.spyOn(models.User, 'findAll').mockImplementation(() => {
  //         throw new Error('Fake database error');
  //     });

  //     const response = await request(RouteAdmin).get('/user');

  //     expect(response.statusCode).toBe(500);
  //     expect(response.body).toEqual({ error: 'Internal Server Error' });
  // });
