const Joi = require('joi')

export const verificationPropinsi = Joi.object({
  id: Joi.number().integer().required().min(13).max(94)
})

export const verificationDokumen = Joi.object({
  id: Joi.number().integer().required().min(1).max(6)
})

export const verificationProject = Joi.object({
  kategori: Joi.number().integer().required().min(1).max(6),
  id: Joi.number().integer().required().min(1).max(6)
})

export const verificationProjectRows = Joi.object({
  kategori: Joi.number().integer().required().min(1).max(6),
  jenis: Joi.number().integer().required().min(1).max(6)
})
