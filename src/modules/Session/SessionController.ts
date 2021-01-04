import { Response, Request } from 'express';
import { CreateSessionService } from './CreateSessionService';

class SessionController {
  constructor(private CreateSessionService: CreateSessionService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;
    const sessionResponse = await this.CreateSessionService.execute({
      username,
      password,
    });

    return response.status(200).json(sessionResponse);
  }
}

export { SessionController };
