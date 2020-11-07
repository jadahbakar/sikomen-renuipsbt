import { Router } from 'express'

import check from '../../core/joi-validator'
import { verificationPropinsi, verificationDokumen, verificationProject, verificationProjectRows } from './schema'
import {
  allPropinsi,
  propinsiByID,
  allDokumenStatus,
  dokumenStatusByID,
  allDokumenType,
  dokumenTypeByID,
  allEngineeringStatus,
  EngineeringStatusByID,
  allPICType,
  PICTypeByID,
  allProjectKategori,
  ProjectKategoriByID,
  allProjectJenis,
  ProjectJenisByID,
  ProjectJenisByKategori,
  allProjectStatus,
  ProjectStatusByID,
  ProjectColumnAll,
  ProjectRowByKategoriJenis
} from './controller'

const router = Router()

router.get('/propinsi/all', allPropinsi)
router.get('/propinsi/:id', check(verificationPropinsi, 'params'), propinsiByID)
router.get('/dokumenstatus/all', allDokumenStatus)
router.get('/dokumenstatus/:id', check(verificationDokumen, 'params'), dokumenStatusByID)
router.get('/dokumentype/all', allDokumenType)
router.get('/dokumentype/:id', check(verificationDokumen, 'params'), dokumenTypeByID)
router.get('/engineeringstatus/all', allEngineeringStatus)
router.get('/engineeringstatus/:id', check(verificationDokumen, 'params'), EngineeringStatusByID)
router.get('/pictype/all', allPICType)
router.get('/pictype/:id', check(verificationDokumen, 'params'), PICTypeByID)
router.get('/projectkategori/all', allProjectKategori)
router.get('/projectkategori/:id', check(verificationDokumen, 'params'), ProjectKategoriByID)
router.get('/projectjenis/all', allProjectJenis)
router.get('/projectjenisid/:kategori/:id', check(verificationProject, 'params'), ProjectJenisByID)
router.get('/projectjeniskategori/:id', check(verificationDokumen, 'params'), ProjectJenisByKategori)
router.get('/projectstatus/all', allProjectStatus)
router.get('/projectstatus/:id', check(verificationDokumen, 'params'), ProjectStatusByID)

router.get('/projectcolumnall', ProjectColumnAll)

router.get('/projectrowbykategorijenis/:kategori/:jenis', check(verificationProjectRows, 'params'), ProjectRowByKategoriJenis)

export default router
