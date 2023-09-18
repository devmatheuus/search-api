import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export const bodyParamMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const processNumber = request.body?.process_number;

  if (!processNumber) {
    throw new AppError(400, 'The "process_number" parameter is mandatory');
  }

  if (typeof processNumber !== 'string') {
    throw new AppError(400, 'The "process_number" parameter must be a string');
  }

  next();
};
