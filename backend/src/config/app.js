import { config } from 'dotenv'

config()

export const APP_ENV = process.env.NODE_ENV || 'production'
export const APP_PORT = parseInt(process.env.PORT, 10) || 8888
