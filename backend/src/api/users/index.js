import { Router } from 'express'

const router = Router()

const { menuUser, logout, checktoken, resetPassword } = require('./controller')

router.get('/menu', menuUser)
router.post('/logout', logout)
router.get('/checktoken', checktoken)
router.post('/resetpassword', resetPassword)

export default router
