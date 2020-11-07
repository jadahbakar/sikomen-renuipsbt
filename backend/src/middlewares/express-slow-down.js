import slowDown from 'express-slow-down'

export default slowDown({
  windowMs: 60000,
  delayAfter: 5,
  delayMs: 100
})
