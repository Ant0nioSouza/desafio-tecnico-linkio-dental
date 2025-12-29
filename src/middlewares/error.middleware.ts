import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  return res.status(400).json({
    message: err.message || 'Unexpected error'
  });
}
