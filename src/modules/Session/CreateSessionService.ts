import queryString from 'querystring';
import { CookieJar as CookieJarType } from 'tough-cookie';
import { AppError } from '../../shared/errors/AppError';
import { ISessionDTO } from './ISessionDTO';
import { CreateSessionCookieService } from './CreateSessionCookieService';
import { api } from '../../infra/http/external/SynsuiteEndpoint';
import { HttpStatusCode } from '../../infra/http/HttpStatusCode';

interface ISessionRequest {
  username: string;
  password: string;
}

interface IServiceResponse {
  statusCode: number;
  data: ISessionDTO;
}

class CreateSessionService {
  constructor(private CreateSessionCookieService: CreateSessionCookieService) {}

  async execute({
    password,
    username,
  }: ISessionRequest): Promise<IServiceResponse> {
    if (!username || !password) {
      throw new AppError({
        statusCode: HttpStatusCode.STATUS_BAD_REQUEST,
        message: 'Corpo da requisição inválido!',
      });
    }

    await this.CreateSessionCookieService.execute();

    const headers = {
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

      if (response.request.path !== '/assignments') {
        throw new AppError({
          statusCode: HttpStatusCode.STATUS_UNAUTHORIZED,
          message: 'Usuário não autorizado!',
        });
      }

      const sessionCookie = api.defaults.jar as CookieJarType;
      const [CookieValue] = sessionCookie.toJSON().cookies;

      return {
        statusCode: HttpStatusCode.STATUS_OK,
        data: {
          username,
          sessionCookie: CookieValue.value,
        },
      };
    } catch (error) {
      throw new AppError({
        statusCode: error.statusCode,
        message: error.message,
      });
    }
  }
}

export { CreateSessionService };
