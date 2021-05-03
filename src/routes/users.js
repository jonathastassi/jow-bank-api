const express = require('express')
const router = express.Router()

const controller = require('../controllers/users_controller')
const validator = require('../validators/users_validators')
const validateJWT = require('../routes/security/validate_jwt')

router.post('/register', validator.validateRegister, controller.register)
router.post('/login', validator.validateLogin, controller.login)
router.get('/', validateJWT, controller.getUserLogged)
router.put('/', validateJWT, validator.validateUpdate, controller.update)

module.exports = router
