import { Router } from 'express';
import { queryController } from '../../controllers/query';
import { queryParamMiddleware } from '../../middlewares/query-param.middleware';

const router = Router();

export const queryRoutes = () => {
  /**
   * @swagger
   * /query:
   *   get:
   *     tags:
   *       - Query
   *     description: The system requires you to enter a valid process number in the query param of the URL. If the process number is valid but there is no result match, the data is returned as empty arrays
   *     produces:
   *       - application/json
   *     parameters:
   *       - in: query
   *         name: process_number
   *         description: Process Number
   *         example: 905005163
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Valid process number
   *         schema:
   *           $ref: '#/components/schemas/GroupedProcesses'
   *       400:
   *         description: Request executed without query parameter
   *         schema:
   *           $ref: '#/components/schemas/QueryError'
   */

  router.get('', queryParamMiddleware, queryController);

  return router;
};
