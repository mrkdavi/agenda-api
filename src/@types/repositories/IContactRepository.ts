import { Contact } from '../../entities/Contact/Contact';

export interface IContactRepository {
  addContact(contact : Contact): Promise<Contact>;
}
