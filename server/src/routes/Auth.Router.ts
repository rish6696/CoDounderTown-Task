import express, { Router } from 'express'
import { createValidator, ExpressJoiInstance } from 'express-joi-validation'
import { loginValidator, signUpValidator } from '../validators/Auth.validator'
import { signUpUserController,logoutController, loginUserController, validateUserController} from '../controllers/Auth.controller'


const validator: ExpressJoiInstance = createValidator({})

const authRouter: Router = express.Router();


authRouter.route('/user/signUp')
    .post(validator.body(signUpValidator), signUpUserController)

authRouter.route('/user/login')
    .post(validator.body(loginValidator),loginUserController)

authRouter.route('/user/validate')
     .post(validateUserController)

authRouter.route('user/logout')
    .get(logoutController)

export default authRouter