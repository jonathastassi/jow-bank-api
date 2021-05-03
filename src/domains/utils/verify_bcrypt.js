const bcrypt = require('bcrypt')

const verifyBcrypt = (password, passwordStored) => bcrypt.compareSync(password, passwordStored)

module.exports = verifyBcrypt
