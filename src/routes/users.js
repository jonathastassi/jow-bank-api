const express = require('express')
const router = express.Router()

router.post('/register', function (req, res) {
  res.send('User registered')
})

router.post('/login', function (req, res) {
  res.send('User login')
})

router.get('/', function (req, res) {
  res.send('User logged')
})

router.put('/', function (req, res) {
  res.send('User updated')
})

module.exports = router
