import { config } from 'dotenv'

config()

export const MAIL_MAILER = process.env.MAIL_MAILER || 'smtp'
export const MAIL_HOST = process.env.MAIL_HOST || 'smtp.mailtrap.io'
export const MAIL_PORT = parseInt(process.env.MAIL_PORT, 10) || 2525
export const MAIL_USERNAME = process.env.MAIL_USERNAME || 'username'
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD || 'password'
export const MAIL_ENCRYPTION = process.env.MAIL_ENCRYPTION || null
export const MAIL_FROM_ADDRESS = process.env.MAIL_FROM_ADDRESS || 'your.mail@mail.com'
export const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'NODE STARTER API ES6'
