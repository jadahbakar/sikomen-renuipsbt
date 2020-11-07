
import {
  INTERNAL_SERVER_ERROR
} from '../../core/api/code'

import { error, success } from '../../core/api/responses'
import {
  dashboardGetAll
} from '../../services/dashboard'

// -------------------------- M A S T E R
export const getDashboardGetAll = async (req, res, next) => {
  try {
    const { rows, rowCount } = await dashboardGetAll()

    if (rowCount < 1) {
      return error(
        res,
        'Proses Simpan Project Error',
        INTERNAL_SERVER_ERROR
      )
    }

    return success(res, 'Success.',
      rows[0].dashboard_get_all
    )
  } catch (err) {
    return next(err)
  }
}
