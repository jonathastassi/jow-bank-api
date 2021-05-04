const users = require('./users')
const transactions = require('./transactions')
const accounts = require('./accounts')

const express = require('express')
const router = express.Router()

router.use('/users', users)
router.use('/transactions', transactions)
router.use('/accounts', accounts)

module.exports = router
