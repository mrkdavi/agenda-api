import {
  NextFunction,
  Request,
  RequestHandler,
  Response
} from 'express';

export const errorHandlerWrapper = (fnHandler: RequestHandler) =>
  (req: Request, res: Response, next: NextFunction) => (
    Promise.resolve(fnHandler(req, res, next)).catch((e) => next(e))
  )
;
