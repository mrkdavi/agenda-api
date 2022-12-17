import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ContactRepository } from '../../repositories/ContactRepository';
import { AddContactUseCase } from './AddContactUseCase';

export class AddContactController {
  constructor (private addContactUseCase = new AddContactUseCase(new ContactRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { body: { name, phone, note }, user: { sub: userId } } = req as UserRequest;
    const contact = await this.addContactUseCase.execute({ name, phone, note, userId });
    res.status(StatusCode.CREATED).json(contact.mapToObject());
  }
}
