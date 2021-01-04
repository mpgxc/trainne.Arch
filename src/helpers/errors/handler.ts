/* eslint-disable max-len */
import { Request, Response, NextFunction } from 'express';
import { AppError } from './AppError';

const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      type: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    type: 'error',
    message: 'Internal Server Error',
  });
};

export { errorHandler };
