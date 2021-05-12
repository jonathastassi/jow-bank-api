const jwt = require('jsonwebtoken')
const { securityConfig } = require('../../config')

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })

  const bearer = token.split(' ')
  const bearerToken = bearer[1]

  jwt.verify(bearerToken, securityConfig.secret, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
    req.userId = decoded.id
    req.userEmail = decoded.email
    next()
  })
}

module.exports = validateJWT
