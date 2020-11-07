import fs from 'fs'
import winston from 'winston'
import Moment from 'moment-timezone'

import 'winston-daily-rotate-file'
import 'winston-mail'

import {
  APP_ENV,
  MAIL_HOST,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_FROM_ADDRESS,
  MAIL_FROM_NAME
} from '../config'

const LOG_DIR = 'storage/logs'

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR)
}

const options = {
  file: {
    level: APP_ENV === 'development' ? 'debug' : 'info',
    dirname: LOG_DIR,
    filename: '%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    timestamp: Moment()
      .tz('Asia/Jakarta')
      .format('DD-MM/YYYY HH:mm:ss'),
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxsize: 5242880, // 5MB
    colorize: true
  },
  mail: {
    level: 'error',
    to: MAIL_FROM_ADDRESS,
    from: MAIL_FROM_ADDRESS,
    subject: `${MAIL_FROM_NAME} | An Error Occured On Server. Please Check IT ASAP`,
    host: MAIL_HOST,
    username: MAIL_USERNAME,
    password: MAIL_PASSWORD
  }
}

const Logger = winston.createLogger({
  transports: [
    new winston.transports.DailyRotateFile(options.file),
    new winston.transports.Mail(options.mail)
  ],
  exceptionHandlers: [
    new winston.transports.DailyRotateFile(options.file),
    new winston.transports.Mail(options.mail)
  ],
  exitOnError: false
})

Logger.stream = {
  write (message) {
    Logger.info(message)
  }
}

export default Logger
