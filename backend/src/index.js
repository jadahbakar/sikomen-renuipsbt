import http from 'http'

import app from './app'
import { APP_PORT } from './config'
import logger from './core/winston'

const server = http.createServer(app)

server.listen(APP_PORT)

server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`
  logger.info(`Listening on ${bind}`)
})
