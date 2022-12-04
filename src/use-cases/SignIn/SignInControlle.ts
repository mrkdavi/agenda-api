import { Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { prisma } from '../../lib/prisma';
import { SignInUseCase } from './SignInUseCase';

export class SignInController {
  constructor (private signInUseCase = new SignInUseCase(prisma.user)) {}

  async handle (req: Request, res: Response) {
    const token = await this.signInUseCase.execute(req.body);
    res.status(StatusCode.OK).json(token);
  }
}
