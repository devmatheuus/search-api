import { Router } from 'express';
import { queryController } from '../../controllers/query';
import { bodyParamMiddleware } from '../../middlewares/body-param.middleware';

const router = Router();

export const queryRoutes = () => {
  router.get('', bodyParamMiddleware, queryController);

  return router;
};
