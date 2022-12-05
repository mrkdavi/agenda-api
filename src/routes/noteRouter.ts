import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { noteValidator } from '../middlewares/validators/noteValidator';
import { CreateNoteController } from '../useCases/CreateNote/CreateNoteController';
import { GetAllUserNotesController } from '../useCases/GetAllUserNotes/GetAllUserNotesController';

const router = Router();

const getAllUserNotesController = new GetAllUserNotesController();
const createNoteController = new CreateNoteController();

router.use(authentication);

router.get('/', getAllUserNotesController.handle);
router.post('/', noteValidator, createNoteController.handle);

export default router;
