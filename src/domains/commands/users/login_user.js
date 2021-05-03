const verifyBcrypt = require('../../utils/verify_bcrypt')
const validatePayload = require('../../utils/generate_jwt')

module.exports = (repository) => {
  const call = async (email, password) => {
    const user = await repository.findBy({ field: 'email', value: email })

    if (user == null) {
      throw new Error('Login incorrect')
    }

    if (verifyBcrypt(password, user.password)) {
      const userReturned = {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo,
        cellphone: user.cellphone
      }

      const token = validatePayload(userReturned)

      return {
        user: userReturned,
        token
      }
    }

    throw new Error('Login incorrect')
  }

  return {
    call
  }
}
