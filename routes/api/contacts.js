import express from 'express';
import * as contactsService from '../../models/contacts.js';

const router = express.Router()

router.get('/', async (req, res, next) => {
  const contacts = await contactsService.listContacts();
  res.json(contacts)
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);
  res.json(contact)
})

router.post('/', async (req, res, next) => {
  const { name, email, phone } = req.body;
  const newContact = await contactsService.addContact(name, email, phone);
  res.status(201).json(newContact)
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  await contactsService.removeContact(contactId);
  res.json({"message": "contact deleted"})
})

router.put('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const newContact = await contactsService.updateContact(contactId, body);
  res.json(newContact)
})

export default router;
