const hashBcrypt = require('../../utils/hash_bcrypt')

module.exports = (repository) => {
  const call = (name, email, password, photo, cellphone) => {
    const passwordEncripted = hashBcrypt(password)
    return repository.create({ name, email, password: passwordEncripted, photo, cellphone })
  }

  return {
    call
  }
}
