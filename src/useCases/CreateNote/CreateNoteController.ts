import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { NoteRepository } from '../../repositories/NoteRepository';
import { CreateNoteUseCase } from './CreateNoteUseCase';

export class CreateNoteController {
  constructor (private createNoteUseCase = new CreateNoteUseCase(new NoteRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { body: { subject, content }, user: { sub: userId } } = req as UserRequest;
    const note = await this.createNoteUseCase.execute({ subject, content, userId });
    res.status(StatusCode.CREATED).json(note);
  }
}
