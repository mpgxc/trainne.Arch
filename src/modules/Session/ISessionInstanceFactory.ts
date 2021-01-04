import { SessionController } from './SessionController';

export interface ISessionInstanceFactory {
  getInstance(): SessionController;
}
