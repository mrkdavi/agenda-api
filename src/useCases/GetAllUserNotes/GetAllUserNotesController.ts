import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { NoteRepository } from '../../repositories/NoteRepository';
import { GetAllUserNotesUseCase } from './GetAllUserNotesUseCase';

export class GetAllUserNotesController {
  constructor (
    private getAllUserNotesUseCase = new GetAllUserNotesUseCase(new NoteRepository())
  ) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { user: { sub: userId } } = req as UserRequest;
    const notes = await this.getAllUserNotesUseCase.execute(userId);
    res.status(StatusCode.OK).json(notes);
  }
}
