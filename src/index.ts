import 'dotenv/config';
import express from 'express';
import { createMiddlewares } from './config/server/createMiddlewares';
import { createServer } from './config/server/createServer';

const app = express();

createMiddlewares(app);
createServer(app);
