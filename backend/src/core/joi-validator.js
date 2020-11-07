import { UNPROCESSABLE_ENTITY } from './api/code'

export default (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property])

  if (error) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      status: 'error',
      message: 'Unprocessable Entity',
      results: error.details.map((i) => ({
        [i.path[0]]: i.message.replace(/".*" /, '')
      }))[0]
    })
  }

  return next()
}
