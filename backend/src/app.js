import express from 'express'

import api from './api'
import middleware from './middlewares'
import { error404, error500 } from './core/api/error'

const app = express()

/** MIDDLEWARES */
middleware(app)

/** ROUTES */
api(app)

/** THIS MUST BE ON BOTTOM LINE */
app.use(error404)
app.use(error500)

export default app
