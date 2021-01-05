import { api } from '../../infra/http/external/SynsuiteEndpoint';

class CreateSessionCookieService {
  async execute(): Promise<void> {
    try {
      await api.get('users/login');
    } catch (error) {
      throw new Error(
        `Error ao capturar o cookie! \nBody Error: ${error.message}`,
      );
    }
  }
}

export { CreateSessionCookieService };
