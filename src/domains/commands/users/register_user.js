const hashBcrypt = require('../../utils/hash_bcrypt')

module.exports = (repository) => {
  const call = (name, email, password, photo, cellphone) => {
    const user = { name, email, password, photo, cellphone }

    const userWithPassword = {
      ...user,
      password: hashBcrypt(user.password)
    }
    return repository.create(userWithPassword)
  }

  return {
    call
  }
}
