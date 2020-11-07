import db from '../core/pg'

export const findLogin = (username, password) => db.query('SELECT sec.users_login($1, $2) AS users_login', [username, password])

export const actionToken = (action, token) => db.query('SELECT log.token_action($1, $2) AS status_token', [action, token])

export const getMenu = (role) => db.query('SELECT sec.generate_parent($1) AS menu', [role])

export const userResetPassword = (userId, password) => db.query('SELECT sec.users_reset_password($1,$2) AS users_reset_password', [userId, password])
