import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ReminderRepository } from '../../repositories/ReminderRepository';
import { AddReminderUseCase } from './AddReminderUseCase';

export class AddReminderController {
  constructor (private addReminderController = new AddReminderUseCase(new ReminderRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { body: { name, remindAt, note }, user: { sub: userId } } = req as UserRequest;
    const reminder = await this.addReminderController.execute({
      name, remindAt, note, userId, reminded: null
    });
    res.status(StatusCode.CREATED).json(reminder.mapToObject());
  }
}
