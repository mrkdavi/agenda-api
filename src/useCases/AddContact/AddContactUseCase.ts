import { ContactRequestData } from '../../@types/DTOs/ContactDTO';
import { IContactRepository } from '../../@types/repositories/IContactRepository';
import { Contact } from '../../entities/Contact/Contact';

export class AddContactUseCase {
  constructor (private contactRepository: IContactRepository) {}

  async execute ({ name, phone, note, userId }: ContactRequestData) {
    const contact = new Contact({ name, phone, note, userId });
    return this.contactRepository.addContact(contact);
  }
}
