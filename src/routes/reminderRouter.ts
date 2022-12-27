import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { AddReminderController } from '../useCases/AddReminder.ts/AddReminderController';

const router = Router();

const addReminderController = new AddReminderController();

router.use(authentication);

router.post('/', addReminderController.handle);

export default router;
