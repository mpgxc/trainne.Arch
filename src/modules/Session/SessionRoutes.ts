import { Request, Response, Router } from 'express';
import SessionInstanceFactory from './SessionInstanceFactory';

const routes = Router();
const session = SessionInstanceFactory.getInstance();

routes.post('/create', (request: Request, response: Response) =>
  session.handle(request, response),
);

export default routes;
