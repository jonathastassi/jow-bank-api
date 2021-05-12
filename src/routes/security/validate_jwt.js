const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })

  const bearer = token.split(' ')
  const bearerToken = bearer[1]

  jwt.verify(bearerToken, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
    req.userId = decoded.payload.id
    req.userEmail = decoded.payload.email
    next()
  })
}

module.exports = validateJWT
