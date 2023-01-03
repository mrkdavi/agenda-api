import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { CheckItemController } from '../useCases/CheckItem/CheckItemController';
import { CreateChecklistController } from '../useCases/CreateChecklist/CreateChecklistController';
import { GetAllUserChecklistsController } from '../useCases/GetAllUserChecklists/GetAllUserChecklistsController';
import { GetOneUserNoteController } from '../useCases/GetOneUserNote/GetOneUserNoteController';

const router = Router();

const getAllUserChecklistsController = new GetAllUserChecklistsController();
const createChecklistController = new CreateChecklistController();
const getOneUserNoteController = new GetOneUserNoteController();
const checkItemController = new CheckItemController();

router.use(authentication);

router.get('/', getAllUserChecklistsController.handle);
router.post('/', createChecklistController.handle);
router.get('/:checklistId', getOneUserNoteController.handle);
router.patch('/:itemId', checkItemController.handle);

export default router;
