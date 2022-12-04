import { Router } from 'express';
import { errorHandlerWrapper } from '../middlewares/errorHandlerWrapper';
import { userValidator } from '../middlewares/validators/userValidator';
import { loginValidator } from '../middlewares/validators/loginValidator';
import { SignUpController } from '../use-cases/SignUp/SignUpController';
import { SignInController } from '../use-cases/SignIn/SignInController';

const router = Router();

const signUpController = new SignUpController();
const signInController = new SignInController();

router.post('/', userValidator, errorHandlerWrapper((req, res) => signUpController.handle(req, res)));
router.post('/login', loginValidator, errorHandlerWrapper((req, res) => signInController.handle(req, res)));

export default router;
