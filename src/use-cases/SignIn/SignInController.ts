import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { UserRepository } from '../../repositories/UserRepository';
import { SignInUseCase } from './SignInUseCase';

export class SignInController {
  constructor (private signInUseCase = new SignInUseCase(new UserRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const token = await this.signInUseCase.execute(req.body);
    res.status(StatusCode.OK).json(token);
  }
}
