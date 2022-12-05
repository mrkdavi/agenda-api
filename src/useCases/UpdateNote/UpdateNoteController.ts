import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { NoteRepository } from '../../repositories/NoteRepository';
import { UpdateNoteUseCase } from './UpdateNoteUseCase';

export class UpdateNoteController {
  constructor (private updateNoteUseCase = new UpdateNoteUseCase(new NoteRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const {
      params: { id },
      body: { subject, content },
      user: { sub: userId }
    } = req as UserRequest;
    const note = await this.updateNoteUseCase.execute(id, { subject, content, userId });
    res.status(StatusCode.OK).json(note);
  }
}
