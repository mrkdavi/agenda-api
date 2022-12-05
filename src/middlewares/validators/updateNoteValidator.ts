import { z } from 'zod';

import { NextFunction, Request, Response } from 'express';
import BadRequest from '../../@types/errors/BadRequest';

export function updateNoteValidator (req: Request, _res: Response, next: NextFunction) {
  const userSchema = z.object({
    subject: z.string().optional(),
    content: z.string().optional()
  });

  const { content, subject } = userSchema.parse(req.body);

  if (!content && !subject) throw new BadRequest('Content or subject are missing');

  next();
}
