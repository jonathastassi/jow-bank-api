const express = require('express')
const router = express.Router()

const controller = require('../controllers/users_controller')

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/', controller.getUserLogged)
router.put('/', controller.update)

module.exports = router
