const create = (database) => (user) => database('users').insert(user)
  .returning(['name', 'email', 'photo', 'cellphone'])
  .then(rows => rows[0])
  .catch(error => {
    throw new Error(error.constraint)
  })

const findBy = (database) => ({ field, value }) => database('users').where(field, value)
  .first()

module.exports = (repository) => ({
  create: create(repository),
  findBy: findBy(repository)
})
