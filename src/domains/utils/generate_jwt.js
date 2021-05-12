const jwt = require('jsonwebtoken')
const { securityConfig } = require('../../config')

const generateJWT = (user) => jwt.sign({ ...user }, securityConfig.secret, {
  expiresIn: parseInt(securityConfig.validation_token_in_seconds)
})

module.exports = generateJWT
