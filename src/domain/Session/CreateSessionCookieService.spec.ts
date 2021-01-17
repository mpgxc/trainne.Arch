import 'dotenv/config';
import request from 'supertest';
import { CreateSessionCookieService } from './CreateSessionCookieService';
import { app } from '../../infra/app';

jest.setTimeout(30000);

describe('CreateSessionCookieService', () => {
  it('Deve ser capaz de capturar uma novo Cookie de Sessão sem erros', async () => {
    const createSessionCookieService = new CreateSessionCookieService();

    await expect(createSessionCookieService.execute()).resolves.not.toThrow();
    await expect(
      createSessionCookieService.execute(),
    ).resolves.not.toThrowError();
  });
});

describe('API /api/session/create', () => {
  it('Deve ser capaz de retornar o conteúdo de sessão do usuário', async () => {
    const response = await request(app).post('/api/session/create').send({
      username: process.env.SESSION_USERNAME,
      password: process.env.SESSION_PASSWORD,
    });

    expect(response.body).toEqual({
      username: process.env.SESSION_USERNAME,
      sessionCookie: expect.any(String),
    });

    expect(response.status).toBe(200);
  });

  it('Deve ser capaz de retornar um erro para um payload incorreto', async () => {
    const response = await request(app).post('/api/session/create').send({});

    expect(response.body).toEqual({
      type: 'error',
      message: 'Corpo da requisição inválido!',
    });

    expect(response.status).toBe(400);
  });

  it('Deve ser capaz de retornar um erro para um usuário não autorizado', async () => {
    const response = await request(app).post('/api/session/create').send({
      username: 'usuario123',
      password: 'senha123',
    });

    expect(response.body).toEqual({
      type: 'error',
      message: 'Usuário não autorizado!',
    });

    expect(response.status).toBe(401);
  });
});
