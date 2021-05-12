const jwt = require('jsonwebtoken')

const VALIDATION_TOKEN = 300

const generateJWT = (user) => jwt.sign({ user }, process.env.SECRET, {
  expiresIn: VALIDATION_TOKEN
})

module.exports = generateJWT
