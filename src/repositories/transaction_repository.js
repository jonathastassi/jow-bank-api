const TABLE_NAME = 'transactions'

module.exports = (db) => {
  const create = ({ originId, destinationId, value }) => db(TABLE_NAME).insert(
    {
      origin_id: originId,
      destination_id: destinationId,
      value
    }
  )
    .then(rows => {
      return rows[0]
    })

  const sumTransactionsValuePerDate = ({ originId, date }) => {
    return db(TABLE_NAME)
      .where('origin_id', originId)
      .where(
        db.raw('created_at::DATE = ?', '2021-05-04')
      )
      .sum('value')
      .then(rows => {
        return rows[0]
      })
  }

  return {
    create,
    sumTransactionsValuePerDate
  }
}
