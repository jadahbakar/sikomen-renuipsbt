import {
  NOT_FOUND,
  INTERNAL_SERVER_ERROR
} from '../../core/api/code'

import { error, success } from '../../core/api/responses'
import {
  getAllProject,
  getProjectByID,
  getProjectPIC,
  getProjectByKatPropJenis,
  postProjectIUD,
  postProjectPicIUD,
  deleteProjectPicByProjectId
} from '../../services/project'

export const projectAll = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllProject()
    if (rowCount < 1) {
      return error(
        res,
        'Master Project Not Found',
        NOT_FOUND
      )
    }
    return success(res, 'Success.', {
      projectAll: rows[0].project
    })
  } catch (err) {
    return next(err)
  }
}

export const projectByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getProjectByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Project Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      projectAll: rows[0].project
    })
  } catch (err) {
    return next(err)
  }
}

export const projectByKatPropJenis = async (req, res, next) => {
  try {
    const { kategori, propinsi, jenis } = req.params
    const { rows, rowCount } = await getProjectByKatPropJenis(kategori, propinsi, jenis)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Project Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      projectAll: rows[0].project
    })
  } catch (err) {
    return next(err)
  }
}

export const projectPIC = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getProjectPIC(id)

    if (rowCount < 1) {
      return error(
        res,
        'PIC Project Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      projectPic: rows[0].project_pic
    })
  } catch (err) {
    return next(err)
  }
}

export const postProject = async (req, res, next) => {
  try {
    const {
      action,
      id,
      kategori,
      propinsi,
      jenis,
      nama,
      nomorKontrak,
      kontraktorNama,
      targetCod,
      status,
      engineeringStatus,
      picKontraktor,
      picPln
    } = req.body
    // console.log(req.body)
    const { rows, rowCount } = await postProjectIUD(
      action,
      id,
      kategori,
      propinsi,
      jenis,
      nama,
      nomorKontrak,
      kontraktorNama,
      targetCod,
      status,
      engineeringStatus)

    if (rowCount < 1) {
      return error(
        res,
        'Proses Simpan Project Error',
        INTERNAL_SERVER_ERROR
      )
    }

    const projectID = rows[0].project_iud
    if (action !== 'd') {
      picKontraktor.map(el => {
        // const { rowspicKontraktor, rowCountpicKontraktor } = postProjectPicIUD(projectID, 2, el.picKontraktor)
        postProjectPicIUD(projectID, 2, el.picKontraktor)
      })
      picPln.map(el => {
        // const { rowspicpln, rowCountpicpln } = postProjectPicIUD(projectID, 1, el.picPln)
        postProjectPicIUD(projectID, 1, el.picPln)
      })
    }

    return success(res, 'Success.',
      projectID
    )
  } catch (err) {
    return next(err)
  }
}

export const putProject = async (req, res, next) => {
  try {
    const {
      action,
      id,
      kategori,
      propinsi,
      jenis,
      nama,
      nomorKontrak,
      kontraktorNama,
      targetCod,
      status,
      engineeringStatus,
      picKontraktor,
      picPln
    } = req.body
    // console.log(req.body)
    const { rows, rowCount } = await postProjectIUD(
      action,
      id,
      kategori,
      propinsi,
      jenis,
      nama,
      nomorKontrak,
      kontraktorNama,
      targetCod,
      status,
      engineeringStatus)

    if (rowCount < 1) {
      return error(
        res,
        'Proses Simpan Project Error',
        INTERNAL_SERVER_ERROR
      )
    }

    const projectID = rows[0].project_iud
    // Clear pic project
    // const { rowDelPic, rowCountDelPic } = deleteProjectPicByProjectId(projectID)
    deleteProjectPicByProjectId(projectID)

    picKontraktor.map(el => {
      // const { rowspicKontraktor, rowCountpicKontraktor } = postProjectPicIUD(projectID, 2, el.picKontraktor)
      postProjectPicIUD(projectID, 2, el.picKontraktor)
    })
    picPln.map(el => {
      // const { rowspicpln, rowCountpicpln } = postProjectPicIUD(projectID, 1, el.picPln)
      postProjectPicIUD(projectID, 1, el.picPln)
    })

    return success(res, 'Success.',
      projectID
    )
  } catch (err) {
    return next(err)
  }
}
