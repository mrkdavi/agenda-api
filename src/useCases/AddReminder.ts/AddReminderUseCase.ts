import { ReminderRequestData } from '../../@types/DTOs/ReminderDTO';
import { IReminderRepository } from '../../@types/repositories/IReminderRepository';
import { Reminder } from '../../entities/Reminder/Reminder';

export class AddReminderUseCase {
  constructor (private contactRepository: IReminderRepository) {}

  async execute ({ name, remindAt, reminded, note, userId }: ReminderRequestData) {
    const reminder = new Reminder({ name, remindAt, note, reminded, userId });
    return this.contactRepository.addReminder(reminder);
  }
}
