const Joi = require('joi')

export const verificationMaster = Joi.object({
  id: Joi.number().integer().required().min(2009000)
})
