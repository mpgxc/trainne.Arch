import { Router } from 'express';
import { useSessionRouter } from '../../domain/Session';
// import { IncidentsRouter } from '../domain/.IncidentsTypes';

class useRoutes {
  constructor(private appRouter: Router) {
    this.loadSessionRouter();
  }

  private loadSessionRouter() {
    /**
     * Rota de Login no Synsuite
     * Responsabilidade: Efetuar acesso ao sistema para todos usuários cadastrados no Synsuite
     */
    const router = Router();

    this.appRouter.use('/api/session', router);

    useSessionRouter(router);
  }
}
export { useRoutes };
