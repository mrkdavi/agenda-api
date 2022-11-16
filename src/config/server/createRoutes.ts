import { Express } from 'express';
import userRouter from '../../routes/userRouter';

export function createRoutes (app: Express) {
  app.use('/users', userRouter);
}
