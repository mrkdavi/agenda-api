import { Express } from 'express';

export function createServer (app: Express) {
  const { PORT } = process.env;
  app.listen(PORT, () => console.log(`Server starts at port ${PORT}...`));
}
