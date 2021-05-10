
const { databaseConfig } = require('../config')
const database = require('../database')
const { userRepository } = require('../repositories')
const { handleResponseSuccess, handleResponseError } = require('./utils/handle_response')
const { registerUser } = require('../domains/commands/users')

const register = (request, response) => {
  const { name, email, password, photo, cellphone } = request.body

  const newUser = { name, email, password, photo, cellphone }

  registerUser(userRepository(database(databaseConfig))).call(newUser)
    .then(handleResponseSuccess({ response, status: 201, message: 'User created with success' }))
    .catch(handleResponseError({ response, status: 500, message: 'Error on register user' }))
}

const login = (request, response) => {
  response.send('User login')
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
