const Joi = require('joi')

export const loginSchema = Joi.object({
  username: Joi.string().required().trim(),
  password: Joi.string().required().trim()
})

export const verificationSchema = Joi.object({
  id: Joi.number().integer().required().min(11).max(94)
})
