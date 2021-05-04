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
    .returning(['id', 'name', 'email', 'photo', 'cellphone'])
    .then(rows => {
      return rows[0]
    })

  const findBy = ({ field, value }) => db('users').where(field, value)
    .then(rows => {
      return rows[0]
    })

  const update = ({ id, name, password, photo, cellphone }) => {
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

    return db('users')
      .where({ id })
      .update(fieldToUpdate)
      .returning(['id', 'name', 'email', 'photo', 'cellphone'])
      .then(rows => {
        return rows[0]
      })
  }

  return {
    create,
    findBy,
    update
  }
}
