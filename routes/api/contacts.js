import express from 'express';
import contactsController from '../../controllers/contacts-controller.js';
import isEmptyBody from '../../middlewares/isEmptyBody.js';
import validateBody from '../../decorators/validateBody.js';
import { contactAddSchema, contactUpdateSchema } from '../../schemas/contact-schemas.js';

const router = express.Router();

router.get('/', contactsController.getMovies);

router.get('/:contactId', contactsController.getMovieById);

router.post('/', isEmptyBody, validateBody(contactAddSchema), contactsController.addMovie);

router.put('/:contactId', isEmptyBody, validateBody(contactUpdateSchema), contactsController.updateMovie);

router.delete('/:contactId', contactsController.deleteMovie);

export default router;
