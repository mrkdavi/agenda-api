import { Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRepository } from '../../repositories/UserRepository';
import { SignInUseCase } from './SignInUseCase';

export class SignInController {
  constructor (private signInUseCase = new SignInUseCase(new UserRepository())) {}

  async handle (req: Request, res: Response) {
    const token = await this.signInUseCase.execute(req.body);
    res.status(StatusCode.OK).json(token);
  }
}
