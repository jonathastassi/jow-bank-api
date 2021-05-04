module.exports = ({ userRepository, accountRepository, transactionRepository, database }) => {
  const validateTransferInOrigin = ({ authUserId, user, account, value, todayTransactionValue }) => {
    if (user == null || account == null) {
      return 'Origin invalid'
    }

    if (user.id !== authUserId) {
      return 'Operation denied'
    }

    if (account.balance < value) {
      return 'Insufficient balance'
    }

    if ((todayTransactionValue + value) > process.env.DAILYLIMITTRANSACTION) {
      return 'daily limit reached'
    }

    return ''
  }

  const validateTransferInDestination = ({ authUserId, user, account, value }) => {
    if (user == null || account == null) {
      return 'Destination invalid'
    }

    return ''
  }

  const call = (authUserId, originEmail, destinationEmail, value) => {
    return database.transaction(async (trx) => {
      if (originEmail === destinationEmail) {
        throw new Error('Operation not permitted')
      }

      const originUser = await userRepository(trx).findBy({ field: 'email', value: originEmail })
      const originAccount = await accountRepository(trx).findBy({ field: 'user_id', value: originUser.id })

      const todayTransactionValue = await transactionRepository(trx).sumTransactionsValuePerDate({ originId: originAccount.id, date: new Date().toJSON() })
      const validadeOrigin = validateTransferInOrigin({ authUserId, user: originUser, account: originAccount, value, todayTransactionValue: parseFloat(todayTransactionValue.sum ?? 0) })
      if (validadeOrigin !== '') {
        throw new Error(validadeOrigin)
      }

      const destinationUser = await userRepository(trx).findBy({ field: 'email', value: destinationEmail })
      const destinationAccount = await accountRepository(trx).findBy({ field: 'user_id', value: destinationUser.id })

      const validadeDestination = validateTransferInDestination({ authUserId, user: destinationUser, account: destinationAccount, value })
      if (validadeDestination !== '') {
        throw new Error(validadeDestination)
      }

      originAccount.balance = parseFloat(originAccount.balance) - value
      destinationAccount.balance = parseFloat(destinationAccount.balance) + value

      await accountRepository(trx).update({ id: originAccount.id, balance: originAccount.balance })
      await accountRepository(trx).update({ id: destinationAccount.id, balance: destinationAccount.balance })

      await transactionRepository(trx).create({ originId: originAccount.id, destinationId: destinationAccount.id, value })
    })
  }

  return {
    call
  }
}
