import { Router } from 'express';
import { SessionRouter } from '../modules/Session';
// import { IncidentsRouter } from '../domain/.IncidentsTypes';

class useRoutes {
    constructor(private appRouter: Router) {
        this.loadRoutes();
    }

    private loadRoutes() {
        /**
         * Rota de Login no Synsuite
         * Responsabilidade: Efetuar acesso ao sistema para todos usuários cadastrados no Synsuite
         */
        this.appRouter.use('/api/session', SessionRouter);

        // /**
        //  * Rota de Incidents Types no Synsuite
        //  * Responsabilidade: Listar todas solicitações de clientes.
        //  */
        // this.appRouter.use('/api/incident_types', IncidentsRouter);
    }
}
export default useRoutes;
