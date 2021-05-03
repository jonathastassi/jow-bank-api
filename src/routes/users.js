const express = require('express')
const router = express.Router()

const { usersValidators: { validateRegister, validateLogin, validateUpdate } } = require('../validators')
const { usersController: { register, login, getUserLogged, update } } = require('../controllers')
const validateJWT = require('../routes/security/validate_jwt')

router.post('/register', validateRegister, register)
router.post('/login', validateLogin, login)
router.get('/', validateJWT, getUserLogged)
router.put('/', validateJWT, validateUpdate, update)

module.exports = router
