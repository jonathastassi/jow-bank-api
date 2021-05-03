const express = require('express')
const { errors } = require('celebrate')
const router = require('./routes')

const app = express()

app.use(express.json())

app.use('/api', router)

app.use(errors())

module.exports = app
