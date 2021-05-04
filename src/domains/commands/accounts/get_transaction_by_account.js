module.exports = ({ accountRepository, transactionRepository, database }) => {
  const call = async (userId) => {
    const account = await accountRepository(database).findBy({ field: 'user_id', value: userId })
    if (account == null) {
      throw new Error('Account not found')
    }

    const transactions = await transactionRepository(database).findAllBy({ field: 'origin_id', value: account.id })

    // eslint-disable-next-line camelcase
    return transactions.map(({ id, destination_id, value, created_at }) => { return { id, destination_id, value, created_at } })
  }

  return {
    call
  }
}
