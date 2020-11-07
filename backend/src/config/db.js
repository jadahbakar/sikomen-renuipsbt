import { config } from 'dotenv'

config()

export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = parseInt(process.env.DB_PORT, 10) || 5432
export const DB_NAME = process.env.DB_DATABASE || 'node_api'
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres'
