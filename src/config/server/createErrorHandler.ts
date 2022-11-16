import {
  NextFunction,
  Request,
  Response,
  Express
} from 'express';
import { BaseError } from '../../@types/errors/BaseError';

export function createErrorHandler (app: Express) {
  app.use((err: BaseError, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof BaseError) {
      return res.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message
      });
    }
    console.error(err);
    res.status(500).json({
      statusCode: 500,
      message: 'Internal Server Error'
    });
  });
};
