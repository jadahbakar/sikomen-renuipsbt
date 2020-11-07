import multer from 'multer'

export default (field) => {
  // console.log('field', field)

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, `${+Date.now()}-${file.originalname}`)
    }
  })
  const limits = {
    files: 2, // allow only 2 file per request
    fileSize: 1024 * 1024 * 2// 2 MB (max file size)
  }

  const fileFilter = (req, file, cb) => {
    const match = ['application/pdf']
    if (match.indexOf(file.mimetype) === -1) {
      const message = `${file.originalname} is invalid. Only accept pdf.`
      return cb(message, false)
    } else {
      cb(null, true)
    }
  }

  // const upload = multer({
  //   storage,
  //   limits: limits,
  //   fileFilter: fileFilter
  // }).array(field, 2)

  return multer({
    storage,
    limits: limits,
    fileFilter: fileFilter
  }).array(field, 2)

  // return next()
}
