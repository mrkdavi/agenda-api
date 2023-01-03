import { Express } from 'express';
import userRouter from '../../routes/userRouter';
import noteRouter from '../../routes/noteRouter';
import contactRouter from '../../routes/contactRouter';
import reminderRouter from '../../routes/reminderRouter';
import checklistRouter from '../../routes/checklistRouter';

export function createRoutes (app: Express) {
  app.use('/users', userRouter);
  app.use('/notes', noteRouter);
  app.use('/contacts', contactRouter);
  app.use('/reminders', reminderRouter);
  app.use('/checklist', checklistRouter);
}
