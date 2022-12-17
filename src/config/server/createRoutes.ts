import { Express } from 'express';
import userRouter from '../../routes/userRouter';
import noteRouter from '../../routes/noteRouter';
import contactRouter from '../../routes/contactRouter';

export function createRoutes (app: Express) {
  app.use('/users', userRouter);
  app.use('/notes', noteRouter);
  app.use('/contacts', contactRouter);
}
