const request = require('supertest');
const app = require('../index');

describe('API Tests', () => {
  it('Healthcheck deve retornar UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });
});