import { Router } from 'express';
import { errorHandlerWrapper } from '../middlewares/errorHandlerWrapper';
import { userValidator } from '../middlewares/userValidator';
import { SignUpController } from '../use-cases/SignUp/SignUpController';

const router = Router();

const signUpController = new SignUpController();

router.post('/', userValidator, errorHandlerWrapper(signUpController.handle));

export default router;
