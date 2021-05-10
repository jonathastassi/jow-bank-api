const express = require('express')
const router = express.Router()

const { usersController: { register, login, getUserLogged, update } } = require('../controllers')

router.post('/register', register)
router.post('/login', login)
router.get('/', getUserLogged)
router.put('/', update)

module.exports = router
