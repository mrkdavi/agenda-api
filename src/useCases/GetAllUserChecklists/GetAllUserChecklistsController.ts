import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ChecklistRepository } from '../../repositories/ChecklistRepository';
import { GetAllUserChecklistsUseCase } from './GetAllUserChecklistsUseCase';

export class GetAllUserChecklistsController {
  constructor (
    private getAllUserChecklistsUseCase = new GetAllUserChecklistsUseCase(
      new ChecklistRepository()
    )
  ) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const {
      user: { sub: userId }
    } = req as UserRequest;
    const checklists = await this.getAllUserChecklistsUseCase.execute(userId);
    res.status(StatusCode.OK).json(checklists);
  }
}
