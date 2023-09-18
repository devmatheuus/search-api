import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      code: error.statusCode,
      message: error.message,
    });
  }
  console.error(error);

  return response.status(500).json({
    message: 'Internal server error',
  });
};
