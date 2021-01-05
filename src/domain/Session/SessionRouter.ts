/* eslint-disable object-curly-newline */
import { SessionController } from './SessionController';
import {
  IUseRouter,
  IUseRouterRequest,
  IUseRouterResponse,
} from '../../@types/IUseRouter';

interface ISessionRouterRequest {
  appRouter: IUseRouter;
  SessionModule: SessionController;
}

class useRouter {
  private appRouter: IUseRouter;

  private SessionModule: SessionController;

  constructor({ appRouter, SessionModule }: ISessionRouterRequest) {
    this.SessionModule = SessionModule;
    this.appRouter = appRouter;
    this.loadRoutes();
  }

  private loadRoutes() {
    this.appRouter.post(
      '/create',
      (request: IUseRouterRequest, response: IUseRouterResponse) =>
        this.SessionModule.handle(request, response),
    );
  }
}

export { useRouter };
