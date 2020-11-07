import { Router } from 'express'

import check from '../../core/joi-validator'
import {
  loginSchema,
  verificationSchema
} from './schema'
import { login, verification, processToken } from './controller'

const router = Router()

// router.get('/login', getLogin)

router.post('/login', check(loginSchema, 'body'), login)

router.post(
  '/verification/:token',
  check(verificationSchema, 'params'),
  verification
)

router.post('/proctoken', processToken)

export default router
