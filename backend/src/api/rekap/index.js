import { Router } from 'express'
import check from '../../core/joi-validator'
import { verificationProjectId } from './schema'

import {
  getRekapByProjectId
} from './controller'

const router = Router()
router.get('/:projectId', check(verificationProjectId, 'params'), getRekapByProjectId)

export default router
