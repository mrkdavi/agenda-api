import { Reminder } from '../../entities/Reminder/Reminder';

export interface IReminderRepository {
  addReminder(reminder : Reminder): Promise<Reminder>;
  listAllReminders(): Promise<Reminder[]>;
  listAllRemindersToSend(limitDate: Date): Promise<Reminder[]>;
  updateReminder (reminder: Reminder): Promise<void>;
}
