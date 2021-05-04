module.exports = (accountRepository) => {
  const call = async (userId) => {
    const account = await accountRepository.findBy({ field: 'user_id', value: userId })

    if (account == null) {
      throw new Error('Account not found')
    }

    return {
      balance: account.balance
    }
  }

  return {
    call
  }
}
