// export { default as SessionRouter } from './SessionRoutes';
import SessionInstanceFactory from './SessionInstanceFactory';
import { useRouter } from './SessionRouter';
import { IUseRouter } from '../../@types/IUseRouter';

const useSessionRouter = (appRouter: IUseRouter): void => {
  new useRouter({
    appRouter,
    SessionModule: SessionInstanceFactory.getInstance(),
  });
};
export { useSessionRouter };
