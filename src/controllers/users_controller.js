
const databaseConnection = require('./utils/get_database_connection')
const { userRepository } = require('../repositories')
const { handleResponseSuccess, handleResponseError } = require('./utils/handle_response')
const { registerUser, loginUser } = require('../domains/commands/users')

const userRepositoryInstance = userRepository(databaseConnection())

const register = (request, response) => {
  const { name, email, password, photo, cellphone } = request.body

  const newUser = { name, email, password, photo, cellphone }

  registerUser(userRepositoryInstance).call(newUser)
    .then(handleResponseSuccess({ response, status: 201, message: 'User created with success' }))
    .catch(handleResponseError({ response, status: 500, message: 'Error on register user' }))
}

const login = (request, response) => {
  const { email, password } = request.body

  const user = { email, password }

  loginUser(userRepositoryInstance).call(user)
    .then(handleResponseSuccess({ response, status: 200, message: 'Login with success' }))
    .catch(handleResponseError({ response, status: 500, message: 'Error on login' }))
}

const getUserLogged = (request, response) => {
  response.send('User logged')
}

const update = (request, response) => {
  response.send('User updated')
}

module.exports = {
  register,
  login,
  getUserLogged,
  update
}
