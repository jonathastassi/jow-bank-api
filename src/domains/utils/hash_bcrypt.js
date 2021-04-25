const bcrypt = require('bcrypt')

const hashBcrypt = (password) => bcrypt.hashSync(password, 10)

module.exports = hashBcrypt
