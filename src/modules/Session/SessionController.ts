import { IUseRouterRequest, IUseRouterResponse } from '../../@types/IUseRouter';
import { CreateSessionService } from './CreateSessionService';

class SessionController {
  constructor(private CreateSessionService: CreateSessionService) {}

  async handle(
    request: IUseRouterRequest,
    response: IUseRouterResponse,
  ): Promise<IUseRouterResponse> {
    const { username, password } = request.body;
    const sessionResponse = await this.CreateSessionService.execute({
      username,
      password,
    });

    return response.status(200).json(sessionResponse);
  }
}

export { SessionController };
