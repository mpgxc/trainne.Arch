import { SessionController } from './SessionController';
import { CreateSessionService } from './CreateSessionService';
import { CreateSessionCookieService } from './CreateSessionCookieService';

class SessionFactory {
  getInstance() {
    const createSessionCookieService = new CreateSessionCookieService();
    const createSessionService = new CreateSessionService(
      createSessionCookieService,
    );

    return new SessionController(createSessionService);
  }
}

export default new SessionFactory();
