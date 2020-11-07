import glob from 'glob'
import fs from 'fs'
import path from 'path'
import archiver from 'archiver'
import {
  INTERNAL_SERVER_ERROR,
  CONFLICT
} from '../../core/api/code'

import { error, success } from '../../core/api/responses'
import {
  dokumenMasterSelect,
  dokumenMasterInsert,
  dokumenMasterDelete,
  dokumenDetailInsert,
  dokumenDetailLampiranInsert
} from '../../services/dokumen'

// -------------------------- M A S T E R

const procesInsertDokumenMaster = async (projectId, dokumenRow) => {
  try {
    const { rows } = await dokumenMasterInsert(projectId, dokumenRow)
    return rows[0].dokumen_master_i
  } catch (error) {
    return (0)
  }
}

export const postDokumenMaster = async (req, res, next) => {
  try {
    // Proses Hapus Dahulu (dokumen_master, dokumen_detail, dokumen_detail_lampiran)
    // Kemudian data baru di Insert
    const {
      projectId,
      dokumenRow
    } = req.body

    // ------------------------ Check dokumen_master
    const { rows } = await dokumenMasterSelect(projectId, dokumenRow)
    // console.log('postDokumenMaster -> rows', rows)

    if (rows.length !== 0) {
      // ------------------------ Data master SUDAH ADA , Ambil data masterId
      const dokumenMasterId = rows[0].dokumen_master_id
      // ------------------------ Hapus dokumen
      // ------- dokumen_master, dokumen_detail, dokumen_detail_lampiran
      // ------- sudah di handle oleh function di postgresql
      const { rowsMasterDeleted } = await dokumenMasterDelete(dokumenMasterId)

      // ------------------------ Hapus file lampiran
      glob(`./storage/uploads/${dokumenMasterId}_*.pdf`, function (er, files) {
        for (const file of files) {
        // ----- remove file
          fs.unlink(file, (err) => {
            if (err) throw err
            console.log(`Deleted ${file}`)
          })
        }
      })
    }
    // ------------------- I N S E R T
    const newMasterDokumenId = await procesInsertDokumenMaster(projectId, dokumenRow)

    return success(res, 'Success.',
      newMasterDokumenId
    )
  } catch (err) {
    return next(err)
  }
}

export const deleteDokumenMaster = async (req, res, next) => {
  try {
    const { dokumenMasterId } = req.body
    const { rows, rowCount } = await dokumenMasterDelete(dokumenMasterId)

    if (rowCount < 1) {
      return error(
        res,
        'Proses Simpan Project Error',
        INTERNAL_SERVER_ERROR
      )
    }

    const countRecords = rows[0].dokumen_master_d

    return success(res, 'Success.',
      countRecords
    )
  } catch (err) {
    return next(err)
  }
}

// -------------------------- D E T A I L
export const postDokumenDetail = async (req, res, next) => {
  try {
    const {
      dokumenMasterId,
      dokumenType,
      dokumenSubmited,
      dokumenApprovalFinal,
      dokumenSuratKontraktor,
      dokumenTanggalSuratKontraktor,
      dokumenTanggalSuratDiterimaPln,
      dokumenNomorSuratPln,
      dokumenTanggalSuratKeluarPln,
      dokumenProsesApproval,
      dokumenCatatan
    } = req.body

    const { rows, rowCount } = await dokumenDetailInsert(
      parseInt(dokumenMasterId),
      dokumenType,
      parseInt(dokumenSubmited),
      parseInt(dokumenApprovalFinal),
      dokumenSuratKontraktor,
      dokumenTanggalSuratKontraktor,
      dokumenTanggalSuratDiterimaPln,
      dokumenNomorSuratPln,
      dokumenTanggalSuratKeluarPln,
      parseInt(dokumenProsesApproval),
      dokumenCatatan)

    if (rowCount < 1) {
      return error(
        res,
        'Proses Simpan Project Error',
        INTERNAL_SERVER_ERROR
      )
    }
    const recordId = rows[0].dokumen_detail_i
    if (rows[0].recordId === '0') {
      return error(
        res,
        'Duplicate Record On Dokumen Detail',
        CONFLICT
      )
    }

    req.files.map(el => {
      const newFileName = dokumenMasterId + '_' + recordId + '_' + el.originalname
      const newFile = './storage/uploads/' + newFileName
      fs.rename(el.path, newFile, function (err) {
        if (err) {
          console.log(err)
          res.send(500)
        } else {
          dokumenDetailLampiranInsert(recordId, newFileName)
        }
      })
    })

    return success(res, 'Success.',
      recordId
    )
  } catch (err) {
    return next(err)
  }
}

// -------------------------- D O W N L O A D
export const downloadTemplate = async (req, res, next) => {
  try {
    const file = './storage/download/Template_file_monitoring_SIKOMEN.xls'
    res.download(file)
    res.setHeader('Content-disposition', 'attachment; filename=Template_file_monitoring_SIKOMEN.xls')
    res.setHeader('Content-type', 'application/vnd.ms-excel')
  } catch (err) {
    return next(err)
  }
}

export const downloadDokumenPdf = async (req, res, next) => {
  try {
    const { dokumenMasterId, dokumenDetailId } = req.params

    const archive = archiver('zip')

    archive.on('error', function (err) {
      res.status(500).send({ error: err.message })
      console.log(`ERROR -> ${err}`)
    })

    // on stream closed we can end the request
    archive.on('end', function () {
      console.log('Archive wrote %d bytes', archive.pointer())
    })
    // set the archive name
    res.setHeader('Content-disposition', 'attachment; filename=download.zip')
    res.setHeader('Content-type', 'application/zip')
    res.attachment('download.zip')

    // this is the streaming magic
    archive.pipe(res)

    glob(`./storage/uploads/${dokumenMasterId}_${dokumenDetailId}_*.pdf`, function (er, files) {
      for (const file of files) {
        archive.file(file, { name: path.basename(file) })
        // console.log(`Appending ${path.basename(file)} file: ${JSON.stringify(file, null, 2)}`)
      }
      archive.finalize()
    })
  } catch (err) {
    return next(err)
  }
}
