import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { AddContactController } from '../useCases/AddContact/AddContactController';

const router = Router();

const addContactController = new AddContactController();

router.use(authentication);

router.post('/', addContactController.handle);

export default router;
