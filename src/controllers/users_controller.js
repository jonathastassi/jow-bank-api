
const database = require('../database')
const repository = require('../repositories/user_repository')
const handleResponse = require('./utils/handle_response')
const registerUser = require('../domains/commands/users/register_user')(repository(database))

module.exports = {
  register: (req, res) => {
    const { name, email, password, photo, cellphone } = req.body

    registerUser.call(name, email, password, photo, cellphone)
      .then(data => handleResponse(res, 201, 'User created with success', data[0]))
      .catch(error => handleResponse(res, 500, 'Error on register user', error.constraint ?? error))
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
