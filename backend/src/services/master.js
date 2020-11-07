import db from '../core/pg'

export const getAllPropinsi = () => db.query('SELECT mst.propinsi_get()')
export const getPropinsiByID = (id) => db.query('SELECT propinsi_get_detail FROM mst.propinsi_get_detail($1)', [id])

export const getAllDokumenStatus = () => db.query('SELECT mst.dokumen_status_get() AS dokumen_status')
export const getAllDokumenStatusByID = (id) => db.query('SELECT mst.dokumen_get_detail($1) AS dokumen_status', [id])

export const getAllDokumenType = () => db.query('SELECT mst.dokumen_type_get() AS dokumen_type')
export const getAllDokumenTypeByID = (id) => db.query('SELECT mst.dokumen_type_detail($1) AS dokumen_type', [id])

export const getAllEngineeringStatus = () => db.query('SELECT mst.engineering_status_get()')
export const getAllEngineeringStatusByID = (id) => db.query('SELECT mst.engineering_status_detail($1)', [id])

export const getAllPICType = () => db.query('SELECT mst.pic_type_get()')
export const getAllPICTypeByID = (id) => db.query('SELECT mst.pic_type_detail($1)', [id])

export const getAllProjectKategori = () => db.query('SELECT mst.project_kategori_get()')
export const getAllProjectKategoriByID = (id) => db.query('SELECT mst.project_kategori_detail($1)', [id])

export const getAllProjectJenis = () => db.query('SELECT mst.project_jenis_get() AS project_jenis')
export const getProjectJenisByID = (kategori, id) => db.query('SELECT mst.project_jenis_detail($1, $2) AS project_jenis', [kategori, id])
export const getProjectJenisByKategori = (id) => db.query('SELECT mst.project_jenis_by_kategori($1)', [id])

export const getAllProjectStatus = () => db.query('SELECT mst.project_status_get()')
export const getAllProjectStatusByID = (id) => db.query('SELECT mst.project_status_detail($1)', [id])

export const getProjectColumnAll = () => db.query('SELECT mst.project_column_get_all() AS project_column_all')
export const getProjectRowByKategoriJenis = (kategori, jenis) => db.query('SELECT mst.project_row_get_by_jenis($1, $2) AS project_row_by_jenis', [kategori, jenis])
