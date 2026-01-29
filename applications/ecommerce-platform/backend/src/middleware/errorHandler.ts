import { Request, Response, NextFunction } from 'express';
import { logger } from '../index';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
}
