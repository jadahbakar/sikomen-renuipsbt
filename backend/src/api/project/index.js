import { Router } from 'express'

import check from '../../core/joi-validator'
import { verificationProject, verificationKatPropJenis } from './schema'

import {
  projectAll,
  projectByID,
  projectByKatPropJenis,
  projectPIC,
  postProject,
  putProject
} from './controller'

const router = Router()

router.get('/all', projectAll)
router.get('/:id', check(verificationProject, 'params'), projectByID)
router.get('/detail/:kategori/:propinsi/:jenis', check(verificationKatPropJenis, 'params'), projectByKatPropJenis)

router.get('/pic/:id', check(verificationProject, 'params'), projectPIC)
router.post('/', postProject)
router.put('/', putProject)

export default router
