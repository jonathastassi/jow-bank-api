module.exports = {
  register: function (req, res) {
    res.send('User registered')
  },
  login: function (req, res) {
    res.send('User login')
  },
  getUserLogged: function (req, res) {
    res.send('User logged')
  },
  update: function (req, res) {
    res.send('User updated')
  }
}
