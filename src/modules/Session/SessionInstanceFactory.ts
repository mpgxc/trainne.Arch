import { SessionController } from './SessionController';
import { CreateSessionService } from './CreateSessionService';
import { CreateSessionCookieService } from './CreateSessionCookieService';
import { ISessionInstanceFactory } from './ISessionInstanceFactory';

class SessionFactory implements ISessionInstanceFactory {
  getInstance() {
    const createSessionCookieService = new CreateSessionCookieService();
    const createSessionService = new CreateSessionService(
      createSessionCookieService,
    );

    return new SessionController(createSessionService);
  }
}

export default new SessionFactory();
