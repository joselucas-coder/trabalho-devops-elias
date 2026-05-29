const request = require('supertest');
const app = require('../index');

describe('Suíte de Testes da API - Aluno Online', () => {

  describe('Healthcheck (GET /health)', () => {
    it('Deve retornar status 200 e payload indicando que o servidor está UP', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toEqual(200);
      expect(res.headers['content-type']).toMatch(/json/);
      expect(res.body).toHaveProperty('status', 'UP');
    });
  });

  describe('Requerimentos (GET /api/requerimentos)', () => {
    it('Deve processar a requisição e retornar um formato JSON', async () => {
      const res = await request(app).get('/api/requerimentos');
    
      expect([200, 500]).toContain(res.statusCode);
      expect(res.headers['content-type']).toMatch(/json/);
    });
  });

  describe('Tratamento de Erros', () => {
    it('Deve retornar erro 404 ao tentar acessar uma rota inexistente', async () => {
      const res = await request(app).get('/rota-fantasma-do-professor-elias');
      expect(res.statusCode).toEqual(404);
    });
  });

});