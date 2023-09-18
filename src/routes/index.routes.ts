import { Express } from 'express';
import { queryRoutes } from './query/query.routes';

export const appRoutes = (app: Express) => {
  app.use('/query', queryRoutes());
};
