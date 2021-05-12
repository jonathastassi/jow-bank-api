const create = (database) => (user) => database('users').insert(user)
  .returning(['name', 'email', 'photo', 'cellphone'])
  .then(rows => rows[0])
  .catch(error => {
    throw new Error(error.constraint)
  })

const findBy = (database) => ({ field, value }) => database('users').where(field, value)
  .first()

const update = (database) => ({ id, name, password, photo, cellphone }) => {
  let fieldToUpdate
  if (password == null) {
    fieldToUpdate = {
      name,
      photo,
      cellphone
    }
  } else {
    fieldToUpdate = {
      name,
      password,
      photo,
      cellphone
    }
  }

  return database('users')
    .where({ id })
    .update(fieldToUpdate)
    .returning(['id', 'name', 'email', 'photo', 'cellphone'])
    .then(rows => {
      return rows[0]
    })
}

module.exports = (repository) => ({
  create: create(repository),
  findBy: findBy(repository),
  update: update(repository)
})
