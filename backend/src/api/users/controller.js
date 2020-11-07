import fs from 'fs'
import jwt from 'jsonwebtoken'
import {
  NOT_FOUND,
  UNAUTHORIZED
} from '../../core/api/code'

import { ISSUER, MAX_AGE_MENU, ALGORITHM } from '../../config'
import { error, success } from '../../core/api/responses'
import {
  getMenu,
  actionToken,
  userResetPassword
} from '../../services/user'

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

export const menuUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    const token = authHeader.split(' ')

    // Ambil user role
    const responseAuth = jwt.verify(token[1], publicKey, options)
    const { rows, rowCount } = await getMenu(responseAuth.role)
    if (rowCount < 1) {
      return error(
        res,
        'Token Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      userMenu: rows
    })
  } catch (err) {
    return next(err)
  }
}

export const logout = async (req, res, next) => {
  try {
    const { action } = req.body
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')

    const { rows, rowCount } = await actionToken(action, token[1])
    if (rowCount < 1) {
      return error(
        res,
        'Token Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      statusToken: rows[0].status_token
    })
  } catch (err) {
    return next(err)
  }
}

export const checktoken = async (req, res, next) => {
  try {
    const action = 'check'
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')

    const { rows, rowCount } = await actionToken(action, token[1])
    if (rowCount < 1) {
      return error(
        res,
        'Token Not Found',
        NOT_FOUND
      )
    }
    if (rows[0].status_token === 'fail') {
      return error(
        res,
        'Token Expired',
        UNAUTHORIZED
      )
    }

    return success(res, 'Success.', {
      statusToken: rows[0].status_token
    })
  } catch (err) {
    return next(err)
  }
}

export const resetPassword = async (req, res, next) => {
  try {
    const { userId, password } = req.body

    const { rows, rowCount } = await userResetPassword(userId, password)
    if (rowCount < 1) {
      return error(
        res,
        'UserID Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].users_reset_password
    )
  } catch (err) {
    return next(err)
  }
}
