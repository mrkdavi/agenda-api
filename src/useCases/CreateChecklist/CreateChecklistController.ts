import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ChecklistRepository } from '../../repositories/ChecklistRepository';
import { CreateChecklistUseCase } from './CreateChecklistUseCase';

export class CreateChecklistController {
  constructor (
    private createChecklistUseCase = new CreateChecklistUseCase(
      new ChecklistRepository()
    )
  ) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const {
      body: { name, items },
      user: { sub: userId }
    } = req as UserRequest;
    const checklist = await this.createChecklistUseCase.execute({
      name,
      items,
      userId
    });
    res.status(StatusCode.CREATED).json(checklist);
  }
}
