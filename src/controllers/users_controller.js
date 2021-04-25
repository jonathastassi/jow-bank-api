
const db = require('../database/config')
const repository = require('../repositories/user_repository')(db)

const handleResponseSuccess = require('./utils/handle_response_success')
const handleResponseError = require('./utils/handle_response_error')

module.exports = {
  register: (req, res) => {
    const registerUser = require('../domains/commands/users/register_user')(repository)

    const { name, email, password, photo, cellphone } = req.body

    registerUser.call(name, email, password, photo, cellphone)
      .then(data => res.send(handleResponseSuccess('User created with success', data[0])))
      .catch(error => res.send(handleResponseError('Error on register user', error)))
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
