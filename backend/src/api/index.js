import { verify } from '../core/jsonwebtoken'
import home from './home'
import auth from './auth'
import users from './users'
import master from './master'
import project from './project'
import dokumen from './dokumen'
import dashboard from './dashboard'
import rekap from './rekap'

export default (app) => {
  app.use('/', home)
  app.use('/v1', auth)

  app.use('/v1/users', verify, users)
  app.use('/v1/master', verify, master)
  app.use('/v1/project', verify, project)
  app.use('/v1/dokumen', verify, dokumen)
  app.use('/v1/dashboard', verify, dashboard)
  app.use('/v1/rekap', verify, rekap)
}
