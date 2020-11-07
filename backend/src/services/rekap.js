import db from '../core/pg'

export const rekapByProjectId = (projectId) => db.query('SELECT dok.dokumen_rekap($1)', [projectId])
