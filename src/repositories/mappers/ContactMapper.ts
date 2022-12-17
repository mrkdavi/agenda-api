import { ContactResponseData } from '../../@types/DTOs/ContactDTO';
import { Contact } from '../../entities/Contact/Contact';
import { Contact as RawContact } from '@prisma/client';

export class ContactMapper {
  static toPrisma (contact: Contact): ContactResponseData {
    return {
      userId: contact.userId,
      name: contact.name,
      phone: contact.phone,
      note: contact.note ?? null
    };
  }

  static toDomain (raw: RawContact) {
    return new Contact({
      id: raw.id,
      name: raw.name,
      phone: raw.phone,
      userId: raw.userId,
      note: raw.note
    });
  }
}
