import {
  INTERNAL_SERVER_ERROR
} from '../../core/api/code'

import { error, success } from '../../core/api/responses'
import {
  rekapByProjectId
} from '../../services/rekap'

// -------------------------- M A S T E R
export const getRekapByProjectId = async (req, res, next) => {
  try {
    const { projectId } = req.params
    // console.log('getRekapByProjectId -> req.params', req.params)
    const { rows, rowCount } = await rekapByProjectId(projectId)

    if (rowCount < 1) {
      return error(
        res,
        'Proses Simpan Project Error',
        INTERNAL_SERVER_ERROR
      )
    }

    return success(res, 'Success.',
      rows[0].dokumen_rekap
    )
  } catch (err) {
    return next(err)
  }
}
