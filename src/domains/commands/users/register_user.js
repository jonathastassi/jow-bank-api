const hashBcrypt = require('../../utils/hash_bcrypt')

const call = (userRepository) => (newUser) => {
  const userWithPassword = {
    ...newUser,
    password: hashBcrypt(newUser.password)
  }
  return userRepository.create(userWithPassword)
}

module.exports = (userRepository) => ({
  call: call(userRepository)
})
