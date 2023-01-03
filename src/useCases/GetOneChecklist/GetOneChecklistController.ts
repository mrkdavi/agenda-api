import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ChecklistRepository } from '../../repositories/ChecklistRepository';
import { GetOneChecklistUseCase } from './GetOneChecklistUseCase';

export class GetOneUserNoteController {
  constructor (
    private getOneUserNoteUseCase = new GetOneChecklistUseCase(new ChecklistRepository())
  ) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { params: { checklistId }, user: { sub: userId } } = req as UserRequest;
    const checklist = await this.getOneUserNoteUseCase.execute(checklistId, userId);
    res.status(StatusCode.OK).json(checklist);
  }
}
