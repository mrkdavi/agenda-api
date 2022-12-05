import { Router } from 'express';
import { userValidator } from '../middlewares/validators/userValidator';
import { loginValidator } from '../middlewares/validators/loginValidator';
import { SignUpController } from '../useCases/SignUp/SignUpController';
import { SignInController } from '../useCases/SignIn/SignInController';

const router = Router();

const signUpController = new SignUpController();
const signInController = new SignInController();

router.post('/', userValidator, signUpController.handle);
router.post('/login', loginValidator, signInController.handle);

export default router;
