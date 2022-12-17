import { IContactRepository } from '../@types/repositories/IContactRepository';
import { Contact } from '../entities/Contact/Contact';
import { prisma } from '../lib/prisma';
import { ContactMapper } from './mappers/ContactMapper';

export class ContactRepository implements IContactRepository {
  async addContact (contact: Contact): Promise<Contact> {
    const raw = ContactMapper.toPrisma(contact);
    const result = await prisma.contact.create({
      data: raw
    });
    return ContactMapper.toDomain(result);
  }
}
