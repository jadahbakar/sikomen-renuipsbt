import { Router } from 'express'
import upload from '../../config/multerupload'

import {
  postDokumenMaster,
  deleteDokumenMaster,
  postDokumenDetail,
  downloadTemplate,
  downloadDokumenPdf
  // uploadFile
} from './controller'

const router = Router()
router.post('/master', postDokumenMaster)
router.delete('/master', deleteDokumenMaster)
router.post('/detail', upload.array('lampiran', 2), postDokumenDetail)
router.get('/download/xls', downloadTemplate)
router.get('/download/pdf/:dokumenMasterId/:dokumenDetailId', downloadDokumenPdf)

export default router
