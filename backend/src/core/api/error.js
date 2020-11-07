import Logger from '../winston'
import { NOT_FOUND, INTERNAL_SERVER_ERROR } from './code'

export function error404 (req, res) {
  Logger.info(
    `IP: ${req.ip} -- ${req.method} -- NOT_FOUND - ${req.originalUrl}`
  )

  res.status(NOT_FOUND).json({
    status: 'error',
    message: `🔍 - Not Found - ${req.originalUrl}`,
    results: null
  })
}

export function error500 (err, _req, res) {
  Logger.error(err)

  res.status(INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: '🤯 - Internal Server Error',
    results: null
  })
}
