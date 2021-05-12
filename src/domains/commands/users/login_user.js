const verifyBcrypt = require('../../utils/verify_bcrypt')
const generateJWT = require('../../utils/generate_jwt')

const call = (userRepository) => async ({ email, password }) => {
  const user = await userRepository.findBy({ field: 'email', value: email })

  if (user === undefined) {
    throw new Error('Login incorrect')
  }

  if (verifyBcrypt(password, user.password)) {
    const { password, created_at: createdAt, updated_at: updatedAt, ...userReturned } = user

    const token = generateJWT(userReturned)

    return {
      user: userReturned,
      token
    }
  }

  throw new Error('Login incorrect')
}

module.exports = (userRepository) => ({
  call: call(userRepository)
})
