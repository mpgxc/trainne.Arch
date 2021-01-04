import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import useRoutes from './useRoutes';
import errorHandler from '../helpers/errors/handler';
import routeNotFound from '../helpers/middlewares/routeNotFound';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
new useRoutes(app);

/**
 *  Global Exceptions
 */

app.use(errorHandler);
app.use(routeNotFound);

export { app };
