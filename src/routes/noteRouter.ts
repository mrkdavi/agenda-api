import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { createNoteValidator } from '../middlewares/validators/createNoteValidator';
import { updateNoteValidator } from '../middlewares/validators/updateNoteValidator';
import { CreateNoteController } from '../useCases/CreateNote/CreateNoteController';
import { GetAllUserNotesController } from '../useCases/GetAllUserNotes/GetAllUserNotesController';
import { UpdateNoteController } from '../useCases/UpdateNote/UpdateNoteController';
import { DeleteNoteController } from '../useCases/DeleteNote/DeleteNoteController';

const router = Router();

const getAllUserNotesController = new GetAllUserNotesController();
const createNoteController = new CreateNoteController();
const updateNoteController = new UpdateNoteController();
const deleteNoteController = new DeleteNoteController();

router.use(authentication);

router.get('/', getAllUserNotesController.handle);
router.post('/', createNoteValidator, createNoteController.handle);
router.get('/:id', updateNoteController.handle);
router.patch('/:id', updateNoteValidator, updateNoteController.handle);
router.delete('/:id', deleteNoteController.handle);

export default router;
