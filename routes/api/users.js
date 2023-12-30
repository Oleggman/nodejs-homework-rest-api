import express from 'express';
import usersController from '../../controllers/users-controller.js';
import isValidId from '../../middlewares/isValidId.js';
import isEmptyBody from '../../decorators/isEmptyBody.js';
import validateBody from '../../decorators/validateBody.js';
import { userSigninSchema, userSignupSchema } from '../../models/User.js';
import auth from '../../middlewares/auth.js';

const router = express.Router();

router.post('/register', isEmptyBody('missing fields'), validateBody(userSignupSchema), usersController.signup);

router.post('/login', isEmptyBody('missing fields'), validateBody(userSigninSchema), usersController.signin);

router.post('/logout', auth, usersController.signout);

export default router;