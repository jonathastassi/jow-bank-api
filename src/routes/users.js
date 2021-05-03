const express = require('express')
const router = express.Router()

const controller = require('../controllers/users_controller')
const validator = require('../validators/users_validators')

router.post('/register', validator.validateRegister, controller.register)
router.post('/login', controller.login)
router.get('/', controller.getUserLogged)
router.put('/', controller.update)

module.exports = router
