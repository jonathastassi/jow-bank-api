const hashBcrypt = require('../../utils/hash_bcrypt')

const call = (userRepository) => (userIdToUpdate) => async (userToUpdated) => {
  const userStored = await userRepository.findBy({ field: 'id', value: userIdToUpdate })
  if (userStored == null) {
    throw new Error('User not found')
  }

  if (userStored.id !== userIdToUpdate) {
    throw new Error('Update denied')
  }

  const userWithPassword = {
    ...userToUpdated,
    id: userStored.id,
    password: userToUpdated.password == null ? null : hashBcrypt(userToUpdated.password)
  }

  const userUpdated = await userRepository.update(userWithPassword)

  return userUpdated
}

module.exports = (userRepository) => ({
  call: call(userRepository)
})
