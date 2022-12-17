import { Contact } from '../../entities/Contact/Contact';

export interface IContactRepository {
  listContacts(userId: string): Promise<Contact[]>;
  addContact(contact : Contact): Promise<Contact>;
}
