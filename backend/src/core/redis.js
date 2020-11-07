import redis from 'redis'
import {
  REDIS_HOST,
  REDIS_PORT
} from '../config'

const clientRedis = redis.createClient(REDIS_PORT, REDIS_HOST)

/** CREATE Redis() */
export const createRedis = async (token) => {
  clientRedis.set(token, token)
}
