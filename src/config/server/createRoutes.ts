import { Express } from 'express';
import userRouter from '../../routes/userRouter';
import noteRouter from '../../routes/noteRouter';

export function createRoutes (app: Express) {
  app.use('/users', userRouter);
  app.use('/notes', noteRouter);
}
