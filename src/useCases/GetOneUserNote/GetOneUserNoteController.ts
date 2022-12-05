import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { NoteRepository } from '../../repositories/NoteRepository';
import { GetOneUserNoteUseCase } from './GetOneUserNoteUseCase';

export class GetOneUserNoteController {
  constructor (
    private getOneUserNoteUseCase = new GetOneUserNoteUseCase(new NoteRepository())
  ) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { params: { id }, user: { sub: userId } } = req as UserRequest;
    const note = await this.getOneUserNoteUseCase.execute(id, userId);
    res.status(StatusCode.OK).json(note);
  }
}
