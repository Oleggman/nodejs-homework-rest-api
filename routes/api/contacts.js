import express from 'express';
import contactsController from '../../controllers/contacts-controller.js';
import isEmptyBody from '../../middlewares/isEmptyBody.js';

const router = express.Router();

router.get('/', contactsController.getMovies);

router.get('/:contactId', contactsController.getMovieById);

router.post('/', isEmptyBody, contactsController.addMovie);

router.put('/:contactId', isEmptyBody, contactsController.updateMovie);

router.delete('/:contactId', contactsController.deleteMovie);

export default router;
