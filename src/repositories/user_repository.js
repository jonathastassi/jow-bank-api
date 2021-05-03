const create = (database) => (user) => database('users').insert(user)
  .returning(['name', 'email', 'photo', 'cellphone'])
  .then(rows => rows[0])

const findBy = (database) => ({ field, value }) => database('users').where(field, value)
  .then(rows => rows[0])

module.exports = (repository) => ({
  create: create(repository),
  findBy: findBy(repository)
})
