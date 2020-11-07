import rateLimit from 'express-rate-limit'

export default rateLimit({
  windowMs: 30000,
  max: 10,
  message: {
    status: 'error',
    message:
      'Too many requests from this IP, please try again after 30 seconds',
    results: null
  }
})
