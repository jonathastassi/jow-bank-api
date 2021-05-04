const express = require('express')
const router = express.Router()

const controller = require('../controllers/accounts_controller')
const validateJWT = require('../routes/security/validate_jwt')

router.get('/', validateJWT, controller.getAccountByUser)
router.get('/transactions', validateJWT, controller.getTransactionByAccount)

module.exports = router
