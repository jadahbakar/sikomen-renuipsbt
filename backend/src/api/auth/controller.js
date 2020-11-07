import {
  NOT_FOUND,
  UNAUTHORIZED
} from '../../core/api/code'
import { sign } from '../../core/jsonwebtoken'
import { error, success } from '../../core/api/responses'
import {
  findLogin,
  actionToken
} from '../../services/user'

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const { rows, rowCount } = await findLogin(username, password)
    if (rowCount < 1) {
      return error(
        res,
        'These credentials do not match our records FU.',
        NOT_FOUND
      )
    }

    if (rows[0].users_login.users_nama === 0) {
      return error(
        res,
        'This User is Not Active',
        UNAUTHORIZED
      )
    }

    const genToken = sign({
      id: rows[0].users_login.users_id,
      name: rows[0].users_login.users_nama,
      email: rows[0].users_login.users_email,
      role: rows[0].users_login.users_role
    })

    const { rowToken, rowCountToken } = await actionToken('insert', genToken)
    if (rowCountToken < 1) {
      return error(
        res,
        'token Not Generated.',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      getUser: rows[0].users_login,
      token: genToken
    })
  } catch (err) {
    return next(err)
  }
}

export const verification = async (req, res, next) => {
  try {
    return success(res, 'Success.', {})
  } catch (err) {
    return next(err)
  }
}

export const processToken = async (req, res, next) => {
  try {
    const { action, token } = req.body
    const { rows, rowCount } = await actionToken(action, token)

    if (rowCount < 1) {
      return error(
        res,
        'These credentials do not match our records FU.',
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
