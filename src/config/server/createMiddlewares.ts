import { Express, json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

export function createMiddlewares (app: Express) {
  app.use(json());
  app.use(cors({ origin: true }))
  app.use(morgan('dev'));
}
