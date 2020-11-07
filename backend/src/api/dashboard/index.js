import { Router } from 'express'

import {
  getDashboardGetAll
} from './controller'

const router = Router()
router.get('/', getDashboardGetAll)
export default router
