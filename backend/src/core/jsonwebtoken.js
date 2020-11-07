import fs from 'fs'
import jwt from 'jsonwebtoken'

import { error } from './api/responses'
import { UNAUTHORIZED } from './api/code'
import {
  ISSUER,
  MAX_AGE_MENU,
  ALGORITHM
} from '../config'

/** PRIVATE KEY */
const privateKey = fs.readFileSync(
  'storage/keys/jwt/private.key',
  'utf8'
)

/** PUBLIC KEY */
const publicKey = fs.readFileSync(
  'storage/keys/jwt/public.key',
  'utf8'
)

const options = {
  issuer: ISSUER,
  expiresIn: MAX_AGE_MENU,
  algorithm: ALGORITHM
}

/** TOKEN sign() */
// export const signLogin = (data) => jwt.sign(data, privateKey, optionsLogin)

/** TOKEN sign() */
// export const jwtSign = (data) => {
//   const content = data.content
//   const options = {
//     issuer: ISSUER,
//     expiresIn: data.maxAge,
//     algorithm: ALGORITHM
//   }
//   const token = jwt.sign(content, privateKey, options)
//   return token
// }

export const sign = (data) => jwt.sign(data, privateKey, options)

/** TOKEN verify() */
export const verify = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return error(res, 'Token Required.', UNAUTHORIZED)
  }

  const token = authHeader.split(' ')

  if (token[0] !== 'Bearer') {
    return error(res, 'Bearer Required.', UNAUTHORIZED)
  }

  return jwt.verify(token[1], publicKey, options, (err, user) => {
    if (err) {
      return error(res, 'Invalid Token.', UNAUTHORIZED)
    }
    req.auth = user

    return next()
  })
}
