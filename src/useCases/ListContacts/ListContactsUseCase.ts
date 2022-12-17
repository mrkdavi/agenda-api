import { IContactRepository } from '../../@types/repositories/IContactRepository';

export class ListContactsUseCase {
  constructor (private contactRepository: IContactRepository) {}

  async execute ({ userId }: { userId: string }) {
    return this.contactRepository.listContacts(userId);
  }
}
