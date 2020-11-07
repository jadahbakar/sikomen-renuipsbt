import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import hpp from 'hpp'
// import fileUpload from 'express-fileupload'

import limiter from 'express-rate-limit'
import speedLimiter from 'express-slow-down'

import { APP_ENV } from '../config'
import logger from '../core/winston'

export default (app) => {
  // only if you're behind a reverseproxy like:
  // (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup)
  app.enable('trust proxy')

  app.disable('etag')

  app.use(cors())
  // app.options('*', cors())

  app.use(helmet())

  // app.use(json())
  // app.use(urlencoded({ extended: true }))
  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

  app.use(hpp())

  app.use(morgan('combined', { stream: logger.stream }))

  if (APP_ENV === 'production') {
    app.use(limiter)
    app.use(speedLimiter)
    app.use(compression())
  }

  app.use((_req, res, next) => {
    res.removeHeader('Cache-Control')
    res.removeHeader('Connection')
    res.removeHeader('Expect-CT')
    res.removeHeader('Expires')
    res.removeHeader('Pragma')
    res.removeHeader('Referrer-Policy')
    res.removeHeader('Strict-Transport-Security')
    res.removeHeader('Surrogate-Control')
    res.removeHeader('X-DNS-Prefetch-Control')
    res.removeHeader('X-Download-Options')
    res.removeHeader('X-Frame-Options')
    res.removeHeader('X-RateLimit-Limit')
    res.removeHeader('X-RateLimit-Remaining')
    res.removeHeader('X-RateLimit-Reset')
    res.removeHeader('X-XSS-Protection')

    next()
  })
}
