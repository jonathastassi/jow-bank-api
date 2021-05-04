const express = require('express')
const router = express.Router()

const controller = require('../controllers/transactions_controller')
const validator = require('../validators/transactions_validators')
const validateJWT = require('../routes/security/validate_jwt')

router.post('/transfer', validateJWT, validator.validateTransfer, controller.transfer)

module.exports = router
