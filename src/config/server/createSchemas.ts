import cron from 'node-cron';
import { ReminderRepository } from '../../repositories/ReminderRepository';
import { CheckReminders } from '../../schedules/CheckReminders';

export function createSchemas () {
  cron.schedule('0 */30 * * * *', async () => {
    console.log('running a task every 30 minutes');
    new CheckReminders(new ReminderRepository()).run();
  });
}
