import { Router } from 'express';
import { authentication } from '../middlewares/authentication';
import { CreateNoteController } from '../useCases/CreateNote/CreateNoteController';

const router = Router();

const createNoteController = new CreateNoteController();

router.post('/', authentication, createNoteController.handle);

export default router;
