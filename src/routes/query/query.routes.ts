import { Router } from 'express';
import { queryController } from '../../controllers/query';

const router = Router();

export const queryRoutes = () => {
  router.get('', queryController);

  return router;
};
