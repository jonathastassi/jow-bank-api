const hashBcrypt = require('../../utils/hash_bcrypt')

const call = (repository) => (newUser) => {
  const userWithPassword = {
    ...newUser,
    password: hashBcrypt(newUser.password)
  }
  return repository.create(userWithPassword)
}

module.exports = (repository) => ({
  call: call(repository)
})
