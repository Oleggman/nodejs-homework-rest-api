import Contact from '../models/Contacts.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';

const getMovies = async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts)
}

const getMovieById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    throw HttpError(404);
  }

  res.json(contact)
}

const addMovie = async (req, res, next) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json(newContact);
}

const updateMovie = async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const newContact = await Contact.findByIdAndUpdate(contactId, body);
  if (!newContact) {
    throw HttpError(404);
  }
  
  res.json(newContact);
}

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const newContact = await Contact.findByIdAndUpdate(contactId, body);
  if (!newContact) {
    throw HttpError(404);
  }
  
  res.json(newContact);
}

const deleteMovie = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
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
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteMovie: ctrlWrapper(deleteMovie),
}