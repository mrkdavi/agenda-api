import 'dotenv/config';
import express from 'express';

import { createErrorHandler } from './config/server/createErrorHandler';
import { createMiddlewares } from './config/server/createMiddlewares';
import { createRoutes } from './config/server/createRoutes';
import { createSchemas } from './config/server/createSchemas';
import { createServer } from './config/server/createServer';

(() => {
  const app = express();

  createMiddlewares(app);
  createRoutes(app);
  createErrorHandler(app);
  createSchemas();
  createServer(app);
})();
