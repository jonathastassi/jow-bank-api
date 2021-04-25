const hashBcrypt = require('../../utils/hash_bcrypt')

module.exports = (repository) => {
  const call = (name, email, password, photo, cellphone) => {
    password = hashBcrypt(password)
    return repository.create(name, email, password, photo, cellphone)
  }

  return {
    call
  }
}
