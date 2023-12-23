// import * as contactsService from '../models/contacts.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';

const getMovies = async (req, res, next) => {
  const contacts = await contactsService.listContacts();
  res.json(contacts)
}

const getMovieById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);
  if (!contact) {
    throw HttpError(404);
  }

  res.json(contact)
}

const addMovie = async (req, res, next) => {
  const { name, email, phone } = req.body;
  const newContact = await contactsService.addContact(name, email, phone);
  res.status(201).json(newContact);
}

const updateMovie = async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const newContact = await contactsService.updateContact(contactId, body);
  if (!newContact) {
    throw HttpError(404);
  }
  
  res.json(newContact);
}

const deleteMovie = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsService.removeContact(contactId);
  if (!result) {
    throw HttpError(404);
  }

  res.json({ "message": "contact deleted" });
}

export default {
  getMovies: ctrlWrapper(getMovies),
  getMovieById: ctrlWrapper(getMovieById),
  addMovie: ctrlWrapper(addMovie),
  updateMovie: ctrlWrapper(updateMovie),
  deleteMovie: ctrlWrapper(deleteMovie),
}