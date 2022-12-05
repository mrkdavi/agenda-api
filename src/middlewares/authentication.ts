import { NextFunction, Request, Response } from 'express';
import Unauthorized from '../@types/errors/Unauthorized';
import verifyToken from '../helpers/verifyToken';

export function authentication (req: Request, _res: Response, next: NextFunction) {
  const { headers: { authorization } } = req;

  if (!authorization) throw new Unauthorized('Token is missing!');

  try {
    const user = verifyToken(authorization);
    req.user = user;
  } catch (error) {
    throw new Unauthorized('Expired or invalid token!');
  }

  next();
}
