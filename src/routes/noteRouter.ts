import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { CreateNoteController } from '../useCases/CreateNote/CreateNoteController';
import { GetAllUserNotesController } from '../useCases/GetAllUserNotes/GetAllUserNotesController';

const router = Router();

const getAllUserNotesController = new GetAllUserNotesController();
const createNoteController = new CreateNoteController();

router.get('/', authentication, getAllUserNotesController.handle);
router.post('/', authentication, createNoteController.handle);

export default router;
