
const database = require('../database')
const repository = require('../repositories/user_repository')
const handleResponseSuccess = require('./utils/handle_response_success')
const handleResponseError = require('./utils/handle_response_error')
const registerUser = require('../domains/commands/users/register_user')(repository(database))

module.exports = {
  register: (req, res) => {
    const { name, email, password, photo, cellphone } = req.body

    registerUser.call(name, email, password, photo, cellphone)
      .then(handleResponseSuccess({ res, status: 201, message: 'User created with success' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on register user' }))
  },
  login: (req, res) => {
    res.send('User login')
  },
  getUserLogged: (req, res) => {
    res.send('User logged')
  },
  update: (req, res) => {
    res.send('User updated')
  }
}
