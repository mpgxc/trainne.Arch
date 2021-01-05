import { CreateSessionCookieService } from './CreateSessionCookieService';

jest.setTimeout(30000);

describe('CreateSessionCookieService', () => {
  it('Deve ser capaz de capturar uma novo Cookie de Sessão', async () => {
    const createSessionCookieService = new CreateSessionCookieService();

    await expect(createSessionCookieService.execute()).resolves.not.toThrow();
    await expect(
      createSessionCookieService.execute(),
    ).resolves.not.toThrowError();
  });
});
