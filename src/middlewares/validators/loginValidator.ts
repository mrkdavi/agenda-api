import { z } from 'zod';

import { NextFunction, Request, Response } from 'express';
import BadRequest from '../../@types/errors/BadRequest';

export function loginValidator (req: Request, _res: Response, next: NextFunction) {
  const userSchema = z.object({
    email: z.string(),
    password: z.string()
  });

  const { email, password } = userSchema.parse(req.body);

  if (!password || !email) {
    throw new BadRequest('Email or Password are missing!');
  }

  if (password.length < 6) {
    throw new BadRequest('Password must have 6 characters at least!');
  }

  const emailValidatorRegex = /[a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/i;
  if (!emailValidatorRegex.test(email)) {
    throw new BadRequest('Invalid e-mail!');
  }

  next();
}
