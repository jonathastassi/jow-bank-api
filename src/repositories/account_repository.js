module.exports = (db) => {
  const create = ({ userId, balance, dailyLimitTransaction }) => db('accounts').insert(
    {
      user_id: userId,
      balance,
      daily_limit_transaction: dailyLimitTransaction
    }
  )
    .then(rows => {
      return rows[0]
    })

  return {
    create
  }
}
