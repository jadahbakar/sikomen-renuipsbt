import db from '../core/pg'

export const getAllProject = () => db.query('SELECT dok.project_get_all() AS project')
export const getProjectByID = (id) => db.query('SELECT dok.project_get_id($1) AS project', [id])
export const getProjectByKatPropJenis = (kategori, propinsi, jenis) => db.query('SELECT dok.project_get_by_kategori_propinsi_jenis($1, $2, $3) AS project', [kategori, propinsi, jenis])
export const getProjectPIC = (id) => db.query('SELECT dok.project_pic_get($1) AS project_pic', [id])

export const postProjectIUD = (
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
  engineeringStatus) => db.query('SELECT dok.project_iud($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [
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
  engineeringStatus])

export const postProjectPicIUD = (projectId, picType, picName) => db.query('INSERT INTO dok.project_pic(project_pic_project, project_pic_type, project_pic_nama) VALUES ($1, $2, $3) RETURNING project_pic_id',
  [projectId, picType, picName])

export const deleteProjectPicByProjectId = (projectId) => db.query('DELETE FROM dok.project_pic WHERE project_pic_project = $1 RETURNING project_pic_project', [projectId])
