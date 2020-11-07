import {
  NOT_FOUND
} from '../../core/api/code'

import { error, success } from '../../core/api/responses'
import {
  getAllPropinsi,
  getPropinsiByID,
  getAllDokumenStatus,
  getAllDokumenStatusByID,
  getAllDokumenType,
  getAllDokumenTypeByID,
  getAllEngineeringStatus,
  getAllEngineeringStatusByID,
  getAllPICType,
  getAllPICTypeByID,
  getAllProjectKategori,
  getAllProjectKategoriByID,
  getAllProjectJenis,
  getProjectJenisByID,
  getProjectJenisByKategori,
  getAllProjectStatus,
  getAllProjectStatusByID,
  getProjectColumnAll,
  getProjectRowByKategoriJenis
} from '../../services/master'

export const allPropinsi = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllPropinsi()
    if (rowCount < 1) {
      return error(
        res,
        'Master Propinsi Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].propinsi_get
    )
  } catch (err) {
    return next(err)
  }
}

export const propinsiByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getPropinsiByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Propinsi Not Found',
        NOT_FOUND
      )
    }
    return success(res, 'Success.',
      rows[0].propinsi_get_detail
    )
  } catch (err) {
    return next(err)
  }
}

export const allDokumenStatus = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllDokumenStatus()
    if (rowCount < 1) {
      return error(
        res,
        'Master Dokumen Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].dokumen_status
    )
  } catch (err) {
    return next(err)
  }
}

export const dokumenStatusByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getAllDokumenStatusByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Dokumen Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      rows
    })
  } catch (err) {
    return next(err)
  }
}

export const allDokumenType = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllDokumenType()
    if (rowCount < 1) {
      return error(
        res,
        'Master Dokumen Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].dokumen_type
    )
  } catch (err) {
    return next(err)
  }
}

export const dokumenTypeByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getAllDokumenTypeByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Dokumen Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      rows
    })
  } catch (err) {
    return next(err)
  }
}

export const allEngineeringStatus = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllEngineeringStatus()
    if (rowCount < 1) {
      return error(
        res,
        'Engineering Status Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].engineering_status_get
    )
  } catch (err) {
    return next(err)
  }
}

export const EngineeringStatusByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getAllEngineeringStatusByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Engineering Status Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].engineering_status_detail
    )
  } catch (err) {
    return next(err)
  }
}

export const allPICType = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllPICType()
    if (rowCount < 1) {
      return error(
        res,
        'PIC Type Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      rows
    })
  } catch (err) {
    return next(err)
  }
}

export const PICTypeByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getAllPICTypeByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail PIC Type Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      rows
    })
  } catch (err) {
    return next(err)
  }
}

export const allProjectKategori = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllProjectKategori()
    if (rowCount < 1) {
      return error(
        res,
        'Project Type Not Found',
        NOT_FOUND
      )
    }
    return success(res, 'Success.',
      rows[0].project_kategori_get
    )
  } catch (err) {
    return next(err)
  }
}

export const ProjectKategoriByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getAllProjectKategoriByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Project Type Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_kategori_detail[0].project_kategori_nama
    )
  } catch (err) {
    return next(err)
  }
}

export const allProjectJenis = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllProjectJenis()
    if (rowCount < 1) {
      return error(
        res,
        'Project Jenis Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.', {
      rows
    })
  } catch (err) {
    return next(err)
  }
}

export const ProjectJenisByID = async (req, res, next) => {
  try {
    const { kategori, id } = req.params
    const { rows, rowCount } = await getProjectJenisByID(kategori, id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Project Jenis Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_jenis[0].project_jenis_nama
    )
  } catch (err) {
    return next(err)
  }
}

export const ProjectJenisByKategori = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getProjectJenisByKategori(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Project Jenis Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_jenis_by_kategori
    )
  } catch (err) {
    return next(err)
  }
}

export const allProjectStatus = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getAllProjectStatus()
    if (rowCount < 1) {
      return error(
        res,
        'Project Status Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_status_get
    )
  } catch (err) {
    return next(err)
  }
}

export const ProjectStatusByID = async (req, res, next) => {
  try {
    const { id } = req.params
    const { rows, rowCount } = await getAllProjectStatusByID(id)

    if (rowCount < 1) {
      return error(
        res,
        'Detail Project Status Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_status_detail
    )
  } catch (err) {
    return next(err)
  }
}

export const ProjectColumnAll = async (req, res, next) => {
  try {
    const { rows, rowCount } = await getProjectColumnAll()
    if (rowCount < 1) {
      return error(
        res,
        'Project Column Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_column_all
    )
  } catch (err) {
    return next(err)
  }
}

export const ProjectRowByKategoriJenis = async (req, res, next) => {
  try {
    const { kategori, jenis } = req.params
    const { rows, rowCount } = await getProjectRowByKategoriJenis(kategori, jenis)

    if (rowCount < 1) {
      return error(
        res,
        'Project Row Not Found',
        NOT_FOUND
      )
    }

    return success(res, 'Success.',
      rows[0].project_row_by_jenis
    )
  } catch (err) {
    return next(err)
  }
}
