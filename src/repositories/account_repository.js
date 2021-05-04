const findByFunction = require('./utils/find_by')

const TABLE_NAME = 'accounts'

module.exports = (db) => {
  const create = ({ userId, balance, dailyLimitTransaction }) => db(TABLE_NAME).insert(
    {
      user_id: userId,
      balance,
      daily_limit_transaction: dailyLimitTransaction
    }
  )
    .then(rows => {
      return rows[0]
    })

  const findBy = findByFunction(db, TABLE_NAME)

  const update = ({ id, balance }) => db(TABLE_NAME)
    .where({ id })
    .update({ balance })
    .then(rows => {
      return rows[0]
    })

  return {
    create,
    findBy,
    update
  }
}
