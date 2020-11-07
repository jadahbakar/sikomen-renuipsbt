import { config } from 'dotenv'

config()

export const ISSUER = process.env.ISSUER || 'SHANDY SISWANDI & DEDY STYAWAN ~ DEVELOPER'
export const ALGORITHM = process.env.ALGORITHM || 'RS256'

export const MAX_AGE_LOGIN = process.env.MAX_AGE_LOGIN || '1m'
export const MAX_AGE_MENU = process.env.MAX_AGE_MENU || '2h'
