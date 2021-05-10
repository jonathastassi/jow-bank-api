
const database = require('../database')
const repository = require('../repositories/user_repository')
const handleResponseSuccess = require('./utils/handle_response_success')
const handleResponseError = require('./utils/handle_response_error')
const registerUser = require('../domains/commands/users/register_user')(repository(database))
console.log(repository(database))

const register = (request, response) => {
  const { name, email, password, photo, cellphone } = request.body

  // TODO
  // const newUser = { name, email, password, photo, cellphone }

  registerUser.call(name, email, password, photo, cellphone)
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
