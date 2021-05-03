
const database = require('../database')
const repository = require('../repositories/user_repository')
const handleResponseSuccess = require('./utils/handle_response_success')
const handleResponseError = require('./utils/handle_response_error')

const registerUser = require('../domains/commands/users/register_user')(repository(database))
const loginUser = require('../domains/commands/users/login_user')(repository(database))
const getUserLogged = require('../domains/commands/users/get_user')(repository(database))
const updateUser = require('../domains/commands/users/update_user')(repository(database))

module.exports = {
  register: (req, res) => {
    const { name, email, password, photo, cellphone } = req.body

    registerUser.call(name, email, password, photo, cellphone)
      .then(handleResponseSuccess({ res, status: 201, message: 'User created with success' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on register user' }))
  },
  login: (req, res) => {
    const { email, password } = req.body

    loginUser.call(email, password)
      .then(handleResponseSuccess({ res, status: 200, message: 'Login with success' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on login' }))
  },
  getUserLogged: (req, res) => {
    const userId = req.userId

    getUserLogged.call(userId)
      .then(handleResponseSuccess({ res, status: 200, message: 'Info user' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on return info user' }))
  },
  update: (req, res) => {
    const userId = req.userId
    const { name, email, password, photo, cellphone } = req.body

    updateUser.call(userId)({ name, email, password, photo, cellphone })
      .then(handleResponseSuccess({ res, status: 200, message: 'User updated with success' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on update user' }))
  }
}
