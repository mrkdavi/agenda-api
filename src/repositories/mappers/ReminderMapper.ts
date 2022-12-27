import { Reminder } from '../../entities/Reminder/Reminder';
import { Reminder as RawReminder } from '@prisma/client';
import { ReminderResponseData } from '../../@types/DTOs/ReminderDTO';

export class ReminderMapper {
  static toPrisma (reminder: Reminder): ReminderResponseData {
    return {
      userId: reminder.userId,
      name: reminder.name,
      remindAt: reminder.remindAt,
      reminded: reminder.reminded,
      note: reminder.note
    };
  }

  static toDomain (raw: RawReminder) {
    return new Reminder({
      id: raw.id,
      name: raw.name,
      remindAt: raw.remindAt,
      reminded: raw.reminded,
      userId: raw.userId,
      note: raw.note
    });
  }
}
