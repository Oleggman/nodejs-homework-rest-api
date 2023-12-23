import express from 'express';
import contactsController from '../../controllers/contacts-controller.js';
import isValidId from '../../middlewares/isValidId.js';
import isEmptyBody from '../../decorators/isEmptyBody.js';
import validateBody from '../../decorators/validateBody.js';
import { contactAddSchema, contactUpdateFavoriteSchema, contactUpdateSchema } from '../../models/Contacts.js';

const router = express.Router();

router.get('/', contactsController.getMovies);

router.get('/:contactId', isValidId, contactsController.getMovieById);

router.post('/', isEmptyBody('missing fields'), validateBody(contactAddSchema), contactsController.addMovie);

router.put('/:contactId', isValidId, isEmptyBody('missing fields'), validateBody(contactUpdateSchema), contactsController.updateMovie);

router.patch('/:contactId/favorite', isValidId, isEmptyBody('missing field favorite'), validateBody(contactUpdateFavoriteSchema), contactsController.updateStatusContact);

router.delete('/:contactId', isValidId, contactsController.deleteMovie);

export default router;
