const findBy = (db, table) => ({ field, value }) => db(table).where(field, value)
  .then(rows => {
    return rows[0]
  })

module.exports = findBy
