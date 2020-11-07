import db from '../core/pg'

// ------------------ M A S T E R
export const dokumenMasterSelect = (
  projectId,
  dokumenRow) => db.query('SELECT dokumen_master_id FROM dok.dokumen_master WHERE dokumen_master_project = $1 AND dokumen_master_row = $2', [
  projectId,
  dokumenRow]
)

export const dokumenMasterInsert = (
  projectId,
  dokumenRow) => db.query('SELECT dok.dokumen_master_i($1, $2)', [
  projectId,
  dokumenRow]
)

export const dokumenMasterDelete = (
  dokumenMasterId
) => db.query('SELECT dok.dokumen_master_d($1)', [
  dokumenMasterId]
)

// ------------------ D E T A I L
export const dokumenDetailDeleteByMasterId = (
  dokumenMasterId
) => db.query('DELETE FROM dok.dokumen_detail WHERE dokumen_detail_master = $1 RETURNING dokumen_detail_master', [
  dokumenMasterId]
)

export const dokumenDetailInsert = (
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
  dokumenCatatan) => db.query('SELECT dok.dokumen_detail_i($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [
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
  dokumenCatatan]
)

// ------------------ D E T A I L  LAMPIRAN FILE
export const dokumenDetailLampiranInsert = (
  dokumenDetailId,
  dokumenLampiran) => db.query('INSERT INTO dok.dokumen_detail_lampiran VALUES ($1, $2)', [
  dokumenDetailId,
  dokumenLampiran]
)
