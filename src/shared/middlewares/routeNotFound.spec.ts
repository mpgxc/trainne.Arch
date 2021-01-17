import request from 'supertest';
import { app } from '../../infra/app';

describe('routeNotFound', () => {
  it('Deve ser capaz de retornar um erro para rota não encontrada', async () => {
    const response = await request(app).get('/api/rota/qualquer');

    expect(response.body).toEqual({
      status: 'not found',
      message: 'Rota não encontrada!',
    });

    expect(response.status).toBe(404);
  });
});
