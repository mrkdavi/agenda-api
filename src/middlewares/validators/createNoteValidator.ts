import { z } from 'zod';

import { NextFunction, Request, Response } from 'express';

export function createNoteValidator (req: Request, _res: Response, next: NextFunction) {
  const userSchema = z.object({
    subject: z.string().optional(),
    content: z.string()
  });

  userSchema.parse(req.body);

  next();
}
