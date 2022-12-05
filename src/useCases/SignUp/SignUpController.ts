import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { UserRepository } from '../../repositories/UserRepository';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  constructor (private signUpUseCase = new SignUpUseCase(new UserRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const token = await this.signUpUseCase.execute(req.body);
    res.status(StatusCode.CREATED).json(token);
  }
}
