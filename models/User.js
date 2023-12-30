import { Schema, model } from "mongoose";
import Joi from "joi";

import { handleSaveError, addUpdateSettings } from "./hooks";

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: String
}, { versionKey: false });

userSchema.post('save', handleSaveError);
userSchema.pre('findOneAndUpdate', addUpdateSettings);
userSchema.post('findOneAndUpdate', handleSaveError);

export const userSignupSchema = Joi.object({
  password: Joi.string().required().messages({
    'any.required': "missing required field"
  }),
  email: Joi.string().required().messages({
    'any.required': "missing required field"
  }),
  subscription: Joi.string().valid('starter','pro','business').messages({
    'any.required': "missing required field"
  }).default('starter'),
});

export const userSigninSchema = Joi.object({
  password: Joi.string().required().messages({
    'any.required': "missing required field"
  }),
  email: Joi.string().required().messages({
    'any.required': "missing required field"
  }),
});

const User = model('user', userSchema);

export default User;