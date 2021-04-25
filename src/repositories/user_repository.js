module.exports = (db) => {
  const create = (name, email, password, photo, cellphone) => {
    return db('users').insert(
      {
        name,
        email,
        password,
        photo,
        cellphone
      }
    ).returning(['name', 'email', 'photo', 'cellphone'])
  }

  return {
    create
  }
}
