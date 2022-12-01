import { prisma } from '../../lib/prisma';
import { Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  constructor (private signUpUseCase = new SignUpUseCase(prisma.user)) {}

  async handle (req: Request, res: Response) {
    const token = await this.signUpUseCase.execute(req.body);
    res.status(StatusCode.CREATED).json(token);
  }
}
