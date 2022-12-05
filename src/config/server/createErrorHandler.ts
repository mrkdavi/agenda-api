import {
  NextFunction,
  Request,
  Response,
  Express
} from 'express';
import { ZodError } from 'zod';
import { BaseError } from '../../@types/errors/BaseError';

export function createErrorHandler (app: Express) {
  app.use((err: BaseError | ZodError, _req: Request, res: Response, _next: NextFunction) => {
    console.log(err);
    if (err instanceof BaseError) {
      return res.status(err.statusCode).json([{
        statusCode: err.statusCode,
        message: err.message
      }]);
    }
    if (err instanceof ZodError) {
      const messages = err.issues.map((issue) => (`${issue.path.join('.')}: ${issue.message}`));
      const errors = messages.map((message) => ({
        statusCode: 400,
        message
      }));
      return res.status(400).json(errors);
    }
    res.status(500).json([{
      statusCode: 500,
      message: 'Internal Server Error'
    }]);
  });
};
