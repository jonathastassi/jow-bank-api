const jwt = require('jsonwebtoken')

const VALIDATION_TOKEN = 300

const generateJWT = (payload) => jwt.sign({ payload }, process.env.SECRET, {
  expiresIn: VALIDATION_TOKEN
})

module.exports = generateJWT
