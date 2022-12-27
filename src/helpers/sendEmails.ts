import { IReminderRepository } from '../@types/repositories/IReminderRepository';
import { Reminder } from '../entities/Reminder/Reminder';
import { EmailSender } from './EmailSender';

export function sendEmails (reminders: Reminder[], reminderRepository: IReminderRepository) {
  const emails = reminders.map((reminder) => {
    if (!reminder.user) return undefined;
    const hours = reminder.remindAt.getHours();
    const minutes = reminder.remindAt.getMinutes();
    const email = {
      to: reminder.user.email,
      subject: `You have a reminder to ${reminder.name} at ${hours}:${minutes}`,
      message: reminder.note ?? ''
    };
    return new EmailSender(email).send().then(() => {
      reminder.reminded = true;
      return reminderRepository.updateReminder(reminder);
    });
  });
  Promise.all(emails);
}
