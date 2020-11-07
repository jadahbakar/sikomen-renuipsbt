import db from '../core/pg'

export const dashboardGetAll = () => db.query('SELECT dok.dashboard_get_all()')
