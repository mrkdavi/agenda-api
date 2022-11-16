import 'dotenv/config';
import express from 'express';
import { createErrorHandler } from './config/server/createErrorHandler';
import { createMiddlewares } from './config/server/createMiddlewares';
import { createServer } from './config/server/createServer';

const app = express();

createMiddlewares(app);
createErrorHandler(app);
createServer(app);
