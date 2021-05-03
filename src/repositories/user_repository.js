module.exports = (db) => {
  const create = ({ name, email, password, photo, cellphone }) => db('users').insert(
    {
      name,
      email,
      password,
      photo,
      cellphone
    }
  )
    .returning(['name', 'email', 'photo', 'cellphone'])
    .then(rows => {
      return rows[0]
    })

  const findBy = ({ field, value }) => db('users').where(field, value)
    .then(rows => {
      return rows[0]
    })

  return {
    create,
    findBy
  }
}
