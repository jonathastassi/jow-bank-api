const findByFunction = require('./utils/find_by')

const TABLE_NAME = 'users'

module.exports = (db) => {
  const create = ({ name, email, password, photo, cellphone }) => db(TABLE_NAME).insert(
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

  const findBy = findByFunction(db, TABLE_NAME)

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

    return db(TABLE_NAME)
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
