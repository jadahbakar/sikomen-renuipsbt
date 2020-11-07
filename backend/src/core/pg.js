import { Pool } from 'pg'

import Logger from './winston'
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME
} from '../config'

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  // connectionTimeoutMillis: 2000
  connectionTimeoutMillis: 0
})

pool.on('error', (err, client) => {
  Logger.error(`ERROR: ${err} -- CLIENT: ${client}`)
})

export default pool
