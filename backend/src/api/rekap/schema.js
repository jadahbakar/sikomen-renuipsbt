const Joi = require('joi')

export const verificationProjectId = Joi.object({
  projectId: Joi.number().integer().required().min(2010000)
})
