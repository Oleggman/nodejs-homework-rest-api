import express from 'express';
import contactsController from '../../controllers/contacts-controller.js';

const router = express.Router();

router.get('/', contactsController.getMovies);

router.get('/:contactId', contactsController.getMovieById);

router.post('/', contactsController.addMovie);

router.delete('/:contactId', contactsController.deleteMovie);

router.put('/:contactId', contactsController.updateMovie);

export default router;
