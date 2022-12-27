import { IReminderRepository } from '../@types/repositories/IReminderRepository';
import { Reminder } from '../entities/Reminder/Reminder';
import { prisma } from '../lib/prisma';
import { ReminderMapper } from './mappers/ReminderMapper';
import { UserMapper } from './mappers/UserMapper';

export class ReminderRepository implements IReminderRepository {
  async listAllReminders (): Promise<Reminder[]> {
    const result = await prisma.reminder.findMany({ include: { User: true } });
    return result.map((item) => {
      const { User, ...reminder } = item;
      const reminderWithUser = ReminderMapper.toDomain(reminder);
      reminderWithUser.user = UserMapper.toDomain(User);
      return reminderWithUser;
    });
  }

  async listAllRemindersToSend (dateLimit: Date): Promise<Reminder[]> {
    const result = await prisma.reminder.findMany({
      include: { User: true },
      where: {
        reminded: null,
        remindAt: {
          lte: dateLimit,
          gte: new Date()
        }
      }
    });
    return result.map((item) => {
      const { User, ...reminder } = item;
      const reminderWithUser = ReminderMapper.toDomain(reminder);
      reminderWithUser.user = UserMapper.toDomain(User);
      return reminderWithUser;
    });
  }

  async addReminder (reminder: Reminder): Promise<Reminder> {
    const raw = ReminderMapper.toPrisma(reminder);
    const result = await prisma.reminder.create({ data: raw });
    return ReminderMapper.toDomain(result);
  }

  async updateReminder (reminder: Reminder): Promise<void> {
    const raw = ReminderMapper.toPrisma(reminder);
    await prisma.reminder.update({ data: raw, where: { id: reminder.id } });
  }
}
