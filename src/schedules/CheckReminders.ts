import { IReminderRepository } from '../@types/repositories/IReminderRepository';
import { sendEmails } from '../helpers/sendEmails';

export class CheckReminders {
  constructor (private reminderRepository: IReminderRepository) {}

  async run () {
    const TIME = +process.env.TIME_TO_REMIND * 3600000 || 21600000;
    const limitDate = new Date((+new Date()) + TIME);
    const reminders = await this.reminderRepository.listAllRemindersToSend(limitDate);
    if (reminders.length) {
      sendEmails(reminders, this.reminderRepository);
    }
  }
}
