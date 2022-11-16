import { Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { SignUpUseCase } from './SignUpUseCase';

export class SignUpController {
  async handle (req: Request, res: Response) {
    const token = await new SignUpUseCase().execute(req.body);
    res.status(StatusCode.CREATED).json(token);
  }
}
