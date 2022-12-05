import { z } from 'zod';

import { NextFunction, Request, Response } from 'express';

export function noteValidator (req: Request, _res: Response, next: NextFunction) {
  const userSchema = z.object({
    subject: z.string().optional(),
    content: z.string()
  });

  const { content } = userSchema.parse(req.body);
  console.log(req.body);
  console.log(content);

  next();
}
