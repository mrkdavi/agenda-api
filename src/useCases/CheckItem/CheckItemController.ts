import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ChecklistRepository } from '../../repositories/ChecklistRepository';
import { CheckItemUseCase } from './CheckItemUseCase';

export class CheckItemController {
  constructor (
    private checkItemUseCase = new CheckItemUseCase(new ChecklistRepository())
  ) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { params: { itemId }, user: { sub: userId } } = req as UserRequest;
    await this.checkItemUseCase.execute(itemId, userId);
    res.status(StatusCode.NO_CONTENT).end();
  }
}
