const hashBcrypt = require('../../utils/hash_bcrypt')

module.exports = (repository) => {
  const call = (userIdToUpdate) => async ({ name, password, photo, cellphone }) => {
    const user = await repository.findBy({ field: 'id', value: userIdToUpdate })
    if (user == null) {
      throw new Error('User not found')
    }

    if (user.id !== userIdToUpdate) {
      throw new Error('Update denied')
    }

    const passwordEncripted = password == null ? null : hashBcrypt(password)

    const userUpdated = await repository.update({ id: userIdToUpdate, name, password: passwordEncripted, photo, cellphone })

    return userUpdated
  }

  return {
    call
  }
}
