import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../../@types/errors/StatusCode';
import { UserRequest } from '../../@types/express/UserRequest';
import { errorHandlerWrapper } from '../../middlewares/errorHandlerWrapper';
import { ContactRepository } from '../../repositories/ContactRepository';
import { ListContactsUseCase } from './ListContactsUseCase';

export class ListContactsController {
  constructor (private listContactsUseCase = new ListContactsUseCase(new ContactRepository())) {
    this.handle = this.handle.bind(this);
    this.handle = errorHandlerWrapper(this.handle);
  }

  async handle (req: Request, res: Response, _next: NextFunction) {
    const { user: { sub: userId } } = req as UserRequest;
    const contacts = await this.listContactsUseCase.execute({ userId });
    res.status(StatusCode.OK).json(contacts.map((contact) => contact.mapToObject()));
  }
}
