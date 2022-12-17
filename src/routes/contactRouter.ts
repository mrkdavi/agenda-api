import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { AddContactController } from '../useCases/AddContact/AddContactController';
import { ListContactsController } from '../useCases/ListContacts/ListContactsController';

const router = Router();

const addContactController = new AddContactController();
const listContactsController = new ListContactsController();

router.use(authentication);

router.get('/', listContactsController.handle);
router.post('/', addContactController.handle);

export default router;
