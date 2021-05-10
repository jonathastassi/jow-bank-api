const create = (database) => ({ name, email, password, photo, cellphone }) => database('users').insert(
  {
    name,
    email,
    password,
    photo,
    cellphone
  }
)
  .returning(['name', 'email', 'photo', 'cellphone'])
  .then(rows => rows[0])

module.exports = (database) => ({
  create: create(database)
})
