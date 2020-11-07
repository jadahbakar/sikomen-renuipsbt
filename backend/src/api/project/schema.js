const Joi = require('joi')

export const verificationProject = Joi.object({
  id: Joi.number().integer().required().min(2009000)
})

export const verificationKatPropJenis = Joi.object({
  kategori: Joi.number().integer().required().min(1).max(6),
  propinsi: Joi.number().integer().required().min(13).max(15),
  jenis: Joi.number().integer().required().min(1).max(6)
})
