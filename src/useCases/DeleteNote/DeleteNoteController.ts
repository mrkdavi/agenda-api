import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { NoteRepository } from '../../repositories/NoteRepository';
import { DeleteNoteUseCase } from './DeleteNoteUseCase';

export class DeleteNoteController {
  constructor (private deleteNoteUseCase = new DeleteNoteUseCase(new NoteRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { params: { id }, user: { sub: userId } } = req as UserRequest;
    await this.deleteNoteUseCase.execute(id, userId);
    res.status(StatusCode.NO_CONTENT).end();
  }
}
