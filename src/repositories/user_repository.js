const create = (database) => (user) => database('users').insert(user)
  .returning(['name', 'email', 'photo', 'cellphone'])
  .then(rows => {
    console.log('eitajkbfewkq')
    console.log(rows)
    return rows[0]
  })

module.exports = (repository) => ({
  create: create(repository)
})
