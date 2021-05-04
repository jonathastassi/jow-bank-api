
const database = require('../database')
const accountRepository = require('../repositories/account_repository')
const transactionRepository = require('../repositories/transaction_repository')

const handleResponseSuccess = require('./utils/handle_response_success')
const handleResponseError = require('./utils/handle_response_error')

const getAccountByUser = require('../domains/commands/accounts/get_account_by_user')(accountRepository(database))
const getTransactionByAccount = require('../domains/commands/accounts/get_transaction_by_account')({ accountRepository, transactionRepository, database })

module.exports = {
  getAccountByUser: (req, res) => {
    const userId = req.userId

    getAccountByUser.call(userId)
      .then(handleResponseSuccess({ res, status: 200, message: 'Account info' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on get account info' }))
  },
  getTransactionByAccount: (req, res) => {
    const userId = req.userId

    getTransactionByAccount.call(userId)
      .then(handleResponseSuccess({ res, status: 200, message: 'Account transactions' }))
      .catch(handleResponseError({ res, status: 500, message: 'Error on get account transactions' }))
  }
}
