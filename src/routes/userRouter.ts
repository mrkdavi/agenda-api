import { Router } from 'express';
import { errorHandlerWrapper } from '../middlewares/errorHandlerWrapper';
import { SignUpController } from '../use-cases/SignUp/SignUpController';

const router = Router();

const signUpController = new SignUpController();

router.post('/', errorHandlerWrapper((res, req) => signUpController.handle(res, req)));

export default router;
