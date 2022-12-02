import { Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRepository } from '../../repositories/UserRepository';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  constructor (private signUpUseCase = new SignUpUseCase(new UserRepository)) {}

  async handle (req: Request, res: Response) {
    const token = await this.signUpUseCase.execute(req.body);
    res.status(StatusCode.CREATED).json(token);
  }
}
