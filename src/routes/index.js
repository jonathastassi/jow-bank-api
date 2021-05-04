const users = require('./users')
const transactions = require('./transactions')

const express = require('express')
const router = express.Router()

router.use('/users', users)
router.use('/transactions', transactions)

module.exports = router
