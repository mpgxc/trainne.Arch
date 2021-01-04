import queryString from 'querystring';
import { CookieJar as CookieJarType } from 'tough-cookie';
import { AppError } from '../../helpers/errors/AppError';
import { ISessionDTO } from './ISessionDTO';
import { CreateSessionCookieService } from './CreateSessionCookieService';
import { api } from '../../infra/external/SynsuiteEndpoint';

interface ISessionRequest {
  username: string;
  password: string;
}

class CreateSessionService {
  constructor(private CreateSessionCookieService: CreateSessionCookieService) {}

  async execute({ password, username }: ISessionRequest): Promise<ISessionDTO> {
    if (!username || !password) {
      throw new AppError(401, 'Corpo da requisição inválido!');
    }

    await this.CreateSessionCookieService.execute();

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': process.env.BROWSER_USER_AGENT,
    };

    const data = queryString.stringify({
      'data[User][login]': username,
      'data[User][password2]': password,
    });

    try {
      const response = await api.post('users/login', data, {
        headers,
        withCredentials: true,
      });

      if (response.status !== 200 && response.request.path !== '/assignments') {
        throw new AppError(401, 'Usuário não autorizado!');
      }

      const sessionCookie = api.defaults.jar as CookieJarType;
      const [CookieValue] = sessionCookie.toJSON().cookies;

      return { username, sessionCookie: CookieValue.value };
    } catch (error) {
      throw new AppError(500, error.message);
    }
  }
}

export { CreateSessionService };
